import style from './nap.module.css'
import Navbar from "../navbar/Navbar";

function Nap(){

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
                        <img src="https://http2.mlstatic.com/D_NQ_NP_739678-MCO31063172535_062019-V.jpg" className={style.img}/>
                        <h1 className={style.title}>Pufi NAP</h1>
                        <p>Materiales ligeros y duraderos que permiten un mejor confort, tamaño ideal para llevarlo siempre contigo. Variedad de colores.</p>
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

export default Nap