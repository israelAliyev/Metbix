package com.backend.services;

import com.backend.dtos.UpdateCompanyRequest;
import com.backend.dtos.UpdateUserRequest;
import com.backend.pojos.Companies;
import com.backend.pojos.Products;

import java.util.List;

public interface ServiceCompany {

   Companies getCompanyInfo(Long id);

    void saveComapnysRequestProduct(Long id , Long productId);

    void saveComapnysBasketProduct(Long id , Long productId);

    void updateCompany(Long id, UpdateCompanyRequest request);


}
