package com.simple.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

public class MainController extends MultiActionController{

	@Override
	protected ModelAndView handleRequestInternal(HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		
		String uri = request.getRequestURI();
		String conpath = request.getContextPath();
		String path = uri.substring(conpath.length());
		
		if(path.equals("/example/aaa")) {
			System.out.println(path+ "실행됨");
			ModelAndView mv = new ModelAndView();
			mv.addObject("data", "서버에서 전달하는 데이터1111"); //데이터정보
			mv.setViewName("home"); //뷰경로
			return mv; //디스패처서블릿으로 반환
			
		} else if(path.equals("/example/bbb")) {
			System.out.println(path + "실행됨");
			ModelAndView mv = new ModelAndView();
			mv.addObject("data", "서버에서 전달하는 데이터2222"); //데이터정보
			mv.setViewName("home2"); //뷰경로
			return mv; //디스패처서블릿으로 반환
		}
		return super.handleRequestInternal(request, response);
	}

	//스프링 3버전에서 제공하는 컨트롤러 중 하나로, URL에 따른 요청경로를 받아줄 수 있음
	
}
