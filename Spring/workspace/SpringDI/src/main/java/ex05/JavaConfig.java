package ex05;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import ex01.Person;
import ex02.Chef;
import ex02.DataSource;
import ex02.Hotel;
import ex02.MemberDao;
import quiz01.Computer;
import quiz01.Keyboard;

@Configuration //***자바파일을 설정파일로 사용함***
public class JavaConfig {
	//<bean id="p" class="ex01.Person" />
	@Bean
	public Person p() {
		return new Person();
	}
	
	@Bean
	public Chef chef() {
		return new Chef();
	}
	public Hotel hotel() {
		return new Hotel(chef());
	}
	
	@Bean
	public DataSource ds() {
		DataSource ds = new DataSource();
		ds.setUrl("");
		ds.setUid("");
		ds.setUpw("");
		return ds;
	}
	
	@Bean
	public MemberDao memberDao() {
		MemberDao dao = new MemberDao();
		dao.setDataSource(ds());
		return dao;
	}
	
	//com, monitor, mouse, keyboard
	
	@Bean
	public Keyboard kb() {
		return new Keyboard();
		
	}
}
