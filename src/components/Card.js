import React from "react"
//import exerciseImg from "../images/exercise.png"
import circlesImg from "../images/circles.png"
import "./styles/Card.css"

class Card extends React.Component{
    //background: url('../../images/circles.png') no-repeat, linear-gradient(to right, #A74CF2, #617BFB);

    constructor(props){
        super(props)
        //Aca defino el estado inicial del componente
        this.state={
            image:"https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc"
        }
    }
    //Esta funcion se invoca ni bien un componente es montado
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                image:"https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
            })
        }, 5000)
    }
    render(){
        //Destructuring se llama esto
        const {title,description,img,rightColor,leftColor}=this.props
        return (
            <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage:`url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={this.state.image} className="float-right" alt-text="image of the exercise"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card

//Ciclo de vida
//constructor
//componentWillMount
//render
//componentDidMount
//actualizacion (multiples veces o ninguna)
/*  componentWillReceiveProps(nextProps)
    shouldComponentUpdate(nextProps,nextState) antes de empezar a actualizar un componente
    componentWillUpdate(nextProps,nextState) se ejecuta cuando el anterior devuelva true
    render()
    componentDidUpdate(prevProps,prevState)

*/