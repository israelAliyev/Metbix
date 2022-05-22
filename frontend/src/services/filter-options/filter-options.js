import apparel_fabric_types_data from "../../products-json/apparel-fabric-types.json";
import apparel_sizes_data from "../../products-json/apparel-sizes.json"
import automative_crash_data from "../../products-json/automative-crash.json"
import automative_engine_data from "../../products-json/automative-engine.json"
import automative_fuel_data from "../../products-json/automative-fuel.json"
import automative_max_speeds_data from "../../products-json/automative-max-speeds.json"
import automative_seats_data from "../../products-json/automative-seats.json"
import automative_types_data from "../../products-json/automative-types.json"
import electronics_camera_data from "../../products-json/electronics-camera.json"
import electronics_cellular_technologies_data from "../../products-json/electronics-cellular-technologies.json"
import electronics_computer_types_data from "../../products-json/electronics-computer-types.json"
import electronics_display_types_data from "../../products-json/electronics-display-types.json"
import electronics_front_camera_data from "../../products-json/electronics-front-camera.json"
import electronics_grpahics_cards_data from "../../products-json/electronics-graphics-cards.json"
import electronics_memory_data from "../../products-json/electronics-memory.json"
import electronics_operating_systems_data from "../../products-json/electronics-operating-systems.json"
import electronics_processors_data from "../../products-json/electronics-processors.json"
import electronics_rams_data from "../../products-json/electronics-rams.json"
import music_instruments_data from "../../products-json/music-instruments.json"
import colors_data from "../../products-json/product-colors.json";
import automotive_distance_traveled_ranges from "../../products-json/ranges/automotive-distance-traveled-range.json"
import electronics_battery_ranges from "../../products-json/ranges/electronics-battery-range.json"
import electronics_screen_size_ranges from "../../products-json/ranges/electronics-screen-size-range.json"


