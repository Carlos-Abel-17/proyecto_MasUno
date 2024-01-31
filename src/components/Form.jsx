import '../Sass/FormStyle.scss'
import capcha from '../img/Capcha.png'
import reset from '../img/reset.svg'
import CyberIcon from '../img/CyberIcon.png'
import linea_azul from '../img/linea_azul.svg'

function Form() {
  return (
    <div>
      <img src={CyberIcon} alt="CyberIcon" className='CyberIcon' />
      <div className='box_form'>
        <div >
          <h2 className='title'>Completa tus datos</h2>
          <img src={linea_azul} alt="" />
        </div>
        <form>
          <section className='data_basic'>
            <div className='left'>
              <label> Nombre <span className='asterisk'>*</span> </label>
              <input type="text" placeholder='Introduce sus Nombres' />
            </div>
            <div className='left'>
              <label> Apellidos <span className='asterisk'>*</span> </label>
              <input type="text" placeholder='Introduce sus Apellidos' />
            </div>
            <div className='right'>
              <label> Numero de telefono <span className='asterisk'>*</span> </label>
              <input type="text" placeholder='Introduce su Numero de telefono' />
            </div>
            <div className='right'>
              <label> Correo electronico <span className='asterisk'>*</span> </label>
              <input type="email" placeholder='Introduce su Correo electronico ' />
            </div>
            <div className='left'>
              <label>Tus Favoritos</label>
              <select className='select' >
                <option value="" disabled selected hidden>Selecciona una opción</option>
                <option value="opcion1">Pollo</option>
                <option value="opcion2"> Cerdo</option>
                <option value="opcion3">Pavo</option>
                <option value="opcion3">Pato</option>
              </select>
            </div>
            <div className='right'>
              <div className='captcha'>
                <img src={capcha} alt="capcha" className='imgC' />
                <button className='BT_reset'><img src={reset} alt="reset" /></button>
                <input type="text" placeholder='Ingrese el captcha' />
              </div>
            </div>
            <div id='checkbox'>
              <div className='check'>
                <input type="checkbox" />
                <label >Acepto los <span className='permisos'>Términos y políticas de privacidad</span></label>
              </div>
              <div className='check'>
                <input type="checkbox" />
                <label >Acepto el <span className='permisos'>Uso de datos personales</span></label>
              </div>
              <button className='BT_Registro'>Registrarme</button>
              <p className='text_form'>Aprovecha las mejores ofertas y descuentos en cerdo, congelados, embutidos  <span className='mucho_mas'>
                y mucho más
              </span>
                . No te pierdas de nada estos Cyberdays registrándote y obteniendo grandes descuentos exclusivos.</p>
            </div>
          </section>
        </form>

      </div >
    </div>
  )

}

export default Form