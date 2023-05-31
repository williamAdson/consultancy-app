import {useState} from "react";
import {useRouter} from "next/router";
import Axios from "axios";

export default function SignUpUser(){
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [phoneReg, setPhoneReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [typeReg, setTypeReg] = useState('');
    const router = useRouter();

    const registerForm = () =>{
        Axios.post('http://localhost:5000/users/signup', {
            username: usernameReg,
            password: passwordReg,
            phone: phoneReg,
            email: emailReg,
            type: typeReg
        }).then((response)=>{
            console.log(response);
            router.push('/')
        });
    };

    return(
        <div className="registrationPage">
                <h1>Register</h1>
                <div className="registration">
                    <section>
                        <label for="username">Username</label>
                        <input type="text"
                        onChange={(e)=>{
                            setUsernameReg(e.target.value)
                        }} />
                    </section>
                    <section>
                        <label for="phone">Phone</label>
                        <input type="text"
                        onChange={(e)=>{
                            setPhoneReg(e.target.value)
                        }} />
                    </section>
                    <section>
                        <label for="email">email</label>
                        <input type="text" 
                        onChange={(e)=>{
                            setEmailReg(e.target.value)
                        }} />
                    </section>
                    <section>
                        <label for="new-password">Password</label>
                        <input type="password"
                        onChange={(e)=>{
                            setPasswordReg(e.target.value)
                        }} />
                    </section>
                    <button onClick={registerForm}>register</button>
                </div>
            </div>
    )
}
