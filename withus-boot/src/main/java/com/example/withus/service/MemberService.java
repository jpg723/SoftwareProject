package com.example.withus.service;

import com.example.withus.domain.Member;

public interface MemberService {
	Member findByIdAndPassword(String user_id, String password);
	String findId(Member member);
	String findPW(Member member);
	void updateMember(Member member);
	Member memberInfo(String user_id);
}
