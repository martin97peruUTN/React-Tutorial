import React from "react"
//import exerciseImg from "../images/exercise.png"
import circlesImg from "../images/circles.png"
import "./styles/Card.css"

class Card extends React.Component{
    //background: url('../../images/circles.png') no-repeat, linear-gradient(to right, #A74CF2, #617BFB);
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
                            <img src={img} className="float-right" alt-text="image of the exercise"/>
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