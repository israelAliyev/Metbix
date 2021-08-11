package com.backend.services;

import com.backend.pojos.Products;
import org.springframework.data.relational.core.sql.In;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ServiceUser {

    List<Products> getUsersProducts(Long id);

    List<Products> getUsersRequestProducts(Integer id);

    void saveUsersRequestProduct(Integer id , Integer productId);

    void saveUsersBasketProduct(Integer id , Integer productId);


}
