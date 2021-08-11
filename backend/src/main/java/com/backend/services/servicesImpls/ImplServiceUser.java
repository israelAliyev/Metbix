package com.backend.services.servicesImpls;

import com.backend.pojos.Products;
import com.backend.pojos.Users;
import com.backend.repositories.RepositoryProducts;
import com.backend.repositories.RepositoryUser;
import com.backend.services.ServiceUser;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class ImplServiceUser implements ServiceUser {

    private final RepositoryUser repositoryUser;
    private final RepositoryProducts repositoryProducts;

    @Override
    public List<Products> getUsersProducts(Long id) {
        return repositoryUser.getUsersProducts(id);
    }

    @Override
    public List<Products> getUsersRequestProducts(Integer id) {

        Users user = repositoryUser.findById(id).orElse(null);

        return user.getRequestProducts();
    }

    @Override
    public void saveUsersRequestProduct(Integer id , Integer productId) {

        Users user = repositoryUser.findById(id).orElse(null);

        Products product =repositoryProducts.findById(productId).orElse(null);

        List<Products> productsList = new ArrayList<>();
        productsList.add(product);

        user.setRequestProducts(productsList);

    }

    @Override
    public void saveUsersBasketProduct(Integer id, Integer productId) {
        Users user = repositoryUser.findById(id).orElse(null);

        Products product =repositoryProducts.findById(productId).orElse(null);

        List<Products> productsList = new ArrayList<>();
        productsList.add(product);

        user.setBasketProducts(productsList);
    }


}
