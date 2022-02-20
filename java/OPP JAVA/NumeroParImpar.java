import java.util.Scanner;
public class NumeroParImpar {
      public static void main(String[]args) {
    	  
    	  Scanner sc = new Scanner(System.in);
    	  System.out.println("Escribe el numero a evaluar: ");
    	  int numero1 = sc.nextInt();
    	  String resultado = (numero1 %2 == 0) ? ("es par") : ("es impar");
    	  System.out.println("El numero " + resultado);
      }
}
