import React from "react"
import FatalError from "./500"
import { withRouter } from 'react-router-dom'
import ExerciseNew from "./ExerciseNew"

class ExerciseNewContainer extends React.Component{
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
        },
        loading:false,
        error:null

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

    handleSubmit = async e =>{
        this.setState({
            loading:true
        })
        //para no ver el reload
        e.preventDefault()
        //console.log(form)
        try {
            let config = {
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Content-type":"application/json",
                },
                body: JSON.stringify(this.state.form)
            }
            let res = await fetch("http://localhost:8000/api/exercises", config) //Si no mando config por defecto hace un GET
            let json = await res.json()

            this.state({
                loading:false
            })

            //TODO Revisar esto del video 28 que no anda
            this.props.history.push('/exercise')

            //console.log(json)
        } catch (error) {
            this.setState({
                loading:false,
                error
            })
        }
    }

    render(){
        if(this.state.error){
            return <FatalError/>
        }
        return <ExerciseNew
            form={this.state.form}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
        />
    }

}
export default withRouter(ExerciseNewContainer)