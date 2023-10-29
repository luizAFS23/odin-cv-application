import EducationalExperienceForm from "./EducationalExperienceForm"
import GeneralInformationForm from "./GeneralInformationForm"

export default function ConfirmInformation(props){
    return(
        <div>
            <h1>Almost there! Now, please confirm if your information is correct: </h1>
            <h2>Full name: {props.nameinformation}</h2>
            <h2>Education: {props.educationinformation}</h2>
        </div>
    )
}