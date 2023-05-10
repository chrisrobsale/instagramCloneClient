import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import M from 'materialize-css'

const CreatePost = () => {
    const history = useHistory()
    const [ptitle, setTitle] = useState("")
    const [pbody, setBody] = useState("")
    const [pimage, setImage] = useState("")
    const [purl, setUrl] = useState("")

    useEffect(()=>{ //this code will run if purl already have a value which is after the request in uploading the image in cloudinary
        if(purl){
            fetch("/createpost",{ 
                method: "post",
                headers: {
                    "Content-Type":"application/json",
                    "Authorization": "Bearer " + localStorage.getItem("jwt")
                },
                body: JSON.stringify({
                    title:ptitle,
                    body:pbody,
                    pic: purl
                })
            }).then(res=>res.json())
            .then(data => {
                if(data.error){
                    M.toast({html: data.error, classes:"#c62828 red darken-3"})
                }else{
                    M.toast({html: "Create Post success", classes:"#81c784 green lighten-2"})
                    history.push('/')
                }
            }).catch(e => {
                console.log(e.message)
            })
        }
    })

    const postDetails = () => {
        const data = new FormData()
        data.append("file", pimage)
        data.append("upload_preset", "instaG-clone")
        data.append("cloud_name", "dcaej5cpb")
        fetch("https://api.cloudinary.com/v1_1/dcaej5cpb/image/upload", {
            method: "post",
            body: data
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            setUrl(data.url)
            
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <div className='card input-filled' style={{ margin: "30px auto", maxWidth: "500px", padding:"20px", textAlign:"center"}}>
            <input 
                type='text' 
                placeholder='title'
                value={ptitle}
                onChange={(e)=>setTitle(e.target.value)}
            />
            <input 
                type='text' 
                placeholder='body'
                value={pbody}
                onChange={(e)=>setBody(e.target.value)}
            />
            <div className="file-field input-field">
                <div className="btn #64b5f6 blue darken-1">
                    <span>Upload Image</span>
                    <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" />
                </div>
            </div>
            <button 
                className="btn waves-effect waves-light #64b5f6 blue darken-1"
                onClick={()=>postDetails()}
            > 
                Submit Post
            </button>
        </div>
    )
}

export default CreatePost