
public class Direccion {
	
	private String calle;
	private int numero;
	private double valor;
	
	//Getters y setters
	//No generaremos la clase por constructor, se va a settear
	public void setCalle(String calle) {
		
		this.calle = calle;
	}
	
	public void setNumero(int numero) {
		
		this.numero = numero;
	}
	
	public void setValor(double valor) {
		
		this.valor = valor;
	}
	
	public String dondeVivo() {
		
		return String.format("Calle: %s #%d", calle , numero);
		//return "Calle: " + calle + "#" + numero;
	}
	
	public String costo()
	{
		return "Mi casa vale: " + valor;
	}
}
