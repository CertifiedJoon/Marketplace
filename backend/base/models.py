import uuid
from django.db import models
from django.contrib.auth.models import User
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill
# Create your models here.

class Community(models.Model):
  _id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
  key = models.CharField(max_length=5)
  name = models.CharField(max_length=50)
  description = models.TextField()
  createdAt = models.DateTimeField(auto_now_add=True)
  thumbnail_image = models.ImageField(upload_to='community', default='default.jpg')

  def __str__(self):
    return self.key

class UserProfile(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
  profile_image = models.ImageField(upload_to='profile', default='profile_placeholder.png')
  communities = models.ManyToManyField(Community, related_name="user_communities", blank=True, through='Membership')
  # payment_method = 
  events_hosted = models.IntegerField(blank=True, null=True, default=0)
  people_hosted = models.IntegerField(blank=True, null=True,default=0)
  items_sold = models.IntegerField(blank=True, null=True,default=0)
  items_bought = models.IntegerField(blank=True, null=True,default=0)
  clean_transaction = models.IntegerField(null=True,blank=True, default=0)
  nickname = models.CharField(max_length=10, blank=True, null=True)
  createdAt = models.DateTimeField(auto_now_add=True)
  introduction = models.TextField(blank=True, null=True)

  def __str__(self):
    return self.nickname

class Membership(models.Model):
  user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, related_name='membership_user')
  community = models.ForeignKey(Community, on_delete=models.CASCADE, related_name='membership_community')
  date_joined = models.DateField(auto_now_add=True)
  introduction = models.TextField(max_length=200, blank=True)

class Badge(models.Model):
  _id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
  name = models.CharField(max_length=10)
  description = models.CharField(max_length=50)
  users = models.ManyToManyField(UserProfile, blank=True, related_name='badge_user')

  def __str__(self):
    return self.name

class Item(models.Model):
  _id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
  user = models.ForeignKey(UserProfile, on_delete=models.SET_NULL, null=True, related_name='item_user')
  communities = models.ManyToManyField(Community, related_name='item_communities')
  type = models.CharField(max_length=15)
  heading = models.CharField(max_length=50)
  sub_heading = models.CharField(max_length=50)
  reason = models.CharField(max_length=50)
  price = models.DecimalField(max_digits=7, decimal_places=2, default=0)
  negotiability = models.BooleanField(default=True)
  createdAt = models.DateTimeField(auto_now_add=True)
  description = models.TextField()
  live = models.BooleanField(default=True)

  def __str__(self):
    return self.heading
  
  class Meta:
    ordering=["createdAt"]

class ItemImage(models.Model):
  item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='item_image')
  image = models.ImageField(upload_to='item')
  thumbnail_image = ImageSpecField(source='image',
                                  processors=[ResizeToFill(300, 300)],
                                  format='JPEG',
                                  options={'quality': 60})
  thumbnail = models.BooleanField(default=False)

  def __str__(self):
    return self.item.heading

class ItemDetail(models.Model):
  _id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
  item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='item_detail')
  label = models.CharField(max_length=20)
  value = models.CharField(max_length=100)

  def __str__(self):
    return self.item.heading

class EventForm(models.Model):
  _id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
  event = models.OneToOneField(Item, on_delete=models.CASCADE, null=True)
  heading = models.CharField(max_length=100)
  description = models.TextField()
  thumbnail = models.ImageField(upload_to='event')
  inputs = models.JSONField()

  def __str__(self):
    return self.event.heading
  
class EventGuest(models.Model):
  _id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
  event = models.ForeignKey(Item, on_delete=models.CASCADE, null=True, related_name='event_guest')
  profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, null=True, related_name='profile_guest')
  details = models.JSONField()

class Like(models.Model):
  _id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
  item = models.ForeignKey(Item, on_delete=models.CASCADE, null=False, related_name='like_item')
  profiles = models.ManyToManyField(UserProfile, related_name='like_profile')