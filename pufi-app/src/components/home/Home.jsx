import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import style from './home.module.css'
import {Link} from "react-router-dom"

function Home(){
    return(
        <div className={style.mainContainer}>
            <div className={style.containers}>
                <div className={style.header}>
                    <Navbar/>
                </div>
                <div className={style.body}>
                    <div className={style.frase}>
                        <h1 className={style.font}>ESTÁR CÓMODO,<br/> NUNCA FUE TAN FÁCIL</h1>
                    </div>
                    <div>
                        <button className={style.button}>SHOP</button>
                    </div>
                    <div className={style.circleDiv}>
                        <Link to={'/'}>
                            <button  className={style.circle}></button>
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

export default Home
