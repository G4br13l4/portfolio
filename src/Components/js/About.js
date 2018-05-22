import React from 'react';
import './../css/About.css';
import NavBar from './NavBar';

class About extends React.Component{
    render(){
        return(
            <div>
                <NavBar/>
                <section className="about_background">  
                    <div class="about_textbox">
                        <h1>¡Hola de nuevo!</h1>
                        <p>Soy Gaby, tengo 25 años y soy originaria del Estado de México</p>
                        <p>Estudié la carrera de Mercadotecnia en la Escuela Bancaria y Comercial, al salir de la universidad decidí que
                           quería trabajar en la rama digital  del marketing, específicamente en analítica web. Así que después de estudiar por 
                           mi cuenta más sobre el tema, logré entrar a una de las mejores  agencias de publicidad en ese momento, Wunderman México, 
                           al área de Data & Insights, ahí fue donde obtuve mi primer trabajo como analista digital y aprendí mucho. 
                        </p>
                        <p>Más adelante, entre a otra agencia llamada iCrossing México, igualmente como analista pero con mayores responsabilidades.
                           Fue un gran lugar donde pude seguir desarrollandome como persona y profesionista. Fue a partir de esa experiencia que comencé a 
                           interesarme más en como es que las plataformas funcionaban a nivel código ya que tenía constante comunicación con los programadores
                           y una de mis tareas era recomendar  acciones para mejorar el performance de sitios y aplicaciones.
                        </p>
                        <p>
                            Y fue así que decidí aprender de lleno sobre programación y llegué a Laboratoria para convertirme en Frontend Developer.
                            Actualmente busco proyectos que me permitan aprender y lograr que empresas pequeñas o grandes tengan un impacto en el mundo digital
                            y en la sociedad.
                        </p>
                    </div>    
               </section>
            </div>
            );
        }
    }


export default About;