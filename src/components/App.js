import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Exercises from "../pages/Exercises"
import NotFound from "../pages/404"
import ExerciseNewContainer from "../pages/ExerciseNewContainer"

const App=()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/exercise" component={Exercises}/>
            <Route exact path="/exercise/new" component={ExerciseNewContainer}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default App