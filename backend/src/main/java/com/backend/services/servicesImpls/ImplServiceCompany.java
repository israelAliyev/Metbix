package com.backend.services.servicesImpls;

import com.backend.dtos.UpdateCompanyRequest;
import com.backend.pojos.Companies;
import com.backend.pojos.Continents;
import com.backend.pojos.Products;
import com.backend.pojos.Users;
import com.backend.repositories.RepositoryCompany;
import com.backend.repositories.RepositoryContinents;
import com.backend.repositories.RepositoryProducts;
import com.backend.repositories.RepositoryUser;
import com.backend.services.ServiceCompany;
import com.backend.services.ServiceUser;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@Transactional
@AllArgsConstructor
public class ImplServiceCompany implements ServiceCompany {

    private final RepositoryCompany repositoryCompany;
    private final RepositoryProducts repositoryProducts;
    private final RepositoryContinents repositoryContinents;


    @Override
    public Companies getCompanyInfo(Long id) {
        return repositoryCompany.findByCompanyId(id);
    }

    @Override
    public void saveComapnysRequestProduct(Long id, Long productId) {

        Companies company = repositoryCompany.findByCompanyId(id);

        Products product =repositoryProducts.findByProductId(productId);

        Set<Products> productsList = new HashSet<Products>();
        productsList.add(product);

        company.setRequestProducts(productsList);

    }

    @Override
    public void saveComapnysBasketProduct(Long id, Long productId) {

        Companies company = repositoryCompany.findByCompanyId(id);

        Products product =repositoryProducts.findByProductId(productId);

        Set<Products> productsList = new HashSet<Products>();
        productsList.add(product);

        company.setBasketProducts(productsList);
    }

    @Override
    public void updateCompany(Long id, UpdateCompanyRequest request) {

        Companies company = repositoryCompany.findByCompanyId(id);

        company.setCompanyPassword(request.getCompanyPassword());
        company.setCompanyName(request.getCompanyName());
        company.setCompanyCountry(request.getCompanyCountry());
        company.setCompanyCity(request.getCompanyCity());
        company.setCompanyZip(request.getCompanyZip());
        company.setCompanyBusinessType(request.getCompanyBusinessType());
        company.setCompanyTotalAnnualRevenue(request.getCompanyTotalAnnualRevenue());
        company.setCompanyYearEstablished(request.getCompanyYearEstablished());
        company.setCompanyAddress(request.getCompanyAddress());
        company.setCompanyProfilePhoto(request.getCompanyProfilePhoto());
        company.setCompanyPhone(request.getCompanyPhone());
        company.setCompanyEmployees(request.getCompanyEmployees());
        company.setCompanyDesc(request.getCompanyDesc());
        company.setCompanyProfileBack(request.getCompanyProfileBack());
        company.setCompanyOtherAddress(request.getCompanyOtherAddress());
        company.setCompaniesDetailsImagesAndVideos(request.getCompaniesDetailsImagesAndVideos());
        company.setCompaniesDetailsProductionCertifications(request.getCompaniesDetailsProductionCertifications());

        if(request.getCompaniesDetailsContinents() != null){

            Set<Continents> continentsList = new HashSet<Continents>();

            for(Continents c : request.getCompaniesDetailsContinents()){

                repositoryContinents.findById(c.getContinentId()).ifPresent(continentsList :: add);
            }

            company.setCompaniesDetailsContinents(continentsList);

        }


        if (request.getProducts() != null){

            company.getProducts().removeAll(company.getProducts());

            company.setProducts(request.getProducts());
        }


        if (request.getBasketProducts() != null) {

            company.getBasketProducts().removeAll(company.getBasketProducts());

            company.setBasketProducts(request.getBasketProducts());
        }


        repositoryCompany.save(company);

        }


}

