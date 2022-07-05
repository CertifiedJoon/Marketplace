from django.http import Http404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status

from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User

from base.serializers import UserSerializer, UserSerializerWithToken, UserProfileSerializer
from base.models import UserProfile

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
  def validate(self, attrs):
    data = super().validate(attrs)
    serializer = UserSerializerWithToken(self.user).data
    for k,v in serializer.items():
      data[k] = v
    return data

class MyTokenObtainPairView(TokenObtainPairView):
  serializer_class = MyTokenObtainPairSerializer

@api_view(['POST'])
def registerUser(request):
  data = request.data
  try:
    user = User.objects.create(
      first_name = data['name'],
      username = data['email'],
      email=data['email'],
      password=make_password(data['password'])
    )

    serializer = UserSerializerWithToken(user, many=False)
    return Response(serializer.data)
  except:
    message = {'detail' : 'User with this email already exists'}
    return Response(message, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUser(request):
  user = request.user
  serializer = UserSerializer(user)
  return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
  users = User.objects.all()
  serializer = UserSerializer(users, many=True)
  return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
  user = request.user
  profile = UserProfile.objects.prefetch_related('badge_user', 'communities').get(user=user)
  serializer = UserProfileSerializer(profile, many=False)
  return Response(serializer.data)
