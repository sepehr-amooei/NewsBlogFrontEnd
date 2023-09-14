from django.urls import path
from . import views



app_name = "news"
urlpatterns = [
    path("review/", views.NewsReview.as_view()),
    path("update/<int:pk>/", views.NewsUpdate.as_view()),
    path("delete/<int:pk>/", views.NewsDelete.as_view()),
]