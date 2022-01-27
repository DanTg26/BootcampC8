package operadores;

import java.util.Scanner;

public class Operadores {
    public static void main(String[]args) {
    	
    	//opersdores aritmeticos
    	//+, -, /, *, %
    	
    	int a = 10;
    	int b = 20;
    	
    	int c = a + b;
    	
    	System.out.println(c);
    	
    	String str1 = "El resultado de la suma es: ";
    	System.out.println(str1 + c);
    	//resta
    	System.out.println("El resultado de la resta es: " + (a - b));
    	
    	//division
    	
    	int division = a / b;
    	System.out.println("El resultado de la division es: " + (division));
    	
    	// Por lo menos uno de los datos de la division debe ser decimal para que nos represente los decimales
    	double division2 = (double) a / b;
    	System.out.println("El resultado de la division es: " + (division2));
    	
    	//multiplicacion
    	
    	double multiplicacion = c * a;
    	System.out.println("Esl resultado de la multiplicacion es: " + multiplicacion);
    	
    	//modulo
    	
    	double modulo = a % c;
    	System.out.println("El modulo de la operacion es " + modulo);
    	
    	//operador de asignacion: =, /
    	
    	
    	//operadores de declaracion compuesta
    	// +=, -=, *=, /=, %=, Permiten hacer una operacion simplificada
    	
    	//operacion simplificada:
    	
    	int f = 0, g = 5;
    	
    	f += 5;
    	
    	System.out.println(f);
    	
    	// operadores relacionales: <, >, <=, >=,
    	// "operador de igualdad ==
    	// operador de diferencia !=
    	//Resultado de un valor tipo booleano (true, false)
    	
    	int h = 15, i = 25;
    	String j = "Hola";
    	
    	System.out.println(h > i);
    	System.out.println(i != h);
    	//System.out.println(h != j); (Son valores distintos y no se pueden comparar)
    	
    	// Operador unario: ++, --,
    	//preasignacion  ++K (se le asigna un valor antes de usarse
    	//postasignación k++ Primero lee el valor y despues le suma 1
    	
    	int k = 0, l = 0;
    	
    	System.out.println(++k);
    	
    	//Precedencia de operadores (es la jerarquia que tienen los operadores)
    	
    	int operacion = 4 + 5 * 6 / 3;
    	System.out.println(operacion);
    	
    	
    	int x = 0, y = 0;
    	int operacion2 = ++x + y--;
    	System.out.println(operacion2);
    	
    	//Operador ternario
    	
    	int edad = 18, valor1 = 0, valor2 = 1;
    	
    	int resultado = (edad <= 18) ? (valor1 = 12) : (valor2 = 54);
    	
    	System.out.println(resultado);
    	
    	
    	//Operadores logicos
    	//And = &&
    	//Or 
    	
    	Scanner sc = new Scanner(System.in);
    	System.out.println("Escribe un numero ");
        int num = sc.nextInt();
        System.out.println(num);
        
        
    	
    
    	
    	
    	
    	
    	
    	
    }
   
}
