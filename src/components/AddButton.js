import { render } from "@testing-library/react"
import React from "react"
import AddImage from "../images/add.png"
import {Link} from "react-router-dom"

const AddButton=()=>(
    <Link to="exercise/new">
        <img src={AddImage} className="Fitness-Add"/>
    </Link>
)

export default AddButton