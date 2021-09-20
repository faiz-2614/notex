import React,{useState} from "react";
import { useHistory } from "react-router";


const SignUp = () => {
    const [credentials, setcredentials] = useState({name:"",email:"",password:""})

  let history  = useHistory();


    const handleSubmitButton = async (e)=>{
        e.preventDefault();
        const {name,email,password} = credentials;
        const url ="http://localhost:5000/api/auth/createuser"
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name,email,password}) 
          });
          const json = await response.json();
          console.log(json)
          if(json.success){
            localStorage.setItem('token',json.authtoken)
            history.push("/");
          }
          else{
            alert("ok")
          }
    }

    const onChange = (e) =>{
    
      setcredentials({...credentials,[e.target.name]:e.target.value})
}
  return (
    <div>
      <form onSubmit={handleSubmitButton}>
      <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="cpasssword"
            name="cpassword"
            placeholder="Password"
            onChange={onChange}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
