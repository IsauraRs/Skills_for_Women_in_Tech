Se debe visualizar cómo queremos que se vea la aplicación, por ejemplo, para jugar gato (3 en raya) podríamos querer una pantalla similar:

![3EnRaya]()

Luego se debe maquetar la pantalla, para el ejemplo anterior, sabemos que necesitamos 9 cuadros dentro de otro cuadrado más grande, para esto se crea un archivo CSS que ayudará a darle estilo y diseño (acomodar las cosas dentro de la página).

Para vincular el CSS al HTML, se le indica el tipo de relación que tiene con el documento:

```html
<link type = "text/css" href = "./styles.css" rel = "StyleSheet"/>
```

Para comprobar que esté funcionando, se puede usar el * , que da propiedades a todo el  html, podemos poner un background de algún color para comprobar.

```css
* {
    background-color: red;
}
```

Ya que ha funcionado se pueden quitar los paddings porque la etiqueta body tiene un padding (espacio del borde del contenedor hacia adentro, donde empieza el contenido) y margin (espacio del borde del contenedor hacia afuera) por defecto, si se quita se puede utilizar todo el espacio de la pantalla.

```css
* {
    padding: 0px;
    margin: 0px;
}
```
Hay varias formas de editar etiquetas de html desde una hoja de estilo. Una de ellas es poner el nombre de la etiqueta e indicar que todas las etiquetas de ese estilo tendrán un formato:

En este caso todas las etiquetas p tendrán la letra roja 

```css
p {
    color: red;
    font-size: 20px;
}

/*Identificador, se llama en el html con id = nombreIdentificador, tiene más jerarquía*/
#etiqueta {
    color: blue;
}
```

Otra manera es mediante clases, en html se le indica class = nombreClase:

```css
.clase {
    color: purple;
}

.cuadro {
    background-color: red;
    margin: 20px;
    padding: 20px;
}
```

Jerarquía:
* Identificador
* Clase
* Nombre de la etiqueta

Para alinear el cuadro agregar una clase (contenedor) en html.

Por defecto, cuando se crea un div en html, toma todo el ancho de la pantalla, pero la altura es equivalente a lo que hay dentro.

Se puede usar como medida en lugar de pixeles viewport height (vh), porcentaje referente a la altura del tamaño del navegador.

Por standard se usan las clases.

Si se define una clase y luego una etiqueta, lo que se defina en esa clase se aplicará a cualquier etiqueta que esté dentro de un elemento con esa clase.

Para que un usuario sepa que puede dar click en algo o escribir, generalmente cambia el cursor, en una página se puede hacer como:


45:21