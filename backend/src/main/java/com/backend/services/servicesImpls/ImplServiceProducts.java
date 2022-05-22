package com.backend.services.servicesImpls;

import com.backend.dtos.request.AddProductRequest;
import com.backend.dtos.request.EvaluateProductRequest;
import com.backend.dtos.request.ProductReviewRequest;
import com.backend.dtos.request.ProductsFilterRequest;
import com.backend.dtos.response.ProductsListResponse;
import com.backend.pojos.*;
import com.backend.repositories.*;
import com.backend.repositories.options.*;
import com.backend.services.ServiceProducts;
import lombok.AllArgsConstructor;
import lombok.var;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.DecimalFormat;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@Service
@Transactional
@AllArgsConstructor
public class ImplServiceProducts implements ServiceProducts {

    private static final DecimalFormat df = new DecimalFormat("0.00");


    private final RepositoryProducts repositoryProducts;
    private final RepositoryUser repositoryUser;
    private final RepositoryCompany repositoryCompany;
    private final RepositoryProductReviews repositoryProductReviews;
    private final RepositoryDepartments repositoryDepartments;
    private final RepositorySubCategoriesTypes repositorySubCategoriesTypes;
    private final RepositoryCategory repositoryCategory;
    private final RepositoryBrands repositoryBrands;
    private final RepositoryModels repositoryModels;
    private final RepositoryApparelFabricType repositoryApparelFabricType;
    private final RepositoryApparelSizes repositoryApparelSizes;
    private final RepositoryAutomotiveCrash repositoryAutomotiveCrash;
    private final RepositoryAutomotiveDistanceTraveleds repositoryAutomotiveDistanceTraveleds;
    private final RepositoryAutomotiveEngine repositoryAutomotiveEngine;
    private final RepositoryAutomotiveFuel repositoryAutomotiveFuel;
    private final RepositoryAutomotiveMaxSpeed repositoryAutomotiveMaxSpeed;
    private final RepositoryAutomotiveSeat repositoryAutomotiveSeat;
    private final RepositoryAutomotiveType repositoryAutomotiveType;
    private final RepositoryElectronicsBattery repositoryElectronicsBattery;
    private final RepositoryElectronicsCamera repositoryElectronicsCamera;
    private final RepositoryElectronicsFrontCamera repositoryElectronicsFrontCamera;
    private final RepositoryElectronicsCellularTechnology repositoryElectronicsCellularTechnology;
    private final RepositoryElectronicsComputerType repositoryElectronicsComputerType;
    private final RepositoryElectronicsDisplayTypes repositoryElectronicsDisplayTypes;
    private final RepositoryElectronicsGraphicsCard repositoryElectronicsGraphicsCard;
    private final RepositoryElectronicsMemory repositoryElectronicsMemory;
    private final RepositoryElectronicsOperatingSystem repositoryElectronicsOperatingSystem;
    private final RepositoryElectronicsProcessor repositoryElectronicsProcessor;
    private final RepositoryElectronicsRam repositoryElectronicsRam;
    private final RepositoryElectronicsScreenSize repositoryElectronicsScreenSize;
    private final RepositoryMusicInstruments repositoryMusicInstruments;
    private final RepositoryProductColors repositoryProductColors;
    private final RepositoryElectronicsBatteryRange repositoryElectronicsBatteryRange;
    private final RepositoryAutomotiveDistanceTraveledsRange repositoryAutomotiveDistanceTraveledsRange;
    private final RepositoryElectronicsScreenSizeRange repositoryElectronicsScreenSizeRange;
    private final RepositorySubCategories repositorySubCategories;
    private final RepositoryProductPictures repositoryProductPictures;

    public Products getProductInfo(Long productId) {

        return repositoryProducts.findByProductId(productId);
    }

    @Override
    public Boolean productExistInBasketByAccountEmail(Long id, String email) {

        Products p = repositoryProducts.findById(id).orElse(null);

        if (repositoryUser.existsByUserEmail(email)) {
            return !p.getBasketUsers().stream().filter(user -> Objects.equals(user.getUserEmail(), email)).collect(Collectors.toList()).isEmpty();
        } else {
            return !p.getBasketCompanies().stream().filter(company -> Objects.equals(company.getCompanyEmail(), email)).collect(Collectors.toList()).isEmpty();
        }
    }

    @Override
    public void addBasketProduct(String email, Long productId) {

        String account = whichAccountExistByEmail(email);
        Products product = repositoryProducts.findById(productId).orElse(null);

        if (account.equals("user")) {
            Users user = repositoryUser.findByUserEmail(email);
            user.getBasketProducts().add(product);
        } else if (account.equals("company")) {
            Companies company = repositoryCompany.findByCompanyEmail(email);
            company.getBasketProducts().add(product);
        }
    }

    @Override
    @Async
    public void removeBasketProduct(String email, Long productId) {
        String account = whichAccountExistByEmail(email);
        Products product = repositoryProducts.findById(productId).orElse(null);

        if (account.equals("user")) {
            Users user = repositoryUser.findByUserEmail(email);
            user.getBasketProducts().remove(product);
        } else if (account.equals("company")) {
            Companies company = repositoryCompany.findByCompanyEmail(email);
            company.getBasketProducts().remove(product);
        }
    }

    @Override
    public Set<Products> getUserBasketProducts(String email) {

        Users user = repositoryUser.findByUserEmail(email);

        return user.getBasketProducts();
    }

    @Override
    public Set<Products> getCompanyBasketProducts(String email) {

        Companies company = repositoryCompany.findByCompanyEmail(email);

        return company.getBasketProducts();
    }

    @Override
    public String whichAccountExistByEmail(String email) {

        Boolean user = repositoryUser.existsByUserEmail(email);
        Boolean company = repositoryCompany.existsByCompanyEmail(email);

        if (user) {
            return "user";
        } else if (company) {
            return "company";
        } else {
            return null;
        }
    }

    @Override
    public List<Products> getProductsBySearchKeyword(String keyword) {

        return repositoryProducts.getProductsBySearchKeyword(keyword);
    }


