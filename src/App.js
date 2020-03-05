import React, { Component } from 'react';
import './style.css';

//https://sujeitoprogramador.com/rn-api/?api=posts

class App extends Component{

    constructor(props){
        super(props);
        this.state={
            nutri:[]
        }
    }
    
    componentDidMount(){
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
        fetch(url)
        .then((res) => res.json())
        .then((json)=>{
            let state = this.state;
            state.nutri = json;
            this.setState(state);
            //console.log(json);
        })
    }

    render(){
        return(
            <div className="container">
                {this.state.nutri.map((item) => {
                   return(
                       <article key={item.id} className="post">
                            <strong className="titulo">{item.titulo}</strong>
                            <img src={item.capa} alt="food" className="capa"/>
                            <p className="subtitulo">{item.subtitulo}</p>
                            <a className="botao" href="#">Ler mais...</a>
                       </article>
                   ) 
                })}
            </div>
        );
    }
}

export default App;