package ex05;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import ex02.Hotel;

public class MainClass {

	public static void main(String[] args) {
		AnnotationConfigApplicationContext ctx =
				new AnnotationConfigApplicationContext(JavaConfig.class);
		
		Hotel h = ctx.getBean(Hotel.class);
		h.getChef();
	}
	
}
