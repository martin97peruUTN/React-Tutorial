import React from "react"

class ExerciseNew extends React.Component{

    //lo inicializo vacio porque sino tira null los value={this.state.xxx} y no anda
    state={}

    handleChange = e =>{
        //console.log(`${e.target.name}: ${e.target.value}`)
        /*let partialState={}
        partialState[e.target.name]=e.target.value
        this.setState(partialState)*/
        //Sustituyo esto usando babel
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = e =>{
        //para no ver el reload
        e.preventDefault()
        console.log(this.state)
    }

    render(){
        return (
            <div className="container">
            <form 
                //porque el boton es de ese tipo
                onSubmit={this.handleSubmit}
            >
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="title" 
                        //tenemos que tener el name para identificarlo en el DOM
                        name="title"
                        onChange={this.handleChange}
                        value={this.state.title}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="description" 
                        name="description"
                        onChange={this.handleChange}
                        value={this.state.description}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="img" 
                        name="img"
                        onChange={this.handleChange}
                        value={this.state.img}
                    />
                </div>
                <div className="form-row">
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="leftColor" 
                            name="leftColor"
                            onChange={this.handleChange}
                            value={this.state.leftColor}
                        />
                    </div>
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="rightColor" 
                            name="rightColor"
                            onChange={this.handleChange}
                            value={this.state.rightColor}
                        />    
                    </div>
                </div>
                
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
        </div>
        )
    }

}
export default ExerciseNew