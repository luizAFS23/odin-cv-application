import EmailTaker from './EmailTaker.jsx'
import PasswordTaker from './PasswordTaker.jsx'
import { useState } from 'react'
import EducationalExperienceForm from './EducationalExperienceForm.jsx';


export default function LoginInformationForm(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
  
    function submitEmailHandler(e) {
      e.preventDefault();
      setEmail(e.currentTarget.email.value)
    }
  
    function submitPasswordHandler(e) {
      e.preventDefault();
      setPassword(e.currentTarget.password.value)
    }

    if(email.length != 0 && password.length != 0){
        return(
            <EducationalExperienceForm email={email} password={password}/>
        )
    }

    return(
      <>
        {email.length > 0 ? (
          <PasswordTaker onSubmit={submitPasswordHandler} value={password}/>
        )
        : 
          (<EmailTaker onSubmit={submitEmailHandler} value={email}/>)
        }
      </>
    )
    
  }

