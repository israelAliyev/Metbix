package com.backend;

import com.backend.dtos.request.AddProductRequest;
import com.backend.pojos.Companies;
import com.backend.pojos.CompaniesDetailsImagesAndVideo;
import com.backend.pojos.CompaniesDetailsProductionCertifications;
import com.backend.pojos.Products;
import com.backend.repositories.RepositoryCompany;
import com.backend.repositories.RepositoryProducts;
import com.backend.services.ServiceProducts;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.HashSet;
import java.util.Set;

@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
@SpringBootTest(
        webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT,
        classes = BackendApplication.class
)
    @TestPropertySource(locations = "classpath:application.properties")
class BackendApplicationTests {

    //    private final ServiceProducts serviceProducts;
    @Autowired
    private RepositoryProducts repositoryProducts;


    @Autowired
    private ServiceProducts serviceProducts;

    @Autowired
    private RepositoryCompany repositoryCompany;


    @Test
    public void testBackend() {

        Products p = this.repositoryProducts.findById(43L).orElse(null);
        System.out.println(p.getProductPrice());

    }

    @Test
    public void testRegisterCompany() {

        Companies c = new Companies();

        c.setCompanyName("sdgfds");
        c.setCompanyPassword("sdgfds");
        c.setCompanyEmail("asfdafds");

        Set<CompaniesDetailsImagesAndVideo> photos = new HashSet<CompaniesDetailsImagesAndVideo>();

        CompaniesDetailsImagesAndVideo cd = new CompaniesDetailsImagesAndVideo();
        cd.setCompanyDetailImageMedia("dsfsfsdf");

        CompaniesDetailsImagesAndVideo cd2 = new CompaniesDetailsImagesAndVideo();
        cd2.setCompanyDetailImageMedia("xcxvxvxv");

        CompaniesDetailsImagesAndVideo cd3 = new CompaniesDetailsImagesAndVideo();
        cd3.setCompanyDetailImageMedia("qweqqeq");

        CompaniesDetailsImagesAndVideo cd4 = new CompaniesDetailsImagesAndVideo();
        cd4.setCompanyDetailImageMedia("ipoipoi");

        cd.setCompany(c);
        cd2.setCompany(c);
        cd3.setCompany(c);
        cd4.setCompany(c);

        photos.add(cd);
        photos.add(cd2);
        photos.add(cd3);
        photos.add(cd4);

        c.setCompaniesDetailsImagesAndVideos(photos);

        Set<CompaniesDetailsProductionCertifications> certifications = new HashSet<CompaniesDetailsProductionCertifications>();

        CompaniesDetailsProductionCertifications cp = new CompaniesDetailsProductionCertifications();
        cp.setCertificateName("DSfs");


        CompaniesDetailsProductionCertifications cp2 = new CompaniesDetailsProductionCertifications();
        cp2.setCertificateName("sdfdsf");


        CompaniesDetailsProductionCertifications cp3 = new CompaniesDetailsProductionCertifications();
        cp3.setCertificateName("12312");


        CompaniesDetailsProductionCertifications cp4 = new CompaniesDetailsProductionCertifications();
        cp4.setCertificateName("ipoiup");

        cp.setCompany(c);
        cp2.setCompany(c);
        cp3.setCompany(c);
        cp4.setCompany(c);

        certifications.add(cp);
        certifications.add(cp2);
        certifications.add(cp3);
        certifications.add(cp4);

        c.setCompaniesDetailsProductionCertifications(certifications);

        repositoryCompany.save(c);


    }


    @Test
    public void testAddProduct() {

        AddProductRequest add = new AddProductRequest();

        add.setProductCurrency("Sdfs");

        serviceProducts.addProduct(add);

    }


}
