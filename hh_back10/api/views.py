from rest_framework import generics
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET', 'POST'])
def company_list_create(request):
    if request.method=='GET':
        companies=Company.objects.all()
        serializer=CompanySerializer(companies, many=True)
        return Response(serializer.data)
    
    elif request.method=='POST':
        serializer=CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['GET', 'PUT', 'DELETE'])
def company_detail_update_delete(request, pk):
    try:
        company=Company.objects.get(pk=pk)
    except Company.DoesNotExist:
        return Response({'error': 'Company not found'}, status=404)
    
    if request.method=='GET':
        serializer=CompanySerializer(company)
        return Response(serializer.data)
    
    elif request.method=='PUT':
        serializer=CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    
    elif request=='DELETE':
        company.delete()
        return Response(status=204)

class CompanyVacanciesAPIView(generics.ListAPIView):
    serializer_class=VacancySerializer

    def get_queryset(self):
        company_id=self.kwargs['id']
        return Vacancy.objects.filter(company_id=company_id)
    
class VacancyListAPIView(generics.ListAPIView):
    queryset=Vacancy.objects.all()
    serializer_class=VacancySerializer

class VacancyRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset=Vacancy.objects.all()
    serializer_class=VacancySerializer
    lookup_field='id'

class TopTenVacanciesAPIView(generics.ListAPIView):
    serializer_class=VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.order_by('-salary')[:10]

    