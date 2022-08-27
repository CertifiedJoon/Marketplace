from django.urls import path
from base.views import item_views as views


urlpatterns = [
  path('', views.getItems, name='items'),
  path('my-items/', views.getMyItems, name='my-items'),
  path('live-events/<uuid:community>/', views.getLiveEvents, name='live_events'),
  path('update/<str:pk>/', views.updateItem, name='item-update'),
  path('upload-images/<str:pk>/', views.uploadImages, name='upload-images'),
  path('like/<str:pk>/', views.likeItem, name='like-item'),
  path('unlike/<str:pk>/', views.unlikeItem, name='unlike-item'),
  path('isliked/<str:pk>/', views.isLiked, name='is-liked'),
  path('getliked/', views.getLiked, name='get-liked'),
  path('create/', views.createItem, name='create-item'),
  path('delete/<str:pk>/', views.deleteItem, name='delete-item'),
  path('<str:pk>/',  views.getItem, name='item'),
]