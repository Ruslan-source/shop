import axios from "axios";

export const fetchCategoryActionTypes = {
    SET_CATEGORY: "CATEGORY.SET_CATEGORY",
    FETCH_CATEGORY: "CATEGORY.FETCH_CATEGORY",
    LOADING: "CATEGORY.LOADING"
}


export const fetchCategoryActions = {
    setCategory: (data,loading) => ({type: fetchCategoryActionTypes.SET_CATEGORY, payload: {
        data,loading
        }}),
    fetchCategory: () => ({type: fetchCategoryActionTypes.FETCH_CATEGORY}),
}

