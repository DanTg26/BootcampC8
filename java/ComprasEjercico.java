import java.util.Scanner;
public class ComprasEjercico {
	public static void main(String[]args) {
		
		
	
		System.out.println("Introduce el total de tu compra");
		Scanner sc1 = new Scanner(System.in);
		int totalCompra = sc1.nextInt();
		
		 if (totalCompra <=  999) {
			System.out.println("No tienes descuento, compra más");}
		 
		else if (totalCompra >= 1000 && totalCompra <= 4999) {
			System.out.println("Tu precio con el 10% de descuento es: $" + (totalCompra * 0.9));
			System.out.println("El total de tu descuento fue: $" + totalCompra * 0.1);
		}
			
			else if (totalCompra >= 5000 && totalCompra <= 9999) {
				System.out.println("Tu precio con el 20% de descuento es: $" + (totalCompra * 0.8));
				System.out.println("El total de tu descuento fue: $" + totalCompra * 0.2);
				}
		
			else if (totalCompra >= 10000  ) {
				System.out.println("Tu precio con el 30% de descuento es: $" + (totalCompra * 0.7)); 
				System.out.println("El total de tu descuento fue: $" + (totalCompra * 0.3));
			}
				
			
		
	}
} 





//solicitar el total de una compra por consola.
// si la cuenta es de menos de 1000
// sila cuenta es de 1001 - 4999 10%
// si la cuenta es de 5001 a 9999 20%
// si la copra es de 10000 o más 30% 
// imprimir el total con los descuentos incluidos
