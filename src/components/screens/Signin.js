import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const Signin = () => {
    const history = useHistory()
    const [password, setPassword] = useState("")
    const [email, seteEmail] = useState("")
    const PostData = () => {
        if(!validateEmail(email)) {
            M.toast({html: "Invalid Email", classes:"#c62828 red darken-3"})
            return
        }
        fetch("/signin",{ 
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                password,
                email
            })
            
        }).then(res=>res.json())
        .then(data => {
            console.log(data)
            if(data.error){
                M.toast({html: data.error, classes:"#c62828 red darken-3"})
            }else{
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                M.toast({html: "Signin Success", classes:"#81c784 green lighten-2"})
                history.push('/')
            }
        }).catch(e => {
            console.log(e)
        })
    }
    
    return (
        <div className='mycard'>
            <div className="card auth-card input-field">
                <h2 className='cardLogo'>InstagramClone</h2>
                <input 
                    type='text'
                    placeholder='email'
                    value={email}
                    onChange={(e)=>seteEmail(e.target.value)}
                />
                <input 
                    type='text'
                    placeholder='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button 
                    className="btn waves-effect waves-light #64b5f6 blue darken-1"
                    onClick={()=>PostData()}
                > 
                    Login
                </button>
                <h5>
                    <Link to="/signup">Don't have an account?</Link>
                </h5>
            </div>
        </div>
        
    )
}

export default Signin