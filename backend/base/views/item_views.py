from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.serializers import ItemBriefSerializer, ItemSerializer, LiveEventSerializer
from base.models import Item
# Create your views here.

@api_view(['GET'])
def getItems(request):
  items = Item.objects.prefetch_related('item_image', 'communities').select_related('user')
  serializer = ItemBriefSerializer(items, many=True)
  return Response(serializer.data)

@api_view(['GET'])
def getLiveEvents(request, community):
  events = Item.objects.prefetch_related('item_image', 'communities').filter(communities__pk = community).filter(type='event').filter(live=True)
  serializer = LiveEventSerializer(events, many=True)
  return Response(serializer.data)

@api_view(['GET'])
def getItemsFiltered(request, community, type):
  items = Item.objects.prefetch_related('item_detail', 'communities').select_related('user').filter(communities__pk = community)
  if type != 'all':
    items = items.filter(type=type)
  serializer = ItemBriefSerializer(items, many=True)
  return Response(serializer.data)

@api_view(['GET'])
def getItemsFilteredByType(request, type):
  items = Item.objects.prefetch_related('item_detail', 'communities').select_related('user').filter(type=type)
  serializer = ItemBriefSerializer(items, many=True)
  return Response(serializer.data)

@api_view(['GET'])
def getItem(reqeust, pk):
  item = Item.objects.prefetch_related('item_detail', 'item_image').select_related('user').get(pk=pk)
  serializer = ItemSerializer(item)
  return Response(serializer.data)