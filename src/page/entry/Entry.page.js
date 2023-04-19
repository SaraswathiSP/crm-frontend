import React,{useState} from 'react'
import './entry.style.css'
import LoginForm from '../../components/login/Login.component'
import ResetPassword from '../../components/password-reset/PasswordReset.comp'

const Entry = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [formLoad,setFormLoad] = useState('login')

    const handleOnChange = (e) => {
        const {name,value} = e.target

        switch (name) {
            case "email":
                setEmail(value)
                 break;
            case "password":
                setPassword(value)
                break;
            default:
                break;
        }
        
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (!email || !password) {
           return alert("Fill up all the form");
        }

        //to call api to submit the form

        console.log(email,password)
        
    }

    const handleOnResetSubmit = (e) => {
        e.preventDefault()
        if (!email) {
           return alert("Please enter your email");
        }

        //to call api to submit the form

        console.log(email)
        
    }

    const formSwitcher = (formType) =>{
        setFormLoad(formType)

    }
    

  return (
    <div className='entry-page bg-info'>
        <div className='form-container m-3'>
            {formLoad === "login" && 
            <LoginForm 
               handleOnChange={handleOnChange} 
               handleOnSubmit={handleOnSubmit} 
               formSwitcher={formSwitcher}
               email={email} password={password}/>
            }
            {formLoad === "reset" && 
               <ResetPassword 
                 handleOnChange={handleOnChange} 
                 formSwitcher={formSwitcher}
                 handleOnResetSubmit={handleOnResetSubmit} email={email} />
            }

        </div>
        </div>
  )
}

export default Entry