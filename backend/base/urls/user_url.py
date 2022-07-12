from django.urls import path
from base.views import user_views as views

urlpatterns = [
  path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
  path('register/', views.registerUser, name='register'),
  path('upload-profile-image/', views.uploadProfileImage, name='upload_profile_image'),
  path('info/', views.getUser, name='user_info'),
  path('profile/', views.getUserProfile, name="user_profile"),
  path('profile/update/', views.updateUserProfile, name="users_profile_update"),
  path('', views.getUsers, name='users'),
]