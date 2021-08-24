package com.backend.services.servicesImpls;

import com.backend.dtos.RegistrationUserRequest;
import com.backend.dtos.UpdateUserRequest;
import com.backend.pojos.Products;
import com.backend.pojos.Users;
import com.backend.repositories.RepositoryProducts;
import com.backend.repositories.RepositoryUser;
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
public class ImplServiceUser implements ServiceUser {

    private final RepositoryUser repositoryUser;
    private final RepositoryProducts repositoryProducts;


    @Override
    public void saveUsersRequestProduct(Long id , Long productId) {

        Users user = repositoryUser.findByUserId(id);

        Products product =repositoryProducts.findById(productId).orElse(null);

        Set<Products> productsList = new HashSet<Products>();
        productsList.add(product);

        user.setRequestProducts(productsList);

    }

    @Override
    public void saveUsersBasketProduct(Long id, Long productId) {
        Users user = repositoryUser.findByUserId(id);

        Products product =repositoryProducts.findById(productId).orElse(null);

        Set<Products> productsList = new HashSet<Products>();
        productsList.add(product);

        user.setBasketProducts(productsList);
    }

    @Override
    public Users getUserInfo(Long id) {

        return repositoryUser.findByUserId(id);
    }

    @Override
    public void updateUser(Long id, UpdateUserRequest request) {


        Users user = repositoryUser.findByUserId(id);

        user.setUserName(request.getUserName());
        user.setUserPassword(request.getUserPassword());
        user.setUserCity(request.getUserCity());
        user.setUserCountry(request.getUserCountry());
        user.setUserZip(request.getUserZip());
        user.setUserAddress(request.getUserAddress());
        user.setUserAddress2(request.getUserAddress2());
        user.setUserPhone(request.getUserPhone());
        user.setUserPhoto(request.getUserPhoto());
        user.setUserProfileBack(request.getUserProfileBack());


        if (request.getProducts() != null){

            user.getProducts().removeAll(user.getProducts());

            user.setProducts(request.getProducts());
        }


        if (request.getBasketProducts() != null) {

            user.getBasketProducts().removeAll(user.getBasketProducts());

            user.setBasketProducts(request.getBasketProducts());
        }

        repositoryUser.save(user);

    }


}
