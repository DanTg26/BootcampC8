
public class Tacos {

	private String tipoDetortilla;
	String tipoDeGuisado;
	int numerodeTortilla;
	String tamanioDeTortilla;
	float precio = 0.0f;
	
	//El constructor nos ayuda a inicializar objetos
	
	public Tacos(String tipoDeTortilla, String tipoDeGuisado, 
			int numeroDeTortilla, String tamanioDeTortilla, float precio )
	{
		//this.tipoDetortilla = tipoDeTortilla;
		this.tipoDeGuisado = tipoDeGuisado;
		this.numerodeTortilla = numeroDeTortilla;
		this.tamanioDeTortilla = tamanioDeTortilla;
	}
		
	
	void preparar() {
		System.out.println("Preparando tu taco");
		
	}
	
	void comercializar() {
		System.out.println("Taco comercializado");
	}
	
	void ponerSalsa() {
		System.out.println("Agregando salsa de la que pica");}
	
		void subirPrecio(float aumento) {
			precio = precio + aumento;
		}
		
		 public String gettipoDetortilla() {
			 return this.tipoDetortilla;
		 }
		 
		 public void settipoDetortilla(String tipoDetortilla) {
			 this.tipoDetortilla = tipoDetortilla;
		 }
		 
	
			
			
		
		
	

	@Override
	public String toString() {
		return "Tacos [tipoDetortilla=" + tipoDetortilla + ", tipoDeGuisado=" + tipoDeGuisado + ", numerodeTortilla="
				+ numerodeTortilla + ", tamanioDeTortilla=" + tamanioDeTortilla + ", precio=" + precio + "]";
	}
	
	
	}

