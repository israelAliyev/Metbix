package com.backend.services;

import com.backend.pojos.Products;

import java.util.List;

public interface ServiceCompany {

    List<Products> getComapnysProducts(Long id);

    List<Products> getComapnysRequestProducts(Integer id);

    void saveComapnysRequestProduct(Integer id , Integer productId);

    void saveComapnysBasketProduct(Integer id , Integer productId);

}
