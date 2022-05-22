package com.backend.dtos.request;

import com.backend.pojos.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@ToString
public class OptionsRequest {

    Set<ProductsColors> apparelProductsColors = new HashSet<>();
    Set<ApparelSize> apparelSizes = new HashSet<>();
    Set<ApparelFabricType> apparelFabricTypes = new HashSet<>();
    Set<ProductsColors> automativeProductsColors = new HashSet<>();
    Set<AutomotiveMaxSpeed> automotiveMaxSpeeds = new HashSet<>();
    Set<AutomotiveFuel> automotiveFuels = new HashSet<>();
    Set<AutomotiveSeat> automotiveSeats = new HashSet<>();
    Set<AutomotiveType> automotiveTypes = new HashSet<>();
    Set<AutomotiveCrash> automotiveCrashes = new HashSet<>();
    Set<AutomotiveEngine> automotiveEngines = new HashSet<>();
    Set<ProductsColors> electronicsProductsColors = new HashSet<>();
    Set<ElectronicsMemory> electronicsMemories = new HashSet<>();
    Set<ElectronicsCamera> electronicsCameras = new HashSet<>();
    Set<ElectronicsFrontCamera> electronicsFrontCameras = new HashSet<>();
    Set<ElectronicsOperatingSystem> electronicsOperatingSystems = new HashSet<>();
    Set<ElectronicsDisplayType> electronicsDisplayTypes = new HashSet<>();
    Set<ElectronicsCellularTechnology> electronicsCellularTechnologies = new HashSet<>();
    Set<ElectronicsProcessor> electronicsProcessors = new HashSet<>();
    Set<ElectronicsRam> electronicsRams = new HashSet<>();
    Set<ElectronicsGraphicsCard> electronicsGraphicsCards = new HashSet<>();
    Set<ElectronicsComputerType> electronicsComputerTypes = new HashSet<>();
    Set<MusicInstrument> musicInstruments = new HashSet<>();

    //ranges
    Set<ElectronicsBatteryRange> electronicsBatteries = new HashSet<>();
    Set<ElectronicsScreenSizeRange> electronicsScreenSizes = new HashSet<>();
    Set<AutomotiveDistanceTraveledRange> automotiveDistanceTraveleds = new HashSet<>();

}
