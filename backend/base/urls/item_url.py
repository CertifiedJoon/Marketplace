from django.urls import path
from base.views import item_views as views


urlpatterns = [
  path('', views.getItems, name='items'),
  path('<str:pk>/',  views.getItem, name='item'),
  path('<uuid:community>/<str:type>/', views.getItemsFiltered, name='items_filtered'),
  path('type/<str:type>/', views.getItemsFilteredByType, name='items_filtered_by_type')
]