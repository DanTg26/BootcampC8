package generation.com.animales;

public class Gato extends Animal implements Mascota, Jugar {

	@Override
	public void jugar() {
		System.out.println("Estoy jugando con una caja");
		
	}

	@Override
	public void correr() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void baniar() {
		System.out.println( "No me gusta el agua");
		
	}

	@Override
	public void moverLaCola() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void jugarconCajas() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void ensuciarse() {
		// TODO Auto-generated method stub
		
	}

}
