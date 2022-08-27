from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import *

class ItemDetailSerializer(serializers.ModelSerializer):
  class Meta:
    model = ItemDetail
    fields = ('label', 'value')

class ItemImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = ItemImage
    fields = ('image', 'thumbnail')

class BadgeSerializer(serializers.ModelSerializer):
  class Meta:
    model = Badge
    fields = ('name', 'description')

# User
class UserSerializer(serializers.ModelSerializer):
  name = serializers.SerializerMethodField(read_only=True)
  _id = serializers.SerializerMethodField(read_only=True)
  is_admin = serializers.SerializerMethodField(read_only=True)

  class Meta:
    model = User
    fields = ('_id', 'is_admin', 'username', 'email', 'name')
  
  def get__id(self,obj):
    return obj.id

  def get_is_admin(self, obj):
    return obj.is_staff

  def get_name(self, obj) :
    name = obj.first_name
    if name == '':
      name = obj.username
    return name

class UserSerializerWithToken(UserSerializer):
  token = serializers.SerializerMethodField(read_only=True)
  
  class Meta:
    model = User
    fields = ('_id', 'is_admin', 'username', 'email', 'name', 'token')
  
  def get_token(self, obj):
    token = RefreshToken.for_user(obj)
    return str(token.access_token)


# UserProfile
class UserProfileImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = UserProfile
    fields = ('profile_image',)

class UserProfileBriefSerializer(serializers.ModelSerializer):
  badges = BadgeSerializer(source='badge_user', many=True)
  class Meta:
    model = UserProfile
    fields = ('profile_image', 'badges')

class UserProfileSerializer(serializers.ModelSerializer):
  badges = BadgeSerializer(source='badge_user', many=True)
  class Meta:
    model = UserProfile
    fields = '__all__'

# Community / Membership
class CommunitySerializer(serializers.ModelSerializer):
  members = UserProfileBriefSerializer(source='user_communities', many=True)
  class Meta:
    model = Community
    fields = '__all__'

class CommunityBriefSerializer(serializers.ModelSerializer):
  class Meta:
    model = Community
    fields = ('_id', 'key', 'name', 'thumbnail_image')

class MembershipSerializer(serializers.ModelSerializer):
  community = CommunityBriefSerializer(many=False)
  class Meta:
    model = Membership
    fields = '__all__'
    
class MembershipCommunitySerializer(serializers.ModelSerializer):
  class Meta:
    model = Membership
    fields = '__all__'
  

# Item
class LiveEventSerializer(serializers.ModelSerializer):
  images = ItemImageSerializer(source='item_image', many=True)

  class Meta:
    model = Item
    fields = ('_id', 'heading', 'images')

class ItemBriefSerializer(serializers.ModelSerializer):
  images = ItemImageSerializer(source="item_image", many=True)
  user = UserProfileBriefSerializer(read_only=True)

  class Meta:
    model = Item
    fields = ('_id', 'type', 'communities', 'heading', 'sub_heading', 'price', 'images', 'user')

class ItemSerializer(serializers.ModelSerializer):
  details = ItemDetailSerializer(source="item_detail", many=True)
  images = ItemImageSerializer(source="item_image", many=True)
  user = UserProfileSerializer(read_only=True)

  class Meta:
    model = Item
    fields = '__all__'
  

class LikeSerializer(serializers.ModelSerializer):
  class Meta:
    model = Like
    fields= ('item',)

# Event
class EventFormSerializer(serializers.ModelSerializer):
  class Meta:
    model = EventForm
    fields = ('heading', 'description', 'thumbnail', 'inputs')

class EventGuestSerializer(serializers.ModelSerializer):
  class Meta:
    model = EventGuest
    fields = ('details',)