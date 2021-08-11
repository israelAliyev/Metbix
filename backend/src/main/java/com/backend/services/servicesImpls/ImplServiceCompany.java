package com.backend.services.servicesImpls;

import com.backend.pojos.Companies;
import com.backend.pojos.Products;
import com.backend.pojos.Users;
import com.backend.repositories.RepositoryCompany;
import com.backend.repositories.RepositoryProducts;
import com.backend.repositories.RepositoryUser;
import com.backend.services.ServiceCompany;
import com.backend.services.ServiceUser;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class ImplServiceCompany implements ServiceCompany {

    private final RepositoryCompany repositoryCompany;
    private final RepositoryProducts repositoryProducts;


    @Override
    public List<Products> getComapnysProducts(Long id) {
        return repositoryCompany.getComanysProducts(id);
    }

    @Override
    public List<Products> getComapnysRequestProducts(Integer id) {

        Companies company = repositoryCompany.findById(id).orElse(null);

        return company.getRequestProducts();
    }

    @Override
    public void saveComapnysRequestProduct(Integer id, Integer productId) {

        Companies company = repositoryCompany.findById(id).orElse(null);

        Products product =repositoryProducts.findById(productId).orElse(null);

        List<Products> productsList = new ArrayList<>();
        productsList.add(product);

        company.setRequestProducts(productsList);

    }

    @Override
    public void saveComapnysBasketProduct(Integer id, Integer productId) {

        Companies company = repositoryCompany.findById(id).orElse(null);

        Products product =repositoryProducts.findById(productId).orElse(null);

        List<Products> productsList = new ArrayList<>();
        productsList.add(product);

        company.setBasketProducts(productsList);
    }


}

