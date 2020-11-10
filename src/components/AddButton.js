import { render } from "@testing-library/react"
import React from "react"
import AddImage from "../images/add.png"
import {Link} from "react-router-dom"

class AddButton extends React.Component{
    render(){
        return(
            <Link to="exercise/new">
                <img src={AddImage} className="Fitness-Add"/>
            </Link>
        )
    }
}

export default AddButton