    @Override
    public List<Products> getProductsByCategoryId(Long categoryId) {

        return repositoryProducts.getProductsByCategory(categoryId);

    }

    @Override
    public List<Products> getProductsByDepartmentId(Long departmentId) {
        return repositoryProducts.getProductsByDepartment(departmentId);
    }

    @Override
    public List<Products> getProductsFilter(ProductsFilterRequest productsFilterRequest) {

        List<Products> filteredProducts = new ArrayList<>();

        filteredProducts = null;

        if (productsFilterRequest.getProducts() != null){


        if (productsFilterRequest.getRating() != null) {
            filteredProducts = productsFilterRequest.getProducts().stream().filter(product -> Math.round(product.getRating() / product.getReviewCount()) == productsFilterRequest.getRating()).collect(Collectors.toList());
        }

        if (productsFilterRequest.getCondition() != null) {
            filteredProducts = productsFilterRequest.getProducts().stream().filter(product -> product.getProductStatus().equals(productsFilterRequest.getCondition())).collect(Collectors.toList());
        }

        if (productsFilterRequest.getWarranty() != null) {
            filteredProducts = productsFilterRequest.getProducts().stream().filter(product -> product.getProductWarranty() == productsFilterRequest.getWarranty()).collect(Collectors.toList());
        }

        if (productsFilterRequest.getDomestic() != null) {
            filteredProducts = productsFilterRequest.getProducts().stream().filter(product -> product.getProductDomesticShipping() == productsFilterRequest.getDomestic()).collect(Collectors.toList());
        }

        if (productsFilterRequest.getInternational() != null) {
            filteredProducts = productsFilterRequest.getProducts().stream().filter(product -> product.getProductInternationalShipping() == productsFilterRequest.getInternational()).collect(Collectors.toList());
        }

        if (productsFilterRequest.getYear() != null) {
            filteredProducts = productsFilterRequest.getProducts().stream().filter(product -> Objects.equals(product.getProductYear(), productsFilterRequest.getYear())).collect(Collectors.toList());
        }

        if (productsFilterRequest.getMinPrice() != null) {
            filteredProducts = productsFilterRequest.getProducts().stream().filter(product -> productsFilterRequest.getMinPrice() <= product.getProductPrice()).collect(Collectors.toList());
        }

        if (productsFilterRequest.getMaxPrice() != null) {
            filteredProducts = productsFilterRequest.getProducts().stream().filter(product -> product.getProductPrice() <= productsFilterRequest.getMaxPrice()).collect(Collectors.toList());
        }

        if (productsFilterRequest.getBrandId() != null) {
            filteredProducts = productsFilterRequest.getProducts().stream().filter(product -> Objects.equals(product.getProductBrand().getBrandId(), productsFilterRequest.getBrandId())).collect(Collectors.toList());
        }

        if (productsFilterRequest.getModelId() != null) {
            filteredProducts = productsFilterRequest.getProducts().stream().filter(product -> Objects.equals(product.getProductModel().getModelId(), productsFilterRequest.getBrandId())).collect(Collectors.toList());
        }


        if (productsFilterRequest.getOptions() != null) {

            if (!productsFilterRequest.getOptions().getApparelProductsColors().isEmpty()) {

                List<Products> filteredProductsApparelColors = new ArrayList<>();

                for (ProductsColors color : productsFilterRequest.getOptions().getApparelProductsColors()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (ProductsColors color2 : product.getApparelProductsColors()) {

                            if (color.getColorId().equals(color2.getColorId())) {

                                filteredProductsApparelColors.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsApparelColors;

            }


            if (!productsFilterRequest.getOptions().getApparelSizes().isEmpty()) {

                List<Products> filteredProductsApparelSizes = new ArrayList<>();

                for (ApparelSize size : productsFilterRequest.getOptions().getApparelSizes()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (ApparelSize size2 : product.getApparelSizes()) {

                            if (size.getSizeId().equals(size2.getSizeId())) {

                                filteredProductsApparelSizes.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsApparelSizes;

            }


            if (!productsFilterRequest.getOptions().getApparelFabricTypes().isEmpty()) {

                List<Products> filteredProductsApparelFabricTypes = new ArrayList<>();

                for (ApparelFabricType type : productsFilterRequest.getOptions().getApparelFabricTypes()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (ApparelFabricType type2 : product.getApparelFabricTypes()) {

                            if (type.getFabricTypeId().equals(type2.getFabricTypeId())) {

                                filteredProductsApparelFabricTypes.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsApparelFabricTypes;

            }


            if (!productsFilterRequest.getOptions().getAutomativeProductsColors().isEmpty()) {

                List<Products> filteredProductsAutomotiveProductColors = new ArrayList<>();

                for (ProductsColors color : productsFilterRequest.getOptions().getAutomativeProductsColors()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (ProductsColors color2 : product.getAutomativeProductsColors()) {

                            if (color.getColorId().equals(color2.getColorId())) {

                                filteredProductsAutomotiveProductColors.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsAutomotiveProductColors;

            }


            if (!productsFilterRequest.getOptions().getAutomotiveMaxSpeeds().isEmpty()) {

                List<Products> filteredProductsAutomotiveMaxSpeeds = new ArrayList<>();

                for (AutomotiveMaxSpeed speed : productsFilterRequest.getOptions().getAutomotiveMaxSpeeds()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (AutomotiveMaxSpeed speed2 : product.getAutomotiveMaxSpeeds()) {

                            if (speed.getMaxSpeedId().equals(speed2.getMaxSpeedId())) {

                                filteredProductsAutomotiveMaxSpeeds.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsAutomotiveMaxSpeeds;

            }


            if (!productsFilterRequest.getOptions().getAutomotiveFuels().isEmpty()) {

                List<Products> filteredProductsAutomotiveFuels = new ArrayList<>();

                for (AutomotiveFuel fuel : productsFilterRequest.getOptions().getAutomotiveFuels()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (AutomotiveFuel fuel2 : product.getAutomotiveFuels()) {

                            if (fuel.getFuelId().equals(fuel2.getFuelId())) {

                                filteredProductsAutomotiveFuels.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsAutomotiveFuels;
            }


            if (!productsFilterRequest.getOptions().getAutomotiveSeats().isEmpty()) {

                List<Products> filteredProductsAutomotiveSeats = new ArrayList<>();

                for (AutomotiveSeat seat : productsFilterRequest.getOptions().getAutomotiveSeats()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (AutomotiveSeat seat2 : product.getAutomotiveSeats()) {

                            if (seat.getSeatId().equals(seat2.getSeatId())) {

                                filteredProductsAutomotiveSeats.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsAutomotiveSeats;
            }


            if (!productsFilterRequest.getOptions().getAutomotiveTypes().isEmpty()) {

                List<Products> filteredProductsAutomotiveTypes = new ArrayList<>();

                for (AutomotiveType type : productsFilterRequest.getOptions().getAutomotiveTypes()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (AutomotiveType type2 : product.getAutomotiveTypes()) {

                            if (type.getTypeId().equals(type2.getTypeId())) {

                                filteredProductsAutomotiveTypes.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsAutomotiveTypes;
            }


            if (!productsFilterRequest.getOptions().getAutomotiveCrashes().isEmpty()) {

                List<Products> filteredProductsAutomotiveCrashes = new ArrayList<>();

                for (AutomotiveCrash crash : productsFilterRequest.getOptions().getAutomotiveCrashes()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (AutomotiveCrash crash2 : product.getAutomotiveCrashes()) {

                            if (crash.getCrashId().equals(crash2.getCrashId())) {

                                filteredProductsAutomotiveCrashes.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsAutomotiveCrashes;
            }


            if (!productsFilterRequest.getOptions().getAutomotiveDistanceTraveleds().isEmpty()) {

                List<Products> filteredProductsAutomotiveDistanceTraveleds = new ArrayList<>();

                for (AutomotiveDistanceTraveledRange traveledRange : productsFilterRequest.getOptions().getAutomotiveDistanceTraveleds()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (AutomotiveDistanceTraveled traveled2 : product.getAutomotiveDistanceTraveleds()) {

                            if (traveledRange.getDistanceTraveledRangeId().equals(traveled2.getDistanceTraveledRange().getDistanceTraveledRangeId())) {

                                filteredProductsAutomotiveDistanceTraveleds.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsAutomotiveDistanceTraveleds;
            }


            if (!productsFilterRequest.getOptions().getAutomotiveEngines().isEmpty()) {

                List<Products> filteredProductsAutomotiveEngines = new ArrayList<>();

                for (AutomotiveEngine engine : productsFilterRequest.getOptions().getAutomotiveEngines()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (AutomotiveEngine engine2 : product.getAutomotiveEngines()) {

                            if (engine.getEngineId().equals(engine2.getEngineId())) {

                                filteredProductsAutomotiveEngines.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsAutomotiveEngines;
            }


            if (!productsFilterRequest.getOptions().getElectronicsProductsColors().isEmpty()) {

                List<Products> filteredProductsElectronicsColors = new ArrayList<>();

                for (ProductsColors color : productsFilterRequest.getOptions().getElectronicsProductsColors()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (ProductsColors color2 : product.getElectronicsProductsColors()) {

                            if (color.getColorId().equals(color2.getColorId())) {

                                filteredProductsElectronicsColors.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsElectronicsColors;
            }


            if (!productsFilterRequest.getOptions().getElectronicsMemories().isEmpty()) {

                List<Products> filteredProductsElectronicsMemories = new ArrayList<>();

                for (ElectronicsMemory memory : productsFilterRequest.getOptions().getElectronicsMemories()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (ElectronicsMemory memory2 : product.getElectronicsMemories()) {

                            if (memory.getMemoryId().equals(memory2.getMemoryId())) {

                                filteredProductsElectronicsMemories.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsElectronicsMemories;
            }


            if (!productsFilterRequest.getOptions().getElectronicsCameras().isEmpty()) {

                List<Products> filteredProductsElectronicsCameras = new ArrayList<>();

                for (ElectronicsCamera camera : productsFilterRequest.getOptions().getElectronicsCameras()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (ElectronicsCamera camera2 : product.getElectronicsCameras()) {

                            if (camera.getCameraId().equals(camera2.getCameraId())) {

                                filteredProductsElectronicsCameras.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsElectronicsCameras;
            }


            if (!productsFilterRequest.getOptions().getElectronicsFrontCameras().isEmpty()) {

                List<Products> filteredProductsElectronicsFrontCameras = new ArrayList<>();

                for (ElectronicsFrontCamera camera : productsFilterRequest.getOptions().getElectronicsFrontCameras()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (ElectronicsFrontCamera camera2 : product.getElectronicsFrontCameras()) {

                            if (camera.getFrontCameraId().equals(camera2.getFrontCameraId())) {

                                filteredProductsElectronicsFrontCameras.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsElectronicsFrontCameras;
            }


            if (!productsFilterRequest.getOptions().getElectronicsOperatingSystems().isEmpty()) {

                List<Products> filteredProductsElectronicsOperatingSystems = new ArrayList<>();

                for (ElectronicsOperatingSystem operatingSystem : productsFilterRequest.getOptions().getElectronicsOperatingSystems()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (ElectronicsOperatingSystem operatingSystem2 : product.getElectronicsOperatingSystems()) {

                            if (operatingSystem.getOperatingSystemId().equals(operatingSystem2.getOperatingSystemId())) {

                                filteredProductsElectronicsOperatingSystems.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsElectronicsOperatingSystems;
            }


            if (!productsFilterRequest.getOptions().getElectronicsScreenSizes().isEmpty()) {

                List<Products> filteredProductsElectronicsScreenSizes = new ArrayList<>();

                for (ElectronicsScreenSizeRange screenSizeRange : productsFilterRequest.getOptions().getElectronicsScreenSizes()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (ElectronicsScreenSize screenSize2 : product.getElectronicsScreenSizes()) {

                            if (screenSizeRange.getScreenSizeRangeId().equals(screenSize2.getElectronicsScreenSizeRange().getScreenSizeRangeId())) {

                                filteredProductsElectronicsScreenSizes.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsElectronicsScreenSizes;
            }


            if (!productsFilterRequest.getOptions().getElectronicsDisplayTypes().isEmpty()) {

                List<Products> filteredProductsElectronicsDisplayType = new ArrayList<>();

                for (ElectronicsDisplayType displayType : productsFilterRequest.getOptions().getElectronicsDisplayTypes()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (ElectronicsDisplayType displayType2 : product.getElectronicsDisplayTypes()) {

                            if (displayType.getDisplayTypeId().equals(displayType2.getDisplayTypeId())) {

                                filteredProductsElectronicsDisplayType.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsElectronicsDisplayType;
            }


            if (!productsFilterRequest.getOptions().getElectronicsCellularTechnologies().isEmpty()) {

                List<Products> filteredProductsElectronicsCellularTechnologies = new ArrayList<>();

                for (ElectronicsCellularTechnology cellularTechnology : productsFilterRequest.getOptions().getElectronicsCellularTechnologies()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (ElectronicsCellularTechnology cellularTechnology2 : product.getElectronicsCellularTechnologies()) {

                            if (cellularTechnology.getCellularTechnologyId().equals(cellularTechnology2.getCellularTechnologyId())) {

                                filteredProductsElectronicsCellularTechnologies.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsElectronicsCellularTechnologies;
            }


            if (!productsFilterRequest.getOptions().getElectronicsBatteries().isEmpty()) {

                List<Products> filteredProductsElectronicsBatteries = new ArrayList<>();

                for (ElectronicsBatteryRange batteryRange : productsFilterRequest.getOptions().getElectronicsBatteries()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (ElectronicsBattery battery2 : product.getElectronicsBatteries()) {

                            if (batteryRange.getBatteryRangeId().equals(battery2.getElectronicsBatteryRange().getBatteryRangeId())) {

                                filteredProductsElectronicsBatteries.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsElectronicsBatteries;
            }


            if (!productsFilterRequest.getOptions().getElectronicsProcessors().isEmpty()) {

                List<Products> filteredProductsElectronicsProcessors = new ArrayList<>();

                for (ElectronicsProcessor processor : productsFilterRequest.getOptions().getElectronicsProcessors()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (ElectronicsProcessor processor2 : product.getElectronicsProcessors()) {

                            if (processor.getProcessorId().equals(processor2.getProcessorId())) {

                                filteredProductsElectronicsProcessors.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsElectronicsProcessors;
            }


            if (!productsFilterRequest.getOptions().getElectronicsRams().isEmpty()) {

                List<Products> filteredProductsElectronicsRams = new ArrayList<>();

                for (ElectronicsRam ram : productsFilterRequest.getOptions().getElectronicsRams()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (ElectronicsRam ram2 : product.getElectronicsRams()) {

                            if (ram.getRamId().equals(ram2.getRamId())) {

                                filteredProductsElectronicsRams.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsElectronicsRams;
            }


            if (!productsFilterRequest.getOptions().getElectronicsGraphicsCards().isEmpty()) {

                List<Products> filteredProductsElectronicsGraphicsCards = new ArrayList<>();

                for (ElectronicsGraphicsCard graphicsCard : productsFilterRequest.getOptions().getElectronicsGraphicsCards()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (ElectronicsGraphicsCard graphicsCard2 : product.getElectronicsGraphicsCards()) {

                            if (graphicsCard.getGraphicsCardId().equals(graphicsCard2.getGraphicsCardId())) {

                                filteredProductsElectronicsGraphicsCards.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsElectronicsGraphicsCards;
            }


            if (!productsFilterRequest.getOptions().getElectronicsComputerTypes().isEmpty()) {

                List<Products> filteredProductsElectronicsComputerTypes = new ArrayList<>();

                for (ElectronicsComputerType computerType : productsFilterRequest.getOptions().getElectronicsComputerTypes()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (ElectronicsComputerType computerType2 : product.getElectronicsComputerTypes()) {

                            if (computerType.getTypeId().equals(computerType2.getTypeId())) {

                                filteredProductsElectronicsComputerTypes.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsElectronicsComputerTypes;
            }


            if (!productsFilterRequest.getOptions().getMusicInstruments().isEmpty()) {

                List<Products> filteredProductsMusicInstruments = new ArrayList<>();

                for (MusicInstrument instrument : productsFilterRequest.getOptions().getMusicInstruments()) {

                    for (Products product : productsFilterRequest.getProducts()) {

                        for (MusicInstrument instrument2 : product.getMusicInstruments()) {

                            if (instrument.getInstrumentId().equals(instrument2.getInstrumentId())) {

                                filteredProductsMusicInstruments.add(product);
                            }

                        }
                    }
                }

                filteredProducts = filteredProductsMusicInstruments;
            }

        }

        if (Objects.equals(productsFilterRequest.getSortBy(), "Price: Low to High")){
            filteredProducts.sort((a, b) -> (int) (a.getProductPrice() - b.getProductPrice()));
        }

        if (Objects.equals(productsFilterRequest.getSortBy(), "Price: High to Low")){
            filteredProducts.sort((a, b) -> (int) (b.getProductPrice()  - a.getProductPrice()));
        }

        if (Objects.equals(productsFilterRequest.getSortBy(), "Avg: Customer review")){
            filteredProducts.sort((a, b) -> (int) (a.getRating()  - b.getRating()));
        }

        }


        return filteredProducts;
    }

    @Override
    public void productEvaluate(EvaluateProductRequest evaluateProductRequest) {

        Products product = repositoryProducts.findById(evaluateProductRequest.getProductId()).orElse(null);

        if (product != null) {

            ProductReviews productReview = new ProductReviews();
            productReview.setProduct(product);
            productReview.setReviewTitle(evaluateProductRequest.getReviewTitle());
            productReview.setReviewDescription(evaluateProductRequest.getReviewDescription());
            productReview.setReviewRating(evaluateProductRequest.getReviewRating());
            productReview.setReviewDate(evaluateProductRequest.getReviewDate());

            Long evaluatedCount = product.getReviewCount();

//            System.out.println("evaluatedCount --- " +evaluatedCount);

            Float rating = product.getRating();

//            System.out.println("rating --- " +rating);

            Float topRating = evaluatedCount * rating;

//            System.out.println("topRating --- " +topRating);

            Float myRating = (topRating + evaluateProductRequest.getReviewRating()) / (evaluatedCount + 1);

//            System.out.println("myRating --- " +myRating);

            product.setReviewCount(evaluatedCount + 1);
            product.setRating(myRating);

            repositoryProducts.save(product);

            if (evaluateProductRequest.getReviewPictures() != null) {

                List<ProductReviewPictures> pics = new ArrayList<ProductReviewPictures>();

                evaluateProductRequest.getReviewPictures()
                        .stream().filter(p -> !p.getPicturePath().equals(""))
                        .collect(Collectors.toSet()).forEach(pic -> {

                            pic.setReview(productReview);

                            pics.add(pic);
                        });

                productReview.setReviewPictures(pics);
            }

            if (product.getCompany() != null) {
                Companies c = repositoryCompany.findById(product.getCompany().getCompanyId()).orElse(null);
                c.setCompanyRatingsCount(c.getCompanyRatingsCount() + 1);
                c.setCompanyRating(c.getCompanyRating() + evaluateProductRequest.getReviewRating());
                repositoryCompany.save(c);
            } else {
                Users u = repositoryUser.findById(product.getUser().getUserId()).orElse(null);
                u.setUserRatingsCount(u.getUserRatingsCount() + 1);
                u.setUserRating(u.getUserRating() + evaluateProductRequest.getReviewRating());
                repositoryUser.save(u);
            }

            repositoryProductReviews.save(productReview);
        }
    }


    @Override
    public List<Products> getTopRequestProducts() {


        List<Products> listProducts = repositoryProducts.getTopRequestProducts();

        List<Products> filteredListProducts = new ArrayList<>();

        filteredListProducts = listProducts.stream().limit(5).collect(Collectors.toList());

        return filteredListProducts;
    }

    @Override
    public List<Products> getTopLikedProducts() {

        List<Products> listProducts = repositoryProducts.getTopLikedProducts();

        List<Products> filteredListProducts = new ArrayList<>();

        filteredListProducts = listProducts.stream().limit(5).collect(Collectors.toList());

        return filteredListProducts;
    }


    @Override
    public void addProduct(AddProductRequest addProductRequest) {


        Products product = new Products();
        product.setProductPrice(addProductRequest.getProductPrice());
        product.setProductOldPrice(addProductRequest.getProductOldPrice());
        product.setProductWeight(addProductRequest.getProductWeight());
        product.setProductShortDesc(addProductRequest.getProductShortDesc());
        product.setProductLongDesc(addProductRequest.getProductLongDesc());
        product.setProductStatus(addProductRequest.getProductStatus());
        product.setProductWarranty(addProductRequest.getProductWarranty());
        product.setProductDomesticShipping(addProductRequest.getProductDomesticShipping());
        product.setProductInternationalShipping(addProductRequest.getProductInternationalShipping());
        product.setProductYear(addProductRequest.getProductYear());
        product.setProductCurrency(addProductRequest.getProductCurrency());


        if (!addProductRequest.getProductsPictures().isEmpty()) {

            Set<ProductPictures> pics = new HashSet<ProductPictures>();

            addProductRequest.getProductsPictures()
                    .stream().filter(p -> !p.getPicturePath().equals(""))
                    .collect(Collectors.toSet()).forEach(pic -> {

                        pic.setProduct(product);

                        pics.add(pic);
                    });

            String coverPhoto = addProductRequest.getProductsPictures().stream().findFirst().get().getPicturePath();

            product.setCoverPhoto(coverPhoto);

            product.setProductsPictures(pics);
        }

        product.setProductQuantity(addProductRequest.getProductQuantity());
        product.setProductCreateDate(LocalDateTime.now());


        if (addProductRequest.getProductsJobOptions() != null) {
            product.setProductsJobOptions(addProductRequest.getProductsJobOptions());
        }

        if (addProductRequest.getProductsHomeOptions() != null) {
            product.setProductsHomeOptions(addProductRequest.getProductsHomeOptions());
        }


        if (addProductRequest.getProductDepartment().getDepartmentId() != 0) {
            product.setProductDepartment(repositoryDepartments.findById(addProductRequest.getProductDepartment().getDepartmentId()).orElse(null));
        }

        if (addProductRequest.getProductCategory().getCategoryId() != 0) {

            product.setProductCategory(repositoryCategory.findById(addProductRequest.getProductCategory().getCategoryId()).orElse(null));
        }
        if (addProductRequest.getProductBrand().getBrandId() != 0) {

            product.setProductBrand(repositoryBrands.findById(addProductRequest.getProductBrand().getBrandId()).orElse(null));
        }

        if (addProductRequest.getProductModel().getModelId() != 0) {
            product.setProductModel(repositoryModels.findById(addProductRequest.getProductModel().getModelId()).orElse(null));
        }


        if (addProductRequest.getProductsSubcategoriesType() != null) {
            product.setProductsSubcategoriesType(repositorySubCategoriesTypes.findById(addProductRequest.getProductsSubcategoriesType().getSubCategoryTypeId()).orElse(null));
        }

        if (addProductRequest.getProductsSubcategories() != null) {
            product.setProductsSubcategories(repositorySubCategories.findById(addProductRequest.getProductsSubcategories().getSubCategoryId()).orElse(null));
        }

        if (addProductRequest.getApparelProductsColors() != null) {

            Set<ProductsColors> productsColorsSet = new HashSet<>();

            for (ProductsColors pc : addProductRequest.getApparelProductsColors()) {

                repositoryProductColors.findById(pc.getColorId()).ifPresent(productsColorsSet::add);
            }

            product.setApparelProductsColors(productsColorsSet);
        }


        if (addProductRequest.getApparelSizes() != null) {

            Set<ApparelSize> productsApparelSizeSet = new HashSet<>();

            for (ApparelSize as : addProductRequest.getApparelSizes()) {

                repositoryApparelSizes.findById(as.getSizeId()).ifPresent(productsApparelSizeSet::add);
            }

            product.setApparelSizes(productsApparelSizeSet);
        }

        if (addProductRequest.getApparelFabricTypes() != null) {

            Set<ApparelFabricType> productsApparelFabricTypeSet = new HashSet<>();

            for (ApparelFabricType aft : addProductRequest.getApparelFabricTypes()) {

                repositoryApparelFabricType.findById(aft.getFabricTypeId())
                        .ifPresent(productsApparelFabricTypeSet::add);
            }

            product.setApparelFabricTypes(productsApparelFabricTypeSet);
        }


        if (addProductRequest.getAutomotiveProductsColors() != null) {

            Set<ProductsColors> productsAutomotiveProductsColorsSet = new HashSet<>();

            for (ProductsColors pc : addProductRequest.getAutomotiveProductsColors()) {

                repositoryProductColors.findById(pc.getColorId())
                        .ifPresent(productsAutomotiveProductsColorsSet::add);
            }

            product.setAutomativeProductsColors(productsAutomotiveProductsColorsSet);

        }


        if (addProductRequest.getAutomotiveMaxSpeeds() != null) {

            Set<AutomotiveMaxSpeed> OptionSet = new HashSet<>();

            for (AutomotiveMaxSpeed ams : addProductRequest.getAutomotiveMaxSpeeds()) {

                repositoryAutomotiveMaxSpeed.findById(ams.getMaxSpeedId())
                        .ifPresent(OptionSet::add);
            }

            product.setAutomotiveMaxSpeeds(OptionSet);

        }


        if (addProductRequest.getAutomotiveFuels() != null) {

            Set<AutomotiveFuel> OptionSet = new HashSet<>();

            for (AutomotiveFuel o : addProductRequest.getAutomotiveFuels()) {

                repositoryAutomotiveFuel.findById(o.getFuelId())
                        .ifPresent(OptionSet::add);
            }

            product.setAutomotiveFuels(OptionSet);
        }


        if (addProductRequest.getAutomotiveSeats() != null) {

            Set<AutomotiveSeat> OptionSet = new HashSet<>();

            for (AutomotiveSeat o : addProductRequest.getAutomotiveSeats()) {

                repositoryAutomotiveSeat.findById(o.getSeatId())
                        .ifPresent(OptionSet::add);
            }

            product.setAutomotiveSeats(OptionSet);
        }


        if (addProductRequest.getAutomotiveTypes() != null) {

            Set<AutomotiveType> OptionSet = new HashSet<>();

            for (AutomotiveType o : addProductRequest.getAutomotiveTypes()) {

                repositoryAutomotiveType.findById(o.getTypeId())
                        .ifPresent(OptionSet::add);
            }

            product.setAutomotiveTypes(OptionSet);
        }


        if (addProductRequest.getAutomotiveCrashes() != null) {

            Set<AutomotiveCrash> OptionSet = new HashSet<>();

            for (AutomotiveCrash o : addProductRequest.getAutomotiveCrashes()) {

                repositoryAutomotiveCrash.findById(o.getCrashId())
                        .ifPresent(OptionSet::add);
            }

            product.setAutomotiveCrashes(OptionSet);
        }


        if (addProductRequest.getAutomotiveDistanceTraveleds() != null) {

            Set<AutomotiveDistanceTraveled> OptionSet = new HashSet<>();

            for (AutomotiveDistanceTraveled o : addProductRequest.getAutomotiveDistanceTraveleds()) {

                List<AutomotiveDistanceTraveledRange> aDTR = repositoryAutomotiveDistanceTraveledsRange.getDistanceTraveledRangeWithCategory(addProductRequest.getProductCategory().getCategoryId());

                if (o.getDistanceTraveled() > -1 && o.getDistanceTraveled() <= 30000) {
                    o.setDistanceTraveledRange(aDTR.get(0));
                } else if (o.getDistanceTraveled() > 30000 && o.getDistanceTraveled() <= 50000) {
                    o.setDistanceTraveledRange(aDTR.get(1));
                } else if (o.getDistanceTraveled() > 50000 && o.getDistanceTraveled() <= 80000) {
                    o.setDistanceTraveledRange(aDTR.get(2));
                } else if (o.getDistanceTraveled() > 80000 && o.getDistanceTraveled() <= 100000) {
                    o.setDistanceTraveledRange(aDTR.get(3));
                } else if (o.getDistanceTraveled() > 100000 && o.getDistanceTraveled() <= 130000) {
                    o.setDistanceTraveledRange(aDTR.get(4));
                } else if (o.getDistanceTraveled() > 130000 && o.getDistanceTraveled() <= 150000) {
                    o.setDistanceTraveledRange(aDTR.get(5));
                } else if (o.getDistanceTraveled() > 150000 && o.getDistanceTraveled() <= 180000) {
                    o.setDistanceTraveledRange(aDTR.get(6));
                } else if (o.getDistanceTraveled() > 180000 && o.getDistanceTraveled() <= 200000) {
                    o.setDistanceTraveledRange(aDTR.get(7));
                } else {
                    o.setDistanceTraveledRange(aDTR.get(8));
                }

                o.setProduct(product);
                repositoryAutomotiveDistanceTraveleds.save(o);
                OptionSet.add(o);
            }
            product.setAutomotiveDistanceTraveleds(OptionSet);
        }


        if (addProductRequest.getAutomotiveEngines() != null) {

            Set<AutomotiveEngine> OptionSet = new HashSet<>();

            for (AutomotiveEngine o : addProductRequest.getAutomotiveEngines()) {

                repositoryAutomotiveEngine.findById(o.getEngineId())
                        .ifPresent(OptionSet::add);
            }

            product.setAutomotiveEngines(OptionSet);
        }


        if (addProductRequest.getElectronicsProductsColors() != null) {

            Set<ProductsColors> OptionSet = new HashSet<>();

            for (ProductsColors o : addProductRequest.getElectronicsProductsColors()) {

                repositoryProductColors.findById(o.getColorId())
                        .ifPresent(OptionSet::add);
            }

            product.setElectronicsProductsColors(OptionSet);
        }


        if (addProductRequest.getElectronicsMemories() != null) {

            Set<ElectronicsMemory> OptionSet = new HashSet<>();

            for (ElectronicsMemory o : addProductRequest.getElectronicsMemories()) {

                repositoryElectronicsMemory.findById(o.getMemoryId())
                        .ifPresent(OptionSet::add);
            }

            product.setElectronicsMemories(OptionSet);
        }


        if (addProductRequest.getElectronicsCameras() != null) {

            Set<ElectronicsCamera> OptionSet = new HashSet<>();

            for (ElectronicsCamera o : addProductRequest.getElectronicsCameras()) {

                repositoryElectronicsCamera.findById(o.getCameraId())
                        .ifPresent(OptionSet::add);
            }

            product.setElectronicsCameras(OptionSet);
        }


        if (addProductRequest.getElectronicsFrontCameras() != null) {

            Set<ElectronicsFrontCamera> OptionSet = new HashSet<>();

            for (ElectronicsFrontCamera o : addProductRequest.getElectronicsFrontCameras()) {

                repositoryElectronicsFrontCamera.findById(o.getFrontCameraId())
                        .ifPresent(OptionSet::add);
            }

            product.setElectronicsFrontCameras(OptionSet);
        }


        if (addProductRequest.getElectronicsOperatingSystems() != null) {

            Set<ElectronicsOperatingSystem> OptionSet = new HashSet<>();

            for (ElectronicsOperatingSystem o : addProductRequest.getElectronicsOperatingSystems()) {

                repositoryElectronicsOperatingSystem.findById(o.getOperatingSystemId())
                        .ifPresent(OptionSet::add);
            }

            product.setElectronicsOperatingSystems(OptionSet);
        }

        if (addProductRequest.getElectronicsDisplayTypes() != null) {

            Set<ElectronicsDisplayType> OptionSet = new HashSet<>();

            for (ElectronicsDisplayType o : addProductRequest.getElectronicsDisplayTypes()) {

                repositoryElectronicsDisplayTypes.findById(o.getDisplayTypeId())
                        .ifPresent(OptionSet::add);
            }

            product.setElectronicsDisplayTypes(OptionSet);
        }


        if (addProductRequest.getElectronicsCellularTechnologies() != null) {

            Set<ElectronicsCellularTechnology> OptionSet = new HashSet<>();

            for (ElectronicsCellularTechnology o : addProductRequest.getElectronicsCellularTechnologies()) {

                repositoryElectronicsCellularTechnology.findById(o.getCellularTechnologyId())
                        .ifPresent(OptionSet::add);
            }

            product.setElectronicsCellularTechnologies(OptionSet);
        }


        if (addProductRequest.getElectronicsScreenSizes() != null) {

            Set<ElectronicsScreenSize> OptionSet = new HashSet<>();

            for (ElectronicsScreenSize o : addProductRequest.getElectronicsScreenSizes()) {

                List<ElectronicsScreenSizeRange> aDTR = repositoryElectronicsScreenSizeRange.getElectronicsScreenSizeRangesByCategoryId(addProductRequest.getProductCategory().getCategoryId());

                if (addProductRequest.getProductCategory().getCategoryId() == 87 || addProductRequest.getProductCategory().getCategoryId() == 94) {
                    if (o.getScreenSize() <= 4) {
                        o.setElectronicsScreenSizeRange(aDTR.get(0));
                    } else if (o.getScreenSize() > 4 && o.getScreenSize() <= 4.9) {
                        o.setElectronicsScreenSizeRange(aDTR.get(1));
                    } else if (o.getScreenSize() > 4.9 && o.getScreenSize() <= 5.9) {
                        o.setElectronicsScreenSizeRange(aDTR.get(2));
                    } else if (o.getScreenSize() > 5.9) {
                        o.setElectronicsScreenSizeRange(aDTR.get(3));
                    }
                } else {

                    if (o.getScreenSize() <= 4) {
                        o.setElectronicsScreenSizeRange(aDTR.get(0));
                    } else if (o.getScreenSize() > 4 && o.getScreenSize() <= 4.9) {
                        o.setElectronicsScreenSizeRange(aDTR.get(1));
                    } else if (o.getScreenSize() > 4.9 && o.getScreenSize() <= 5.9) {
                        o.setElectronicsScreenSizeRange(aDTR.get(2));
                    } else if (o.getScreenSize() > 5.9 && o.getScreenSize() <= 6.9) {
                        o.setElectronicsScreenSizeRange(aDTR.get(3));
                    } else if (o.getScreenSize() > 6.9 && o.getScreenSize() <= 7.9) {
                        o.setElectronicsScreenSizeRange(aDTR.get(4));
                    } else if (o.getScreenSize() > 7.9 && o.getScreenSize() <= 8.9) {
                        o.setElectronicsScreenSizeRange(aDTR.get(5));
                    } else if (o.getScreenSize() > 8.9 && o.getScreenSize() <= 9.9) {
                        o.setElectronicsScreenSizeRange(aDTR.get(6));
                    } else if (o.getScreenSize() > 9.9 && o.getScreenSize() <= 10.9) {
                        o.setElectronicsScreenSizeRange(aDTR.get(7));
                    } else if (o.getScreenSize() > 10.9 && o.getScreenSize() <= 11.9) {
                        o.setElectronicsScreenSizeRange(aDTR.get(8));
                    } else if (o.getScreenSize() > 11.9 && o.getScreenSize() <= 12.9) {
                        o.setElectronicsScreenSizeRange(aDTR.get(9));
                    } else if (o.getScreenSize() > 12.9 && o.getScreenSize() <= 13.9) {
                        o.setElectronicsScreenSizeRange(aDTR.get(10));
                    } else if (o.getScreenSize() > 13.9 && o.getScreenSize() <= 14.9) {
                        o.setElectronicsScreenSizeRange(aDTR.get(11));
                    } else if (o.getScreenSize() > 14.9 && o.getScreenSize() <= 15.9) {
                        o.setElectronicsScreenSizeRange(aDTR.get(12));
                    } else if (o.getScreenSize() > 15.9 && o.getScreenSize() <= 16.9) {
                        o.setElectronicsScreenSizeRange(aDTR.get(13));
                    } else {
                        o.setElectronicsScreenSizeRange(aDTR.get(14));
                    }
                }
                o.setProduct(product);
                repositoryElectronicsScreenSize.save(o);
                OptionSet.add(o);

            }

            product.setElectronicsScreenSizes(OptionSet);
        }


        if (addProductRequest.getElectronicsBatteries() != null) {

            Set<ElectronicsBattery> OptionSet = new HashSet<>();

            for (ElectronicsBattery o : addProductRequest.getElectronicsBatteries()) {

                List<ElectronicsBatteryRange> aDTR = repositoryElectronicsBatteryRange.getElectronicsBatteryRangesByCategoryId(addProductRequest.getProductCategory().getCategoryId());

                if (o.getBattery() > -1 && o.getBattery() <= 500) {
                    o.setElectronicsBatteryRange(aDTR.get(0));
                } else if (o.getBattery() > 500 && o.getBattery() <= 1000) {
                    o.setElectronicsBatteryRange(aDTR.get(1));
                } else if (o.getBattery() > 1000 && o.getBattery() <= 1500) {
                    o.setElectronicsBatteryRange(aDTR.get(2));
                } else if (o.getBattery() > 1500 && o.getBattery() <= 2000) {
                    o.setElectronicsBatteryRange(aDTR.get(3));
                } else if (o.getBattery() > 2000 && o.getBattery() <= 2500) {
                    o.setElectronicsBatteryRange(aDTR.get(4));
                } else if (o.getBattery() > 2500 && o.getBattery() <= 3000) {
                    o.setElectronicsBatteryRange(aDTR.get(5));
                } else if (o.getBattery() > 3000 && o.getBattery() <= 3500) {
                    o.setElectronicsBatteryRange(aDTR.get(6));
                } else if (o.getBattery() > 3500 && o.getBattery() <= 4000) {
                    o.setElectronicsBatteryRange(aDTR.get(7));
                } else if (o.getBattery() > 4000 && o.getBattery() <= 4500) {
                    o.setElectronicsBatteryRange(aDTR.get(8));
                } else if (o.getBattery() > 4500 && o.getBattery() <= 5000) {
                    o.setElectronicsBatteryRange(aDTR.get(9));
                } else if (o.getBattery() > 5000 && o.getBattery() <= 5500) {
                    o.setElectronicsBatteryRange(aDTR.get(10));
                } else if (o.getBattery() > 5500 && o.getBattery() <= 6000) {
                    o.setElectronicsBatteryRange(aDTR.get(11));
                } else {
                    o.setElectronicsBatteryRange(aDTR.get(12));
                }

                o.setProduct(product);
                repositoryElectronicsBattery.save(o);
                OptionSet.add(o);
            }

            product.setElectronicsBatteries(OptionSet);
        }


        if (addProductRequest.getElectronicsProcessors() != null) {

            Set<ElectronicsProcessor> OptionSet = new HashSet<>();

            for (ElectronicsProcessor o : addProductRequest.getElectronicsProcessors()) {

                repositoryElectronicsProcessor.findById(o.getProcessorId())
                        .ifPresent(OptionSet::add);
            }

            product.setElectronicsProcessors(OptionSet);
        }


        if (addProductRequest.getElectronicsRams() != null) {

            Set<ElectronicsRam> OptionSet = new HashSet<>();

            for (ElectronicsRam o : addProductRequest.getElectronicsRams()) {

                repositoryElectronicsRam.findById(o.getRamId())
                        .ifPresent(OptionSet::add);
            }

            product.setElectronicsRams(OptionSet);
        }


        if (addProductRequest.getElectronicsGraphicsCards() != null) {

            Set<ElectronicsGraphicsCard> OptionSet = new HashSet<>();

            for (ElectronicsGraphicsCard o : addProductRequest.getElectronicsGraphicsCards()) {

                repositoryElectronicsGraphicsCard.findById(o.getGraphicsCardId())
                        .ifPresent(OptionSet::add);
            }

            product.setElectronicsGraphicsCards(OptionSet);
        }


        if (addProductRequest.getElectronicsComputerTypes() != null) {

            Set<ElectronicsComputerType> OptionSet = new HashSet<>();

            for (ElectronicsComputerType o : addProductRequest.getElectronicsComputerTypes()) {

                repositoryElectronicsComputerType.findById(o.getTypeId())
                        .ifPresent(OptionSet::add);
            }

            product.setElectronicsComputerTypes(OptionSet);
        }


        if (addProductRequest.getMusicInstruments() != null) {

            Set<MusicInstrument> OptionSet = new HashSet<>();

            for (MusicInstrument o : addProductRequest.getMusicInstruments()) {

                repositoryMusicInstruments.findById(o.getInstrumentId())
                        .ifPresent(OptionSet::add);
            }

            product.setMusicInstruments(OptionSet);
        }

        if (addProductRequest.getAccountEmail() != null) {

            Users user = repositoryUser.findByUserEmail(addProductRequest.getAccountEmail());

            Companies company = repositoryCompany.findByCompanyEmail(addProductRequest.getAccountEmail());

            if (user != null) {

                Set<Products> products = new HashSet<Products>();
                products.add(product);

                user.setProducts(products);

                product.setUser(user);

//            repositoryUser.save(user);

            } else if (company != null) {

                Set<Products> products = new HashSet<Products>();
                products.add(product);

                company.setProducts(products);

                product.setCompany(company);

//            repositoryCompany.save(company);
            }

        }

        repositoryProducts.save(product);
    }

    @Override
    public Set<Products> getUserProductsInStock(String email) {

        Users user = repositoryUser.findByUserEmail(email);

        return user.getProducts();
    }

    @Override
    public Set<Products> getCompanyProductsInStock(String email) {

        Companies company = repositoryCompany.findByCompanyEmail(email);

        return company.getProducts();
    }

    @Override
    @Async
    public void removeProductById(Long id) {
        repositoryProducts.deleteById(id);
    }

}
