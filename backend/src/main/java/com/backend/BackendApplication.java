package com.backend;


import com.backend.pojos.Products;
import com.backend.repositories.RepositoryProducts;
import com.backend.services.servicesImpls.ImplServiceProducts;
import lombok.AllArgsConstructor;
import lombok.var;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableAsync;


@SpringBootApplication
@EnableCaching
//@AllArgsConstructor
@EnableAsync
public class BackendApplication implements CommandLineRunner {

//   private final RepositoryProducts repositoryProducts;
//    private final ImplServiceProducts implServiceProducts;


    public static void main(String[] args) {

        SpringApplication.run(BackendApplication.class, args);

    }

    @Override
    public void run(String... args) throws Exception {



        }
}
