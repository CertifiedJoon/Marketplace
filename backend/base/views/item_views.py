from django.core.exceptions import ObjectDoesNotExist
from rest_framework.exceptions import NotFound
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.serializers import ItemBriefSerializer, ItemSerializer, LiveEventSerializer
from base.models import Item, UserProfile
# Create your views here.

@api_view(['GET'])
def getItems(request):
  queryset = Item.objects.prefetch_related('item_image', 'communities').select_related('user').filter(live=True)
  sell = request.query_params.get('sell')
  type = request.query_params.get('type')
  community = request.query_params.get('community')
  
  if sell:
    user = request.user
    profile = UserProfile.objects.get(user=user)
    queryset = queryset.filter(user=profile)
  if type and type != 'all':
    queryset = queryset.filter(type=type)
  if community and community != 'all':
    queryset = queryset.filter(communities__pk = community)
  
  serializer = ItemBriefSerializer(queryset, many=True)
  return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMyItems(request):
  user = request.user
  profile = UserProfile.objects.get(user=user)
  queryset = Item.objects.prefetch_related('item_image', 'communities').select_related('user').filter(user=profile).filter(live=True)
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
  events = Item.objects.prefetch_related('item_image', 'communities').filter(communities__pk = community).filter(type='event').filter(live=True)
  serializer = LiveEventSerializer(events, many=True)
  return Response(serializer.data)

@api_view(['GET'])
def getItem(request, pk):
  try:
    item = Item.objects.prefetch_related('item_detail', 'item_image').select_related('user').get(pk=pk)
  except ObjectDoesNotExist:
    raise NotFound("Item does not exist.", 404) 
  serializer = ItemSerializer(item)
  return Response(serializer.data)
