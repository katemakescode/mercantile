import dj_database_url
from .base import *

DEBUG = True
ALLOWED_HOSTS = ['127.0.0.1']


DATABASES = {
    'default': dj_database_url.config(conn_max_age=500)
}
