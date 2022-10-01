import s from './footer.module.css'
import {BsFillShieldLockFill, BsFacebook, BsInstagram, BsTwitter, BsFillStarFill} from 'react-icons/bs'

function Footer(){
    return(
        <div className={s.main}>
            <div className={s.container}>
                <div>
                    <h1>Pufi</h1>
                </div>
                <div className={s.products}>
                    <h1>PUFI RAIN</h1>
                    <h1>PUFI PUFF</h1>
                    <h1>PUFI CART</h1>
                    <h1>PUFI NAP</h1>
                </div>
                <div className={s.help}>
                    <h1>CONTACTO</h1>
                    <h1>AYUDA</h1>
                    <h1>CÓMO COMPRAR</h1>
                    <h1>TÉRMINOS & CONDICIONES</h1>
                </div>   
                <div className={s.safe}>
                    <h1>COMPRA 100% SEGURA</h1>
                    <div className={s.purchase}>
                        <BsFillShieldLockFill className={s.icon}/>
                        <p className={s.p}>COMPRÁ CON LA GARANTIA DE PUFI</p>
                    </div>
                </div>
                <div className={s.follow}>
                    <h1>SEGUINOS EN</h1>
                    <BsFacebook className={s.icon}/>
                    <BsInstagram className={s.icon}/>
                    <BsTwitter className={s.icon}/>
                </div> 
            </div>  
            <div className={s.copyright}>
                <div>
                    <h1>PUFI Copyright 2017 - Todos los derechos reservados</h1>
                </div>
                <div className={s.purchase}>
                    <BsFillStarFill />
                    <h1>BRANDLIVE</h1>
                </div>  
            </div>                                
        </div>
    )
}

export default Footer