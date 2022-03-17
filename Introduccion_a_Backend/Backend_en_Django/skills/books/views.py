from django.shortcuts import render
#Para devolver una respuesta 404 si no encuentra el objeto, para no hacer try catch
from django.shortcuts import get_object_or_404
from html5lib import serialize
from itsdangerous import Serializer

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from sklearn.neighbors import radius_neighbors_graph

#Se debe traer el modelo
from books.models import Book , Author

#Se importan los serializadores
from books.serializers import AuthorSerializer , BookSerializer

# Create your views here.
class RetrieveBooks(APIView):

    permission_classes = (AllowAny , )

    #request hace referencia a la petición del usuario
    def get(self , request):

        #Función del ORM de Django que permite obtener todos los registros del modelo
        #guarda los objetos en query sets, pero se debe devolver el render de un template
        #para devolver JSONs es el .values(), transforma los objetos en valores para transformarlos
        #en JSONs
        books_list = Book.objects.all() #.values()

        serializer = BookSerializer(books_list , many = True)
        #status para que sea más claro
        return Response(serializer.data , status = status.HTTP_200_OK) #books_list

class RetrieveAuthors(APIView):

    permision_classes = (AllowAny , ) #Por default
    def get(self , request):

        #Busca a todos los autores y los transforma en un json
        #author_list = Author.objects.all().values()

        #Utilizando serializadores
        author_list = Author.objects.all()
        serializer = AuthorSerializer(author_list , many = True) #Cuando se le pasa un query set, serializer toma un solo objeto, así que hay que 
        #indicar que puede contener más de un objeto

        #Se devuelve un objeto json
        return Response(serializer.data) #author_list)

class CreateAuthor(APIView):

    permission_classes = (AllowAny , )

    def post(self , request):

        data = request.data
        serializer = AuthorSerializer(data = data)
        #Esto puede variar
        serializer.is_valid(raise_exception = True)
        serializer.save() #El serializador guarda directo a la BD, crea el modelo y lo guarda


        '''
        Con el serializador ya no se necesita
        author_obj = Author.objects.create (

            first_name = request.data.get('first_name' , '') ,
            last_name = request.data.get('last_name' , '') ,
            birth_date = request.data.get('birth_date' , )
        ) '''

        return Response(serializer.data , status = status.HTTP_201_CREATED)#({'message' : 'Creado'} , status = status.HTTP_201_CREATED) #Indica que se creó el registro

class CreateBook(APIView):

    permission_classes = (AllowAny , )

    def post(self , request):

        #Se puede pasar directamente como parámetro para no crear variables
        serializer = BookSerializer(data = request.data)
        serializer.is_valid(raise_exception = True)
        serializer.save()
        '''
        Con el serializador ya no se necesita
        book_obj = Book.objects.create (

            name = request.data.get('name' , '') , 
            isbn = request.data.get('isbn' , 0) ,
            publisher_date = request.data.get('publisher_date' , '1700-01-01') ,
            author_id = request.data.get('author_id' , 1)
        )'''

        return Response(serializer.data , status = status.HTTP_201_CREATED)#({'message' : 'Creado'} , status = status.HTTP_201_CREATED)

#Para obtener un solo objeto de acuerdo al id
class RetrieveAuthorAPIVIEW(APIView):

    permission_classes = (AllowAny , )

    def get(self , request , author_id):

        #id y pk(primary key) funcionan igual en el modelo
        author_obj = Author.objects.get(id = author_id) #Devuelve solo 1 objeto que coincida con los parámetros que se buscan
        serializer = AuthorSerializer(author_obj) #Solo devuelve 1 objeto, así que no es necesario el many
        
        return Response(serializer.data) #Ahora se necesita una nueva URL para esto

class RetrieveBookAPIVIEW(APIView):

    permission_classes = (AllowAny , )

    def get(self , request , book_id):

        #id y pk(primary key) funcionan igual en el modelo
        #Recibe el modelo y los parámetros a comparar
        book_obj = get_object_or_404(Book , pk = book_id) #Book.objects.get(id = book_id) #Devuelve solo 1 objeto que coincida con los parámetros que se buscan
        serializer = BookSerializer(book_obj) #Solo devuelve 1 objeto, así que no es necesario el many
        
        return Response(serializer.data) #Ahora se necesita una nueva URL para esto
