from django.core.exceptions import ObjectDoesNotExist, PermissionDenied, ValidationError
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
import json

from base.serializers import *
from base.models import Item, UserProfile, EventForm, EventGuest

@api_view(['GET'])
def getForm(request, pk):
  try:
    event = Item.objects.get(pk=pk)
    if event.type != 'event': raise ValidationError
    form = EventForm.objects.get(event=event)
    serializer = EventFormSerializer(form)
    return Response(serializer.data)
  except ValidationError or ObjectDoesNotExist:
    if ValidationError:
      raise ValidationError('Event does not exist.')
    elif ObjectDoesNotExist:
      raise ObjectDoesNotExist('Event doesn\'t have a sign-up form')

@api_view(['PUT'])
@permission_classes(IsAuthenticated)
def updateForm(request, pk):
  return Response()

@api_view(['POST'])
@permission_classes(IsAuthenticated)
def createForm(request, pk):
  data = request.data
  try:
    event = Item.objects.get(pk=pk)
    if event.type != 'event' : raise ValidationError
    form = EventForm.objects.create(
      event = event,
      heading = data['heading'],
      description = data['description'],
      inputs = data['inputs'],
      thumbnail = request.FILES.get('thumbnail')
    )
    serializer = EventFormSerializer(form)
    return Response(serializer.data)
  except ValidationError or ObjectDoesNotExist:
    if ValidationError: 
      raise ValidationError('Item is not an event.')
    elif ObjectDoesNotExist:
      raise ObjectDoesNotExist('Event doesn\'t exist.')

@api_view(['POST'])
def signup(request, pk):
  data = request.data
  profile = None
  if request.user:
    profile = UserProfile.objects.get(user = request.user)
  try:
    event = Item.objects.get(pk=pk)
    if event.type != 'event' : raise ValidationError
    guest = EventGuest.objects.create(
      event = event,
      profile = profile,
      details = data['details']
    )
    serializer = EventGuestSerializer(guest)
    return Response(serializer.data)
  except ValidationError or ObjectDoesNotExist:
    if ValidationError:
      raise ValidationError('Item is not an events')
    elif ObjectDoesNotExist:
      raise ObjectDoesNotExist('Event no longer exists.')