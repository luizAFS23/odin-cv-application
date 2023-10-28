import { useState } from "react"
import ConfirmInformation from "./ConfirmInformation";

function FormDetails(props) {
    return (
      <div>
        <form onSubmit={props.SubmitHandler}>
            <h3>Full Name: </h3>
            <input type="text" name="nameinput"/>
            <h3>School graduated from:</h3>
            <input type="text" name="schoolnameinput" /><br/><br />
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }


export default function EducationalExperienceForm(props){
    const [form, setForm] = useState({nameinput: "", schoolnameinput: ""})

    const SubmitHandler = (e) => {
        e.preventDefault();
        setForm({ [e.target.name]: e.target.value });
    };

    if(form.nameinput !== "" && form.schoolnameinput !== ""){
        return(<ConfirmInformation/>);
    }

    return(
        <div>
            <h1>Perfect! Now, Please give more details about you:</h1>
            <FormDetails SubmitHandler={SubmitHandler}/>
        </div>
    )
}