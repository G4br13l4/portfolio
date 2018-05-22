import React from 'react';
import './../css/Places.css';
import NavBar from './NavBar';

class Places extends React.Component{

    render(){
        return(
            <div>
                <NavBar/>
                <section>
                    <div id="chart_div"></div>
                </section>
            </div>
            );
        }
    }


export default Places;