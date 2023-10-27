import EmailTaker from './components/EmailTaker'
import PasswordTaker from './components/PasswordTaker'

export default function GeneralInformationForm(){
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