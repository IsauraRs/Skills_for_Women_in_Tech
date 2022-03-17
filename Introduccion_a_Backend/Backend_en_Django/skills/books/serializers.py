#Se importa el módulo que tiene todo lo referente a serializadores, generalmente se usan 2
from rest_framework import serializers

#Se importan los modelos creados
from books.models import Author, Book

#Generalmente un serializador es usado para un modelo en específico
class AuthorSerializer(serializers.ModelSerializer):

    #La clase indica que el serializador viene del modelo
    #Se necesita una clase Meta
    class Meta:

        #Se declaran dos parámetros, el modelo a utilizar y los campos 
        model = Author 
        fields = ('id' , 'first_name' , 'last_name' , 'birth_date' ,)#'__all__' #all --> Forma más fácil, va hacia el modelo, toma todos los campos que tenga declarado ese modelo más el id y los muesta
        
        #Hasta aquí no hace nada, hay que ir a la vista para darle una utilidad.

class BookSerializer(serializers.ModelSerializer):

    class Meta:

        model = Book
        fields = '__all__'
        
    #Devolvía solo el id del autor, con esto devuelve un json con información del autor
    def to_representation(self, instance):

        #Para indicar a la clase (serializador), que va a tener la función to_representation
        response = super().to_representation(instance) 
        #Donde encuentre el author, serialice lo que tenga el instance en el author y lo devuelva serializado
        response['author'] = AuthorSerializer(instance.author).data

        return response