import React,{useState} from 'react'
import { useHistory } from 'react-router'

const Login = (props) => {

  const [credentials, setcredentials] = useState({email:"",password:""})

  let history  = useHistory();


    const handleSubmitButton = async (e)=>{
        e.preventDefault();
        const url ="http://localhost:5000/api/auth/login"
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password}) 
          });
          const json = await response.json();
          console.log(json)
          if(json.success){
            localStorage.setItem('token', json.authtoken)
            history.push("/");
            
          }
          else{
            props.showAlert("Invalid Credentials","danger")
          }
    }

    const onChange = (e) =>{
    
      setcredentials({...credentials,[e.target.name]:e.target.value})
}
    return (
        <div>
            <form onSubmit={handleSubmitButton}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" value={credentials.email} onChange={onChange} name="email" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password"/>
  </div>
  
  <button type="submit"  className="btn btn-primary">Submit</button>
</form>
        </div>
    )
}

export default Login
