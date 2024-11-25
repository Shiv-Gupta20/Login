import { useState } from "react";

function Signup({formData,setFormData}){
const [formState,setState] = useState({
    name:"",
    subject:"",
    number:"",
    email:"",
}) //  read



    const submitHundler=(e)=>{ 
        e.preventDefault() ;   
        
        console.log(formData,formState)// arrow  function
        setFormData([...formData,formState])
        setState({
            name:"",
            subject:"",
            number:"",
            email:"",
        })
    }
    return(
        <>
          <h1>Register here</h1>
           <form onSubmit={(e)=>submitHundler(e)}>
                <label>Name</label>
                <input type= "text" value ={formState.name} placeholder="Please Enter your Name" onChange={(e)=>setState({...formState,name:e.target.value})}  />
                <label>Subject</label>
                <input type= "text" value ={formState.subject} placeholder="Please Enter your subject" onChange={(e)=>setState({...formState,subject:e.target.value})} />
                <label>Mob No</label>
                 <input type= "text" value ={formState.number} placeholder="Please Enter your Number" onChange={(e)=>setState({...formState,number:e.target.value})} />
                <label>Email id</label>
                <input type= "email" value ={formState.email} placeholder="Please Enter your email" onChange={(e)=>setState({...formState,email:e.target.value})}/>
              <button type = "submit">Submit</button>
            </form> 
        </> 
    );
}
export default Signup;