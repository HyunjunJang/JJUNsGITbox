package com.simple.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	@RequestMapping("/example/aaa")
	public String home(Model model) {
		model.addAttribute("data", "서버에서 전달하는 데이터");
		return "home";
	}
	
	@RequestMapping("/example/bbb")
	public String home2(Model model) {
		model.addAttribute("data", "서버에서 전달하는 데이터222");
		return "home2";
	}
}
