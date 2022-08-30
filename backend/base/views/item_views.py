from django.core.exceptions import ObjectDoesNotExist, PermissionDenied, ValidationError
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import serializers
import json

from base.serializers import ItemBriefSerializer, ItemSerializer, LiveEventSerializer, ItemImageSerializer, LikeSerializer, LikedItemSerializer
from base.models import Item, UserProfile, ItemImage, Community, ItemDetail, Like
# Create your views here.

@api_view(['GET'])
def getItems(request):
  queryset = Item.objects.prefetch_related('item_image', 'communities').select_related('user').filter(live=True).defer('reason', 'negotiability', 'description')
  sell = request.query_params.get('sell')
  type = request.query_params.get('type')
  community = request.query_params.get('community')
  last = request.query_params.get('last')
  
  if sell:
    user = request.user
    profile = UserProfile.objects.get(user=user)
    queryset = queryset.filter(user=profile)
  if type and type != 'all':
    queryset = queryset.filter(type=type)
  if community and community != 'all':
    queryset = queryset.filter(communities__pk = community)
  if last:
    lastItem = Item.objects.get(pk=last)
    queryset = queryset.filter(createdAt__lt=lastItem.createdAt)

  queryset = queryset.reverse[:12]

  serializer = ItemBriefSerializer(queryset, many=True)
  return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyItems(request):
  user = request.user
  profile = UserProfile.objects.get(user=user)
  queryset = Item.objects.prefetch_related('item_image', 'communities').select_related('user').filter(user=profile).filter(live=True).defer('reason', 'negotiability', 'description')
  type = request.query_params.get('type')
  community = request.query_params.get('community')
  if type and type != 'all':
    queryset = queryset.filter(type=type)
  if community and community != 'all':
    queryset = queryset.filter(communities__pk = community)
  serializer = ItemBriefSerializer(queryset, many=True)
  return Response(serializer.data)

@api_view(['GET'])
def getLiveEvents(request, community):
  events = Item.objects.prefetch_related('item_image', 'communities').filter(communities__pk = community).filter(type='event').filter(live=True).order_by('-createdAt').only('images', 'heading', '_id')
  serializer = LiveEventSerializer(events, many=True)
  return Response(serializer.data)


