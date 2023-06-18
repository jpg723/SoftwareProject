package com.example.withus.dao.mybatis.mapper;

import org.apache.ibatis.annotations.Mapper;
import com.example.withus.domain.Item;

@Mapper
public interface ItemMapper {

  void insertItem(Item item);
}
