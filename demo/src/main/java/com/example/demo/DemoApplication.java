package com.example.demo;

import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@SpringBootApplication
@AllArgsConstructor
public class DemoApplication implements CommandLineRunner {

//    private final RepositoryProducts repositoryProducts;
//    private final ProductColorsRepository productColorsRepository;
//    private final RepositoryPictures repositoryPictures;

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

//        ProductsColors p = productColorsRepository.findById(1).orElse(null);
//        ProductsColors p2 = productColorsRepository.findById(2).orElse(null);
//
//
//
//
//        List<ProductsColors> productsColors = new ArrayList<>();
//        productsColors.add(p);
//        productsColors.add(p2);
//
//
//        Products product = new Products();
//        product.setProductPrice(565.234F);
//        product.setApparelProductsColors(productsColors);
//
////        ProductsPictures productsPictures = new ProductsPictures();
////        productsPictures.setPicturePath("123");
////        productsPictures.setProduct(product);
////
////        ProductsPictures productsPictures2 = new ProductsPictures();
////        productsPictures2.setPicturePath("456");
////        productsPictures2.setProduct(product);
////
////
////
////        product.setProductsPictures(Arrays.asList(productsPictures , productsPictures2));
//
//
//        repositoryProducts.save(product);






    }
}
