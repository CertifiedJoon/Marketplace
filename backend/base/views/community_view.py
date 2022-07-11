from pickle import FALSE
from types import NoneType
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from base.models import UserProfile

from base.serializers import CommunitySerializer, CommunityBriefSerializer, MembershipSerializer
from base.models import Community, Membership

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMemberships(request):
  user = request.user
  userProfile = UserProfile.objects.prefetch_related('user', 'communities').get(user=user)
  memberships = Membership.objects.prefetch_related('user','community').filter(user=userProfile)
  serializer = MembershipSerializer(memberships, many=True)
  return Response(serializer.data)


@api_view(['GET'])
def getCommunity(request, pk):
  community = Community.objects.get(_id=pk)
  serializer = CommunitySerializer(community, many=False)
  return Response(serializer.data)

@api_view(['GET'])
def getAllBriefCommunities(request):
  communities = Community.objects.all()
  serializer = CommunityBriefSerializer(communities, many=True)
  return Response(serializer.data)