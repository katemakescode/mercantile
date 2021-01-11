from django.urls import path

from frontend.views import FrontEndView

app_name = 'frontend'
urlpatterns = [
    path('', FrontEndView.as_view(), name='index'),
]
