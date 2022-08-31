from django.urls import path
from base.views import community_view as views

urlpatterns = [
  path('memberships/', views.getMemberships, name='memberships'),
  path('join/<uuid:pk>/', views.joinCommunity, name='join'),
  path('<uuid:pk>/', views.getCommunity, name='community'),
  path('', views.getAllBriefCommunities, name='communities'),
]