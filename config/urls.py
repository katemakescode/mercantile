from django.conf import settings
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('frontend.urls')),
    path('orders/', include('orders.urls')),
    path('api/', include('books.api.urls', namespace='api')),
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
]

# if settings.DEBUG:
#     import debug_toolbar
#     urlpatterns = [
#         path('__debug__/', include(debug_toolbar.urls))
#     ] + urlpatterns
