import * as AR from './add-review-types';
import axios from "axios";

export const addReview = (review) => {

    return async dispatch => {

        dispatch(addReviewRequest());

        await axios.post("http://localhost:8080/api/products/evaluate", review)
            .catch((error) => {

                dispatch(addReviewFailure(error.message));
            })
    }
}


const addReviewRequest = () => {

    return {

        type: AR.ADD_REVIEW_REQUEST
    }

}


const addReviewSuccess = (response) => {

    return {

        type: AR.ADD_REVIEW_SUCCESS,
        payload: response
    }

}


const addReviewFailure = (error) => {

    return {

        type: AR.ADD_REVIEW_FAILURE,
        payload: error
    }

}