import React, {Component} from 'react'
import './App.css'
import './index.css'
// import Post from './compenentes/Post'


export default class App extends React.Component {

  state = {
     
        textoInput1: "",      
           
        textoInput2: "",
     
        listaDeMensagem: [],

  } 
  
  mudarInput1 = (event) => {
    this.setState({textoInput1: event.target.value});
  }
  
  mudarInput2 = (event) => {
    this.setState({textoInput2: event.target.value});
  }

  clicouBotao = (event) => { 
      console.log(this.state.listaDeMensagem)
      
      const novoPost = {
        nome: this.state.textoInput1,
        mensagem: this.state.textoInput2
        
      }

      console.log(novoPost)

      const novaListaInput = [... this.state.listaDeMensagem, novoPost]
      this.setState({listaDeMensagem: novaListaInput})

      console.log(novaListaInput)        
  
      //     this.setState({

  //       textoInput1: "",      
  //       textoInput2: ""
  //     }
  //  )
  }
  
  render(){

      const mensagens = this.state.listaDeMensagem.map(elemento => {
                return(
                <div>
                  <p><strong>{elemento.nome}:</strong> {elemento.mensagem}</p>
                </div>)
      })

      return(
          <div className="divEspaco">
              {mensagens}
              <div>
              <input className="inputUsuario" type="text" value={this.state.textoInput1} onChange={this.mudarInput1} placeholder="Usuário"/>
              <input className="inputUsuario2"  type="text" value={this.state.textoInput2} onChange={this.mudarInput2} placeholder="Mensagem"/>
              <button type="submit" onClick={this.clicouBotao}>Enviar</button>
              </div>  
          </div>
      )
  }
}