function FilterOptions(category_id , sub_category_id) {

    let response = [];

    const categoryId = parseInt(category_id);
    const subCategoryId = parseInt(sub_category_id);


    // colors
    if ((categoryId > 112 && categoryId < 127) || categoryId === 111) response.push({
        title: "Color",
        symbol: null,
        automotiveProductsColors: colors_data
    })

    if (subCategoryId > 0) response.push({
        title: "Color",
        symbol: null,
        apparelProductsColors: colors_data
    })

    if (categoryId > 86 && categoryId < 99) response.push({
        title: "Color",
        symbol: null,
        electronicsProductsColors: colors_data
    })

    if (automative_types_data.filter(option => option.categoryId === categoryId).length > 0) response.push({
        title: "Automotive Type",
        symbol: null,
        automotiveTypes: automative_types_data.filter(option => option.categoryId === categoryId)
    })


    if (automative_seats_data.filter(option => option.categoryId === categoryId).length > 0) response.push({
        title: "Seats",
        symbol: null,
        automotiveSeats: automative_seats_data.filter(option => option.categoryId === categoryId)
    })


    if (automative_max_speeds_data.filter(option => option.categoryId === categoryId).length > 0) response.push({
        title: "Max Speed",
        symbol: "km/h",
        automotiveMaxSpeeds: automative_max_speeds_data.filter(option => option.categoryId === categoryId)
    })


    if (automative_fuel_data.filter(option => option.categoryId === categoryId).length > 0) response.push({
        title: "Fuel Type",
        symbol: null,
        automotiveFuels:automative_fuel_data.filter(option => option.categoryId === categoryId)
    })


    if (automative_engine_data.filter(option => option.categoryId === categoryId).length > 0) response.push({
        title: "Engine",
        symbol: "L",
        automotiveEngines: automative_engine_data.filter(option => option.categoryId === categoryId)
    })


    // if (properties.automotiveDistanceTraveleds.length > 0) response.push({
    //     title: "Distance Traveled",
    //     symbol: "km",
    //     automotiveDistanceTraveleds: properties.automotiveDistanceTraveleds
    // })


    if (automative_crash_data.filter(option => option.categoryId === categoryId).length > 0) response.push({
        title: "Crash",
        symbol: null,
        automotiveCrashes: automative_crash_data.filter(option => option.categoryId === categoryId)
    })




    if (apparel_sizes_data.filter(option => option.subCategoryId === subCategoryId).length > 0) response.push({
        title: "Size",
        symbol: null,
        apparelSizes: apparel_sizes_data.filter(option => option.subCategoryId === subCategoryId)
    })




    if (apparel_fabric_types_data.filter(option => option.subCategoryId === subCategoryId).length > 0) response.push({
        title: "Fabric Type",
        symbol: null,
        apparelFabricTypes: apparel_fabric_types_data.filter(option => option.subCategoryId === subCategoryId)
    })




    // if (properties.electronicsBatteries.length > 0) response.push({
    //     title: "Battery",
    //     symbol: "maAh",
    //     electronicsBatteries: properties.electronicsBatteries
    // })


    if (electronics_camera_data.filter(option => option.categoryId === categoryId).length > 0) response.push({
        title: "Camera",
        symbol: "Mp",
        electronicsCameras: electronics_camera_data.filter(option => option.categoryId === categoryId)
    })


    if (electronics_cellular_technologies_data.filter(option => option.categoryId === categoryId).length > 0) response.push({
        title: "Cellular Technology",
        symbol: null,
        electronicsCellularTechnologies: electronics_cellular_technologies_data.filter(option => option.categoryId === categoryId)
    })


    if (electronics_computer_types_data.filter(option => option.categoryId === categoryId).length > 0) response.push({
        title: "Computer Type",
        symbol: null,
        electronicsComputerTypes: electronics_computer_types_data.filter(option => option.categoryId === categoryId)
    })


    if (electronics_display_types_data.filter(option => option.categoryId === categoryId).length > 0) response.push({
        title: "Display Type",
        symbol: null,
        electronicsDisplayTypes: electronics_display_types_data.filter(option => option.categoryId === categoryId)
    })


    if (electronics_front_camera_data.filter(option => option.categoryId === categoryId).length > 0) response.push({
        title: "Front Camera",
        symbol: "Mp",
        electronicsFrontCameras: electronics_front_camera_data.filter(option => option.categoryId === categoryId)
    })


    if (electronics_grpahics_cards_data.filter(option => option.categoryId === categoryId) > 0) response.push({
        title: "Graphics Card",
        symbol: null,
        electronicsGraphicsCards: electronics_grpahics_cards_data.filter(option => option.categoryId === categoryId)
    })


    if (electronics_memory_data.filter(option => option.categoryId === categoryId).length > 0) response.push({
        title: "Memory",
        symbol: null,
        electronicsMemories: electronics_memory_data.filter(option => option.categoryId === categoryId)
    })


    if (electronics_operating_systems_data.filter(option => option.categoryId === categoryId).length > 0) response.push({
        title: "Operating System",
        symbol: null,
        electronicsOperatingSystems: electronics_operating_systems_data.filter(option => option.categoryId === categoryId)
    })


    if (electronics_processors_data.filter(option => option.categoryId === categoryId).length > 0) response.push({
        title: "Processor",
        symbol: null,
        electronicsProcessors: electronics_processors_data.filter(option => option.categoryId === categoryId)
    })


    if (electronics_rams_data.filter(option => option.categoryId === categoryId).length > 0) response.push({
        title: "Ram",
        symbol: "Gb",
        electronicsRams: electronics_rams_data.filter(option => option.categoryId === categoryId)
    })


    // if (properties.electronicsScreenSizes.length > 0) response.push({
    //     title: "Screen Size",
    //     symbol: "Inch",
    //     value: properties.electronicsScreenSizes
    // })


    if (music_instruments_data.filter(option => option.categoryId === categoryId).length  > 0) response.push({
        title: "Instrument",
        symbol: null,
        musicInstruments: music_instruments_data.filter(option => option.categoryId === categoryId)
    })


    // ranges

    if (automotive_distance_traveled_ranges.filter(option => option.categoryId === categoryId).length  > 0) response.push({
        title: "Distance Traveled",
        symbol: null,
        automotiveDistanceTraveleds: automotive_distance_traveled_ranges.filter(option => option.categoryId === categoryId)
    })


    if (electronics_battery_ranges.filter(option => option.categoryId === categoryId).length  > 0) response.push({
        title: "Battery",
        symbol: null,
        electronicsBatteries: electronics_battery_ranges.filter(option => option.categoryId === categoryId)
    })

    if (electronics_screen_size_ranges.filter(option => option.categoryId === categoryId).length  > 0) response.push({
        title: "Screen Size",
        symbol: "inch",
        electronicsScreenSizes: electronics_screen_size_ranges.filter(option => option.categoryId === categoryId)
    })

    return response;

}

export default FilterOptions;