from django.urls import path
from .views import(
    ProductListView,
    ProductDetailView,
    CategoryListView,
    ProductsByCategoryView,
)

urlpatterns = [
    path('products/', ProductListView.as_view()),
    path('products/<int:pk>/', ProductDetailView.as_view()),
    path('categories/', CategoryListView.as_view()),
    path('categories/<int:category_id>/products/', ProductsByCategoryView.as_view),
]
