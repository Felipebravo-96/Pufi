import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import {Link} from "react-router-dom"
import style from './newsletter.module.css'

function Newsletter(){
    return(
        <div className={style.mainContainer}>
            <div className={style.containers}>
                <div className={style.header}>
                    <Navbar/>
                </div>
                <div className={style.body}>
                    <div >
                        <h5>NEWSLETTER</h5>
                    </div>
                    <div >
                        <h1>SUSCRIBETE</h1>
                        <p>Y enterate de todas las novedades</p>
                    </div>
                    <div>
                        <textarea></textarea>
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

export default Newsletter;