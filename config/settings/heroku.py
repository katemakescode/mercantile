# import dj_database_url
from .base import *

DEBUG = False
ALLOWED_HOSTS = ['mercantile.herokuapp.com']

ADMINS = (
    ('Kate McKenzie', 'kate.behind.the.web@gmail.com'),
)

# DATABASES = {
#     'default': dj_database_url.config(conn_max_age=500, ssl_require=True)
# }

CORS_REPLACE_HTTPS_REFERER = True
HOST_SCHEME = "https://"
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True

SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
SECURE_FRAME_DENY = True

SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True
SECURE_HSTS_SECONDS = 1000000
SECURE_SSL_REDIRECT = True
