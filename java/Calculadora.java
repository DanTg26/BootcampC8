import java.util.Scanner;
public class Calculadora {

	public static void main(String[]args) {
		
		
				System.out.println("Introduce un numero");
				Scanner sc = new Scanner(System.in);
				int  numero1 = sc.nextInt();
				
				System.out.println("Introduce otro numero");
				Scanner sc2 = new Scanner(System.in);
				int  numero2 = sc2.nextInt();
				
				System.out.println("Quieres sumarlos, restarlos, multiplicarlos o dividirlos?");
				Scanner sc3 = new Scanner(System.in);
				String decision = sc3.nextLine();
				
				switch(decision) {
				
				case "sumarlos":
					System.out.println("El resultado de tu operacion es: " + (numero1) + (numero2));
					break;
					
				case "restarlos":
					System.out.println("El resultado de tu operacion es: " + (numero1 - numero2));
					break;
					
				case "multiplicarlos":
					System.out.println("El resultado de tu operacion es: " + (numero1 * numero2));
					break;
					
				case "dividirlos":
					System.out.println("El resultado de tu operacion es: " + (numero1 / numero2));
					break;
	}
	
	}
	
}

//pedir al usuario 2 numeros por consola y preguntar 
// 1 suma
// 2 resta
// 3 division
// 4 multiplicacion
// despues imprimir el resultado

