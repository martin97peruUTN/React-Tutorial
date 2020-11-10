//FORMA VIEJA DE HACERLO
// const element=document.createElement("h1")
// element.innerText="Hello React"
// const container=document.getElementById("root")
// container.appendChild(element)

import React from "react"
import ReactDOM from "react-dom"
/*
const user={
  firstName:"Martin",
  lastName:"Perussini",
  avatar:"https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png",
}

function getName(u){
    return `${u.firstName} ${u.lastName}`
}

function getGreeting(u){
  if(u){
    return <h1>Buen dia {getName(u)}</h1>
  }
  return <h1>Buen dia extraño</h1>
}

const element=(
    <div>
        <h1>{getGreeting(user)}</h1>
        <img src={user.avatar} />
    </div>
)*/
import "bootstrap/dist/css/bootstrap.css"
import App from "./components/App"

const container=document.getElementById("root")

ReactDOM.render(<App/>,container)

