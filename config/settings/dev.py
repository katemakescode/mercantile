import debug_toolbar
import dj_database_url

from .base import *

DEBUG = True

INSTALLED_APPS += (
    'debug_toolbar',
)

MIDDLEWARE += (
    'debug_toolbar.middleware.DebugToolbarMiddleware',
)

INTERNAL_IPS = ['127.0.0.1']


DATABASES = {
    'default': dj_database_url.config(conn_max_age=500)
}
