import React from "react"
import Card from "../components/Card"
import ExerciseForm from "../components/ExerciseForm"

const ExerciseNew = ({form,onChange,onSubmit})=>{
    return <div className="row">
                <div className="col-sm">
                    <Card {...form}/>
                </div>
                <div className="col-sm">
                    <ExerciseForm
                        onChange={onChange}
                        onSubmit={onSubmit}
                        form={form}
                    />
                </div>
            </div>
}
export default ExerciseNew