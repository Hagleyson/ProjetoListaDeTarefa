import React,{useContext, useEffect,useRef} from "react";
import TodoContext from "./../../../../states/todos/Context"
import * as todoAction from "./../../../../states/todos/actions"
import {useFormik} from "formik"
import * as yup from "yup"
import styles from "./header.module.css"

function Header (){
    const {dispacth}= useContext(TodoContext);  
    const {getFieldProps,errors,handleSubmit} = useFormik({
        initialValues:{
            title:''
        },
        validateOnChange:false,
        validateOnBlur:false,
        validationSchema:yup.object({
            title:yup.string().required("Digite uma tarefa")
        }),
        onSubmit: value=> {            
            dispacth(todoAction.create(value.title))            
        }   
    })
    //referenciando
    const inpuTitle = useRef(null)
    useEffect(()=>{
        inpuTitle.current.focus();
    },[inpuTitle])
    return(
        <header>
            <form className={styles.formHeader} onSubmit={handleSubmit}>
                <div className={styles.input}>
                    <input ref={inpuTitle} type="text" placeholder="Digite Sua Tarefa"
                    {...getFieldProps("title")}/>
                    {errors.title ? (<span>{errors.title}</span>):null}
                </div>
                <div className={styles.button}>
                    <input type="submit" value="CADASTRAR ATIVIDADE"/>
                </div>
            </form>
        </header>
        )
}
export default Header