import java.util.Arrays;

//La clase debe llevar el mismo nombre que el .java

/* Se usa CamelCase
 * Cuando es una clase, la primera va en mayúscula, cuando 
 * es método, la primera va en minúscula
 * cuando es field o variable, también va en minúscula la primera
 */
public class MyFirstJava {
	
	public static void main(String[] args) { //Define un método público estático que no regresa nada
	//Genera/define una variable llamada args
		/*System.out.println("My first line"); 
		
		NewClass nullClass;
		NewClass defaultClass = new NewClass();
		//Se define una variable y se instancia, con el new crea un nuevo objeto de la clase 
		//con el constructor NewClass
		NewClass otroClass = new NewClass(6); 
		
		try {
			
			System.out.println("default: " + defaultClass.getEdad());
		}
		
		catch(Exception e){
			System.out.println("Tuviste error ");
		}
		
		System.out.println("default: " + otroClass.getEdad());
		
		Persona fulanito = new Persona(20 , "fulanito Pérez");
		System.out.println("Nombre: " + fulanito.getName());
		System.out.println("Edad: " + fulanito.getEdad());
		
		//Dirección no tiene constuctor
		Direccion casa1 = new Direccion();
		casa1.setCalle("Josefa Ortiz de Dominguez");
		casa1.setNumero(1);
		casa1.setValor(1000000.00);
		
		System.out.println(casa1.dondeVivo());
		System.out.println(casa1.costo());*/
		
		//Estructuras de control
		//Arreglos, se declara con [], se le pasa el número de elementos
		
		int[] miPrimerArreglo = new int[6];
		
		for (int i = 0; i< miPrimerArreglo.length; i++) {
			
			miPrimerArreglo[i] = i + 10;
	
		}
		
		System.out.println(Arrays.toString(miPrimerArreglo));
		
		//For each para ciertos elementos iterables
		for (int element : miPrimerArreglo) 
			
			System.out.println(element);
		
		int i = 0;
		while(i< miPrimerArreglo.length) {
			
			System.out.println(miPrimerArreglo[i]);
			i++;
			
		}
		
		//Primero ejecuta y luego verifica, quita el último elemento
		i = 0;
		do {
			
			System.out.println(miPrimerArreglo[i]);
			i++;
			
		} while (i <= miPrimerArreglo.length);
		
		/*if() {
			
		} else {
			
		}
		
		switch() {
		
		case:
			
			break;
			
		default:
			
			break;
		}*/
			
	}
	//Java tiene en ciertas propiedades un default value, cuando son variables globales, se tienen valores por default
	//si no se define un objeto, devuelve null, si no se ha inicializado una variable no compila
	//si se trata de manipular un objeto generado en runtime se tiene una excepción 
}
