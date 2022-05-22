import React, {useState, useEffect} from 'react';
import {Dropdown} from "react-bootstrap";

function Rating(props) {

    const [rating, set_rating] = useState(null);


    useEffect(() => {
        props.set_rating(rating);
    }, [rating])

    return (
        <>
            <div className="rating">
                <Dropdown alignRight>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <i className={rating > 0 ? 'bx bxs-star' : 'bx bx-star'}></i>
                        <i className={rating > 1 ? 'bx bxs-star' : 'bx bx-star'}></i>
                        <i className={rating > 2 ? 'bx bxs-star' : 'bx bx-star'}></i>
                        <i className={rating > 3 ? 'bx bxs-star' : 'bx bx-star'}></i>
                        <i className={rating > 4 ? 'bx bxs-star' : 'bx bx-star'}></i>
                        <i className="bi bi-caret-down-fill ms-1"></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>

                        {rating &&
                        <Dropdown.Item onClick={() => {
                            set_rating(null)
                        }}>
                            Clear
                        </Dropdown.Item>
                        }

                        <Dropdown.Item onClick={() => {
                            set_rating(5)
                        }}>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                        </Dropdown.Item>

                        <Dropdown.Item onClick={() => {
                            set_rating(4)
                        }}>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i class='bx bx-star'></i>
                        </Dropdown.Item>

                        <Dropdown.Item onClick={() => {
                            set_rating(3)
                        }}>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i class='bx bx-star'></i>
                            <i class='bx bx-star'></i>
                        </Dropdown.Item>

                        <Dropdown.Item onClick={() => {
                            set_rating(2)
                        }}>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i class='bx bx-star'></i>
                            <i class='bx bx-star'></i>
                            <i class='bx bx-star'></i>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => {
                            set_rating(1)
                        }}>
                            <i className='bx bxs-star'></i>
                            <i class='bx bx-star'></i>
                            <i class='bx bx-star'></i>
                            <i class='bx bx-star'></i>
                            <i class='bx bx-star'></i>
                        </Dropdown.Item>
                    </Dropdown.Menu>

                </Dropdown>
            </div>

        </>
    );
}

export default Rating;
