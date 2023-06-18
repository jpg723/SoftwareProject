package com.example.withus.controller;

import java.io.Serializable;
import org.springframework.beans.support.PagedListHolder;

import com.example.withus.domain.GroupItem;
import com.example.withus.domain.User;

@SuppressWarnings("serial")
public class UserSession implements Serializable {

	private User user;

	private PagedListHolder<GroupItem> myList;

	public UserSession(User user) {
		this.user = user;
	}

	public User getAccount() {
		return user;
	}

	public void setMyList(PagedListHolder<GroupItem> myList) {
		this.myList = myList;
	}

	public PagedListHolder<GroupItem> getMyList() {
		return myList;
	}
}
