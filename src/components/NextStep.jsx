import { password, email } from '../App/GeneralInformationForm'

export default function NextStep(){
    if(password.length > 0 && email.length > 0){
        return (<div>Next Step!</div>)
    }
}