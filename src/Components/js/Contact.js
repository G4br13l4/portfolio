import React from 'react';
import './../css/Contact.css';
import NavBar from './NavBar';

class Contact extends React.Component{
    render(){
        return(
            <div>
                <NavBar/>
                <section className="contact">
                    <ul>
                        <li><a href="https://api.whatsapp.com/send?phone=5215531130239" target="_blank" target="_blank"><i class="icon fab fa-whatsapp"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/gabriela-lf/"><i class="icon fab fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/G4br13l4"><i class="icon fab fa-github"></i></a></li>
                        <li><a href="mailto:gab_lop@live.com.mx" target="_blank"><i class="icon far fa-envelope"></i></a></li>
                    </ul>
                </section>
            </div>
            );
        }
    }


export default Contact;