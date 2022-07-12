from django.urls import path
from base.views import item_views as views


urlpatterns = [
  path('', views.getItems, name='items'),
  path('my-items/', views.getMyItems, name='my-items'),
  path('live-events/<uuid:community>/', views.getLiveEvents, name='live_events'),
  path('<str:pk>/',  views.getItem, name='item'),
]