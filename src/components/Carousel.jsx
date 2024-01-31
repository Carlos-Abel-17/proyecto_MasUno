import React, { useEffect } from "react";
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Splide from '@splidejs/splide';
import star from '../img/star.svg'
import img_one_corausel from '../img/img_one_corausel.png'
import img_two_corausel from '../img/img_two_corausel.png'
import img_three_corausel from '../img/img_three_corausel.png'
import '../Sass/Carousel.scss'

function Carousel() {
  useEffect(() => {
    const splide = new Splide('.splide', {
      type: 'fade',
      rewind: true,
    });

    splide.mount();

    return () => {
      splide.destroy();
    };
  }, []);

  return (
    <>
      <div className='splide'>

        <div className="splide__track">
          <ul className="splide__list">
            <div className="splide__slide">
              <div className="conteiner">
                <article id="left">
                  <img src={star} alt="star" />
                  <h2 id="title_articule">PHP</h2>
                  <p className="texts">Lorem ipsum dolor sit amet consectetur. Cursus cursus erat massa vel id nunc. <br /> Ultricies dui pharetra laoreet laoreet laoreet habitasse iaculis lobortis.<br /> Amet diam dolor tincidunt congue sagittis in.</p>
                  <button className="Ver_tecn">Ver Tecnologia</button>
                </article>
                <section id="right">
                  <img src={img_one_corausel} alt="" className="imgs" />
                </section>
              </div>
            </div>
            <div className="splide__slide">
              <div className="conteiner">
                <article id="left">
                  <img src={star} alt="star" />
                  <h2 id="title_articule">Flutter</h2>
                  <p className="texts">Lorem ipsum dolor sit amet consectetur. Cursus cursus erat massa vel id nunc. <br /> Ultricies dui pharetra laoreet laoreet laoreet habitasse iaculis lobortis.<br /> Amet diam dolor tincidunt congue sagittis in.</p>
                  <button className="Ver_tecn">Ver Tecnologia</button>
                </article>
                <section id="right">
                  <img src={img_two_corausel} alt="" className="imgs" />
                </section>
              </div>
            </div>
            <div className="splide__slide">
              <div className="conteiner">
                <article id="left">
                  <img src={star} alt="star" />
                  <h2 id="title_articule">Diseño UX/UI</h2>
                  <p className="texts">Lorem ipsum dolor sit amet consectetur. Cursus cursus erat massa vel id nunc. <br /> Ultricies dui pharetra laoreet laoreet laoreet habitasse iaculis lobortis. <br /> Amet diam dolor tincidunt congue sagittis in.</p>
                  <button className="Ver_tecn">Ver Tecnologia</button>
                </article>
                <section id="right">
                  <img src={img_three_corausel} alt="" className="imgs" />
                </section>
              </div>
            </div>
          </ul>
        </div>

      </div>
    </>
  )

}
export default Carousel;