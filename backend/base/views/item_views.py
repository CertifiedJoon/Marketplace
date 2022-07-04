from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.serializers import ItemBriefSerializer, ItemSerializer
from base.models import Item
# Create your views here.

@api_view(['GET'])
def getItems(request):
  items = Item.objects.prefetch_related('item_detail', 'item_image').select_related('user')
  serializer = ItemBriefSerializer(items, many=True)
  return Response(serializer.data)

@api_view(['GET'])
def getItem(reqeust, pk):
  item = Item.objects.get(pk=pk)
  serializer = ItemSerializer(item)
  return Response(serializer.data)