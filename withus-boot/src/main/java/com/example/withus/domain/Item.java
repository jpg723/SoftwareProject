package com.example.withus.domain;

import java.io.Serializable;
import java.util.Date;

@SuppressWarnings("serial")
public class Item implements Serializable {
  /* Private Fields */
  private int itemId;
  private String itemName;
  private int itemState;
  private int itemStock;
  private int itemDetail;
  private Date itemDate;
  private int likeCount;
  private String userId;
  private int itemCategoryId;

  public int getItemId() {
    return itemId;
  }

  public void setItemId(int itemId) {
    this.itemId = itemId;
  }

  public String getItemName() {
    return itemName;
  }

  public void setItemName(String itemName) {
    this.itemName = itemName;
  }

  public int getItemState() {
    return itemState;
  }

  public void setItemState(int itemState) {
    this.itemState = itemState;
  }

  public int getItemStock() {
    return itemStock;
  }

  public void setItemStock(int itemStock) {
    this.itemStock = itemStock;
  }

  public int getItemDetail() {
    return itemDetail;
  }

  public void setItemDetail(int itemDetail) {
    this.itemDetail = itemDetail;
  }

  public Date getItemDate() {
    return itemDate;
  }

  public void setItemDate(Date itemDate) {
    this.itemDate = itemDate;
  }

  public int getLikeCount() {
    return likeCount;
  }

  public void setLikeCount(int likeCount) {
    this.likeCount = likeCount;
  }

  public String getUserId() {
    return userId;
  }

  public void setUserId(String userId) {
    this.userId = userId;
  }

  public int getItemCategoryId() {
    return itemCategoryId;
  }

  public void setItemCategoryId(int itemCategoryId) {
    this.itemCategoryId = itemCategoryId;
  }
}