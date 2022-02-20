package paquete2;

public class ClasePrivada {
	//atributos
	private String nombre;
	private int edad;
	
	//metodo 
	public void setsaludar(String nombre) { //fijar o modificar un valor
		this.nombre = nombre; 
	}
	public String getSaludar() {
		return nombre;
	}
}