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
                        <p>Hecha de un material liviano y resistente, mango ergonómico, diseñada para resguardar del sol y la lluvia.</p>
                        <h5> VER MAS</h5>
                    </div>
                </div>
 
            </div>
        </div>
        </div>
    )
}

export default Rain