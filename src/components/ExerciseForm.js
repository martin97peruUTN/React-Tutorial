import React from "react"

class ExerciseForm extends React.Component{

    //lo inicializo vacio porque sino tira null los value={form.xxx} y no anda
    //state={}


    handleSubmit = e =>{
        //para no ver el reload
        e.preventDefault()
        //console.log(form)
    }

    render(){
        const {onChange,form}=this.props
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
                        onChange={onChange}
                        value={form.title}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="description" 
                        name="description"
                        onChange={onChange}
                        value={form.description}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="img" 
                        name="img"
                        onChange={onChange}
                        value={form.img}
                    />
                </div>
                <div className="form-row">
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="leftColor" 
                            name="leftColor"
                            onChange={onChange}
                            value={form.leftColor}
                        />
                    </div>
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="rightColor" 
                            name="rightColor"
                            onChange={onChange}
                            value={form.rightColor}
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
export default ExerciseForm