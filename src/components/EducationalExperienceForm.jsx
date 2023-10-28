import { useState } from "react"
import ProfessionalExperienceForm from "./ProfessionalExperienceForm";

function NameInput(props){
    const [name, setName] = useState('');

    const handleNameClick = (e) =>{
        e.preventDefault();
        setName(e.target.value);
    }
    return(
        <>
            <form onSubmitHandler={props.nameSubmitHandler}>
                <h3>Full Name: </h3>
                <input type="text" name="nameinput"/>
                <button type="submit">Submit</button>   
            </form> 
        </>
    )
}

function SchoolNameInput(props){
    const [schoolName, setSchoolName] = useState('');

    const handleSchoolNameClick = (e) =>{
        e.preventDefault();
        setName(e.target.value);
    }

    return(
        <>
            <form onSubmitHandler={props.schoolNameSubmitHandler}>
                <h3>School graduated from:</h3>
                <input type="text" name="schoolnameinput" onChange={e=> setName(e.target.value)} />
                <button type="submit">Submit</button>   
            </form> 
        </>
    )
}


export default function EducationalExperienceForm(props){
    const [form, setForm] = useState({nameinput: "", schoolnameinput: ""})

    // if(name.length != 0 && schoolName.length != 0){
    //     return <ProfessionalExperienceForm/>
    // }
    const nameSubmitHandler = (e) => {
        e.preventDefault();
        setForm({ [e.target.nameinput]: e.target.value });
      };

    const schoolNameSubmitHandler = (e) => {
        e.preventDefault();
        setForm({ [e.target.schoolnameinput]: e.target.value });
    };  

    return(
        <div>
            <h1>Perfect! Now, Please give more details about you:</h1>
            {form.nameinput.length > 0 ? (
                <SchoolNameInput onSubmitHandler={schoolNameSubmitHandler}/>
            ) : (
                <NameInput onSubmitHandler={nameSubmitHandler}/>
            )}
        </div>
    )
}