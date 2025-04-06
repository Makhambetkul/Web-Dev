from django.urls import path
from .views import CompanyListAPIView, CompanyRetriveAPIView, CompanyVacanciesAPIView, VacancyListAPIView, TopTenVacanciesAPIView, VacancyRetrieveAPIView

urlpatterns = [
    path('companies/', CompanyListAPIView.as_view()),
    path('companies/<int:id>/', CompanyRetriveAPIView.as_view()),
    path('companies/<int:id>/vacancies/', CompanyVacanciesAPIView.as_view()),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:id>/', VacancyRetrieveAPIView.as_view()),
    path('vacancies/top_ten/', TopTenVacanciesAPIView.as_view()),
]
