import java.util.Scanner;

public class EstructuraDeControlSwitch {

	// Estructuras de control nos sirve para controlar el flujo de comportamiento de un programa. 
	// Para la toma de decisiones.
	/*
	 Switch(codicion_a_evaluar) {
	 case "valor":
	 //break;
	 ...
	 case "n"
	 // codigo a aejecutar
	 // break;
	  
	 default:
	 //break;
	  // código a ejecutar
	 }
	 */
	
	// Solicitar alusuario un dia de la semana y mostrarle un mensaje
	
	
	
	public static void main(String[]args) {
		System.out.println("Introduce un dia de la semana y recibe el msj del misógino de Hua Liang:");
		Scanner sc = new Scanner(System.in);
		String dia = sc.nextLine();
		
		
		switch(dia.toLowerCase()) {
		
		case "lunes":
			System.out.println("hoy solo atiende local empredo");
			break;
			
		case "martes":
			System.out.println("Hicores ya manana es miercore");
			break;
			
		case "miercore":
			System.out.println("Hoy no veni mi local");
			break;
			
		case "jueves":
			System.out.println("Manana llega prueba hisopo 3 de la tarde");
			break;
			
		case "Viernes":
			System.out.println("Hoy puede veni mi local prueba de hisopo");
			break;
			
			default:
				System.out.println("Ese día no existir, suerte todo!!!");
			
			
		}
		
		
	}
}
