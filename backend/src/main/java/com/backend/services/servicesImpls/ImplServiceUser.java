package com.backend.services.servicesImpls;

import com.backend.dtos.request.UpdateUserRequest;
import com.backend.dtos.response.ProfileResponse;
import com.backend.dtos.response.UserResponse;
import com.backend.pojos.Companies;
import com.backend.pojos.Products;
import com.backend.pojos.Users;
import com.backend.repositories.RepositoryCompany;
import com.backend.repositories.RepositoryProducts;
import com.backend.repositories.RepositoryUser;
import com.backend.services.ServiceUser;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;

@Service
@Transactional
@AllArgsConstructor
public class ImplServiceUser implements ServiceUser {

    private final RepositoryUser repositoryUser;
    private final RepositoryCompany repositoryCompany;
    private final RepositoryProducts repositoryProducts;


    @Override
    public void saveUsersRequestProduct(Long id, Long productId) {

        Users user = repositoryUser.findByUserId(id);

        Products product = repositoryProducts.findById(productId).orElse(null);

        Set<Products> productsList = new HashSet<Products>();
        productsList.add(product);

        user.setRequestProducts(productsList);

    }

    @Override
    public void saveUsersBasketProduct(Long id, Long productId) {
        Users user = repositoryUser.findByUserId(id);

        Products product = repositoryProducts.findById(productId).orElse(null);

        Set<Products> productsList = new HashSet<Products>();
        productsList.add(product);

        user.setBasketProducts(productsList);
    }

    @Override
    public UserResponse getUserInfo(Long id) {

        Users user = repositoryUser.findByUserId(id);
        UserResponse userResponse = new UserResponse();

        if(user != null) {
            userResponse.setUser(user);
            userResponse.setProducts(user.getProducts());
            userResponse.setBasketProducts(user.getBasketProducts());
            userResponse.setRequestProducts(user.getRequestProducts());

            return userResponse;
        }

        return null;

    }

    @Override
    public UserResponse getUserInfoByEmail(String email) {

        Users user = repositoryUser.findByUserEmail(email);
        UserResponse userResponse = new UserResponse();

        if(user != null) {
            userResponse.setUser(user);
            userResponse.setProducts(user.getProducts());
            userResponse.setBasketProducts(user.getBasketProducts());
            userResponse.setRequestProducts(user.getRequestProducts());

            return userResponse;
        }

        return null;
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
        user.setUserPhone(request.getUserPhone());
        user.setUserPhoto(request.getUserPhoto());
        user.setUserProfileBack(request.getUserProfileBack());


        if (request.getProducts() != null) {

            user.getProducts().removeAll(user.getProducts());

            user.setProducts(request.getProducts());
        }


        if (request.getBasketProducts() != null) {

            user.getBasketProducts().removeAll(user.getBasketProducts());

            user.setBasketProducts(request.getBasketProducts());
        }

        repositoryUser.save(user);

    }

    @Override
    public ProfileResponse getProfileByEmail(String email) {

        Users user = repositoryUser.findByUserEmail(email);
        Companies company = repositoryCompany.findByCompanyEmail(email);

        ProfileResponse profileResponse = new ProfileResponse();

        if (user != null) {

            profileResponse.setBasketProductsCount(user.getBasketProducts().toArray().length);
            profileResponse.setName(user.getUserName());
            profileResponse.setUserId(user.getUserId());
            profileResponse.setUserEmail(user.getUserEmail());
            profileResponse.setPhoto(user.getUserPhoto());

        } else if (company != null) {

            profileResponse.setBasketProductsCount(company.getBasketProducts().toArray().length);
            profileResponse.setName(company.getCompanyName());
            profileResponse.setUserId(company.getCompanyId());
            profileResponse.setUserEmail(company.getCompanyEmail());
            profileResponse.setPhoto(company.getCompanyProfilePhoto());

        }

        return profileResponse;
    }

    @Override
    public Set<Users> getByUserName(String name) {
        return repositoryUser.getByUserName(name);
    }


}
