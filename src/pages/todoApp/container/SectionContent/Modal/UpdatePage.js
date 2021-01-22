import React, {useEffect, useRef} from "react"
import {useFormik} from "formik"
import {ReactComponent as Closed} from "../../../../../assets/icons/delete-icon.svg"
import * as yup from "yup"
import styles from "./update.module.css"

function UpdatePage({closeModal,valuesUpdate,title,id}){
    const {getFieldProps,errors,handleSubmit} = useFormik({
        initialValues:{
            title:title
        },
        validateOnChange:false,
        validateOnBlur:false,
        validationSchema:yup.object({
            title:yup.string().required("Campo Obrigatório")
        }),
        onSubmit(value,formikBag){
            formikBag.setFieldValue("title",'',false)
            valuesUpdate(id,value.title)
            closeModal()
        }   

    })
    //referenciando
    const inpuTitle = useRef(null)
    useEffect(()=>{
        inpuTitle.current.focus();
    },[inpuTitle])
    return(
        <>
        <section className={styles.sectionU}>
            <div className={styles.modal} onClick={closeModal}></div>
            <div className={styles.container}>
                <button onClick={closeModal}><Closed/> </button>
                <form  onSubmit={handleSubmit}>
                    <div>
                        <input ref={inpuTitle} type="text" placeholder="Digite Sua tarefa"
                        {...getFieldProps("title")}/>
                        {errors.title ? (<span>{errors.title}</span>):null}
                    </div>
                    <div>
                        <input type="submit" value="Atualizar Atividade"/>
                    </div>

            </form>
            </div>
            
        </section>
        </>
    )
}
export default UpdatePage