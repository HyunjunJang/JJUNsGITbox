package ex02;

public class Hotel {
	private Chef chef;
	public Hotel(Chef chef) {
		this.chef = chef;
	} //Hotel은 Chef 객체가 있어야 생성될 수 있다. 의존적이다
	
	public Chef getChef() {
		return chef;
	}
}
