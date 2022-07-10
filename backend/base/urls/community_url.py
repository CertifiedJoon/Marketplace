from django.urls import path
from base.views import community_view as views

urlpatterns = [
  path('memberships/', views.getMemberships, name='memberships'),
  path('<uuid:pk>/', views.getCommunity, name='community'),
  path('', views.getAllBriefCommunities, name='communities'),
]