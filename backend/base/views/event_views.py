from django.core.exceptions import ObjectDoesNotExist, PermissionDenied, ValidationError
from rest_framework import serializers
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
import json

from base.serializers import *
from base.models import Item, UserProfile, EventForm, EventGuest

@api_view(['POST'])
def getForm(request, pk):
  try:
    event = Item.objects.get(pk=pk)
    if event.type != 'event': raise ValidationError('Event Does Not Exist')
    form, defaultForm = EventForm.objects.get_or_create(
      event=event,
      defaults={
        'heading': event.heading,
        'description': event.description,
        'inputs': json.dumps([
          {"inputType":"Text","label":"Name","info":"Enter Full Name","lengthRange":[0,100],"range":[0,1000],"pattern":"","checkboxOptions":[],"radioOptions":["",""],"selectOptions":[]},
          {"inputType":"Email","label":"Email","info":"Enter Email","lengthRange":[0,100],"range":[0,1000],"pattern":"","checkboxOptions":[],"radioOptions":["",""],"selectOptions":[]}
        ]),
        'thumbnail': 'default.png',
      }
    )
    serializer = EventFormSerializer(form if form else defaultForm)
    return Response(serializer.data)
  except ValidationError as e:
    if type(e) is ValidationError:
      raise serializers.ValidationError(e.message)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateForm(request, pk):
  data = request.data
  try:
    event = Item.objects.get(pk=pk)
    if event.type != 'event' : raise ValidationError('Item is not an event.')
    form = EventForm.objects.get(event=event)
    form.heading = data['heading']
    form.description = data['description']
    form.inputs = data['inputs']
    form.thumbnail = request.FILES.get('thumbnail') if request.FILES.get('thumbnail') else form.thumbnail
    form.save()
    serializer = EventFormSerializer(form)
    return Response(serializer.data)
  except ValidationError or ObjectDoesNotExist as e:
    if type(e) is ValidationError:
      raise serializers.ValidationError(e.message)
    elif type(e) is ObjectDoesNotExist:
      raise serializers.ValidationError('Event doesn\'t exist.')

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createForm(request, pk):
  data = request.data
  try:
    event = Item.objects.get(pk=pk)
    if event.type != 'event' : raise ValidationError('Item is not an event')
    form = EventForm.objects.create(
      event = event,
      heading = data['heading'],
      description = data['description'],
      inputs = data['inputs'],
      thumbnail = request.FILES.get('thumbnail')
    )
    serializer = EventFormSerializer(form)
    return Response(serializer.data)
  except ValidationError or ObjectDoesNotExist as e:
    if type(e) is ValidationError: 
      raise serializers.ValidationError(e.message)
    elif type(e) is ObjectDoesNotExist:
      raise serializers.ValidationError('Event doesn\'t exist.')

@api_view(['POST'])
def signup(request, pk):
  data = request.data
  profile = None
  if request.auth:
    profile = UserProfile.objects.get(user=request.user)
  try:
    event = Item.objects.get(pk=pk)
    if event.type != 'event' : raise ValidationError('Event does not exist.')
    if (event.negotiability == False and profile == None):
      raise ValidationError('This is a private hosting, join community to signup.')
    if (profile and EventGuest.objects.filter(profile=profile)[0]):
      raise ValidationError('You have already signed up.')
    guest = EventGuest.objects.create(
      event = event,
      details = data['details']
    )
    if profile:
      guest.profile = profile
      guest.save()
    serializer = EventGuestSerializer(guest)
    return Response(serializer.data)
  except ValidationError or ObjectDoesNotExist or PermissionDenied as e:
    if type(e) is ValidationError:
      raise serializers.ValidationError(e.message)
    elif type(e) is ObjectDoesNotExist:
      raise serializers.ValidationError('Event no longer exists.')
    elif type(e) is PermissionDenied:
      raise serializers.ValidationError(e.message)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getGuests(request, pk):
  user = request.user
  try:
    event = Item.objects.get(pk=pk)
    profile = UserProfile.objects.get(user=user)
    if event.type != 'event': raise ValidationError('Item is not an event')
    if event.user != profile: raise PermissionDenied('Event is not yours.')
    guests = event.event_guest.all()
    serializer = EventGuestSerializer(guests, many=True)
    return Response(serializer.data)
  except ValidationError or PermissionDenied as e:
    if type(e) is ValidationError:
      raise serializers.ValidationError(e.message)
    elif type(e) is PermissionDenied:
      raise serializers.ValidationError(e.message)