import React from "react"
import ExerciseForm from "../components/ExerciseForm"
import Card from "../components/Card"
class ExerciseNew extends React.Component{
/*
    //lo inicializo vacio porque sino tira null los value={this.state.xxx} y no anda
    state={}

    handleChange = e =>{
        //console.log(`${e.target.name}: ${e.target.value}`)
        let partialState={}
        partialState[e.target.name]=e.target.value
        this.setState(partialState)
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
*/

    state={
        form:{
            //lo defino para hacer destructuring en la card y no tener que pasar propiedad por propiedad
            title:"",
            description:"",
            img:"",
            rightColor:"",
            leftColor:""
        }
    }
    handleChange = e =>{
        //console.log(`${e.target.name}: ${e.target.value}`)
        /*let partialState={}
        partialState[e.target.name]=e.target.value
        this.setState(partialState)*/
        //Sustituyo esto usando babel
        this.setState({
             //con esto mantiene todo lo que tenia antes y si es una key nueva que sustituya
            //sino iba pisando todo en un solo valor
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
    }

    render(){
        return (
            <div className="row">
                <div className="col-sm">
                    <Card {...this.state.form}/>
                </div>
                <div className="col-sm">
                    <ExerciseForm
                        onChange={this.handleChange}
                        form={this.state.form}
                    />
                </div>
            </div>
        )
    }

}
export default ExerciseNew