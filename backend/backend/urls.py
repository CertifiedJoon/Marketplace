"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from rest_framework.views import exception_handler
from rest_framework.views import Response
from http import HTTPStatus
from typing import Any, Dict

from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('api/', include('base.urls')),
    path('api/items/', include('base.urls.item_url')),
    path('api/users/', include('base.urls.user_url')),
    path('api/community/', include('base.urls.community_url')),
    path('api/events/', include('base.urls.event_url')),
]

urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)

def api_exception_handler(exc: Exception, context: Dict[str, Any]) -> Response:
    """Custom API Exception Handler"""
    response = exception_handler(exc, context)
    if response is not None:
        http_code_to_message = {v.value: v.description for v in HTTPStatus}
        error_payload = {
            "error": {
                "status_code": 0,
                "message": "",
                "details": [],
            }
        }
        error = error_payload['error']
        status_code = response.status_code

        error["status_code"] = status_code
        error["message"] = http_code_to_message[status_code]
        error["details"] = response.data
        response.data = error_payload
    return response