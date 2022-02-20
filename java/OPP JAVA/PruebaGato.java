package Gatos;

public class PruebaGato {
     public static void main(String [] args) {
	Gato g = new Gato();
	
	//g.nombre = "Mesalina";
	//g.patas = 3; 
	
	g.setNombre("Mesalina");
	g.setPatas(4);
	g.setAdoptado(false);
	
	System.out.println(g);
	System.out.println("Tu gata se llama: " + g.getNombre());
	
	//Excepciones: detienen la ejecución del programa
	
	//int num1 = 5, num2 = 0;
	//int resultado = num1/num2;//error de tiempo de ejecucion solo aparece cuando estemos ejecutando la aplicacion
	//System.out.println(resultado);
	
	//System.out.println("hola mundo");
	
	
	
}
}
