import icon from '../img/icon.svg'
import circles from '../img/circles.svg'
import promocion from '../img/promocion_registro.png'
import '../Sass/PageStyle.scss'
import Form from './Form'
import emojis from '../img/emojis.svg'
import registro from '../img/registro.svg'
import ticket from '../img/ticket.svg'
import smart from '../img/smart.svg'
import iconBlue from '../img/iconBlue.svg'
import Carousel from './Carousel'
import libro from '../img/libro.png'
import FB from '../img/FB.png'
import LK from '../img/LK.png'
import TW from '../img/TW.png'
import telefono from '../img/telefono.svg'
import linea_roja from '../img/linea_roja.svg'


function Page() {
    return (
        <div className='all'>
            <header className="Header">
                <img src={icon} alt="icon" className='Iconimg' />
            </header>

            <div className='first_section'>

                <div className='section_left'>

                    <section className='Circle_text'>
                        <img src={circles} alt="circles" />
                        <p className='texto'>ES HORA DE</p>
                    </section>
                    <section className='cyber_days'>
                        <p>
                            <span className='span1'>CYBER DAYS</span> <br /> <span className='span2'>EN</span> <span className='span3'>Más uno <img src={linea_roja} alt="" className='linea_roja' /></span> </p>

                        <p className='fecha'>Del 28 al 30 de marzo</p>
                        <img src={promocion} alt="promocion" className='promocion' />
                    </section>

                </div>
                <div className='section_right'>
                    <Form />
                </div>
            </div>
            <section className='second_section'>
                <img src={emojis} alt="emojis" className='emojis' />
                <div className='linea'></div>
                <article className='articulo_pasos'>
                    <h3 className='titulo_pregunta'>¿Como obtengo el descuento por Cyber Days?</h3>
                    <img src={linea_roja} alt="" />
                    <p className='subtitle'>Para adquirir nuestro descuento especial por <span className='cyber'>Cyber Days
                    </span> sigue los siguientes pasos</p>
                    <div className='Los_pasos'>
                        <div className='paso'>
                            <h4 id='h4'>Paso 1</h4>
                            <div className='imagen_pasos'>
                                <img src={registro} alt="" />
                            </div>
                            <h4 id='h4'>Regístrate</h4>
                            <p >Completa el formulario con tus <br />datos personales y acepta los términos.</p>
                        </div>
                        <div className='paso'>
                            <h4 id='h4'>Paso 2</h4>
                            <div className='imagen_pasos'>
                                <img src={ticket} alt="" />
                            </div>
                            <h4 id='h4'>Recibe un cupón</h4>
                            <p > Recibirás un correo electrónico<br /> donde podrás ver el cupón de descuento.</p>
                        </div>
                        <div className='paso'>
                            <h4 id='h4'>Paso 3</h4>
                            <div className='imagen_pasos'>
                                <img src={smart} alt="" />
                            </div>
                            <h4 id='h4'>  Empieza a ahorrar</h4>
                            <p >¡Y listo! Podrás usarlo del 28 al 30 de <br />Marzo por compras en nuestra tienda online.</p>
                        </div>
                    </div>
                </article>
                <img src={emojis} alt="emojis" className='emojis' />
                <div className='linea'></div>
                <div className='intro_carrusel'>
                    <img src={iconBlue} alt="iconBlue" />
                    <h3 id='title_corausel'>Las mejores tecnologias de Más uno</h3>
                    <img src={linea_roja} alt="" />
                </div>
                <Carousel />
            </section>
            <footer>
                <div class="nosotros">
                    <img src={icon} alt="icon" />
                    <h3>Nosotros</h3>
                    <p>Somos Mas uno</p>
                </div>

                <div class="informacion">
                    <h3>Te informamos</h3>
                    <p>Preguntas frecuentes</p>
                    <p>Términos y condiciones</p>
                    <p>Medios de pago</p>
                    <p>Políticas de entrega</p>
                    <p>Libro de reclamaciones</p>
                    <img src={libro} alt="libro" />
                </div>

                <div class="contacto">
                    <h3>Contactanos</h3>
                    <section class="numero_T">
                        <img src={telefono} alt="telefono" class="telefono" />
                        <p>000-000-000</p>
                    </section>

                    <img src={FB} alt="FB" className='redes' />
                    <img src={TW} alt="TW" className='redes' />
                    <img src={LK} alt="LK" className='redes' />

                </div>

            </footer>

        </div>
    )

}

export default Page