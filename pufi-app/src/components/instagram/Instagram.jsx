import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import {Link} from "react-router-dom"
import style from './instagram.module.css'
import fotos from '../../Img/fotos.png'

function Instagram(){
    return(
        <div className={style.mainContainer}>
            <div className={style.containers}>
                <div className={style.header}>
                    <Navbar/>
                </div>
                <div className={style.body}>
                    <div className={style.frase}>
                        <h1>INSTAGRAM</h1>
                    </div>
                    <div >
                        <h1>#ESPUFI</h1>
                    </div>
                    <div>
                        <img src={fotos} alt='imagen' className={style.img}/>
                    </div>
                    <div>
                        <Link to={'/'}>
                            <button>o</button>
                        </Link>
                        <Link to={'/instagram'}>
                            <button>o</button>
                        </Link>
                        <Link to={'/newsletter'}>
                            <button>o</button>
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

export default Instagram;