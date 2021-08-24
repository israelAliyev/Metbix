package com.backend.services.servicesImpls;

import com.backend.dtos.AddProductRequest;
import com.backend.dtos.ProductReviewRequest;
import com.backend.pojos.*;
import com.backend.repositories.*;
import com.backend.repositories.options.*;
import com.backend.services.ServiceProducts;
import lombok.AllArgsConstructor;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.relational.core.sql.In;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Transactional
@AllArgsConstructor
public class ImplServiceProducts implements ServiceProducts {


    private final RepositoryProducts repositoryProducts;
    private final RepositoryUser repositoryUser;
    private final RepositoryCompany repositoryCompany;
    private final RepositoryProductReviews repositoryProductReviews;
    private final RepositoryDepartments repositoryDepartments;
    private final RepositoryCategory repositoryCategory;
    private final RepositoryBrands repositoryBrands;
    private final RepositoryModels repositoryModels;
    private final RepositoryApparelFabricType repositoryApparelFabricType;
    private final RepositoryApparelGenderAgeRange repositoryApparelGenderAgeRange;
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
    private final RepositoryElectronicsWirelessCarrier repositoryElectronicsWirelessCarrier;
    private final RepositoryMusicInstruments repositoryMusicInstruments;
    private final RepositoryProductColors repositoryProductColors;



    public Products getProductInfo(Long productId) {

        return repositoryProducts.findByProductId(productId);
    }




    @Override
    public List<Products> getProductsWithSearchingFilter(String keyword, Integer review, String status, Boolean warranty, Boolean domestic, Boolean international, Integer year, Integer minPrice, Integer maxPrice, Pageable pageable) {

        List<Products> filteredProductsList = new ArrayList<>();

        List<Products> productsList = repositoryProducts.getProductsWithSearching(keyword, pageable);


        filteredProductsList = productsList.stream().filter(product ->

                product.getProductRating().equals(review) &&
                        product.getProductStatus().equals(status) &&
                        product.getProductWarranty().equals(warranty) &&
                        product.getProductDomesticShipping().equals(domestic) &&
                        product.getProductInternationalShipping().equals(international) &&
                        product.getProductYear().equals(year) &&
                        product.getProductPrice() > minPrice &&
                        product.getProductPrice() < maxPrice


        ).collect(Collectors.toList());

        productsList = filteredProductsList;

        return productsList;
    }


