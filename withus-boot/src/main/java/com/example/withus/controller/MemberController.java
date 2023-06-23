package com.example.withus.controller;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Date;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.withus.domain.Item;
import com.example.withus.domain.Member;
import com.example.withus.domain.Order;
import com.example.withus.service.MemberService;

@RestController
@RequestMapping("/member")
public class MemberController {
	@Autowired
	DataSource ds;
	
	@Autowired
	private MemberService memberService;
	
	String[] member = new String[10];
	int i = 0;
	boolean login_check = false;
	
	@ResponseBody
	   @RequestMapping(value="/findPW", method=RequestMethod.POST)
	   public String findPW (HttpServletRequest request, @RequestBody Map<String, Object> paramMap) { 
		   
		String[] Info = new String[2];
		int i = 0;
		for (Map.Entry<String, Object> pair : paramMap.entrySet()) {
			 Info[i] = pair.getValue().toString();
			 System.out.println(Info[i]);
			 i++;
		}
		
		Member member = new Member();
		member.setEmail(Info[0]);
		member.setUser_id(Info[1]);
		
		return memberService.findPW(member);
	   }
	
	   @ResponseBody
	   @RequestMapping(value="/findId", method=RequestMethod.POST)
	   public String findId (HttpServletRequest request, @RequestBody Map<String, Object> paramMap) { 
		   
		String[] Info = new String[2];
		int i = 0;
		for (Map.Entry<String, Object> pair : paramMap.entrySet()) {
			 Info[i] = pair.getValue().toString();
			 System.out.println(Info[i]);
			 i++;
		}
		
		Member member = new Member();
		member.setEmail(Info[0]);
		member.setUser_name(Info[1]);
		
		return memberService.findId(member);
	   }
	
	@ResponseBody
	@RequestMapping(value="register.do", method=RequestMethod.POST)
	public  Map<String,Object> Register (HttpServletRequest request,@RequestBody Map<String, Object> paramMap) throws SQLException  {
		
		for (Map.Entry<String, Object> pair : paramMap.entrySet()) {
			member[i] = pair.getValue().toString();
			//System.out.println(member[i]+ pair.getValue().toString());
			i++;
		}
	    
		Connection conn = ds.getConnection();
	    PreparedStatement stmt = conn.prepareStatement(
	         "INSERT INTO Member (User_ID, PASSWORD, USER_NAME, EMAIL, PHONE, ZIP, ADDRESS1, ADDRESS2, GENDER, BIRTH) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
	    stmt.setString(1, member[0]);
	    stmt.setString(2, member[1]);
	    stmt.setString(3, member[2]);
	    stmt.setString(4, member[3]);
	    stmt.setString(5, member[4]);
	    stmt.setString(6, member[5]);
	    stmt.setString(7, member[6]);
	    stmt.setString(8, member[7]);
	    stmt.setInt(9, Integer.parseInt(member[8]));
	    stmt.setString(10, member[9]);
	    stmt.executeUpdate();
	    i = 0;
		Map<String,Object> resultMap = new HashMap<String,Object>();
		resultMap.put("java return", "im java");
		return resultMap;
	}
	
	
	@RequestMapping(value="login.do", method=RequestMethod.POST)
	public Member Login (@RequestBody Map<String, Object> paramMap) {
		 String[] loginInfo = new String[2];
		 int i = 0;
		 for (Map.Entry<String, Object> pair : paramMap.entrySet()) {
			 loginInfo[i] = pair.getValue().toString();
			 System.out.println(loginInfo[i]);
				i++;
			}
		 return memberService.findByIdAndPassword(loginInfo[0], loginInfo[1]);
	}	
	
	@RequestMapping(value="logout.do", method=RequestMethod.GET)

	
    @GetMapping("/login")
    public String loginCheck(){
    	
    	if(login_check == true)
    		return "로그인 성공";

    	return "로그인 실패";
    }
	
	@ResponseBody
	@RequestMapping(value="/update", method=RequestMethod.POST)
	public Member updateMember(HttpServletRequest request,
			@RequestBody Map<String, Object> paramMap) {
		String[] memberInfo = new String[10];
		int i = 0;
		for (Map.Entry<String, Object> pair : paramMap.entrySet()) {
			memberInfo[i] = pair.getValue().toString();
			System.out.println(memberInfo[i]);
			i++;
		}
	       
		Member member = new Member();
	    member.setPassword(memberInfo[0]); 
	    member.setUser_name(memberInfo[1]);
	    member.setEmail(memberInfo[2]);
	    member.setPhone(memberInfo[3]);
	    member.setZip(memberInfo[4]);
	    member.setAddress1(memberInfo[5]);
	    member.setAddress2(memberInfo[6]);
	    member.setGender(Integer.parseInt(memberInfo[7]));
	    member.setBirth(memberInfo[8]); 
	    member.setUser_id(memberInfo[9]);
	    System.out.println("수정:" + member);
	    memberService.updateMember(member);
	    
	    return member;
	}
	
	@GetMapping(value="/info/{user_id}") 
	public Member memberInfo(@PathVariable("user_id") String user_id) {
		return memberService.memberInfo(user_id);
	}
	

}