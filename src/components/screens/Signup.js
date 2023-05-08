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

const Signup = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, seteEmail] = useState("")
    const PostData = () => {
        if(!validateEmail(email)) {
            M.toast({html: "Invalid Email", classes:"#c62828 red darken-3"})
            return
        }
        fetch("http://localhost:4000/signup",{ 
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,
                password,
                email
            })
            
        }).then(res=>res.json())
        .then(data => {
            if(data.error){
                M.toast({html: data.error, classes:"#c62828 red darken-3"})
            }else{
                M.toast({html: data.message, classes:"#81c784 green lighten-2"})
                history.push('/signin')
            }
        })
    }

    return (
        <div className='mycard'>
            <div className="card auth-card input-field">
                <h2 className='cardLogo'>InstagramClone</h2>
                <input 
                    type='text'
                    placeholder='name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
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
                    Sign Up
                </button>
                <h5>
                    <Link to="/signin">Already have an account?</Link>
                </h5>

            </div>
        </div>
        
    )
}

export default Signup