
public class Arreglos {
	
	public static void main(String[]args){
	
	//Solo se le puede ingressr un tipo de datos
	//Se tiene que especificar el tamano o la cantidad de elemntos que se van a ingresar
	
	//1era manera:
	
	int numeros[]; // se crea la varible
	numeros = new int[4]; // se crea el arreglo
	
	//2da manera:
	
	String[] nombres = new String[4];
	
	//3era manera array literal
	
	String []nombreFrutas = new String [] {"Manzana", "Platano", "Uva"
			
			
	};
	
	numeros[0] = 10;
	numeros[1] = 8;
	numeros[2] = 100;
	numeros[3] = 200;
	
	nombres[0] = "juan";
	nombres[1] = "pedro";
	nombres[2] = "antoine";
	nombres[3] = "felipe";
	
	System.out.println(numeros[0]);
	
	for(int i = 0; i < numeros.length;i++) {//length en arrays es una propiedad o atributo, 
		//no se tiene que usar los parentesis, en strings es un método, si se unsan parentesis
		
		System.out.println("Elemento de números: " + numeros[i]);// el i es el contador
		System.out.println("Elemento de nombres:" + nombres[i]);
		System.out.println("Elemento de frutas:" + nombreFrutas[i]);
		
	}
	
	
	}
}
