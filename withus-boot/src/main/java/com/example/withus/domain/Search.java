package com.example.withus.domain;

import java.io.Serializable;


@SuppressWarnings("serial")
public class Search implements Serializable {
  /* Private Fields */
	private Item item;
	private GroupItem groupItem;
	private Donation donation;
	public Item getItem() {
		return item;
	}
	public void setItem(Item item) {
		this.item = item;
	}
	public GroupItem getGroupItem() {
		return groupItem;
	}
	public void setGroupItem(GroupItem groupItem) {
		this.groupItem = groupItem;
	}
	public Donation getDonation() {
		return donation;
	}
	public void setDonation(Donation donation) {
		this.donation = donation;
	}
	@Override
	public String toString() {
		return "Search [item=" + item + ", groupItem=" + groupItem + ", donation=" + donation + "]";
	}
	
	

  
  

}