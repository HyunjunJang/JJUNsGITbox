package ex02;

import java.util.Arrays;

import org.springframework.context.support.GenericXmlApplicationContext;

public class Main {

	public static void main(String[] args) {
		
		//IOC컨테이너
		GenericXmlApplicationContext ctx = 
				new GenericXmlApplicationContext("application-context.xml");
//		
//		//빈의 이름들 확인
//		String[] arr = ctx.getBeanDefinitionNames();
//		System.out.println(Arrays.toString(arr));
//		
		//빈을 꺼낼때는, 이름 or 타입을 사용하는 reflect기법 활용
		//Hotel h = (Hotel)ctx.getBean("hotel");
		//Hotel h = ctx.getBean(Hotel.class); //Hotel.class를 이용해 클래스 정보를 전달해서 사용
		
		//싱글톤, 프로토타입 비교
		MemberDao dao = ctx.getBean(MemberDao.class);
		System.out.println(dao.getDataSource().getUrl());
		
		
	}
}
