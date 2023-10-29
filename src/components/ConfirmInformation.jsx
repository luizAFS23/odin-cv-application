
export default function ConfirmInformation(props){
    return(
        <div>
            <h1>Almost there! Now, please confirm if your information is correct: </h1>
            <p>Full name: {props.nameinformation}</p>
            <p>Education: {props.educationinformation}</p>
            <p>Email: {props.emailinformation}</p>
            <p>Password: {props.passwordinformation}</p>
        </div>
    )
}