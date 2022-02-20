
public class Main {

	public static void main(String[] args) {
		Tacos taco1 = new Tacos("Masa azul", "Suadero", 2,  "mediano", 30);
		
		//taco1.tipoDetortilla = "Masa azul";
		taco1.tipoDeGuisado = "Suadero";
		taco1.numerodeTortilla = 2;
		taco1.tamanioDeTortilla = "mediano";
		taco1.precio = 30;
		taco1.subirPrecio(5.5f);
		
		
		/*
		 * Tacos taco2 = new Tacos (); taco2.tipoDetortilla = "Harina";
		 * taco2.tipoDeGuisado = "Bisteck"; taco2.numerodeTortilla = 1;
		 * taco2.tamanioDeTortilla = "Grande"; taco2.precio = 42.6f;
		 * 
		 * System.out.println(taco2.toString());
		 */
		
		taco1.settipoDetortilla("Masa amarilla");
		
		System.out.println(taco1.toString());
		
		
		
	}
	
	

}
