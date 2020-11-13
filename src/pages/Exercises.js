import React from "react"
import Welcome from "../components/Welcome"
import ExerciseList from "../components/ExerciseList"
import AddButton from "../components/AddButton"
import Loading from "../components/Loading"
import FatalError from "./500"

class Exercises extends React.Component{
    //Con babel no hace falta el contructor y todo eso
    state={
        data:[],
        loading: true,
        error: null
    }

    //Aca se hacen llamados a APIs
     async componentDidMount(){
        await this.fetchExercises()
    }

    fetchExercises = async ()=>{
        try {
            let res = await fetch("http://localhost:8000/api/exercises")
            let data = await res.json()

            this.setState({
                data,
                loading:false
            })
        } catch (error) {
            this.setState({
                loading:false,
                error //si la clave y el valor sin iguales no hace falta hacer error: error
            })
        }

        //console.log(data)
    }

    render(){
        if(this.state.loading){
            return <Loading/>
        }
        if(this.state.error){
            return <FatalError/>
        }
        return(
            //React.Fragment permite retornar varios elementos sin necesidad de  crear uno nuevo en el DOM
            <React.Fragment>
                <Welcome username="Peru"/>
                <ExerciseList exercises={this.state.data}/>
                <AddButton />
            </React.Fragment>
        )
    }
}

export default Exercises