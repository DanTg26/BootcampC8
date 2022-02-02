import java.util.HashSet;
import java.util.TreeSet;
import java.util.Set;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Map;
import java.util.HashMap;
import java.util.TreeMap;

public class Colecciones {

	public static void main(String [] args) {
		//las colecciones nos sirven para almacenar un
		//conjunto de objetos
		// la diferencia de las colecciones ylos objetos es que las colecciones son dimamicas,
		//pueden cambiar el numero de ojetos agregados
		
		//coleccion de tipo set
		// SET no puede contener elementos repetidos
		
		
		//SET tiene tres tipos de implementaciones:
		//HashSet
		//Los elemntos no mantienen un orden
		//Es la implementacion mas rápida
		
		/*Set <String> frutas = new HashSet<String>();
		frutas.add("mango");
		frutas.add("pinia");
		frutas.add("granada");
		frutas.add("sandia");
		frutas.add("mamey");
		frutas.add("fresa");
		
		for (String fruta : frutas) {
			System.out.println(fruta);
			
		}
		*/
		
		//foreach pude recorrer una coleccion y en cada recorrido
		// recupera el valor y lo podemos almacenar en una variable
		//Sintaxis
		//for(tipoDeDatoElemento variable : elementoArecorrer)
		
		
		
				
		//TreeSet
		//Ordena los elementos en funcion de sus valores
		// Los ordena de manera alfabetica
		//Es la implementacion mas lenta
		
		/*Set <String> frutas = new TreeSet<String>();
		frutas.add("mango");
		frutas.add("pinia");
		frutas.add("granada");
		frutas.add("sandia");
		frutas.add("mamey");
		frutas.add("fresa");
		
		for (String fruta : frutas) {
			System.out.println(fruta);
			
		}*/
		
		
		//LinkedHashSet
		//Ordena los elementos de insercion
		//Gasta mas recursos que HashSet
		
		/*
		 * Set <String> frutas = new LinkedHashSet<String>();
		frutas.add("mango");
		frutas.add("pinia");
		frutas.add("granada");
		frutas.add("sandia");
		frutas.add("mamey");
		frutas.add("fresa");
		
		for (String fruta : frutas) {
			System.out.println(fruta);
			
		}
		*/
		
		//Listas:
		//List
		//List permite elementos duplicados
		//Se pueden acceder a elementos especificos
		//Se puede buscar elementos\
		
		//ArrayList
		
		List<String> pokemones = new ArrayList <String>();
		pokemones.add("Chicorita");
		pokemones.add("Evee");
		pokemones.add("Dragonite");
		pokemones.add("Charizard");
		pokemones.add("Gengar");
		pokemones.add("Vaporeaon");
		pokemones.add("Pikachu");
		pokemones.add("PerroDeFuego");
		
		//sia gregamos add y un elemento, posiciona
		//el elemento en el indice y realiza un desplazamiento
		//es decir, no borra el elemento en la posicion solo lo desplaza
		pokemones.add(2, "Rodmo");
		
		// remove remueve el elemento de la posicion especificada
		pokemones.remove(2);
		
		//Set remplaza el elemento en la posicion que les especifiquemos
		
		pokemones.set(0, "Hua liang");
		
		
	
		for(String pokemon : pokemones) {
			
			System.out.println(pokemon);
			
		}
		System.out.println("***************");
		System.out.println(pokemones.get(0));
		
		
		//indexOf: nos va a devolver la posicion del elemento
		// y si el elemento no se encuenta nos devuelve -1
		
		System.out.println(pokemones.indexOf("Gengar"));
		
		System.out.println("***************");
		
		//LinkedList 
		//Es una lista doblemente enlazada
		//ES mas rapido para insertar y remover elementos
		
		
		List <String> digimones = new LinkedList <String> ();
		digimones.add("Aguamon");
		digimones.add("patamon");
		digimones.add("angemon");
		digimones.add("Andromon");
		digimones.add("greymon");
		
for(String digimon : digimones) {
			
			System.out.println(digimon);
			
		}

//Map
// Asocia claves a valores
// No puede contener claves duplicadas
//Solo puede tener un valor asociado

//HashMap
//Tiene mejor rendimiento pero no garantiza un orden

Map<Integer, String> usuarios = new HashMap<Integer, String> ();
usuarios.put(1111,  "Carlos");
usuarios.put(2222,  "Raul");
usuarios.put(3333,  "Rodrigo");

System.out.println("************************");
System.out.println(usuarios.get(1111));
		
//KeySet
//Nos permite recuperar el nombre de la clave

//Values
//Nos permite recuperar el valor directamente

System.out.println(usuarios.keySet());

System.out.println(usuarios.values());

//TreeMap

Map<String, String> tamales = new TreeMap<String, String>();
tamales.put("Oaxaqueno" , "Mole rojo");
tamales.put("Torta", "Verde");
tamales.put("Dulces", "Pinia");
tamales.put("Salado", "Cochinita");

System.out.println(tamales.keySet());
System.out.println(tamales.values());

		
		}
		
		
		
	}

