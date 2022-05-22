import React, {useEffect, useState} from 'react';
import FetchOptions from "../../../services/options/fetch-options";


const ElectronicsOptions = (props) => {


    const [cameraError, setCameraError] = useState(false)
    const [cellularTechnologiesError, setCellularTechnologiesError] = useState(false)
    const [computerTypeError, setComputerTypeError] = useState(false)
    const [displayTypeError, setDisplayTypeError] = useState(false)
    const [frontCameraError, setFrontCameraError] = useState(false)
    const [graphicsCardError, setGraphicsCardError] = useState(false)
    const [memoryError, setMemoryError] = useState(false)
    const [ramError, setRamError] = useState(false)
    const [processorError, setProcessorError] = useState(false)
    const [operatingSystemError, setOperatingSystemError] = useState(false)

    const [qwe, setqwe] = useState("sfdsfs")

    // options list array
    const [electronicsProductsColors, setElectronicsProductsColors] = useState([
        {colorId: 0},
        {colorId: 0},
        {colorId: 0},
        {colorId: 0},
        {colorId: 0},
        {colorId: 0},
        {colorId: 0},
        {colorId: 0},
        {colorId: 0},
        {colorId: 0},
        {colorId: 0},
        {colorId: 0},
        {colorId: 0}
    ])
    const [electronicsMemories, setElectronicsMemories] = useState([{memoryId: 0}, {memoryId: 0}, {memoryId: 0}, {memoryId: 0}, {memoryId: 0}, {memoryId: 0}, {memoryId: 0}, {memoryId: 0}, {memoryId: 0}, {memoryId: 0},])
    const [electronicsCameras, setElectronicsCameras] = useState([{cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}, {cameraId: 0}])
    const [electronicsFrontCameras, setElectronicsFrontCameras] = useState([{frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}, {frontCameraId: 0}])
    const [electronicsOperatingSystems, setElectronicsOperatingSystems] = useState([{operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}, {operatingSystemId: 0}])
    const [electronicsDisplayTypes, setElectronicsDisplayTypes] = useState([{displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}, {displayTypeId: 0}])
    const [electronicsCellularTechnologies, setElectronicsCellularTechnologies] = useState([{cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}, {cellularTechnologyId: 0}])
    const [electronicsProcessors, setElectronicsProcessors] = useState([{processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}, {processorId: 0}])
    const [electronicsRams, setElectronicsRams] = useState([{ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}, {ramId: 0}])
    const [electronicsGraphicsCards, setElectronicsGraphicsCards] = useState([{graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}, {graphicsCardId: 0}])
    const [electronicsComputerTypes, setElectronicsComputerTypes] = useState([{typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}, {typeId: 0}])

    const [electronicsBatteries, setElectronicsBatteries] = useState(null)
    const [electronicsScreenSizes, setElectronicsScreenSizes] = useState(null)

    const [batteriesCount, setBatteriesCount] = useState(0)
    const [screenSizesCount, setScreenSizesCount] = useState(0)

    const [battery, setBattery] = useState(null)
    const [screenSize, setScreenSize] = useState(null)


    const addBattery = (battery) => {

        if (battery) {

            setBatteriesCount(batteriesCount + 1);

            if (electronicsBatteries === null) {
                setElectronicsBatteries([{
                    battery: battery,
                    index: batteriesCount + 1
                }])
                setBattery("")
            } else {

                let newArr = [...electronicsBatteries]

                if (electronicsBatteries.filter(battery => battery.battery === battery)) {
                    newArr.push({
                        battery: battery,
                        index: batteriesCount + 1
                    })

                    setElectronicsBatteries(newArr);
                    setBattery("")
                }

            }
        }
    }


    const deleteBattery = (index) => {

        setBatteriesCount(batteriesCount - 1);
        let newArr = electronicsBatteries.filter(battery => battery.index !== index);
        setElectronicsBatteries(newArr);
    }


    const addScreenSize = (size) => {

        if (screenSize) {

            setScreenSizesCount(screenSizesCount + 1);

            if (electronicsScreenSizes === null) {
                setElectronicsScreenSizes([{
                    screenSize: parseFloat(size),
                    index: screenSizesCount + 1
                }])
                setScreenSize("")

            } else {

                let newArr = [...electronicsScreenSizes]

                if (electronicsScreenSizes.filter(size => size.screenSize === size)) {
                    newArr.push({
                        screenSize: parseFloat(size),
                        index: screenSizesCount + 1
                    })

                    setElectronicsScreenSizes(newArr);
                    setScreenSize("")
                }
            }
        }
    }


    const deleteScreenSize = (index) => {

        setScreenSizesCount(screenSizesCount - 1);
        let newArr = electronicsScreenSizes.filter(size => size.index !== index);
        setElectronicsScreenSizes(newArr);
    }


    const setColor = (index) => {

        let newArr = [...electronicsProductsColors]
        newArr[index].colorId === index + 1 ?
            newArr[index].colorId = 0
            : newArr[index].colorId = index + 1;

        setElectronicsProductsColors(newArr);
    }


    const setOption = (option, optionId, index) => {
        if (option === "electronics_camera") {

            let newArr = [...electronicsCameras]
            newArr[index].cameraId === optionId ?
                newArr[index].cameraId = 0
                : newArr[index].cameraId = optionId

            setElectronicsCameras(newArr);

        }  if (option === "electronics_cellular_technology") {

            let newArr = [...electronicsCellularTechnologies]
            newArr[index].cellularTechnologyId === optionId ?
                newArr[index].cellularTechnologyId = 0
                : newArr[index].cellularTechnologyId = optionId

            setElectronicsCellularTechnologies(newArr);
        }  if (option === "electronics_computer_type") {

            let newArr = [...electronicsComputerTypes]
            newArr[index].typeId === optionId ?
                newArr[index].typeId = 0
                : newArr[index].typeId = optionId

            setElectronicsComputerTypes(newArr);
        }  if (option === "electronics_display_types") {

            let newArr = [...electronicsDisplayTypes]
            newArr[index].displayTypeId === optionId ?
                newArr[index].displayTypeId = 0
                : newArr[index].displayTypeId = optionId

            setElectronicsDisplayTypes(newArr);
        }  if (option === "electronics_front_camera") {

            let newArr = [...electronicsFrontCameras]
            newArr[index].frontCameraId === optionId ?
                newArr[index].frontCameraId = 0
                : newArr[index].frontCameraId = optionId

            setElectronicsFrontCameras(newArr);
        }  if (option === "electronics_graphics_card") {

            let newArr = [...electronicsGraphicsCards]
            newArr[index].typeId === optionId ?
                newArr[index].typeId = 0
                : newArr[index].typeId = optionId

            setElectronicsGraphicsCards(newArr);
        }  if (option === "electronics_memory") {

            let newArr = [...electronicsMemories]
            newArr[index].memoryId === optionId ?
                newArr[index].memoryId = 0
                : newArr[index].memoryId = optionId

            setElectronicsMemories(newArr);
        }  if (option === "electronics_operating_system") {

            let newArr = [...electronicsOperatingSystems]
            newArr[index].operatingSystemId === optionId ?
                newArr[index].operatingSystemId = 0
                : newArr[index].operatingSystemId = optionId

            setElectronicsOperatingSystems(newArr);
        }  if (option === "electronics_processor") {

            let newArr = [...electronicsProcessors]
            newArr[index].processorId === optionId ?
                newArr[index].processorId = 0
                : newArr[index].processorId = optionId

            setElectronicsProcessors(newArr);
        }  if (option === "electronics_ram") {

            let newArr = [...electronicsRams]
            newArr[index].ramId === optionId ?
                newArr[index].ramId = 0
                : newArr[index].ramId = optionId

            setElectronicsRams(newArr);
        }

    }


    useEffect(() => {

            props.setElectronicsProductsColors(electronicsProductsColors)
            props.setElectronicsMemories(electronicsMemories)
            props.setElectronicsCameras(electronicsCameras)
            props.setElectronicsFrontCameras(electronicsFrontCameras)
            props.setElectronicsOperatingSystems(electronicsOperatingSystems)
            props.setElectronicsDisplayTypes(electronicsDisplayTypes)
            props.setElectronicsCellularTechnologies(electronicsCellularTechnologies)
            props.setElectronicsBatteries(electronicsBatteries)
            props.setElectronicsProcessors(electronicsProcessors)
            props.setElectronicsRams(electronicsRams)
            props.setElectronicsGraphicsCards(electronicsGraphicsCards)
            props.setElectronicsComputerTypes(electronicsComputerTypes)
            props.setElectronicsScreenSizes(electronicsScreenSizes)

    }, [electronicsBatteries, electronicsCameras, electronicsCellularTechnologies, electronicsComputerTypes, electronicsDisplayTypes, electronicsFrontCameras, electronicsGraphicsCards, electronicsMemories, electronicsOperatingSystems, electronicsProcessors, electronicsProductsColors, electronicsRams, electronicsScreenSizes, props, props.addProductLoading])


    useEffect(() => {

        if (FetchOptions("electronics_camera", props.categoryId).length === 0) {
            setCameraError(true)
        } else {
            setCameraError(false)
        }

        if (FetchOptions("electronics_cellular_technology", props.categoryId).length === 0) {
            setCellularTechnologiesError(true)
        } else {
            setCellularTechnologiesError(false)
        }

        if (FetchOptions("electronics_computer_type", props.categoryId).length === 0) {
            setComputerTypeError(true)
        } else {
            setComputerTypeError(false)
        }


        if (FetchOptions("electronics_display_types", props.categoryId).length === 0) {
            setDisplayTypeError(true)
        } else {
            setDisplayTypeError(false)
        }

        if (FetchOptions("electronics_front_camera", props.categoryId).length === 0) {
            setFrontCameraError(true)
        } else {
            setFrontCameraError(false)
        }

        if (FetchOptions("electronics_graphics_card", props.categoryId).length === 0) {
            setGraphicsCardError(true)
        } else {
            setGraphicsCardError(false)
        }

        if (FetchOptions("electronics_memory", props.categoryId).length === 0) {
            setMemoryError(true)
        } else {
            setMemoryError(false)
        }

        if (FetchOptions("electronics_operating_system", props.categoryId).length === 0) {
            setOperatingSystemError(true)
        } else {
            setOperatingSystemError(false)
        }

        if (FetchOptions("electronics_processor", props.categoryId).length === 0) {
            setProcessorError(true)
        } else {
            setProcessorError(false)
        }

        if (FetchOptions("electronics_ram", props.categoryId).length === 0) {
            setRamError(true)
        } else {
            setRamError(false)
        }

    }, [props.categoryId])


    return (
        <>

            {!cameraError || !cellularTechnologiesError || !computerTypeError || !displayTypeError || !frontCameraError || !graphicsCardError || !memoryError || !ramError || !processorError || !operatingSystemError ?

                <div className="form colors">

                    <p>Choose Colors</p>

                    <div className="d-flex">

                        <input onClick={() => {
                            setColor(0)
                        }} className="bg-white" type="checkbox"/>
                        <input onClick={() => {
                            setColor(1)
                        }} className="bg-dark" type="checkbox"/>
                        <input onClick={() => {
                            setColor(2)
                        }} className="bg-danger" type="checkbox"/>
                        <input onClick={() => {
                            setColor(3)
                        }} className="bg-primary" type="checkbox"/>
                        <input onClick={() => {
                            setColor(4)
                        }} className="bg-secondary" type="checkbox"/>
                        <input onClick={() => {
                            setColor(5)
                        }} className="bg-success" type="checkbox"/>
                        <input onClick={() => {
                            setColor(6)
                        }} className="bg-yellow" type="checkbox"/>
                        <input onClick={() => {
                            setColor(7)
                        }} className="bg-orange" type="checkbox"/>
                        <input onClick={() => {
                            setColor(8)
                        }} className="bg-brown" type="checkbox"/>
                        <input onClick={() => {
                            setColor(9)
                        }} className="bg-pink" type="checkbox"/>
                        <input onClick={() => {
                            setColor(10)
                        }} className="bg-cream" type="checkbox"/>
                        <input onClick={() => {
                            setColor(11)
                        }} className="bg-silver" type="checkbox"/>
                        <div onClick={() => {
                            setColor(12)
                        }}
                             className={electronicsProductsColors[12].colorId !== 0 ? "other-color active-other-color" : "other-color"}>
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                        </div>
                    </div>
                </div>

                : null}


            {cameraError === false &&

            <div className="form options align-items-start">

                <p>Camera - mp</p>

                <div className="items">
                    {FetchOptions("electronics_camera", props.categoryId).map((option, index) => (

                        <div onClick={() => {
                            setOption("electronics_camera", parseInt(option.cameraId), index)
                        }} className={electronicsCameras[index].cameraId !== 0 ? "item active-option-item" : "item"}>
                            <span>{option.cameraMp}</span>
                        </div>
                    ))}
                </div>
            </div>
            }


            {cellularTechnologiesError === false &&

            <div className="form options align-items-start">

                <p>Cellular Technologies</p>

                <div className="items">
                    {FetchOptions("electronics_cellular_technology", props.categoryId).map((option, index) => (
                        <div onClick={() => {
                            setOption("electronics_cellular_technology", parseInt(option.cellularTechnologyId), index)
                        }}
                             className={electronicsCellularTechnologies[index].cellularTechnologyId !== 0 ? "item active-option-item" : "item"}>
                            <span>{option.cellularTechnology}</span>
                        </div>
                    ))}
                </div>
            </div>
            }


            {computerTypeError === false &&

            <div className="form options align-items-start">

                <p>Type</p>

                <div className="items">
                    {FetchOptions("electronics_computer_type", props.categoryId).map((option, index) => (
                        <div onClick={() => {
                            setOption("electronics_computer_type", parseInt(option.typeId), index)
                        }}
                             className={electronicsComputerTypes[index].typeId !== 0 ? "item active-option-item" : "item"}>
                            <span>{option.type}</span>
                        </div>
                    ))}
                </div>
            </div>
            }


            {displayTypeError === false &&

            <div className="form options align-items-start">

                <p>Display Type</p>

                <div className="items">
                    {FetchOptions("electronics_display_types", props.categoryId).map((option, index) => (
                        <div onClick={() => {
                            setOption("electronics_display_types", parseInt(option.displayTypeId), index)
                        }}
                             className={electronicsDisplayTypes[index].displayTypeId !== 0 ? "item active-option-item" : "item"}>
                            <span>{option.displayType}</span>
                        </div>
                    ))}
                </div>
            </div>
            }


            {frontCameraError === false &&

            <div className="form options align-items-start">

                <p>Front Camera</p>

                <div className="items">
                    {FetchOptions("electronics_front_camera", props.categoryId).map((option, index) => (
                        <div onClick={() => {
                            setOption("electronics_front_camera", parseInt(option.frontCameraId), index)
                        }}
                             className={electronicsFrontCameras[index].frontCameraId !== 0 ? "item active-option-item" : "item"}>
                            <span>{option.frontCamera}</span>
                        </div>
                    ))}
                </div>
            </div>
            }


            {graphicsCardError === false &&

            <div className="form options align-items-start">

                <p>Graphics Card</p>

                <div className="items">
                    {FetchOptions("electronics_graphics_card", props.categoryId).map((option, index) => (
                        <div onClick={() => {
                            setOption("electronics_graphics_card", parseInt(option.graphicsCardId), index)
                        }}
                             className={electronicsGraphicsCards[index].graphicsCardId !== 0 ? "item active-option-item" : "item"}>
                            <span>{option.graphicsCardModel}</span>
                        </div>
                    ))}
                </div>
            </div>
            }


            {memoryError === false &&

            <div className="form options align-items-start">
                <p>Memory</p>

                <div className="items">
                    {FetchOptions("electronics_memory", props.categoryId).map((option, index) => (
                        <div onClick={() => {
                            setOption("electronics_memory", parseInt(option.memoryId), index)
                        }} className={electronicsMemories[index].memoryId !== 0 ? "item active-option-item" : "item"}>
                            <span>{option.memoryGb}Gb</span>
                        </div>
                    ))}
                </div>
            </div>
            }


            {operatingSystemError === false &&

            <div className="form options align-items-start">
                <p>Operating System</p>

                <div className="items">
                    {FetchOptions("electronics_operating_system", props.categoryId).map((option, index) => (
                        <div onClick={() => {
                            setOption("electronics_operating_system", parseInt(option.operatingSystemId), index)
                        }}
                             className={electronicsOperatingSystems[index].operatingSystemId !== 0 ? "item active-option-item" : "item"}>
                            <span>{option.operatingSystem}</span>
                        </div>
                    ))}
                </div>
            </div>
            }


            {processorError === false &&

            <div className="form options align-items-start">
                <p>Processor</p>

                <div className="items">
                    {FetchOptions("electronics_processor", props.categoryId).map((option, index) => (
                        <div onClick={() => {
                            setOption("electronics_processor", parseInt(option.processorId), index)
                        }}
                             className={electronicsProcessors[index].processorId !== 0 ? "item active-option-item" : "item"}>
                            <span>{option.processor}</span>
                        </div>
                    ))}
                </div>
            </div>
            }


            {ramError === false &&

            <div className="form options align-items-start">
                <p>Ram - Gb</p>

                <div className="items">
                    {FetchOptions("electronics_ram", props.categoryId).map((option, index) => (
                        <div onClick={() => {
                            setOption("electronics_ram", parseInt(option.ramId), index)
                        }} className={electronicsRams[index].ramId !== 0 ? "item active-option-item" : "item"}>
                            <span>{option.ramGb}</span>
                        </div>
                    ))}
                </div>
            </div>

            }


            {props.quantity !== 0 && props.quantity && (!cameraError || !cellularTechnologiesError || !computerTypeError || !displayTypeError || !frontCameraError || !graphicsCardError || !memoryError || !ramError || !processorError || !operatingSystemError) ?

                <div className="battery-form form options align-items-start">

                    <p>Battery - mAh</p>

                    <div className="items input-items d-flex flex-column">

                        {electronicsBatteries &&

                        electronicsBatteries.map((battery_map) => (
                            <div className="input-item d-flex">
                                <input readOnly={true} type="text" value={battery_map.battery}/>

                                <i onClick={() => {
                                    deleteBattery(battery_map.index)
                                }} className="bi bi-x-circle"/>
                            </div>
                        ))
                        }

                        {props.quantity > batteriesCount &&

                        <div className="input-item d-flex">
                            <input value={battery} onChange={(e) => {
                                setBattery(e.target.value.replace(/\D/, ''))
                            }} type="text"/>
                            <i onClick={() => {
                                addBattery(battery)
                            }} className="bi bi-plus-circle-fill"/>
                        </div>
                        }

                    </div>
                </div>

                : null}

            {props.quantity !== 0 && props.quantity && (!cameraError || !cellularTechnologiesError || !computerTypeError || !displayTypeError || !frontCameraError || !graphicsCardError || !memoryError || !ramError || !processorError || !operatingSystemError) ?

                <div className="form options align-items-start">

                    <p>Screen Size - inch</p>

                    <div className="items input-items d-flex flex-column">

                        {electronicsScreenSizes &&

                        electronicsScreenSizes.map((size_map) => (
                            <div className="input-item d-flex">
                                <input readOnly={true} type="text" value={size_map.screenSize}/>

                                <i onClick={() => {
                                    deleteScreenSize(size_map.index)
                                }} className="bi bi-x-circle"/>
                            </div>
                        ))
                        }

                        {props.quantity > screenSizesCount &&
                        <div className="input-item d-flex">
                            <input value={screenSize}
                                   onChange={(e) => {
                                       let val = e.target.value;
                                       if (isNaN(val)) {
                                           val = val.replace(/[^0-9\.]/g, '');
                                           if (val.split('.').length > 2)
                                               val = val.replace(/\.+$/, "");
                                       }
                                       setScreenSize(val)
                                   }}
                                   type="text"/>
                            <i onClick={() => {
                                addScreenSize(screenSize)
                            }} className="bi bi-plus-circle-fill"/>
                        </div>
                        }

                    </div>

                </div>
                : null}


            {!cameraError || !cellularTechnologiesError || !computerTypeError || !displayTypeError || !frontCameraError || !graphicsCardError || !memoryError || !ramError || !processorError || !operatingSystemError ?
                <hr/>
                : null}

        </>
    );
}

export default ElectronicsOptions;