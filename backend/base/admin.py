from django.contrib import admin
from .models import *

class BadgeAdmin(admin.ModelAdmin):
  filter_horizontal = ('users',)

class MembershipInline(admin.TabularInline):
  model = Membership
  extra = 1

class UserProfileAdmin(admin.ModelAdmin):
  inlines=[MembershipInline,]
  list_display = ('nickname','createdAt')
  list_filter = ['createdAt', 'communities']
  search_fields = ['nickname']


class ItemDetailInline(admin.TabularInline):
  model = ItemDetail
  extra = 3

class ItemImageInline(admin.TabularInline):
  model = ItemImage
  extra = 5

class ItemAdmin(admin.ModelAdmin):
  filter_horizontal = ('communities',)
  inlines = [ItemImageInline, ItemDetailInline]
  list_display = ('heading','createdAt')
  list_filter = ['createdAt','communities']
  search_fields = ['heading']


admin.site.register(Item, ItemAdmin)
admin.site.register(Community)
admin.site.register(UserProfile, UserProfileAdmin)
admin.site.register(Badge, BadgeAdmin)
# Register your models here.
