import EducationalExperienceForm from "./EducationalExperienceForm"
import GeneralInformationForm from "./GeneralInformationForm"

export default function ConfirmInformation(props){
    return(
        <div>
            <h1>Almost there! Now, please confirm if your information is correct: </h1>
            <h2>Full name: {props.form.nameInput}</h2>
        </div>
    )
}