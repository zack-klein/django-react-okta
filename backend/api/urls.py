from django.urls import include, path
from rest_framework import routers
from rest_framework_jwt.views import refresh_jwt_token

from api import views

router = routers.DefaultRouter()
router.register(r"users", views.UserViewSet)
router.register(r"groups", views.GroupViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path("", include(router.urls)),
    path("token/refresh/", refresh_jwt_token),
    path("login/callback/", views.receive_token),
    path("profile/", views.CurrentUserView.as_view()),
]
