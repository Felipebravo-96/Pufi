import style from './rain.module.css'
import Navbar from "../navbar/Navbar";

function Rain(){

    return(
        <div>
        <div className={style.mainContainer}>
            <div className={style.containers}>
                <div className={style.header}>
                    <Navbar/>
                </div>
                <div className={style.body}>
                    <div className={style.image}>
                        <button className={style.button}>SHOP</button>
                    </div>
                    <div className={style.frase}>
                        <img src="https://falabella.scene7.com/is/image/FalabellaCO/4269960_1?wid=800&hei=800&qlt=70" alt='image' className={style.img}/>
                        <h1 className={style.title}>Pufi RAIN</h1>
                        <p>Sombrilla Paraguas Automática 8 Varillas Fibra De Vidrio</p>
                        <h5> VER MAS</h5>
                    </div>
                </div>
                {/* <div className={style.footer}>
                    <Footer/>
                </div> */}
            </div>
        </div>
        </div>
    )
}

export default Rain