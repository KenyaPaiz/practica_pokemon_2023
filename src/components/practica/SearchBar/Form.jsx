import React, { Component } from 'react'

export default class Form extends Component {

    constructor(){
        super();

        this.state = {
            name: '',
            img: '#',
            height: ''
        }
    }

    fetchApi = async () => {
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`);
        let data = await res.json();
    
        console.log(data);
        this.setState({
            img: data.sprites.front_default,
            height: data.height
        })
    }

    //componentDidMount(){
    //    this.fetchApi();
    //}

    handleName = event => {
        let aux = (event.target.value).toLowerCase();
        this.setState({
            name: aux
        })

    }

    handleSubmit  = event => {
        let name = this.state.name;
        console.log(name);

        this.fetchApi();
        event.preventDefault();
    }

  render() {
    //console.log(this.state.name);
    if(this.state.img === "#"){
    return (
      <div>
        <div className="card mt-2">
            <div className='card-header text-black'>
                Header
            </div>
            <div className='card-body'>
                <form onSubmit={this.handleSubmit}>
                    <label className='form-label text-black'>Ingrese un nombre: </label>
                    <br/>
                    <input 
                        type="text"
                        placeholder='nombre'
                        className='form-control'
                        onChange={this.handleName}
                    />
                    <br/>
                    <button type='submit' className='btn btn-primary'>Enviar</button>
                </form>
            </div>
        </div>
      </div>
    )} else {
        return(
        <div>
             <div className='row justify-content-center'>
                <div className='card m-1 bg-info' style={{width: '18rem'}}>
                    <img src={this.state.img} alt="no carga la imagen"/>
                    <h1>Height: {this.state.height}</h1>
                </div>
                <button onClick={() => { this.setState({img: "#"})}} className="btn btn-primary">Back to Search</button>
            </div>
        </div>   
    )}
  }
}

