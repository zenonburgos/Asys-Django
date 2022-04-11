from django.urls import path, include
# from .views import ProductoList, ProductoDetalle
from .views import CategoriaList, CategoriaDetalle

urlpatterns = [
    path('v1/categorias/', CategoriaList.as_view(), name="categoria_list"),
    path('v1/categorias/<str:codigo>', CategoriaDetalle.as_view(), name="categoria_detalle"),
    
    # path('v1/productos/', ProductoList.as_view(), name="producto_list"),
    # path('v1/productos/<str:codigo>', ProductoDetalle.as_view(), name="producto_detalle"),
    
]