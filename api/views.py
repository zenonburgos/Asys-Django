from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_list_or_404

from .serializers import CategoriaSerializer
# from .serializers import ProductoSerializer
from inv.models import Categoria
# from inv.models import Producto

####CATEGORIAS
class CategoriaList(APIView):
    def get(self, request):
        cate = Categoria.objects.all()
        data = CategoriaSerializer(cate,many=True).data
        
        response = []
        for d in data:
            item = []
            item.append(d['id'])
            item.append(d['descripcion'])
            response.append(item)        
        return Response(response)    

class CategoriaDetalle(APIView):
    def get(self, request, codigo):
        prod = get_list_or_404(Categoria,codigo=codigo)
        data = CategoriaSerializer(data)
        return Response(prod).data
        return Response(data)

####PRODUCTOS
# class ProductoList(APIView):
#     def get(self, request):
#         prod = Producto.objects.all()
#         data = ProductoSerializer(prod,many=True).data
#         return Response(data)

# class ProductoDetalle(APIView):
#     def get(self, request, codigo):
#         prod = get_list_or_404(Producto,codigo=codigo)
#         data = ProductoSerializer(data)
#         return Response(prod).data
#         return Response(data)