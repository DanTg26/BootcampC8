import java.util.Scanner;
public class MumeroMayor {

	public static void main(String[]args) {
		
		System.out.println("Introduce el numero 1: ");
		Scanner sc = new Scanner(System.in);
		int numero1 = sc.nextInt();
		
		System.out.println("Introduce el numero 2: ");
		Scanner sc2 = new Scanner(System.in);
		int numero2 = sc.nextInt();
		
		System.out.println("Introduce el numero 3: ");
		Scanner sc3 = new Scanner(System.in);
		int numero3 = sc.nextInt();
		
		if(numero1 > numero2 && numero1 > numero3 ) {
			System.out.println("Tu primera opcion es el mayor de tus numeros");
			}
		else if (numero2 > numero1 && numero2 > numero3) {
			 System.out.println("Tu segunda opcion es el mayor de tus numeros");
		}
			 
			 else if (numero3 > numero2 && numero3 > numero1) {
				 System.out.println("Tu tercera opcion e es el mayor de tus numeros");
			 }
			 
			 
			
		}
	

	
	
	{
		
		
	}
}


//Pedir 3 números al usuario y mostrar un mensaje con el
//número mayor
