from rest_framework.views import APIView
from .models import News
from .serializers import NewsSerializer
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.pagination import LimitOffsetPagination


class NewsReview(APIView, LimitOffsetPagination):
    '''
    list of news.
    '''
    permission_classes = [IsAuthenticated,]
    serializer_class = NewsSerializer
    
    def get(self, request):
        sort_by = self.request.query_params.get('sort', '')
        category = self.request.query_params.get("category", None)
        if category:
            if sort_by:
                news = News.objects.filter(category=category).order_by(sort_by)
            else:
                news = News.objects.filter(category=category)
            self.count = self.get_count(news)
            results = self.paginate_queryset(news, request, view=self)
            self.count = self.get_count(news)
            srz_data = NewsSerializer(instance=results, many=True)
            return self.get_paginated_response(srz_data.data)
        else:
            if sort_by:
                news = News.objects.all().order_by(sort_by)
            else:
                news = News.objects.all()
            self.count = self.get_count(news)
            results = self.paginate_queryset(news, request, view=self)
            srz_data = NewsSerializer(instance=results, many=True)
            return self.get_paginated_response(srz_data.data)



class NewsUpdate(APIView):
    '''
    update news.
    '''

    permission_classes = [IsAuthenticated, IsAdminUser]
    serializer_class = NewsSerializer

    def put(self, request, pk):
        news = News.objects.get(id=pk)
        srz_data = NewsSerializer(instance=news, data=request.data, partial=True)
        if srz_data.is_valid():
            srz_data.save()
            return Response(srz_data.data, status=status.HTTP_200_OK)
        return Response(srz_data.errors, status=status.HTTP_400_BAD_REQUEST)
    

class NewsDelete(APIView):
    '''
    delete news.
    '''

    permission_classes = [IsAuthenticated, IsAdminUser]
    serializer_class = NewsSerializer

    def delete(self, request, pk):
        news =  News.objects.get(pk=pk)
        news.delete()
        return Response({"message":"news deleted"}, status=status.HTTP_200_OK)
