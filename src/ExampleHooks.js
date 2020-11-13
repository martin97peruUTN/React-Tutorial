import React,{useState} from "react"
//useState permite usar state en componentes que no sean de clase, como uno funcional

const ExampleHooks = ()=>{
    const [perros,hacemeUnPete] = useState(420)
    //el 0 es el valor inicial del estado, en este caso como es un contador es 0
    return(
        <div>
            <p>You clicked {perros} times</p>
            <button onClick={() => hacemeUnPete(perros + 1)}>
                Click me
            </button>
        </div>
    )
}
export default ExampleHooks