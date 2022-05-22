import React, {useEffect, useState} from 'react';
import '../../css/sellproduct.css';
import data_departments from '../../products-json/departments.json';
import FetchDepartments from "../../services/departments/fetch-departments";
import ApparelOptions from "./options/apparel-options";
import AutomativeOptions from "./options/automative-options";
import ElectronicsOptions from "./options/electronics-options";
import MusicOptions from "./options/music-options";
import JobOptions from "./options/job-options";
import HomeOptions from "./options/home-options";
import currencies from '../../products-json/currency/currencies.json';
import LoadingPhoto from "../../animations/components/sell-product/LoadingPhoto";
import Loading from "../../animations/components/login/Loading";
import {useDispatch} from "react-redux";
import {app} from "../../services/firebase/firebase"
import {v4 as uuid} from 'uuid';
import {sellProduct as addProduct} from "../../services";

const SellProduct = () => {

    useEffect(() => {


    }, [])

    const dispatch = useDispatch();

    const data_currencies = currencies.sort((a, b) => a.id.localeCompare(b.id))

    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(undefined);

    const [categoriesList, setCategoriesList] = useState(null);
    const [subCategoriesList, setSubCategoriesList] = useState(null);
    const [subCategoriesTypesList, setSubCategoriesTypesList] = useState(null);
    const [brandsList, setBrandsList] = useState(null);
    const [modelsList, setModelsList] = useState(null);

    // product's properties
    const [productDepartment, setProductDepartment] = useState({departmentId: 0})
    const [productCategory, setProductCategory] = useState({categoryId: 0})
    const [productsSubcategories, setProductsSubcategories] = useState({subCategoryId: 0})
    const [productsSubcategoriesType, setProductsSubcategoriesType] = useState({subCategoryTypeId: 0})
    const [productBrand, setProductBrand] = useState({brandId: 0})
    const [productModel, setProductModel] = useState({modelId: 0})

    const [productPhotoIndex, setProductPhotoIndex] = useState(0)

    const [productQuantity, setProductQuantity] = useState(0)
    const [productPrice, setProductPrice] = useState(0)
    const [productOldPrice, setProductOldPrice] = useState(0)
    const [productWeight, setProductWeight] = useState(undefined)
    const [productShortDesc, setProductShortDesc] = useState(undefined)
    const [productLongDesc, setProductLongDesc] = useState(undefined)
    const [productStatus, setProductStatus] = useState(undefined)
    const [productWarranty, setProductWarranty] = useState(undefined)
    const [productDomesticShipping, setProductDomesticShipping] = useState(undefined)
    const [productInternationalShipping, setProductInternationalShipping] = useState(undefined)
    const [productYear, setProductYear] = useState(undefined)
    const [productCurrency, setProductCurrency] = useState(undefined)

    const [productsPictures, setProductsPictures] = useState([
        {pathId: 1, picturePath: '', fileName: '', loading: false},
        {pathId: 2, picturePath: '', fileName: '', loading: false},
        {pathId: 3, picturePath: '', fileName: '', loading: false},
        {pathId: 4, picturePath: '', fileName: '', loading: false},
        {pathId: 5, picturePath: '', fileName: '', loading: false},
        {pathId: 6, picturePath: '', fileName: '', loading: false}
    ])
    const [productPicturesCount, setProductPicturesCount] = useState(0)


    // product's properties options

    //apparel options
    const [apparelProductsColors, setApparelProductsColors] = useState(null)
    const [apparelSizes, setApparelSizes] = useState(null)
    const [apparelFabricTypes, setApparelFabricTypes] = useState(null)

    // automotive options
    const [automotiveProductsColors, setAutomotiveProductsColors] = useState(null)
    const [automotiveMaxSpeeds, setAutomotiveMaxSpeeds] = useState(null)
    const [automotiveFuels, setAutomotiveFuels] = useState(null)
    const [automotiveSeats, setAutomotiveSeats] = useState(null)
    const [automotiveTypes, setAutomotiveTypes] = useState(null)
    const [automotiveCrashes, setAutomotiveCrashes] = useState(null)
    const [automotiveDistanceTraveleds, setAutomotiveDistanceTraveleds] = useState(null)
    const [automotiveEngines, setAutomotiveEngines] = useState(null)

    // electronics options
    const [electronicsProductsColors, setElectronicsProductsColors] = useState(null)
    const [electronicsMemories, setElectronicsMemories] = useState(null)
    const [electronicsCameras, setElectronicsCameras] = useState(null)
    const [electronicsFrontCameras, setElectronicsFrontCameras] = useState(null)
    const [electronicsWirelessCarriers, setElectronicsWirelessCarriers] = useState(null)
    const [electronicsOperatingSystems, setElectronicsOperatingSystems] = useState(null)
    const [electronicsScreenSizes, setElectronicsScreenSizes] = useState(null)
    const [electronicsDisplayTypes, setElectronicsDisplayTypes] = useState(null)
    const [electronicsCellularTechnologies, setElectronicsCellularTechnologies] = useState(null)
    const [electronicsBatteries, setElectronicsBatteries] = useState(null)
    const [electronicsProcessors, setElectronicsProcessors] = useState(null)
    const [electronicsRams, setElectronicsRams] = useState(null)
    const [electronicsGraphicsCards, setElectronicsGraphicsCards] = useState(null)
    const [electronicsComputerTypes, setElectronicsComputerTypes] = useState(null)

    //music options
    const [musicInstruments, setMusicInstruments] = useState(null)

    // job options
    const [productsJobOptions, setProductsJobOptions] = useState(null);

    // home options
    const [productsHomeOptions, setProductsHomeOptions] = useState(null);


    const assignNullWhenChangeDepartment = () => {

        setCategoriesList(undefined);
        setSubCategoriesList(undefined)
        setSubCategoriesTypesList(undefined)
        setBrandsList(undefined)
        setModelsList(undefined)

        // product's properties
        setProductDepartment({departmentId: 0})
        setProductCategory({categoryId: 0})
        setProductsSubcategories({subCategoryId: 0})
        setProductsSubcategoriesType({subCategoryTypeId: 0})
        setProductBrand({brandId: 0})
        setProductModel({modelId: 0})

        // product's properties options
        setApparelProductsColors(null)
        setApparelSizes(null)
        setApparelFabricTypes(null)
        setAutomotiveProductsColors(null)
        setAutomotiveMaxSpeeds(null)
        setAutomotiveFuels(null)
        setAutomotiveSeats(null)
        setAutomotiveTypes(null)
        setAutomotiveCrashes(null)
        setAutomotiveDistanceTraveleds(null)
        setAutomotiveEngines(null)
        setElectronicsProductsColors(null)
        setElectronicsMemories(null)
        setElectronicsCameras(null)
        setElectronicsFrontCameras(null)
        setElectronicsWirelessCarriers(null)
        setElectronicsOperatingSystems(null)
        setElectronicsScreenSizes(null)
        setElectronicsDisplayTypes(null)
        setElectronicsCellularTechnologies(null)
        setElectronicsBatteries(null)
        setElectronicsProcessors(null)
        setElectronicsRams(null)
        setElectronicsGraphicsCards(null)
        setElectronicsComputerTypes(null)
        setMusicInstruments(null)
        setProductsJobOptions(null)
        setProductsHomeOptions(null)
    }


    const assignNullWhenChangeCategory = () => {

        setSubCategoriesList(undefined)
        setSubCategoriesTypesList(undefined)
        setBrandsList(undefined)
        setModelsList(undefined)

        // product's properties
        setProductCategory({categoryId: 0})
        setProductsSubcategories({subCategoryId: 0})
        setProductsSubcategoriesType({subCategoryTypeId: 0})
        setProductBrand({brandId: 0})
        setProductModel({modelId: 0})

        // product's properties options
        setApparelProductsColors(null)
        setApparelSizes(null)
        setApparelFabricTypes(null)

        setAutomotiveProductsColors(null)
        setAutomotiveMaxSpeeds(null)
        setAutomotiveFuels(null)
        setAutomotiveSeats(null)
        setAutomotiveTypes(null)
        setAutomotiveCrashes(null)
        setAutomotiveDistanceTraveleds(null)
        setAutomotiveEngines(null)

        setElectronicsProductsColors(null)
        setElectronicsMemories(null)
        setElectronicsCameras(null)
        setElectronicsFrontCameras(null)
        setElectronicsWirelessCarriers(null)
        setElectronicsOperatingSystems(null)
        setElectronicsScreenSizes(null)
        setElectronicsDisplayTypes(null)
        setElectronicsCellularTechnologies(null)
        setElectronicsBatteries(null)
        setElectronicsProcessors(null)
        setElectronicsRams(null)
        setElectronicsGraphicsCards(null)
        setElectronicsComputerTypes(null)

        setMusicInstruments(null)

        setProductsJobOptions(null)
        setProductsHomeOptions(null)
    }


    const assignNullWhenChangeSubCategory = () => {

        setSubCategoriesTypesList(undefined)
        setProductsSubcategoriesType({subCategoryTypeId: 0})
        setProductsSubcategories({subCategoryId: 0})

        setApparelProductsColors(null)
        setApparelSizes(null)
        setApparelFabricTypes(null)

    }


    const assignNullWhenChangeBrand = () => {

        setProductBrand({brandId: 0})
        setProductModel({modelId: 0})
        setModelsList(null);
    }


    const fetchCategories = (e) => {

        assignNullWhenChangeDepartment();

        if (parseInt(e.target.value) !== 0) {

            if (FetchDepartments("category", e.target.value).length !== 0) {

                setCategoriesList(FetchDepartments("category", e.target.value));
            }

            setProductDepartment({departmentId: parseInt(e.target.value)})
        } else {
            assignNullWhenChangeDepartment();

        }

    }


    const fetchSubCategories = (e) => {

        assignNullWhenChangeCategory()

        let fetchId = parseInt(e.target.value);

        if (fetchId !== 0) {

            if (fetchId === 328 || fetchId === 329 || fetchId === 330 || fetchId === 331 || fetchId === 332) {

                setSubCategoriesList(FetchDepartments("sub-category", e.target.value));

            }

            setProductCategory({categoryId: parseInt(e.target.value)})

        } else {

            assignNullWhenChangeCategory()
        }
    }


    const fetchSubCategoriesType = (e) => {

        assignNullWhenChangeSubCategory()

        if (parseInt(e.target.value) !== 0) {
            if (FetchDepartments("sub-category-type", e.target.value).length !== 0) {

                setSubCategoriesTypesList(FetchDepartments("sub-category-type", e.target.value));
            }

            setProductsSubcategories({subCategoryId: parseInt(e.target.value)})

        } else {
            assignNullWhenChangeSubCategory()
        }
    }


    const fetchBrands = (e) => {

        if (parseInt(e.target.value) !== 0) {
            if (FetchDepartments("brands", e.target.value).length !== 0 && FetchDepartments("brands", e.target.value).length !== 1) {

                setBrandsList(FetchDepartments("brands", e.target.value));
            }
        }
    }

    const fetchModels = (e) => {

        assignNullWhenChangeBrand()

        if (parseInt(e.target.value) !== 0) {
            if (FetchDepartments("models", e.target.value).length !== 0) {

                setModelsList(FetchDepartments("models", e.target.value));
            }

            setProductBrand({brandId: parseInt(e.target.value)})
        } else {

            assignNullWhenChangeBrand()
        }
    }

    const setSubType = (e) => {
        if (parseInt(e.target.value) !== 0) {

            setProductsSubcategoriesType({subCategoryTypeId: parseInt(e.target.value)})
        }
    }


    const setModel = (e) => {
        if (parseInt(e.target.value) !== 0) {

            setProductModel({modelId: parseInt(e.target.value)})
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* i can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    const sellProduct = async () =>  {

        let product = {

            productPrice: parseFloat(productPrice),

            productOldPrice: parseFloat(productOldPrice),

            productWeight,

            productShortDesc,

            productLongDesc,

            productStatus,

            productWarranty,

            productDomesticShipping,

            productInternationalShipping,

            productYear,

            productCurrency,

            productsPictures,

            apparelProductsColors,

            apparelSizes,

            apparelFabricTypes,

            automotiveProductsColors,

            automotiveMaxSpeeds,

            automotiveFuels,

            automotiveSeats,

            automotiveTypes,

            automotiveCrashes,

            automotiveDistanceTraveleds,

            automotiveEngines,

            electronicsProductsColors,

            electronicsMemories,

            electronicsCameras,

            electronicsFrontCameras,

            electronicsWirelessCarriers,

            electronicsOperatingSystems,

            electronicsScreenSizes,

            electronicsDisplayTypes,

            electronicsCellularTechnologies,

            electronicsBatteries,

            electronicsProcessors,

            electronicsRams,

            electronicsGraphicsCards,

            electronicsComputerTypes,

            musicInstruments,

            productsJobOptions,

            productsHomeOptions,

            productDepartment,

            productCategory,

            productQuantity,

            productBrand,

            productModel,

            productsSubcategories,

            productsSubcategoriesType,

            accountEmail: JSON.parse(localStorage.getItem("__|^|__")) && JSON.parse(localStorage.getItem("__|^|__")).iiasrl
        }


        console.log(product)

        // if (findError()) {
        //     setError(findError())
        //     scrollToTop()
        // } else {
        //     if (!loading) {
        //         setLoading(true)
        //
        //         await dispatch(addProduct(product));
        //
        //         setTimeout(() => {
        //             window.location.href = "/company?product-has-been-added=true";
        //         }, 1000)
        //     }
        // }

    }

    // accountEmail: JSON.parse(localStorage.getItem("__|^|__")).iiasrl

    const findError = () => {
        if (productDepartment.departmentId !== 16 && !productPrice) {
            return "The price of the product cannot be blank";
        } else if (productDepartment.departmentId !== 0 && productCategory.categoryId === 0 && productDepartment.departmentId !== 21) {
            return "The category of the product cannot be blank";
        } else if (productsSubcategories.subCategoryId !== 0 && productsSubcategoriesType.subCategoryTypeId === 0) {
            return "The subcategory type of the product cannot be blank";
        } else if (productBrand.brandId === 0 && productModel.modelId === 0 && !productShortDesc && productLongDesc) {
            return "Brand , Model , Short Description , Long Description enter any of these";
        }
        return null;
    }

    const handleChooseProductPhoto = async (e) => {


        if (e.target.files[0]) {

            let newArr1 = [...productsPictures];

            newArr1[productPhotoIndex].loading = true;

            setProductsPictures(newArr1);

            let newArr = [...productsPictures];

            const file = e.target.files[0];
            const fileName = e.target.files[0].name + uuid();

            const storageRef = app.storage().ref();

            const fileRef = storageRef.child(`product-info-photos/${fileName}`);
            await fileRef.put(file);

            newArr[productPhotoIndex].picturePath = await fileRef.getDownloadURL();
            newArr[productPhotoIndex].fileName = fileName;
            newArr[productPhotoIndex].loading = false;

            setProductPicturesCount(productPicturesCount + 1)
            setProductsPictures(newArr);

        }

    }

    const deleteProductPhoto = async (index, all) => {


        const storageRef = app.storage().ref();

        let fileRef = null;


        if (all === false) {

            fileRef = storageRef.child(`product-info-photos/${productsPictures[index].fileName}`);

            await fileRef.delete().then(() => {

                let newArr = [...productsPictures];

                newArr[index].loading = false;

                newArr[index].picturePath = ''
                newArr[index].fileName = null

                setProductPicturesCount(productPicturesCount - 1)

                setProductsPictures(newArr)

            }).catch((error) => {
                console.log("File deleted failure")
            });

        } else {

            setProductPicturesCount(0)

            for (const pic of productsPictures) {

                if (pic.fileName) {

                    fileRef = storageRef.child(`product-info-photos/${pic.fileName}`);

                    await fileRef.delete().then(() => {

                        let newArr = [...productsPictures];

                        newArr[pic.pathId - 1].loading = false;

                        newArr[pic.pathId - 1].picturePath = ''
                        newArr[pic.pathId - 1].fileName = null

                        setProductsPictures(newArr)

                    }).catch((error) => {
                        console.log("File deleted failure")
                    });

                }
            }
        }

    }

    return (
        <>
            <div className="sell-product mb-5">

                {error ?
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                    :
                    <h3>Sell Products on Metbix</h3>
                }


                <div className="details">


                    <h4>Enter Product Details</h4>

                    {productDepartment.departmentId !== 16 && productDepartment.departmentId !== 2 ?

                        <div className="form quantity">

                            <p>Quantity</p>

                            <div className="input-quantity d-flex">

                                <input value={productQuantity} readOnly={true} type="text"/>

                                <div className="buttons d-flex flex-column justify-content-around">
                                    <i onClick={() => {
                                        setProductQuantity(productQuantity + 1)
                                    }} className="ri-arrow-up-s-fill"/>
                                    <i onClick={() => {
                                        if (productQuantity !== 0) {
                                            setProductQuantity(productQuantity - 1)
                                        }
                                    }} className="ri-arrow-down-s-fill"/>
                                </div>
                            </div>
                        </div>
                        : null}

                    <div className="form departments">

                        <p>Departments</p>

                        <select onChange={(e) => {
                            fetchCategories(e)
                        }}>

                            <option value="0">No selected</option>

                            {data_departments.map((department) => (
                                <option value={department.departmentId}>{department.department}</option>
                            ))}
                        </select>
                    </div>


                    {categoriesList &&
                    <div className="form categories">

                        <p>Categories</p>

                        <select onChange={(e) => {
                            fetchSubCategories(e);
                            fetchBrands(e)
                        }}>
                            <option value="0">No selected</option>

                            {categoriesList.map(category => (
                                <option value={category.categoryId}>{category.categoryName}</option>
                            ))}

                        </select>
                    </div>
                    }


                    {subCategoriesList &&
                    <div className="form subcategories">

                        <p>SubCategories</p>

                        <select onChange={(e) => {
                            fetchSubCategoriesType(e)
                        }}>
                            <option value="0">No selected</option>

                            {subCategoriesList.map(sub_category => (
                                <option value={sub_category.subCategoryId}>{sub_category.subCategoryName}</option>
                            ))}


                        </select>
                    </div>

                    }

                    {subCategoriesTypesList &&
                    <div className="form subcategory-types">

                        <p>SubCategory Types</p>

                        <select onChange={(e) => {
                            setSubType(e)
                        }}>
                            <option value="0">No selected</option>

                            {subCategoriesTypesList.map(sub_category_type => (
                                <option
                                    value={sub_category_type.subCategoryTypeId}>{sub_category_type.subCategoryTypeName}</option>
                            ))}


                        </select>
                    </div>
                    }

                    {brandsList &&
                    <div className="form brand">

                        <p>Brands</p>

                        <select onChange={(e) => {
                            fetchModels(e)
                        }}>
                            <option value="0">No selected</option>

                            {brandsList.map(brand => (
                                <option value={brand.brandId}>{brand.brandName}</option>
                            ))}

                        </select>

                    </div>
                    }


                    {modelsList &&

                    <div className="form model">

                        <p>Models</p>

                        <select onChange={(e) => {
                            setModel(e)
                        }}>
                            <option value="0">No selected</option>

                            {modelsList.map(model => (
                                <option value={model.modelId}>{model.modelName}</option>
                            ))}
                        </select>
                    </div>
                    }

                    {parseInt(productDepartment.departmentId) === 19 && productsSubcategories.subCategoryId > 0 ?
                        <ApparelOptions setApparelFabricTypes={setApparelFabricTypes} setApparelSizes={setApparelSizes}
                                        setApparelProductsColors={setApparelProductsColors} addProductLoading={loading}
                                        quantity={productQuantity}
                                        subCategoryId={productsSubcategories.subCategoryId}/>
                        : parseInt(productDepartment.departmentId) === 1 && productCategory.categoryId > 0 ?
                            <ElectronicsOptions setElectronicsComputerTypes={setElectronicsComputerTypes}
                                                setElectronicsGraphicsCards={setElectronicsGraphicsCards}
                                                setElectronicsRams={setElectronicsRams}
                                                setElectronicsProcessors={setElectronicsProcessors}
                                                setElectronicsBatteries={setElectronicsBatteries}
                                                setElectronicsCellularTechnologies={setElectronicsCellularTechnologies}
                                                setElectronicsDisplayTypes={setElectronicsDisplayTypes}
                                                setElectronicsScreenSizes={setElectronicsScreenSizes}
                                                setElectronicsOperatingSystems={setElectronicsOperatingSystems}
                                                setElectronicsWirelessCarriers={setElectronicsWirelessCarriers}
                                                setElectronicsFrontCameras={setElectronicsFrontCameras}
                                                setElectronicsCameras={setElectronicsCameras}
                                                setElectronicsMemories={setElectronicsMemories}
                                                setElectronicsProductsColors={setElectronicsProductsColors}
                                                addProductLoading={loading} quantity={productQuantity}
                                                categoryId={productCategory.categoryId}/>
                            : parseInt(productDepartment.departmentId) === 4 && productCategory.categoryId > 0 ?
                                <AutomativeOptions setAutomotiveEngines={setAutomotiveEngines}
                                                   setAutomotiveDistanceTraveleds={setAutomotiveDistanceTraveleds}
                                                   setAutomotiveCrashes={setAutomotiveCrashes}
                                                   setAutomotiveTypes={setAutomotiveTypes}
                                                   setAutomotiveSeats={setAutomotiveSeats}
                                                   setAutomotiveFuels={setAutomotiveFuels}
                                                   setAutomotiveMaxSpeeds={setAutomotiveMaxSpeeds}
                                                   setAutomotiveProductsColors={setAutomotiveProductsColors}
                                                   addProductLoading={loading} quantity={productQuantity}
                                                   categoryId={productCategory.categoryId}/>
                                : parseInt(productDepartment.departmentId) === 20 && productCategory.categoryId > 0 ?
                                    <MusicOptions setMusicInstruments={setMusicInstruments} addProductLoading={loading}
                                                  quantity={productQuantity}
                                                  categoryId={productCategory.categoryId}/>
                                    : parseInt(productDepartment.departmentId) === 16 && productCategory.categoryId > 0 ?
                                        <JobOptions setProductsJobOptions={setProductsJobOptions}
                                                    addProductLoading={loading} quantity={productQuantity}
                                                    categoryId={productCategory.categoryId}/>
                                        : parseInt(productDepartment.departmentId) === 2 && productCategory.categoryId > 0 ?
                                            <HomeOptions setProductsHomeOptions={setProductsHomeOptions}
                                                         addProductLoading={loading} quantity={productQuantity}
                                                         categoryId={productCategory.categoryId}/>
                                            : null
                    }

                    <div className="descriptions">
                        <div className="short">

                            <p>Title</p>

                            <input maxLength="120" onChange={(e) => {
                                setProductShortDesc(e.target.value)
                            }} type="text"/>
                        </div>


                        <div className="long">
                            <p>Description</p>

                            <textarea maxLength="5000" onChange={(e) => {
                                setProductLongDesc(e.target.value)
                            }} name="" id="" cols="30" rows="10"/>
                        </div>
                    </div>


                    <div className="upload-images mt-4">

                        <p>Upload Images</p>

                        <div className="images-and-video d-flex flex-wrap justify-content-between">
                            <div className="texts w-100 d-flex justify-content-between">
                                <p>You can add {6 - productPicturesCount} photos</p>

                                <p onClick={() => {
                                    deleteProductPhoto(0, true)
                                }}>{productPicturesCount > 0 && "Delete All"}</p>
                            </div>

                            <div className="main-picture">
                                {productsPictures[productPhotoIndex].picturePath ?
                                    <img src={productsPictures[productPhotoIndex].picturePath} alt=""/>
                                    :
                                    <img className="empty-index-picture" src="/images/departments/picture.png" alt=""/>
                                }
                            </div>

                            <div className="little-pictures d-flex flex-column justify-content-between">

                                <div className="image-wrapper">

                                    {productsPictures[0].loading === false && productsPictures[0].picturePath === '' ?
                                        <div>
                                            <label onClick={() => {
                                                setProductPhotoIndex(0)
                                            }} htmlFor="photo1">
                                                <img src="/images/upload-img4.png" alt=""/>
                                            </label>

                                            <input onChange={handleChooseProductPhoto} accept="image/*" id="photo1"
                                                   type="file"
                                                   autoComplete="off"/>
                                        </div>
                                        : null}

                                    {productsPictures[0].picturePath ?
                                        <img onClick={() => {
                                            setProductPhotoIndex(0)
                                        }} src={productsPictures[0].picturePath} alt=""/>

                                        : null}

                                    {productsPictures[0].loading && productsPictures[0].picturePath === '' ?
                                        <LoadingPhoto/>

                                        : null}

                                    {productsPictures[0].picturePath ?
                                        <i onClick={() => {
                                            deleteProductPhoto(0, false)
                                        }} className="bi bi-x"/>
                                        : null}

                                </div>

                                <div className="image-wrapper">

                                    {productsPictures[1].loading === false && productsPictures[1].picturePath === '' ?
                                        <div>
                                            <label onClick={() => {
                                                setProductPhotoIndex(1)
                                            }} htmlFor="photo2">
                                                <img src="/images/upload-img4.png" alt=""/>
                                            </label>

                                            <input onChange={handleChooseProductPhoto} accept="image/*" id="photo2"
                                                   type="file"
                                                   autoComplete="off"/>
                                        </div>
                                        : null}

                                    {productsPictures[1].picturePath ?
                                        <img onClick={() => {
                                            setProductPhotoIndex(1)
                                        }} src={productsPictures[1].picturePath} alt=""/>

                                        : null}

                                    {productsPictures[1].loading && productsPictures[1].picturePath === '' ?
                                        <LoadingPhoto/>

                                        : null}

                                    {productsPictures[1].picturePath ?
                                        <i onClick={() => {
                                            deleteProductPhoto(1, false)
                                        }} className="bi bi-x"/>
                                        : null}

                                </div>


                                <div className="image-wrapper">

                                    {productsPictures[2].loading === false && productsPictures[2].picturePath === '' ?
                                        <div>
                                            <label onClick={() => {
                                                setProductPhotoIndex(2)
                                            }} htmlFor="photo3">
                                                <img src="/images/upload-img4.png" alt=""/>
                                            </label>

                                            <input onChange={handleChooseProductPhoto} accept="image/*" id="photo3"
                                                   type="file"
                                                   autoComplete="off"/>
                                        </div>
                                        : null}

                                    {productsPictures[2].picturePath ?
                                        <img onClick={() => {
                                            setProductPhotoIndex(2)
                                        }} src={productsPictures[2].picturePath} alt=""/>

                                        : null}

                                    {productsPictures[2].loading && productsPictures[2].picturePath === '' ?
                                        <LoadingPhoto/>

                                        : null}

                                    {productsPictures[2].picturePath ?
                                        <i onClick={() => {
                                            deleteProductPhoto(2, false)
                                        }} className="bi bi-x"/>
                                        : null}
                                </div>


                                <div className="image-wrapper">

                                    {productsPictures[3].loading === false && productsPictures[3].picturePath === '' ?
                                        <div>
                                            <label onClick={() => {
                                                setProductPhotoIndex(3)
                                            }} htmlFor="photo4">
                                                <img src="/images/upload-img4.png" alt=""/>
                                            </label>

                                            <input onChange={handleChooseProductPhoto} accept="image/*" id="photo4"
                                                   type="file"
                                                   autoComplete="off"/>
                                        </div>
                                        : null}

                                    {productsPictures[3].picturePath ?
                                        <img onClick={() => {
                                            setProductPhotoIndex(3)
                                        }} src={productsPictures[3].picturePath} alt=""/>

                                        : null}

                                    {productsPictures[3].loading && productsPictures[3].picturePath === '' ?
                                        <LoadingPhoto/>

                                        : null}

                                    {productsPictures[3].picturePath ?
                                        <i onClick={() => {
                                            deleteProductPhoto(3, false)
                                        }} className="bi bi-x"/>
                                        : null}
                                </div>


                                <div className="image-wrapper">

                                    {productsPictures[4].loading === false && productsPictures[4].picturePath === '' ?
                                        <div>
                                            <label onClick={() => {
                                                setProductPhotoIndex(4)
                                            }} htmlFor="photo5">
                                                <img src="/images/upload-img4.png" alt=""/>
                                            </label>

                                            <input onChange={handleChooseProductPhoto} accept="image/*" id="photo5"
                                                   type="file"
                                                   autoComplete="off"/>
                                        </div>
                                        : null}

                                    {productsPictures[4].picturePath ?
                                        <img onClick={() => {
                                            setProductPhotoIndex(4)
                                        }} src={productsPictures[4].picturePath} alt=""/>

                                        : null}

                                    {productsPictures[4].loading && productsPictures[4].picturePath === '' ?
                                        <LoadingPhoto/>

                                        : null}

                                    {productsPictures[4].picturePath ?
                                        <i onClick={() => {
                                            deleteProductPhoto(4, false)
                                        }} className="bi bi-x"/>
                                        : null}
                                </div>



                                <div className="image-wrapper">

                                    {productsPictures[5].loading === false && productsPictures[4].picturePath === '' ?
                                        <div>
                                            <label onClick={() => {
                                                setProductPhotoIndex(5)
                                            }} htmlFor="photo6">
                                                <img src="/images/upload-img4.png" alt=""/>
                                            </label>

                                            <input onChange={handleChooseProductPhoto} accept="image/*" id="photo6"
                                                   type="file"
                                                   autoComplete="off"/>
                                        </div>
                                        : null}

                                    {productsPictures[5].picturePath ?
                                        <img onClick={() => {
                                            setProductPhotoIndex(5)
                                        }} src={productsPictures[5].picturePath} alt=""/>

                                        : null}

                                    {productsPictures[5].loading && productsPictures[5].picturePath === '' ?
                                        <LoadingPhoto/>

                                        : null}

                                    {productsPictures[5].picturePath ?
                                        <i onClick={() => {
                                            deleteProductPhoto(5, false)
                                        }} className="bi bi-x"/>
                                        : null}
                                </div>
                            </div>

                        </div>

                    </div>

                    <hr/>

                    {productDepartment.departmentId !== 16 &&

                    <div className="form departments mb-4">

                        <p>Currency</p>

                        <select onChange={(e) => {
                            if (e.target.value !== "0") {
                                setProductCurrency(e.target.value);
                            }
                        }}>

                            <option value="0">No selected</option>

                            {data_currencies.map((currency) => (
                                <option value={currency.id}>{currency.id}</option>
                            ))}
                        </select>
                    </div>

                    }


                    {productDepartment.departmentId !== 16 &&

                    <div className="price d-flex">

                        <p>Price</p>

                        <div className="current d-flex flex-column">
                            <span>Current Price</span>
                            <input value={productPrice} onChange={(e) => {
                                let val = e.target.value;
                                if (isNaN(val)) {
                                    val = val.replace(/[^0-9\.]/g, '');
                                    if (val.split('.').length > 2)
                                        val = val.replace(/\.+$/, "");
                                }
                                setProductPrice(val)

                            }} type="text"/>
                        </div>

                        <div className="old d-flex flex-column">
                            <span>Old Price</span>
                            <input value={productOldPrice}
                                   onChange={(e) => {
                                       let val = e.target.value;
                                       if (isNaN(val)) {
                                           val = val.replace(/[^0-9\.]/g, '');
                                           if (val.split('.').length > 2)
                                               val = val.replace(/\.+$/, "");
                                       }
                                       setProductOldPrice(val)

                                   }}

                                   type="text"/>
                        </div>

                    </div>

                    }

                    {productDepartment.departmentId !== 16 && productDepartment.departmentId !== 2 ?

                        <div>
                            <div className="form weight">
                                <p>Weight - kg</p>

                                <input onChange={(e) => {
                                    setProductWeight(e.target.value.replace(/\D/, ''))
                                }} type="text"/>
                            </div>

                            <div className="form Condition">
                                <p>Condition</p>

                                <select onChange={(e) => {
                                    if (e.target.value !== "0") {
                                        setProductStatus(e.target.value);
                                    }
                                }}>
                                    <option value="0">No Selected</option>
                                    <option value="new">New</option>
                                    <option value="used">Used</option>

                                </select></div>

                            <hr/>

                            <div className="form production-year mt-4">
                                <p>Production Year</p>

                                <input value={productYear} onChange={(e) => {
                                    setProductYear(e.target.value.replace(/\D/, ''))
                                }} type="text" autoComplete="off" placeholder="yyyy"/>
                            </div>


                            <div className="form warranty">

                                <p>Warranty</p>

                                <select onChange={(e) => {
                                    if (e.target.value !== "0") {
                                        if (e.target.value === "yes") {
                                            setProductWarranty(true)
                                        } else {
                                            setProductWarranty(false)
                                        }
                                    }
                                }}>
                                    <option value="0">No Selected</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>

                                </select>
                            </div>


                            <div className="shipping d-flex mt-3">

                                <p>Shipping</p>

                                <div className="domestic d-flex flex-column">
                                    <span>Domestic</span>
                                    <select onChange={(e) => {
                                        if (e.target.value !== "0") {
                                            if (e.target.value === "yes") {
                                                setProductDomesticShipping(true)
                                            } else {
                                                setProductDomesticShipping(false)
                                            }
                                        }
                                    }}>
                                        <option value="0">No Selected</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>

                                <div className="international d-flex flex-column">
                                    <span>International</span>
                                    <select onChange={(e) => {
                                        if (e.target.value !== "0") {
                                            if (e.target.value === "yes") {
                                                setProductInternationalShipping(true)
                                            } else {
                                                setProductInternationalShipping(false)
                                            }
                                        }
                                    }}>
                                        <option value="0">No Selected</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>

                            </div>
                        </div>

                        : null}

                    <div className="button">
                        <button onClick={() => {
                            sellProduct()
                        }}>{loading ? <Loading/> : "Submit"}</button>
                    </div>

                </div>

            </div>
        </>
    );
}

export default SellProduct;