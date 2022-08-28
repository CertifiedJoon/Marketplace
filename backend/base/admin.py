from django.contrib import admin
from .models import *

class BadgeAdmin(admin.ModelAdmin):
  filter_horizontal = ('users',)

class MembershipInline(admin.TabularInline):
  model = Membership
  extra = 1

class UserWishlistAdmin(admin.ModelAdmin):
  filter_horizontal = ('profiles',)

class UserProfileAdmin(admin.ModelAdmin):
  inlines=[MembershipInline]
  list_display = ('nickname','createdAt')
  list_filter = ['createdAt', 'communities']
  search_fields = ['nickname']


class ItemDetailInline(admin.TabularInline):
  model = ItemDetail
  extra = 3

class ItemImageInline(admin.TabularInline):
  model = ItemImage
  extra = 5

class EventGuestInline(admin.TabularInline):
  model = EventGuest

class ItemAdmin(admin.ModelAdmin):
  filter_horizontal = ('communities',)
  inlines = [ItemImageInline, ItemDetailInline, EventGuestInline]
  list_display = ('heading','createdAt')
  list_filter = ['createdAt','communities']
  search_fields = ['heading']


admin.site.register(Item, ItemAdmin)
admin.site.register(Community)
admin.site.register(UserProfile, UserProfileAdmin)
admin.site.register(Badge, BadgeAdmin)
admin.site.register(EventForm)
admin.site.register(Like, UserWishlistAdmin)
# Register your models here.
