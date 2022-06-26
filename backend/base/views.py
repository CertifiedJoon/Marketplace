from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

@api_view(['GET'])
def getRoutes(reqeust):
  return Response('Hello')

@api_view(['GET'])
def getItems(request):
  return Response(items)

@api_view(['GET'])
def getItem(reqeust, pk):
  item = None
  for i in items:
    if i['_id'] == pk:
      item = i
      break
  return Response(item)