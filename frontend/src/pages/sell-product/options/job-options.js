import React, {useEffect, useState} from 'react';

function JobOptions(props) {

    const [jobDesc , setJobDesc] = useState(null);
    const [jobValidTime , setJobValidTime] = useState(null);
    const [jobEmail , setJobEmail] = useState(null);
    const [country , setCountry] = useState(null);
    const [city , setCity] = useState(null);
    const [salary , setSalary] = useState(null);
    const [experience , setExperience] = useState(null);


    useEffect(() => {


            const job = {
                jobDesc: jobDesc,
                jobValidTime: jobValidTime,
                jobEmail: jobEmail,
                country: country,
                city: city,
                salary: salary,
                experience:experience
            }

            if (job.jobDesc) {
                props.setProductsJobOptions(job)
            }


    }, [props, props.addProductLoading, salary])

    return (
        <>
            <div className="form options align-items-start">

                <p>Country</p>

                <div className="items">
                    <div className="input-item ">

                        <input onChange={(e) => {setCountry(e.target.value)}} type="text"/>

                    </div>
                </div>
            </div>

            <div className="form options align-items-start">

                <p>City</p>

                <div className="items">
                    <div className="input-item ">

                        <input onChange={(e) => {setCity(e.target.value)}} type="text"/>

                    </div>
                </div>
            </div>


            <div className="form options align-items-start">

                <p>Required Experience</p>

                <div className="items">
                    <div className="input-item ">

                        <input onChange={(e) => {setExperience(e.target.value)}} type="text"/>

                    </div>
                </div>
            </div>



            <div className="form options align-items-start">

                <p>Job Description</p>

                <div className="items">
                    <div className="item">

                        <textarea cols={30}  rows={5} onChange={(e) => {setJobDesc(e.target.value)}} />

                    </div>
                </div>
            </div>



            <div className="form options align-items-start">

                <p>Job Valid Time</p>

                <div className="items">
                    <div className="input-item ">

                        <input onChange={(e) => {setJobValidTime(e.target.value)}} type="date"/>

                    </div>
                </div>
            </div>



            <div className="form options align-items-start">

                <p>Email</p>

                <div className="items">
                    <div className="input-item ">

                        <input onChange={(e) => {setJobEmail(e.target.value)}} type="date"/>

                    </div>
                </div>
            </div>


            <div className="form options align-items-start">

                <p>Salary - $</p>

                <div className="items">
                    <div className="input-item ">

                        <input value={salary} onChange={(e) => {setSalary(e.target.value.replace(/\D/, ''))}} type="text"/>

                    </div>
                </div>
            </div>


            <hr/>

        </>
    );
}

export default JobOptions;