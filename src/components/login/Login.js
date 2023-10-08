import React, { useState } from "react";
import '../login/LoginStyles.css';
import { useNavigate } from "react-router-dom";
import { auth, app } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useUserContext } from "../../context/userContext";
import DarkMode from "../../components/DarkMode/DarkMode";




const Login =() => {
  const {toggleUser} =  useUserContext()
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [error, setErrors] = useState({});
   const navigate = useNavigate('');




    const logIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
   
        alert("account created successful")
        toggleUser()
        navigate('/home')


       // console.log (userCredential)


    })

    .catch((error) => {
        const validationErrors = {}

        if(!email.trim()) {
            validationErrors.email = "email is required"
        } else if(!/\S+@\S+\.\S+/.test(email)){
            validationErrors.email = "email not valid"
        }
       
        if(!password.trim()) {
            validationErrors.password = "password is required"
        } else if(password.length < 6){
            validationErrors.password = "password must be atleast 6 character"
        }

        setErrors(validationErrors)

        if(Object.keys(validationErrors).length === 0) {
        }
        alert('email and password invalid')
         // console.log (error)
      
        
    });

}

    return(
        <div className="login"> 
            <div className="login_container">
                <div className="login_content">
                <div className="login_pics"></div>
                <div className="login_form">
                    <form onSubmit={logIn}>
                    <div className="log">
                    <h1>Login <span className="lgcolor">Page</span> </h1>
                    <div>
                    <DarkMode />          
                </div>
                    </div>
                    

                        <div>
                            <input type="email" name="email" placeholder=" email"
                           value={email}  onChange={(e) => setEmail(e.target.value)} />
                           {error.email && <span className="error">{error.email}</span>}

                        </div>

                        <div>
                        <input type="password" placeholder=" password" name="password"
                        value={password}  onChange={(e) => setPassword(e.target.value)}  />
                        {error.password && <span className="error">{error.password}</span>}

                    </div>
                    <button>submit</button>
                    <p>forget  <a href="/">password?</a> </p>

                    </form>

                   

                </div>
                </div>
                
               
            </div>

        </div>
    )
}

export default Login;