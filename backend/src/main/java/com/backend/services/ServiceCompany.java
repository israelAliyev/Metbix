package com.backend.services;

import com.backend.dtos.request.UpdateCompanyRequest;
import com.backend.dtos.response.CompanyResponse;
import com.backend.pojos.Companies;

import java.util.Set;

public interface ServiceCompany {

    CompanyResponse getCompanyInfo(Long id);

    CompanyResponse getCompanyInfoByEmail(String email);

    void saveComapnysRequestProduct(Long id , Long productId);

    void saveComapnysBasketProduct(Long id , Long productId);

    void updateCompany(Long id, UpdateCompanyRequest request);

    Set<Companies> getByCompaniesName(String name);

}