    @Override
    public List<Products> getProductsWithCategoryFilter(String category, Integer review,
                                                        String status, Boolean warranty,
                                                        Boolean domestic, Boolean international,
                                                        Integer year, Integer minPrice,
                                                        Integer maxPrice, String brand,
                                                        String model,
                                                        Set<ProductsColors> apparelProductsColors,
                                                        Set<ApparelGenderAgeRange> apparelGenderAgeRanges,
                                                        Set<ApparelSize> apparelSizes,
                                                        Set<ApparelFabricType> apparelFabricTypes,
                                                        Set<ProductsColors> automativeProductsColors,
                                                        Set<AutomotiveMaxSpeed> automotiveMaxSpeeds,
                                                        Set<AutomotiveFuel> automotiveFuels,
                                                        Set<AutomotiveSeat> automotiveSeats,
                                                        Set<AutomotiveType> automotiveTypes,
                                                        Set<AutomotiveCrash> automotiveCrashes,
                                                        Set<AutomotiveDistanceTraveled> automotiveDistanceTraveleds,
                                                        Set<AutomotiveEngine> automotiveEngines,
                                                        Set<ProductsColors> electronicsProductsColors,
                                                        Set<ElectronicsMemory> electronicsMemories,
                                                        Set<ElectronicsCamera> electronicsCameras,
                                                        Set<ElectronicsFrontCamera> electronicsFrontCameras,
                                                        Set<ElectronicsWirelessCarrier> electronicsWirelessCarriers,
                                                        Set<ElectronicsOperatingSystem> electronicsOperatingSystems,
                                                        Set<ElectronicsScreenSize> electronicsScreenSizes,
                                                        Set<ElectronicsDisplayType> electronicsDisplayTypes,
                                                        Set<ElectronicsCellularTechnology> electronicsCellularTechnologies,
                                                        Set<ElectronicsBattery> electronicsBatteries,
                                                        Set<ElectronicsProcessor> electronicsProcessors,
                                                        Set<ElectronicsRam> electronicsRams,
                                                        Set<ElectronicsGraphicsCard> electronicsGraphicsCards,
                                                        Set<ElectronicsComputerType> electronicsComputerTypes,
                                                        Set<MusicInstrument> musicInstruments, Pageable pageable) {

        List<Products> productsList = repositoryProducts.getProductsWithCategory(category, pageable);


        if (!category.isEmpty() || !(review == null) || !(status == null) ||
                !(warranty == null) || !(domestic == null) || !(international == null) ||
                !(year == null) || !(minPrice == null) || !(maxPrice == null) ||
                !(brand == null) || !(model == null) || !apparelProductsColors.isEmpty() ||
                !apparelGenderAgeRanges.isEmpty() || !apparelSizes.isEmpty() ||
                !apparelFabricTypes.isEmpty() || !automativeProductsColors.isEmpty() ||
                !automotiveMaxSpeeds.isEmpty() || !automotiveFuels.isEmpty() ||
                !automotiveSeats.isEmpty() || !automotiveTypes.isEmpty() ||
                !automotiveCrashes.isEmpty() || !automotiveDistanceTraveleds.isEmpty() ||
                !automotiveEngines.isEmpty() || !electronicsProductsColors.isEmpty() ||
                !electronicsMemories.isEmpty() || !electronicsCameras.isEmpty() ||
                !electronicsFrontCameras.isEmpty() || !electronicsWirelessCarriers.isEmpty() ||
                !electronicsOperatingSystems.isEmpty() || !electronicsScreenSizes.isEmpty() ||
                !electronicsDisplayTypes.isEmpty() || !electronicsCellularTechnologies.isEmpty() ||
                !electronicsBatteries.isEmpty() || !electronicsProcessors.isEmpty() ||
                !electronicsRams.isEmpty() || !electronicsGraphicsCards.isEmpty() ||
                !electronicsComputerTypes.isEmpty() || !musicInstruments.isEmpty()) {

            if (!(review == null) || !(status == null) ||
                    !(warranty == null) || !(domestic == null) || !(international == null) ||
                    !(year == null) || !(minPrice == null) || !(maxPrice == null) ||
                    !(brand == null) || !(model == null)) {

                List<Products> filteredProductsOptions = new ArrayList<>();

                filteredProductsOptions = productsList.stream().filter(product ->

                        product.getProductRating().equals(review) &&
                                product.getProductStatus().equals(status) &&
                                product.getProductWarranty().equals(warranty) &&
                                product.getProductDomesticShipping().equals(domestic) &&
                                product.getProductInternationalShipping().equals(international) &&
                                product.getProductYear().equals(year) &&
                                product.getProductPrice() > minPrice &&
                                product.getProductPrice() < maxPrice &&
                                product.getProductBrand().getBrandName().equals(brand) &&
                                product.getProductModel().getModelName().equals(model)

                ).collect(Collectors.toList());

                productsList = filteredProductsOptions;

            }


            if (!apparelProductsColors.isEmpty()) {

                List<Products> filteredProductsApparelColors = new ArrayList<>();

                for (ProductsColors color : apparelProductsColors) {

                    for (Products product : productsList) {

                        for (ProductsColors color2 : product.getApparelProductsColors()) {

                            if (color.getColorId().equals(color2.getColorId())) {

                                filteredProductsApparelColors.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsApparelColors;

            }


            if (!apparelGenderAgeRanges.isEmpty()) {

                List<Products> filteredProductsGenderAgeRanges = new ArrayList<>();

                for (ApparelGenderAgeRange range : apparelGenderAgeRanges) {

                    for (Products product : productsList) {

                        for (ApparelGenderAgeRange range2 : product.getApparelGenderAgeRanges()) {

                            if (range.getGenderId().equals(range2.getGenderId())) {

                                filteredProductsGenderAgeRanges.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsGenderAgeRanges;

            }


            if (!apparelSizes.isEmpty()) {

                List<Products> filteredProductsApparelSizes = new ArrayList<>();

                for (ApparelSize size : apparelSizes) {

                    for (Products product : productsList) {

                        for (ApparelSize size2 : product.getApparelSizes()) {

                            if (size.getSizeId().equals(size2.getSizeId())) {

                                filteredProductsApparelSizes.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsApparelSizes;

            }


            if (!apparelFabricTypes.isEmpty()) {

                List<Products> filteredProductsApparelFabricTypes = new ArrayList<>();

                for (ApparelFabricType type : apparelFabricTypes) {

                    for (Products product : productsList) {

                        for (ApparelFabricType type2 : product.getApparelFabricTypes()) {

                            if (type.getFabricTypeId().equals(type2.getFabricTypeId())) {

                                filteredProductsApparelFabricTypes.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsApparelFabricTypes;

            }


            if (!automativeProductsColors.isEmpty()) {

                List<Products> filteredProductsAutomotiveProductColors = new ArrayList<>();

                for (ProductsColors color : automativeProductsColors) {

                    for (Products product : productsList) {

                        for (ProductsColors color2 : product.getAutomativeProductsColors()) {

                            if (color.getColorId().equals(color2.getColorId())) {

                                filteredProductsAutomotiveProductColors.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsAutomotiveProductColors;

            }


            if (!automotiveMaxSpeeds.isEmpty()) {

                List<Products> filteredProductsAutomotiveMaxSpeeds = new ArrayList<>();

                for (AutomotiveMaxSpeed speed : automotiveMaxSpeeds) {

                    for (Products product : productsList) {

                        for (AutomotiveMaxSpeed speed2 : product.getAutomotiveMaxSpeeds()) {

                            if (speed.getMaxSpeedId().equals(speed2.getMaxSpeedId())) {

                                filteredProductsAutomotiveMaxSpeeds.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsAutomotiveMaxSpeeds;

            }


            if (!automotiveFuels.isEmpty()) {

                List<Products> filteredProductsAutomotiveFuels = new ArrayList<>();

                for (AutomotiveFuel fuel : automotiveFuels) {

                    for (Products product : productsList) {

                        for (AutomotiveFuel fuel2 : product.getAutomotiveFuels()) {

                            if (fuel.getFuelId().equals(fuel2.getFuelId())) {

                                filteredProductsAutomotiveFuels.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsAutomotiveFuels;
            }


            if (!automotiveSeats.isEmpty()) {

                List<Products> filteredProductsAutomotiveSeats = new ArrayList<>();

                for (AutomotiveSeat seat : automotiveSeats) {

                    for (Products product : productsList) {

                        for (AutomotiveSeat seat2 : product.getAutomotiveSeats()) {

                            if (seat.getSeatId().equals(seat2.getSeatId())) {

                                filteredProductsAutomotiveSeats.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsAutomotiveSeats;
            }


            if (!automotiveTypes.isEmpty()) {

                List<Products> filteredProductsAutomotiveTypes = new ArrayList<>();

                for (AutomotiveType type : automotiveTypes) {

                    for (Products product : productsList) {

                        for (AutomotiveType type2 : product.getAutomotiveTypes()) {

                            if (type.getTypeId().equals(type2.getTypeId())) {

                                filteredProductsAutomotiveTypes.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsAutomotiveTypes;
            }


            if (!automotiveCrashes.isEmpty()) {

                List<Products> filteredProductsAutomotiveCrashes = new ArrayList<>();

                for (AutomotiveCrash crash : automotiveCrashes) {

                    for (Products product : productsList) {

                        for (AutomotiveCrash crash2 : product.getAutomotiveCrashes()) {

                            if (crash.getCrashId().equals(crash2.getCrashId())) {

                                filteredProductsAutomotiveCrashes.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsAutomotiveCrashes;
            }


            if (!automotiveDistanceTraveleds.isEmpty()) {

                List<Products> filteredProductsAutomotiveDistanceTraveleds = new ArrayList<>();

                for (AutomotiveDistanceTraveled traveled : automotiveDistanceTraveleds) {

                    for (Products product : productsList) {

                        for (AutomotiveDistanceTraveled traveled2 : product.getAutomotiveDistanceTraveleds()) {

                            if (traveled.getDistanceTraveledId().equals(traveled2.getDistanceTraveledId())) {

                                filteredProductsAutomotiveDistanceTraveleds.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsAutomotiveDistanceTraveleds;
            }


            if (!automotiveEngines.isEmpty()) {

                List<Products> filteredProductsAutomotiveEngines = new ArrayList<>();

                for (AutomotiveEngine engine : automotiveEngines) {

                    for (Products product : productsList) {

                        for (AutomotiveEngine engine2 : product.getAutomotiveEngines()) {

                            if (engine.getEngineId().equals(engine2.getEngineId())) {

                                filteredProductsAutomotiveEngines.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsAutomotiveEngines;
            }


            if (!electronicsProductsColors.isEmpty()) {

                List<Products> filteredProductsElectronicsColors = new ArrayList<>();

                for (ProductsColors color : electronicsProductsColors) {

                    for (Products product : productsList) {

                        for (ProductsColors color2 : product.getElectronicsProductsColors()) {

                            if (color.getColorId().equals(color2.getColorId())) {

                                filteredProductsElectronicsColors.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsElectronicsColors;
            }


            if (!electronicsMemories.isEmpty()) {

                List<Products> filteredProductsElectronicsMemories = new ArrayList<>();

                for (ElectronicsMemory memory : electronicsMemories) {

                    for (Products product : productsList) {

                        for (ElectronicsMemory memory2 : product.getElectronicsMemories()) {

                            if (memory.getMemoryId().equals(memory2.getMemoryId())) {

                                filteredProductsElectronicsMemories.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsElectronicsMemories;
            }


            if (!electronicsCameras.isEmpty()) {

                List<Products> filteredProductsElectronicsCameras = new ArrayList<>();

                for (ElectronicsCamera camera : electronicsCameras) {

                    for (Products product : productsList) {

                        for (ElectronicsCamera camera2 : product.getElectronicsCameras()) {

                            if (camera.getCameraId().equals(camera2.getCameraId())) {

                                filteredProductsElectronicsCameras.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsElectronicsCameras;
            }


            if (!electronicsFrontCameras.isEmpty()) {

                List<Products> filteredProductsElectronicsFrontCameras = new ArrayList<>();

                for (ElectronicsFrontCamera camera : electronicsFrontCameras) {

                    for (Products product : productsList) {

                        for (ElectronicsFrontCamera camera2 : product.getElectronicsFrontCameras()) {

                            if (camera.getFrontCameraId().equals(camera2.getFrontCameraId())) {

                                filteredProductsElectronicsFrontCameras.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsElectronicsFrontCameras;
            }


            if (!electronicsWirelessCarriers.isEmpty()) {

                List<Products> filteredProductsElectronicsWirelessCarriers = new ArrayList<>();

                for (ElectronicsWirelessCarrier wirelessCarrier : electronicsWirelessCarriers) {

                    for (Products product : productsList) {

                        for (ElectronicsWirelessCarrier wirelessCarrier2 : product.getElectronicsWirelessCarriers()) {

                            if (wirelessCarrier.getWirelessCarrierId().equals(wirelessCarrier2.getWirelessCarrierId())) {

                                filteredProductsElectronicsWirelessCarriers.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsElectronicsWirelessCarriers;
            }


            if (!electronicsOperatingSystems.isEmpty()) {

                List<Products> filteredProductsElectronicsOperatingSystems = new ArrayList<>();

                for (ElectronicsOperatingSystem operatingSystem : electronicsOperatingSystems) {

                    for (Products product : productsList) {

                        for (ElectronicsOperatingSystem operatingSystem2 : product.getElectronicsOperatingSystems()) {

                            if (operatingSystem.getOperatingSystemId().equals(operatingSystem2.getOperatingSystemId())) {

                                filteredProductsElectronicsOperatingSystems.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsElectronicsOperatingSystems;
            }


            if (!electronicsScreenSizes.isEmpty()) {

                List<Products> filteredProductsElectronicsScreenSizes = new ArrayList<>();

                for (ElectronicsScreenSize screenSize : electronicsScreenSizes) {

                    for (Products product : productsList) {

                        for (ElectronicsScreenSize screenSize2 : product.getElectronicsScreenSizes()) {

                            if (screenSize.getScreenSizeId().equals(screenSize2.getScreenSizeId())) {

                                filteredProductsElectronicsScreenSizes.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsElectronicsScreenSizes;
            }


            if (!electronicsDisplayTypes.isEmpty()) {

                List<Products> filteredProductsElectronicsDisplayType = new ArrayList<>();

                for (ElectronicsDisplayType displayType : electronicsDisplayTypes) {

                    for (Products product : productsList) {

                        for (ElectronicsDisplayType displayType2 : product.getElectronicsDisplayTypes()) {

                            if (displayType.getDisplayTypeId().equals(displayType2.getDisplayTypeId())) {

                                filteredProductsElectronicsDisplayType.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsElectronicsDisplayType;
            }


            if (!electronicsCellularTechnologies.isEmpty()) {

                List<Products> filteredProductsElectronicsCellularTechnologies = new ArrayList<>();

                for (ElectronicsCellularTechnology cellularTechnology : electronicsCellularTechnologies) {

                    for (Products product : productsList) {

                        for (ElectronicsCellularTechnology cellularTechnology2 : product.getElectronicsCellularTechnologies()) {

                            if (cellularTechnology.getCellularTechnologyId().equals(cellularTechnology2.getCellularTechnologyId())) {

                                filteredProductsElectronicsCellularTechnologies.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsElectronicsCellularTechnologies;
            }


            if (!electronicsBatteries.isEmpty()) {

                List<Products> filteredProductsElectronicsBatteries = new ArrayList<>();

                for (ElectronicsBattery battery : electronicsBatteries) {

                    for (Products product : productsList) {

                        for (ElectronicsBattery battery2 : product.getElectronicsBatteries()) {

                            if (battery.getBatteryId().equals(battery2.getBatteryId())) {

                                filteredProductsElectronicsBatteries.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsElectronicsBatteries;
            }


            if (!electronicsProcessors.isEmpty()) {

                List<Products> filteredProductsElectronicsProcessors = new ArrayList<>();

                for (ElectronicsProcessor processor : electronicsProcessors) {

                    for (Products product : productsList) {

                        for (ElectronicsProcessor processor2 : product.getElectronicsProcessors()) {

                            if (processor.getProcessorId().equals(processor2.getProcessorId())) {

                                filteredProductsElectronicsProcessors.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsElectronicsProcessors;
            }


            if (!electronicsRams.isEmpty()) {

                List<Products> filteredProductsElectronicsRams = new ArrayList<>();

                for (ElectronicsRam ram : electronicsRams) {

                    for (Products product : productsList) {

                        for (ElectronicsRam ram2 : product.getElectronicsRams()) {

                            if (ram.getRamId().equals(ram2.getRamId())) {

                                filteredProductsElectronicsRams.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsElectronicsRams;
            }


            if (!electronicsGraphicsCards.isEmpty()) {

                List<Products> filteredProductsElectronicsGraphicsCards = new ArrayList<>();

                for (ElectronicsGraphicsCard graphicsCard : electronicsGraphicsCards) {

                    for (Products product : productsList) {

                        for (ElectronicsGraphicsCard graphicsCard2 : product.getElectronicsGraphicsCards()) {

                            if (graphicsCard.getGraphicsCardId().equals(graphicsCard2.getGraphicsCardId())) {

                                filteredProductsElectronicsGraphicsCards.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsElectronicsGraphicsCards;
            }


            if (!electronicsComputerTypes.isEmpty()) {

                List<Products> filteredProductsElectronicsComputerTypes = new ArrayList<>();

                for (ElectronicsComputerType computerType : electronicsComputerTypes) {

                    for (Products product : productsList) {

                        for (ElectronicsComputerType computerType2 : product.getElectronicsComputerTypes()) {

                            if (computerType.getTypeId().equals(computerType2.getTypeId())) {

                                filteredProductsElectronicsComputerTypes.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsElectronicsComputerTypes;
            }


            if (!musicInstruments.isEmpty()) {

                List<Products> filteredProductsMusicInstruments = new ArrayList<>();

                for (MusicInstrument instrument : musicInstruments) {

                    for (Products product : productsList) {

                        for (MusicInstrument instrument2 : product.getMusicInstruments()) {

                            if (instrument.getInstrumentId().equals(instrument2.getInstrumentId())) {

                                filteredProductsMusicInstruments.add(product);
                            }

                        }
                    }
                }

                productsList = filteredProductsMusicInstruments;
            }

        }


        return productsList;

    }

    @Override
    public ResponseEntity<String> getProductRating(Long id) throws JSONException {

        JSONObject ratings = new JSONObject();

        Products product = repositoryProducts.findByProductId(id);

        double rating = product.getProductRating() / product.getProductEvaluateCount();

        Integer fiveStars = product.getProductFiveStars();
        Integer fourStars = product.getProductFourStars();
        Integer threeStars = product.getProductThreeStars();
        Integer twoStars = product.getProductTwoStars();
        Integer oneStar = product.getProductOneStar();


        List<ProductReviewRequest> productReviewRequestList = new ArrayList<>();

        for (ProductReviews review : product.getProductReviews()) {

            productReviewRequestList.add(new ProductReviewRequest(review.getReviewTitle(),
                    review.getReviewDescription(), review.getReviewRating(), review.getUser() != null ? review.getUser().getUserName() : review.getCompany().getCompanyName(), review.getReviewDate()));
        }

        ratings.put("rating", Math.round(rating));
        ratings.put("fiveStars", fiveStars);
        ratings.put("fourStars", fourStars);
        ratings.put("threeStars", threeStars);
        ratings.put("twoStars", twoStars);
        ratings.put("oneStar", oneStar);
        ratings.put("reviews", productReviewRequestList);

        return new ResponseEntity<String>(ratings.toString(), HttpStatus.OK);
    }


    @Override
    public void productEvaluate(Long id, Integer rating, String reviewTitle, String reviewDescription, String accountType, Long accountID) {

        Products product = repositoryProducts.findByProductId(id);

        product.setProductRating(product.getProductRating() + rating);
        product.setProductEvaluateCount(product.getProductEvaluateCount() + 1);

        if (rating == 5) {
            product.setProductFiveStars(product.getProductFiveStars() + 1);
        } else if (rating == 4) {
            product.setProductFourStars(product.getProductFourStars() + 1);
        } else if (rating == 3) {
            product.setProductThreeStars(product.getProductThreeStars() + 1);
        } else if (rating == 2) {
            product.setProductTwoStars(product.getProductTwoStars() + 1);
        } else {
            product.setProductOneStar(product.getProductOneStar() + 1);
        }

        LocalDateTime date = LocalDateTime.now();

        ProductReviews productReviews = new ProductReviews();
        productReviews.setProduct(product);
        productReviews.setReviewTitle(reviewTitle);
        productReviews.setReviewDescription(reviewDescription);
        productReviews.setReviewRating(rating);
        productReviews.setReviewDate(date);

        if (accountType.equals("user")) {

            Users user = repositoryUser.findById(accountID).orElse(null);

            productReviews.setUser(user);
        } else {
            Companies user = repositoryCompany.findById(accountID).orElse(null);
            productReviews.setCompany(user);
        }


        repositoryProductReviews.save(productReviews);

        repositoryProducts.save(product);
    }


    @Override
    public void addProductRequestCount(Long id) {

        Products product = repositoryProducts.findByProductId(id);
        product.setProductRequestCount(product.getProductRequestCount() + 1);
    }

    @Override
    public List<Products> getTopRequestProducts() {

        List<Products> listProducts = repositoryProducts.getTopRequestProducts();

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
        product.setProductCoverPhoto(addProductRequest.getProductCoverPhoto());
        product.setProductUpdateDate(addProductRequest.getProductUpdateDate());
        product.setProductCreateDate(addProductRequest.getProductCreateDate());
        product.setProductStatus(addProductRequest.getProductStatus());
        product.setProductWarranty(addProductRequest.getProductWarranty());
        product.setProductDomesticShipping(addProductRequest.getProductDomesticShipping());
        product.setProductInternationalShipping(addProductRequest.getProductInternationalShipping());
        product.setProductYear(addProductRequest.getProductYear());
        product.setProductCurrency(addProductRequest.getProductCurrency());
        product.setProductsPictures(addProductRequest.getProductsPictures());

        if (addProductRequest.getUserID() != null) {

            Users user = repositoryUser.findById(addProductRequest.getUserID()).orElse(null);

            product.setUser(user);

        } else if (addProductRequest.getCompanyID() != null) {

            Companies company = repositoryCompany.findById(addProductRequest.getCompanyID()).orElse(null);

            product.setCompany(company);
        }

        product.setProductsJobOptions(addProductRequest.getProductsJobOptions());
        product.setProductsHomeOptions(addProductRequest.getProductsHomeOptions());


        product.setProductDepartment(repositoryDepartments.findById(addProductRequest.getProductDepartment().getDepartmentId()).orElse(null));
        product.setProductCategory(repositoryCategory.findById(addProductRequest.getProductCategory().getCategoryId()).orElse(null));

        product.setProductBrand(repositoryBrands.findById(addProductRequest.getProductBrand().getBrandId()).orElse(null));

        product.setProductModel(repositoryModels.findById(addProductRequest.getProductModel().getModelId()).orElse(null));


        if(!addProductRequest.getApparelProductsColors().isEmpty()) {

            Set<ProductsColors> productsColorsSet = new HashSet<>();

            for(ProductsColors pc : addProductRequest.getApparelProductsColors()) {

                repositoryProductColors.findById(pc.getColorId()).ifPresent(productsColorsSet :: add);
            }

            product.setApparelProductsColors(productsColorsSet);

        }



        if(!addProductRequest.getApparelGenderAgeRanges().isEmpty()) {

            Set<ApparelGenderAgeRange> productsApparelGenderAgeRangeSet = new HashSet<ApparelGenderAgeRange>();

            for(ApparelGenderAgeRange aga : addProductRequest.getApparelGenderAgeRanges()) {

                repositoryApparelGenderAgeRange.findById(aga.getGenderId()).ifPresent(productsApparelGenderAgeRangeSet :: add);
            }

            product.setApparelGenderAgeRanges(productsApparelGenderAgeRangeSet);

        }



        if(!addProductRequest.getApparelSizes().isEmpty()) {

            Set<ApparelSize> productsApparelSizeSet = new HashSet<>();

            for(ApparelSize as : addProductRequest.getApparelSizes()) {

                repositoryApparelSizes.findById(as.getSizeId()).ifPresent(productsApparelSizeSet :: add);
            }

            product.setApparelSizes(productsApparelSizeSet);

        }



        if(!addProductRequest.getApparelFabricTypes().isEmpty()) {

            Set<ApparelFabricType> productsApparelFabricTypeSet = new HashSet<>();

            for(ApparelFabricType aft : addProductRequest.getApparelFabricTypes()) {

                repositoryApparelFabricType.findById(aft.getFabricTypeId())
                        .ifPresent(productsApparelFabricTypeSet :: add);
            }

            product.setApparelFabricTypes(productsApparelFabricTypeSet);

        }


        if(!addProductRequest.getAutomativeProductsColors().isEmpty()) {

            Set<ProductsColors> productsAutomotiveProductsColorsSet = new HashSet<>();

            for(ProductsColors pc : addProductRequest.getAutomativeProductsColors()) {

                repositoryProductColors.findById(pc.getColorId())
                        .ifPresent(productsAutomotiveProductsColorsSet :: add);
            }

            product.setAutomativeProductsColors(productsAutomotiveProductsColorsSet);

        }


        if(!addProductRequest.getAutomotiveMaxSpeeds().isEmpty()) {

            Set<AutomotiveMaxSpeed> OptionSet = new HashSet<>();

            for(AutomotiveMaxSpeed ams : addProductRequest.getAutomotiveMaxSpeeds()) {

                repositoryAutomotiveMaxSpeed.findById(ams.getMaxSpeedId())
                        .ifPresent(OptionSet :: add);
            }

            product.setAutomotiveMaxSpeeds(OptionSet);

        }


        if(!addProductRequest.getAutomotiveFuels().isEmpty()) {

            Set<AutomotiveFuel> OptionSet = new HashSet<>();

            for(AutomotiveFuel o : addProductRequest.getAutomotiveFuels()) {

                repositoryAutomotiveFuel.findById(o.getFuelId())
                        .ifPresent(OptionSet :: add);
            }

            product.setAutomotiveFuels(OptionSet);
        }



        if(!addProductRequest.getAutomotiveSeats().isEmpty()) {

            Set<AutomotiveSeat> OptionSet = new HashSet<>();

            for(AutomotiveSeat o : addProductRequest.getAutomotiveSeats()) {

                repositoryAutomotiveSeat.findById(o.getSeatId())
                        .ifPresent(OptionSet :: add);
            }

            product.setAutomotiveSeats(OptionSet);
        }


        if(!addProductRequest.getAutomotiveTypes().isEmpty()) {

            Set<AutomotiveType> OptionSet = new HashSet<>();

            for(AutomotiveType o : addProductRequest.getAutomotiveTypes()) {

                repositoryAutomotiveType.findById(o.getTypeId())
                        .ifPresent(OptionSet :: add);
            }

            product.setAutomotiveTypes(OptionSet);
        }



        if(!addProductRequest.getAutomotiveCrashes().isEmpty()) {

            Set<AutomotiveCrash> OptionSet = new HashSet<>();

            for(AutomotiveCrash o : addProductRequest.getAutomotiveCrashes()) {

                repositoryAutomotiveCrash.findById(o.getCrashId())
                        .ifPresent(OptionSet :: add);
            }

            product.setAutomotiveCrashes(OptionSet);
        }


        if(!addProductRequest.getAutomotiveDistanceTraveleds().isEmpty()) {

            Set<AutomotiveDistanceTraveled> OptionSet = new HashSet<>();

            for(AutomotiveDistanceTraveled o : addProductRequest.getAutomotiveDistanceTraveleds()) {

                repositoryAutomotiveDistanceTraveleds.findById(o.getDistanceTraveledId())
                        .ifPresent(OptionSet :: add);
            }

            product.setAutomotiveDistanceTraveleds(OptionSet);
        }


        if(!addProductRequest.getAutomotiveEngines().isEmpty()) {

            Set<AutomotiveEngine> OptionSet = new HashSet<>();

            for(AutomotiveEngine o : addProductRequest.getAutomotiveEngines()) {

                repositoryAutomotiveEngine.findById(o.getEngineId())
                        .ifPresent(OptionSet :: add);
            }

            product.setAutomotiveEngines(OptionSet);
        }


        if(!addProductRequest.getElectronicsProductsColors().isEmpty()) {

            Set<ProductsColors> OptionSet = new HashSet<>();

            for(ProductsColors o : addProductRequest.getElectronicsProductsColors()) {

                repositoryProductColors.findById(o.getColorId())
                        .ifPresent(OptionSet :: add);
            }

            product.setElectronicsProductsColors(OptionSet);
        }


        if(!addProductRequest.getElectronicsMemories().isEmpty()) {

            Set<ElectronicsMemory> OptionSet = new HashSet<>();

            for(ElectronicsMemory o : addProductRequest.getElectronicsMemories()) {

                repositoryElectronicsMemory.findById(o.getMemoryId())
                        .ifPresent(OptionSet :: add);
            }

            product.setElectronicsMemories(OptionSet);
        }



        if(!addProductRequest.getElectronicsCameras().isEmpty()) {

            Set<ElectronicsCamera> OptionSet = new HashSet<>();

            for(ElectronicsCamera o : addProductRequest.getElectronicsCameras()) {

                repositoryElectronicsCamera.findById(o.getCameraId())
                        .ifPresent(OptionSet :: add);
            }

            product.setElectronicsCameras(OptionSet);
        }



        if(!addProductRequest.getElectronicsFrontCameras().isEmpty()) {

            Set<ElectronicsFrontCamera> OptionSet = new HashSet<>();

            for(ElectronicsFrontCamera o : addProductRequest.getElectronicsFrontCameras()) {

                repositoryElectronicsFrontCamera.findById(o.getFrontCameraId())
                        .ifPresent(OptionSet :: add);
            }

            product.setElectronicsFrontCameras(OptionSet);
        }


        if(!addProductRequest.getElectronicsWirelessCarriers().isEmpty()) {

            Set<ElectronicsWirelessCarrier> OptionSet = new HashSet<>();

            for(ElectronicsWirelessCarrier o : addProductRequest.getElectronicsWirelessCarriers()) {

                repositoryElectronicsWirelessCarrier.findById(o.getWirelessCarrierId())
                        .ifPresent(OptionSet :: add);
            }

            product.setElectronicsWirelessCarriers(OptionSet);
        }



        if(!addProductRequest.getElectronicsOperatingSystems().isEmpty()) {

            Set<ElectronicsOperatingSystem> OptionSet = new HashSet<>();

            for(ElectronicsOperatingSystem o : addProductRequest.getElectronicsOperatingSystems()) {

                repositoryElectronicsOperatingSystem.findById(o.getOperatingSystemId())
                        .ifPresent(OptionSet :: add);
            }

            product.setElectronicsOperatingSystems(OptionSet);
        }


        if(!addProductRequest.getElectronicsScreenSizes().isEmpty()) {

            Set<ElectronicsScreenSize> OptionSet = new HashSet<>();

            for(ElectronicsScreenSize o : addProductRequest.getElectronicsScreenSizes()) {

                repositoryElectronicsScreenSize.findById(o.getScreenSizeId())
                        .ifPresent(OptionSet :: add);
            }

            product.setElectronicsScreenSizes(OptionSet);
        }


        if(!addProductRequest.getElectronicsDisplayTypes().isEmpty()) {

            Set<ElectronicsDisplayType> OptionSet = new HashSet<>();

            for(ElectronicsDisplayType o : addProductRequest.getElectronicsDisplayTypes()) {

                repositoryElectronicsDisplayTypes.findById(o.getDisplayTypeId())
                        .ifPresent(OptionSet :: add);
            }

            product.setElectronicsDisplayTypes(OptionSet);
        }




        if(!addProductRequest.getElectronicsCellularTechnologies().isEmpty()) {

            Set<ElectronicsCellularTechnology> OptionSet = new HashSet<>();

            for(ElectronicsCellularTechnology o : addProductRequest.getElectronicsCellularTechnologies()) {

                repositoryElectronicsCellularTechnology.findById(o.getCellularTechnologyId())
                        .ifPresent(OptionSet :: add);
            }

            product.setElectronicsCellularTechnologies(OptionSet);
        }



        if(!addProductRequest.getElectronicsBatteries().isEmpty()) {

            Set<ElectronicsBattery> OptionSet = new HashSet<>();

            for(ElectronicsBattery o : addProductRequest.getElectronicsBatteries()) {

                repositoryElectronicsBattery.findById(o.getBatteryId())
                        .ifPresent(OptionSet :: add);
            }

            product.setElectronicsBatteries(OptionSet);
        }



        if(!addProductRequest.getElectronicsProcessors().isEmpty()) {

            Set<ElectronicsProcessor> OptionSet = new HashSet<>();

            for(ElectronicsProcessor o : addProductRequest.getElectronicsProcessors()) {

                repositoryElectronicsProcessor.findById(o.getProcessorId())
                        .ifPresent(OptionSet :: add);
            }

            product.setElectronicsProcessors(OptionSet);
        }



        if(!addProductRequest.getElectronicsRams().isEmpty()) {

            Set<ElectronicsRam> OptionSet = new HashSet<>();

            for(ElectronicsRam o : addProductRequest.getElectronicsRams()) {

                repositoryElectronicsRam.findById(o.getRamId())
                        .ifPresent(OptionSet :: add);
            }

            product.setElectronicsRams(OptionSet);
        }


        if(!addProductRequest.getElectronicsGraphicsCards().isEmpty()) {

            Set<ElectronicsGraphicsCard> OptionSet = new HashSet<>();

            for(ElectronicsGraphicsCard o : addProductRequest.getElectronicsGraphicsCards()) {

                repositoryElectronicsGraphicsCard.findById(o.getGraphicsCardId())
                        .ifPresent(OptionSet :: add);
            }

            product.setElectronicsGraphicsCards(OptionSet);
        }


        if(!addProductRequest.getElectronicsComputerTypes().isEmpty()) {

            Set<ElectronicsComputerType> OptionSet = new HashSet<>();

            for(ElectronicsComputerType o : addProductRequest.getElectronicsComputerTypes()) {

                repositoryElectronicsComputerType.findById(o.getTypeId())
                        .ifPresent(OptionSet :: add);
            }

            product.setElectronicsComputerTypes(OptionSet);
        }



        if(!addProductRequest.getMusicInstruments().isEmpty()) {

            Set<MusicInstrument> OptionSet = new HashSet<>();

            for(MusicInstrument o : addProductRequest.getMusicInstruments()) {

                repositoryMusicInstruments.findById(o.getInstrumentId())
                        .ifPresent(OptionSet :: add);
            }

            product.setMusicInstruments(OptionSet);
        }





        repositoryProducts.save(product);
    }

}
