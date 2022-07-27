from django.urls import path
from base.views import event_views as views

urlpatterns = [
  path('get-form/<str:pk>/', views.getForm, name='get-form'),
  path('update-form/<str:pk/', views.updateForm, name='update-form'),
  path('create-form/<str:pk>/', views.createForm, name='create-form'),
  path('signup/<str:pk>/', views.signup, name='signup'),
]