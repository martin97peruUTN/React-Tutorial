import React from "react"
import Card from "./Card"

//con el exercises hace destructuracion tambien
const ExerciseList=({exercises})=>(
    <div>
        {
            exercises.map((exercise)=>{
                return(
                    <Card
                        key={exercise.id}
                        {...exercise}
                    />
                )
            })
        }
    </div>
)

export default ExerciseList