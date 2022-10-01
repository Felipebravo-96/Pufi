import style from './cart.module.css'
import Navbar from "../navbar/Navbar";



function Cart(){

    return(
        <div>
        <div className={style.mainContainer}>
            <div className={style.containers}>
                <div className={style.header}>
                    <Navbar/>
                </div>
                <div className={style.body}>
                    <div className={style.frase}>
                        <img src="https://www.tiendanipace.org/wp-content/uploads/2021/04/bolsa-reutilizable-publicitaria.jpg" className={style.img}/>
                        <h1 className={style.title}>Pufi CART</h1>
                        <p>Bolsa ecológica, con gran capacidad de carga. Diferentes estampados y colores.</p>
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

export default Cart