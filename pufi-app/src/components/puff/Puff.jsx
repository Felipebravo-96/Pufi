import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import style from "./puff.module.css"

function Puff(){

    return(
        <div>
        <div className={style.mainContainer}>
            <div className={style.containers}>
                <div className={style.header}>
                    <Navbar/>
                </div>
                <div className={style.body}>
                    <div className={style.frase}>
                        <img src="https://www.happers.es/server/Portal_0010674/img/products/happers-to-go-gris-claro_1726268.webp" alt="img" className={style.img}/>
                        <h1 className={style.title}>Pufi PUFF</h1>
                        <p>Por su peso y tamaño es el asiento perfecto para transportarlo y sentarte cómodamente en la playa, piscina, camping, picnic o cualquier excursión.</p>
                        <h5> VER MAS</h5>
                    </div>
                    <div className={style.image}>
                        <button className={style.button}>SHOP</button>
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

export default Puff