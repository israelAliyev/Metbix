function DivideFutures(properties) {

    let response = [];

    if (properties.automotiveTypes.length > 0) response.push({
        title: "Automotive Type",
        symbol: null,
        value: properties.automotiveTypes
    })


    if (properties.automotiveSeats.length > 0) response.push({
        title: "Seats",
        symbol: null,
        value: properties.automotiveSeats
    })


    if (properties.automotiveMaxSpeeds.length > 0) response.push({
        title: "Max Speed",
        symbol: "km/h",
        value: properties.automotiveMaxSpeeds
    })


    if (properties.automotiveFuels.length > 0) response.push({
        title: "Fuel Type",
        symbol: null,
        value: properties.automotiveFuels
    })


    if (properties.automotiveEngines.length > 0) response.push({
        title: "Engine",
        symbol: "L",
        value: properties.automotiveEngines
    })


    if (properties.automotiveDistanceTraveleds.length > 0) response.push({
        title: "Distance Traveled",
        symbol: "km",
        value: properties.automotiveDistanceTraveleds
    })


    if (properties.automotiveCrashes.length > 0) response.push({
        title: "Crash",
        symbol: null,
        value: properties.automotiveCrashes
    })


    if (properties.automativeProductsColors.length > 0) response.push({
        title: "Color",
        symbol: null,
        value: properties.automativeProductsColors
    })


    if (properties.apparelSizes.length > 0) response.push({
        title: "Size",
        symbol: null,
        value: properties.apparelSizes
    })


    if (properties.apparelProductsColors.length > 0) response.push({
        title: "Color",
        symbol: null,
        value: properties.apparelProductsColors
    })

    if (properties.apparelFabricTypes.length > 0) response.push({
        title: "Fabric Type",
        symbol: null,
        value: properties.apparelFabricTypes
    })


    if (properties.electronicsProductsColors.length > 0) response.push({
        title: "Color",
        symbol: null,
        value: properties.electronicsProductsColors
    })


    if (properties.electronicsBatteries.length > 0) response.push({
        title: "Battery",
        symbol: "maAh",
        value: properties.electronicsBatteries
    })


    if (properties.electronicsCameras.length > 0) response.push({
        title: "Camera",
        symbol: "Mp",
        value: properties.electronicsCameras
    })


    if (properties.electronicsCellularTechnologies.length > 0) response.push({
        title: "Cellular Technology",
        symbol: null,
        value: properties.electronicsCellularTechnologies
    })


    if (properties.electronicsComputerTypes.length > 0) response.push({
        title: "Computer Type",
        symbol: null,
        value: properties.electronicsComputerTypes
    })


    if (properties.electronicsDisplayTypes.length > 0) response.push({
        title: "Display Type",
        symbol: null,
        value: properties.electronicsDisplayTypes
    })


    if (properties.electronicsFrontCameras.length > 0) response.push({
        title: "Front Camera",
        symbol: "Mp",
        value: properties.electronicsFrontCameras
    })


    if (properties.electronicsGraphicsCards.length > 0) response.push({
        title: "Graphics Card",
        symbol: null,
        value: properties.electronicsGraphicsCards
    })


    if (properties.electronicsMemories.length > 0) response.push({
        title: "Memory",
        symbol: "Gb",
        value: properties.electronicsMemories
    })


    if (properties.electronicsOperatingSystems.length > 0) response.push({
        title: "Operating System",
        symbol: null,
        value: properties.electronicsOperatingSystems
    })


    if (properties.electronicsProcessors.length > 0) response.push({
        title: "Processor",
        symbol: null,
        value: properties.electronicsProcessors
    })


    if (properties.electronicsRams.length > 0) response.push({
        title: "Ram",
        symbol: "Gb",
        value: properties.electronicsRams
    })


    if (properties.electronicsScreenSizes.length > 0) response.push({
        title: "Screen Size",
        symbol: "Inch",
        value: properties.electronicsScreenSizes
    })


    if (properties.musicInstruments.length > 0) response.push({
        title: "Instrument",
        symbol: null,
        value: properties.musicInstruments
    })


    if (properties.productsHomeOptions) response.push({
        title: "Home",
        symbol: null,
        value: [properties.productsHomeOptions]
    })


    if (properties.productsJobOptions) response.push({
        title: "Job",
        symbol: null,
        value: [properties.productsJobOptions]
    })

    return response;

}

export default DivideFutures;



