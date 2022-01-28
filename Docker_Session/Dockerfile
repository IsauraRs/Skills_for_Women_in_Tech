#Imagen de python a usar
FROM python:3.8.10

#Se define el puerto donde va a oír el contenedor 
EXPOSE 8000

#Evita que genere archivos .pyc en el contenedor
ENV PYTHONDONTWRITEBYTECODE = 1

#Apaga el buffering para que sea más rápido el logging
ENV PYTHONUNBUFFERED = 1

#El directorio 
WORKDIR /app

#Copiar lo que está en esa ubicación en el directorio app
COPY . /app/ 

CMD ["python" , "Hello_World_Docker_Python.py"]