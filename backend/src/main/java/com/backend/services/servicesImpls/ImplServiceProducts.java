package com.backend.services.servicesImpls;

import com.backend.pojos.*;
import com.backend.repositories.RepositoryProducts;
import com.backend.services.ServiceProducts;
import lombok.AllArgsConstructor;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@AllArgsConstructor
public class ImplServiceProducts implements ServiceProducts {


    private final RepositoryProducts repositoryProducts;


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
                                                        List<ProductsColors> apparelProductsColors,
                                                        List<ApparelGenderAgeRange> apparelGenderAgeRanges,
                                                        List<ApparelSize> apparelSizes,
                                                        List<ApparelFabricType> apparelFabricTypes,
                                                        List<ProductsColors> automativeProductsColors,
                                                        List<AutomotiveMaxSpeed> automotiveMaxSpeeds,
                                                        List<AutomotiveFuel> automotiveFuels,
                                                        List<AutomotiveSeat> automotiveSeats,
                                                        List<AutomotiveType> automotiveTypes,
                                                        List<AutomotiveCrash> automotiveCrashes,
                                                        List<AutomotiveDistanceTraveled> automotiveDistanceTraveleds,
                                                        List<AutomotiveEngine> automotiveEngines,
                                                        List<ProductsColors> electronicsProductsColors,
                                                        List<ElectronicsMemory> electronicsMemories,
                                                        List<ElectronicsCamera> electronicsCameras,
                                                        List<ElectronicsFrontCamera> electronicsFrontCameras,
                                                        List<ElectronicsWirelessCarrier> electronicsWirelessCarriers,
                                                        List<ElectronicsOperatingSystem> electronicsOperatingSystems,
                                                        List<ElectronicsScreenSize> electronicsScreenSizes,
                                                        List<ElectronicsDisplayType> electronicsDisplayTypes,
                                                        List<ElectronicsCellularTechnology> electronicsCellularTechnologies,
                                                        List<ElectronicsBattery> electronicsBatteries,
                                                        List<ElectronicsProcessor> electronicsProcessors,
                                                        List<ElectronicsRam> electronicsRams,
                                                        List<ElectronicsGraphicsCard> electronicsGraphicsCards,
                                                        List<ElectronicsComputerType> electronicsComputerTypes,
                                                        List<MusicInstrument> musicInstruments, Pageable pageable) {

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
    public long getProductRating(Integer id) {

        Products product = repositoryProducts.findById(id).orElse(null);

        double rating = product.getProductRating() / product.getProductEvaluateCount();

        return Math.round(rating);
    }


    @Override
    public void productEvaluate(Integer id, Integer rating) {

        Products product = repositoryProducts.findById(id).orElse(null);

        product.setProductRating(product.getProductRating() + rating);
        product.setProductEvaluateCount(product.getProductEvaluateCount() + 1);

        repositoryProducts.save(product);
    }

    @Override
    public void addProductRequestCount(Integer id) {

        Products product = repositoryProducts.findById(id).orElse(null);
        product.setProductRequestCount(product.getProductRequestCount() + 1);
    }

    @Override
    public List<Products> getTopRequestProducts() {

        List<Products> listProducts = repositoryProducts.getTopRequestProducts();

        List<Products> filteredListProducts = new ArrayList<>();

        filteredListProducts = listProducts.stream().limit(5).collect(Collectors.toList());

        return filteredListProducts;
    }

}
