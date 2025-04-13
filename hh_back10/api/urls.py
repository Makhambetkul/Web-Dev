from django.urls import path
from .views import company_list_create, company_detail_update_delete, CompanyVacanciesAPIView, VacancyListAPIView, TopTenVacanciesAPIView, VacancyRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('companies/', company_list_create),
    path('companies/<int:id>/', company_detail_update_delete),
    path('companies/<int:id>/vacancies/', CompanyVacanciesAPIView.as_view()),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:id>/', VacancyRetrieveUpdateDestroyAPIView.as_view()),
    path('vacancies/top_ten/', TopTenVacanciesAPIView.as_view()),
]
