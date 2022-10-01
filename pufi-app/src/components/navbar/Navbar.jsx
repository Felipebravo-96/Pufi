import s from './navbar.module.css'
import {Link} from "react-router-dom"
import {BsFillCloudFill, BsFillUmbrellaFill, BsFillBasketFill, BsFillMouse3Fill} from 'react-icons/bs'


function Navbar(){
    return(
        <div className={s.container}>
            <div className={s.logo}>
                <Link to={'/'} className={s.text}>
                    <h1 className={s.font}>Pufi</h1>
                </Link>
            </div>
            <div className={s.links}>
                <div className={s.puff}>
                    <Link  to={'/puff'} className={s.text}>
                        <BsFillCloudFill className={s.icon}/>
                        <h1 className={s.font}>PUFI PUFF</h1>
                    </Link>
                </div>
                <div className={s.rain}>
                    <Link to={'/rain'} className={s.text}>
                        <BsFillUmbrellaFill className={s.icon}/>
                        <h1 className={s.font}>PUFI RAIN</h1>
                    </Link>
                </div>
                <div className={s.cart}>
                    <Link to={'/cart'} className={s.text}>
                        <BsFillBasketFill className={s.icon}/>
                        <h1 className={s.font}>PUFI CART</h1>
                    </Link>
                </div>
                <div>
                    <Link to={'/nap'} className={s.text}>
                        <BsFillMouse3Fill className={s.icon}/>
                        <h1 className={s.font}>PUFI NAP</h1>
                    </Link>
                </div> 
            </div>
            <div className={s.account}>
                <div className={s.puff}>
                    <h1 className={s.font}>MI CUENTA</h1>
                </div>
                <div>
                    <h1 className={s.font}>MI COMPRA</h1>
                </div>             
            </div>
        </div>
    )
}

export default Navbar