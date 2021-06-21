import React, {useState} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import {useDispatch} from "react-redux";
import {authActions, authActionTypes} from "../../Store/Auth";

function Authorization() {
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(true)
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const login = (form) => dispatch({type: authActionTypes.LOGIN_USER, form})
    const register = (form) => dispatch({type: authActionTypes.REGISTER_USER, form})




    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    console.log(form)
    return (
        <div className='container'>
            <div className="row pt-5">
                <div className="col-xl-5">
                    <h5>Авторизация</h5>
                    <form action="" className='d-lex'>
                        <input type="text" className='w-100 mt-3 p-2'/>
                        <input type="text" className='w-100 mt-3 p-2'/>
                    </form>
                    <button className='mt-3'>
                        Войти
                    </button>
                </div>
                <div className="col-xl-7">

                </div>
            </div>
        </div>
    );
}

export {Authorization}