import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {fetchCategoryActions, fetchCategoryActionTypes} from "./Store/FetchCategory/"
import {fetchProductsActions} from "./Store/FetchProducts";
import {authActions, authActionTypes} from "./Store/Auth";
import {Routing} from "./Routing";
import './Styles/index.sass'
import 'antd/dist/antd.css';
function App() {
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }




    useEffect(() => {
        dispatch(fetchCategoryActions.fetchCategory())
        dispatch(fetchProductsActions.fetchProducts())
    },[])




    const [value,setValue] = useState('')
    const optionChange = (e) => {
        setValue(e.target.value)
    }


  return <Routing />

}



export default App
