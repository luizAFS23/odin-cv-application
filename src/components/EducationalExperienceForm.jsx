import { useState } from "react"
import ProfessionalExperienceForm from "./ProfessionalExperienceForm";

export default function EducationalExperienceForm(props){
    const [name, setName] = useState('');
    const [schoolName, setSchoolName] = useState('');

    if(name.length != 0 && schoolName.length != 0){
        return <ProfessionalExperienceForm/>
    }

    return(
        <div>
            <h1>Perfect! Now, Please give more details about you:</h1>
            <form onSubmit={props.onSubmit}>
                <label>
                    <h3>Full Name: </h3>
                    <input type="text" name="name" onChange={e=> setName(e.target.value)} />
                </label>
                <label>
                    <h3>School graduated from:</h3>
                    <input type="text" name="school-name" onChange={e=> setSchoolName(e.target.value)}/>
                </label>
                <br /><br />
                <button type="submit">Submit Information</button>
            </form>
        </div>
    )
}