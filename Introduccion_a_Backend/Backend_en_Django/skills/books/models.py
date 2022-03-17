from re import A
from django.db import models

# Create your models here.

#El interlineado entre clases debe ser de dos líneas
class Author(models.Model):

    first_name = models.CharField(max_length = 120 , verbose_name = 'Nombre')
    last_name = models.CharField(max_length = 120 , verbose_name = 'Apellido')
    birth_date = models.DateField(verbose_name = 'Fecha nacimiento')
    created_date = models.DateTimeField(auto_now_add = True , verbose_name = 'Fecha creación')

    class Meta:

        db_table = 'authors'


# Para que reconozca a la clase como modelo.
# El nombre de la tabla es generado por Django a partir del nombre de la aplicación junto con el
# nombre del modelo
class Book(models.Model):

    # CharField pide como parámetro obligatorio el max_length, verbose_name ayuda a identificar
    # a qué hace referencia ese campo.
    name = models.CharField(max_length = 128 , verbose_name = 'Nombre')
    isbn = models.IntegerField(default = 0 , verbose_name = 'ISBN') # No tiene parámetros obligatorios, si no se agrega un valor inicia automáticamente en 0
    publisher_date = models.DateField(verbose_name = 'Fecha publicación')
    created_date = models.DateTimeField(auto_now_add = True , verbose_name = 'Fecha creación') # Momento en el que se creó el registro, se agrega automáticamente
    author = models.ForeignKey(Author , on_delete = models.CASCADE , null = True , verbose_name = 'Author')

    class Meta: 

        db_table = 'books'