@api_view(['GET'])
def getItem(request, pk):
  try:
    item = Item.objects.prefetch_related('item_detail', 'item_image').select_related('user').get(pk=pk)
  except ObjectDoesNotExist:
    raise serializers.ValidationError("Item does not exist.", 404) 
  serializer = ItemSerializer(item)
  return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def uploadImages(request, pk):
  user = request.user
  profile = UserProfile.objects.get(user=user)
  try:
    item = Item.objects.get(pk=pk)

    #Check if posted bt the same user
    if item.user != profile:
      raise PermissionDenied
    
    #Delete Previous Images
    ItemImage.objects.filter(item=item).delete()
    
    # Create New Images
    reqImages = request.FILES.getlist('images')
    for i, reqImage in enumerate(reqImages):
      ItemImage.objects.create(
        item = item,
        image = reqImage,
        thumbnail = ( i < 5),
      )
    
    savedImages = ItemImage.objects.filter(item=item)
    serializer = ItemImageSerializer(savedImages, many=True)
    return Response(serializer.data)
  
  except ObjectDoesNotExist or PermissionDenied as e:
    if type(e) is ObjectDoesNotExist:
      raise serializers.ValidationError('Item Not Found.')
    elif type(e) is PermissionDenied:
      raise serializers.ValidationError('Item is not yours.')
  
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateItem(request, pk):
  user = request.user
  profile = UserProfile.objects.get(user=user)
  data = request.data
  try:
    item = Item.objects.get(pk=pk)
    if (item.user != profile): raise PermissionDenied
    item.heading = data['heading']
    item.sub_heading = data['sub_heading']
    item.type = data['type']
    item.reason = data['reason']
    item.price = data['price']
    item.negotiability = data['negotiability']
    item.description = data['description']
    item.communities.clear()
    ItemDetail.objects.filter(item=item).delete()
    for communityId in data['communities']:
      community = Community.objects.get(pk=communityId)
      item.communities.add(community)
    for detail in data['details']:
      ItemDetail.objects.create(
        item = item,
        label = detail['label'],
        value = detail['value']
      )
    item.save()
    serializer = ItemSerializer(item)
    return Response(serializer.data)
  except PermissionDenied or ObjectDoesNotExist as e:
    if type(e) is PermissionDenied:
      raise serializers.ValidationError('Item is not yours.')
    elif type(e) is ObjectDoesNotExist:
      raise serializers.ValidationError('Item does not exist.')

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createItem(request):
  user = request.user
  profile = UserProfile.objects.get(user=user)
  data = json.loads(request.data['json'])
  try:
    item = Item.objects.create(
      user = profile,
      type = data['type'],
      heading = data['heading'],
      sub_heading = data['sub_heading'],
      reason = data['reason'],
      price = data['price'],
      negotiability = data['negotiability'],
      description = data['description']
    )
    for communityId in data['communities']:
      community = Community.objects.get(pk=communityId)
      item.communities.add(community)
    for detail in data['details']:
      ItemDetail.objects.create(
        item = item,
        label = detail['label'],
        value = detail['value']
      )
    reqImages = request.FILES.getlist('images')
    for i, reqImage in enumerate(reqImages):
      ItemImage.objects.create(
        item= item,
        image = reqImage,
        thumbnail = (i < 5)
      )
    
    item.save()
    serializer = ItemSerializer(item)
    return Response(serializer.data)
  except ValidationError:
    raise serializers.ValidationError('Data is in wrong format.')

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteItem(request, pk):
  user = request.user
  try:
    profile = UserProfile.objects.get(user = user)
    item = Item.objects.get(pk=pk)
    if (profile != item.user):
      raise PermissionDenied
    item.delete()
    return Response()
  except PermissionDenied or ObjectDoesNotExist as e:
    if type(e) is PermissionDenied:
      raise serializers.ValidationError('This item does not belong to you.')
    elif type(e) is ObjectDoesNotExist:
      raise serializers.ValidationError('Object Deleted Already.')

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def likeItem(request, pk):
  user = request.user
  try:
    profile = UserProfile.objects.get(user=user)
    item = Item.objects.get(pk=pk)
    like = Like.objects.create(item=item)
    like.profiles.add(profile)
    like.save()
    serializer = LikeSerializer(like)
    return Response(serializer.data)
  except PermissionDenied or ObjectDoesNotExist as e:
    if type(e) is PermissionDenied:
      raise serializers.ValidationError('Login First')
    elif type(e) is ObjectDoesNotExist:
      raise serializers.ValidationError('Object Does Not Exist.')

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def unlikeItem(request, pk):
  user = request.user
  try:
    pf = UserProfile.objects.get(user=user)
    like = pf.like_profile.get(item=pk)
    like.profiles.remove(pf)
    return Response(True)
  except PermissionDenied or ObjectDoesNotExist as e:
    if type(e) is PermissionDenied:
      raise serializers.ValidationError('Login First')
    elif type(e) is ObjectDoesNotExist:
      raise serializers.ValidationError('Object Does Not Exist.')
  
@api_view(['GET'])
def isLiked(request, pk):
  try:
    if not request.user:
      raise ValidationError('You must signup to wishlist.')
    user = request.user
    profile = UserProfile.objects.get(user=user)
    item = Item.objects.get(pk=pk)
    if profile.like_profile.all().filter(item=item):
      return Response(True)
    return Response(False)
  except ValidationError or ObjectDoesNotExist as e:
    if type(e) is ValidationError:
      raise serializers.ValidationError(e.message)
    elif type(e) is ObjectDoesNotExist:
      raise serializers.ValidationError('Object Does not Exist.')

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getLiked(request):
  try:
    if not request.user:
      raise PermissionDenied
    user = request.user
    profile = UserProfile.objects.get(user=user)
    wishlist = profile.like_profile.all()
    serializer = LikeSerializer(wishlist, many=True)
    return Response(serializer.data)
  except PermissionDenied or ObjectDoesNotExist as e:
    if type(e) is PermissionDenied:
      raise serializers.ValidationError('You must sign up to wishlist.')
    elif type(e) is ObjectDoesNotExist:
      raise serializers.ValidationError('Object Does not Exist.')

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getWishlistItems(request):
  try:
    if not request.user:
      raise ValidationError('You must sign up to wishlist.')
    user = request.user
    profile = UserProfile.objects.get(user=user)
    wishlist = profile.like_profile.all()
    serializer = LikedItemSerializer(wishlist, many=True)
    return Response(serializer.data)
  except ValidationError or ObjectDoesNotExist as e:
    if type(e) is ValidationError:
      raise serializers.ValidationError(e.message)
    elif type(e) is ObjectDoesNotExist:
      raise serializers.ValidationError('Object Does not Exist.')

    