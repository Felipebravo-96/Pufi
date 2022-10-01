import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import {Link} from "react-router-dom"
import style from './newsletter.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import swal from 'sweetalert'
import { useState } from "react";

function Newsletter(){

    const [correo, setCorreo] = useState(["felipebravo-96@hotmail.com", "felipe@gmail.com"]);

    return(
        <div className={style.mainContainer}>
            <div className={style.containers}>
                <div className={style.header}>
                    <Navbar/>
                </div>
                <div className={style.body}>
                    <div className={style.frase}>
                        <h1 className={style.font}>NEWSLETTER</h1>
                    </div>
                    <div className={style.sub}>
                        <h1  className={style.font}>SUSCRIBETE</h1>
                        <p className={style.font}>Y enterate de todas las novedades</p>
                    </div>
                    <div>
                    <Formik
                    initialValues={{
                        email: '',
                    }}
                    validate={(values) => {
                        let errors = {};


                        //validacion correo
                        if (!values.email) {
                            errors.email = 'Por  favor ingresa un correo.'
                        } else if (!/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/.test(values.email)) {
                            errors.email = 'Escribe una direccion valida de correo.'
                        }

                        return errors;
                    }}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values.email)
                        console.log(correo)
                        let filtrar = correo.find(c  => c === values.email)
                        console.log(filtrar)
                        if(filtrar){
                            swal({
                                title:'Error',
                                text:'Correo ya suscrito',
                                icon:'error',
                                button:'OK'
                              })
                        }else{
                            swal({
                                title:'BIENVENIDO',
                                text:'Suscripcion realizada',
                                icon:'success',
                                button:'OK'
                              })
                              setCorreo([...correo, values.email])
                              console.log(correo)
                             resetForm() 
                        }
                
                    }}
                >
                    {({ errors }) => (
                        <Form >
                            <div>
                                <Field
                                    type='email'
                                    id="email"
                                    placeholder="Ingresa tu email"
                                    name="email"
                                    className={style.input}
                                />
                                <ErrorMessage name="email"  component={() => (
                                    <div className={style.inputError}>{errors.email}</div>
                                )} />
                            </div>

                            <div>
                                <button type="submit" className={style.button}>  Save </button>
                            </div>
                        </Form>
                    )}
                </Formik>
                    </div>
                    <div className={style.circleDiv}>
                        <Link to={'/'}>
                            <button className={style.circle}></button>
                        </Link>
                        <Link to={'/instagram'}>
                            <button  className={style.circle}></button>
                        </Link>
                        <Link to={'/newsletter'}>
                            <button className={style.circle}></button>
                        </Link>
                    </div>
                </div>
                <div className={style.footer}>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;