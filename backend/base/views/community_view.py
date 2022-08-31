from django.core.exceptions import ObjectDoesNotExist, ValidationError
from rest_framework.exceptions import NotFound
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import serializers
from base.models import UserProfile

from base.serializers import CommunitySerializer, CommunityBriefSerializer, MembershipSerializer, MembershipCommunitySerializer
from base.models import Community, Membership

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMemberships(request):
  user = request.user
  userProfile = UserProfile.objects.prefetch_related('user', 'communities').get(user=user)
  memberships = Membership.objects.prefetch_related('user','community').filter(user=userProfile)
  serializer = MembershipSerializer(memberships, many=True)
  return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def joinCommunity(request, pk):
  user = request.user
  try:
    profile = UserProfile.objects.get(user=user)
    community = Community.objects.get(pk=pk)
    if (profile.membership_user.filter(community=pk).exists()):
      raise ValidationError('You are a member already.')
    membership = Membership.objects.create(
      user=profile,
      community=community,
      introduction=''
    )
    serializer = MembershipSerializer(membership)
    return Response(serializer.data)
  except ValidationError or ObjectDoesNotExist as e:
    if type(e) is ValidationError:
      raise serializers.ValidationError(e.message)
    if type(e) is ObjectDoesNotExist:
      raise serializers.ValidationError('Object does not exist.')

@api_view(['GET'])
def getCommunity(request, pk):
  try:
    community = Community.objects.get(_id=pk)
  except ObjectDoesNotExist:
    raise serializers.ValidationError('Community Not Found.')
  serializer = CommunitySerializer(community, many=False)
  return Response(serializer.data)

@api_view(['GET'])
def getAllBriefCommunities(request):
  communities = Community.objects.all()
  serializer = CommunityBriefSerializer(communities, many=True)
  return Response(serializer.data)
