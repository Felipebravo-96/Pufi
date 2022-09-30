import s from './navbar.module.css'
import {Link} from "react-router-dom"
import {BsFillCloudFill, BsFillUmbrellaFill, BsFillBasketFill, BsFillMouse3Fill} from 'react-icons/bs'


function Navbar(){
    return(
        <div className={s.container}>
            <div className={s.logo}>
                <Link to={'/'}>
                    <h1>Pufi</h1>
                </Link>
            </div>
            <div className={s.links}>
                <div className={s.puff}>
                    <Link  to={'/puff'}>
                        <BsFillCloudFill className={s.icon}/>
                        <h1>PUFI PUFF</h1>
                    </Link>
                </div>
                <div className={s.rain}>
                    <Link to={'/rain'}>
                        <BsFillUmbrellaFill className={s.icon}/>
                        <h1>PUFI RAIN</h1>
                    </Link>
                </div>
                <div className={s.cart}>
                    <Link to={'/cart'}>
                        <BsFillBasketFill className={s.icon}/>
                        <h1>PUFI CART</h1>
                    </Link>
                </div>
                <div>
                    <Link to={'/nap'}>
                        <BsFillMouse3Fill className={s.icon}/>
                        <h1>PUFI NAP</h1>
                    </Link>
                </div> 
            </div>
            <div className={s.account}>
                <div className={s.puff}>
                    <h1>MI CUENTA</h1>
                </div>
                <div>
                    <h1>MI COMPRA</h1>
                </div>             
            </div>
        </div>
    )
}

export default Navbar