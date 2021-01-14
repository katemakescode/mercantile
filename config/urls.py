from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('frontend.urls')),
    path('api/', include('books.api.urls', namespace='api')),
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
]
