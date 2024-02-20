package ex01;

import org.springframework.context.support.GenericXmlApplicationContext;

public class MainClass {

	public static void main(String[] args) {
		//자바의 방식으로 Person 객체 사용!
//		System.out.println("Hello World!");
//		Person p = new Person();
//		System.out.println(p.getName());
		
		//스프링의 방식으로 Person 객체를 사용한다!(new 키워드 사용안함)
		GenericXmlApplicationContext
			ctx = new GenericXmlApplicationContext("application-context.xml");
		
		Person p = (Person)ctx.getBean("p"); //ID가 "p"인 bean
		System.out.println(p.getName());
	}

}
