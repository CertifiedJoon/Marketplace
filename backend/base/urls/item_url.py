from django.urls import path
from base.views import item_views as views


urlpatterns = [
  path('', views.getItems, name='items'),
  path('<str:pk>/',  views.getItem, name='item'),
]