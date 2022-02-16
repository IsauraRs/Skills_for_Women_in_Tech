
public class NewClass {
	
	private int edad;
	//private String name;
	
	/* Java tiene un constructor por defecto, que es el nombre
	/de la clase sin ninguna variable definida, si no se pone
	 * se define automáticamente*/
	NewClass(){
		
	}
	
	public NewClass(int edad){
		
		this.edad = edad; //Con this. se accede a la variable de la clase
		
	}
	
	public int getEdad() {
		
		return edad;
	}
	
	/*Modificadores de acceso:
	 * Public todos pueden acceder
	 * default solo los que estén dentro del paquete, que sean hijos de la misma clase pueden acceder
	 * protected solo los hijos de la clase pueden acceder
	 * private nadie más que la clase puede acceder, no puede haber clases privadas
	 */
	
	public int getDobleEdad() {
		
		return edad * 2;
	}

}
