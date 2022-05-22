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


function FetchOptions(type, id) {

    const categoryId = parseInt(id);

    switch (type) {

        case "apparel-fabric-type":
            return apparel_fabric_types_data.filter(option => option.subCategoryId === categoryId)

        case "apparel-size":
            return apparel_sizes_data.filter(option => option.subCategoryId === categoryId)

        case "automotive_crash":
            return automative_crash_data.filter(option => option.categoryId === categoryId)

        case "automotive_engine":
            return automative_engine_data.filter(option => option.categoryId === categoryId)

        case "automotive_fuel":
            return automative_fuel_data.filter(option => option.categoryId === categoryId)

        case "automotive_max_speed":
            return automative_max_speeds_data.filter(option => option.categoryId === categoryId)

        case "automotive_seat":
            return automative_seats_data.filter(option => option.categoryId === categoryId)

        case "automotive_type":
            return automative_types_data.filter(option => option.categoryId === categoryId)

        case "electronics_camera":
            return electronics_camera_data.filter(option => option.categoryId === categoryId)

        case "electronics_cellular_technology":
            return electronics_cellular_technologies_data.filter(option => option.categoryId === categoryId)

        case "electronics_computer_type":
            return electronics_computer_types_data.filter(option => option.categoryId === categoryId)

        case "electronics_display_types":
            return electronics_display_types_data.filter(option => option.categoryId === categoryId)

        case "electronics_front_camera":
            return electronics_front_camera_data.filter(option => option.categoryId === categoryId)

        case "electronics_graphics_card":
            return electronics_grpahics_cards_data.filter(option => option.categoryId === categoryId)

        case "electronics_memory":
            return electronics_memory_data.filter(option => option.categoryId === categoryId)

        case "electronics_operating_system":
            return electronics_operating_systems_data.filter(option => option.categoryId === categoryId)

        case "electronics_processor":
            return electronics_processors_data.filter(option => option.categoryId === categoryId)

        case "electronics_ram":
            return electronics_rams_data.filter(option => option.categoryId === categoryId)

        case "music_instrument":
            return music_instruments_data.filter(option => option.categoryId === categoryId)

        default:
            return undefined;
    }
}

export default FetchOptions;