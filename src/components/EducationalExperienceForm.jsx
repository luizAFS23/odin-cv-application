import React, { useState } from "react";
import ConfirmInformation from "./ConfirmInformation";

function FormDetails(props) {
  return (
    <div>
      <form onSubmit={props.SubmitHandler}>
        <h3>Full Name: </h3>
        <input
          type="text"
          name="nameinput"
          value={props.form.nameinput}
          onChange={props.handleChange}
        />
        <h3>Education:</h3>
        <input
          type="text"
          name="educationinput"
          value={props.form.educationinput}
          onChange={props.handleChange}
        /><br/><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default function EducationalExperienceForm({email, password}) {

    const [form, setForm] = useState({ nameinput: "", educationinput: "" });
    const [showConfirm, setShowConfirm] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
        }));
    };

    const SubmitHandler = (e) => {
        e.preventDefault();
        if (form.nameinput !== "" && form.educationinput !== "") {
        setShowConfirm(true);
        }
    };

    if (showConfirm) {
        return <ConfirmInformation emailinformation={email} passwordinformation={password} nameinformation={form.nameinput} educationinformation={form.educationinput}/>;
    }

    return (
        <div>
        <h1>Perfect! Now, Please give more details about you:</h1>
        <FormDetails form={form} SubmitHandler={SubmitHandler} handleChange={handleChange} />
        </div>
    );
}
