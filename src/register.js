

// import axios from 'axios';
// import { useState } from "react";
// import { Button } from "react-bootstrap";
// import './App.css';

// export default function Register(){
//     //let users=useContext(UserContext)
//     let [name,setName]=useState('');
//     let [email,setEmail]=useState('');
//     let [pass,setPass]=useState('');
 
//     function handleSubmit(e){
//         e.preventDefault()
//         console.log(name,email,pass)
//         //users.users.push({name,email,password:pass,amount:1000})
//         let item=({name:name,email:email,password:pass,amount:1000})
//         axios.post('https://bank-server-s85q.onrender.com/create',item)
//     }

//     return(<>

// <h1>REGISTER</h1>
// <form onSubmit={handleSubmit}>
// <div class="mb-3">
//     <label for="exampleInputEmail1" class="form-label">NAME</label>
//     <input type="text" onChange={(e)=>{setName(e.target.value)}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputEmail1" class="form-label">E-MAIL</label>
//     <input type="text" onChange={(e)=>{setEmail(e.target.value)}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputPassword1" class="form-label">PASSWORD</label>
//     <input type="text" onChange={(e)=>{setPass(e.target.value)}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
//   </div>
  
//   <Button type="submit" class="btn btn-primary">CREATE ACCOUNT</Button>
// </form>
//         </>)
// }
import axios from 'axios';
import { useState } from "react";
import { Button } from "react-bootstrap";
import '../src/components/register.css';

export default function Register() {
  // State for each input field
  let [name,setName]=useState()
  let [gmail,setGmail]=useState()
  let [pass,setPass]=useState()
  let [amount,setAmount]=useState(0)

  function handleSubmit(e){
    e.preventDefault();

    let item={name:name,email:gmail,password:pass,amount:amount}
    axios.post('https://bank-server-s85q.onrender.com/Create',item)
    
}

  return (
    <>
   
      <div id='register'>
        {/* <img src={logo} alt="Logo" /> */}
        <form onSubmit={handleSubmit}>
        <h1>Register</h1>

        <label htmlFor="">Name : </label><br />
    <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/><br /><br />
    <label htmlFor="">Gmail : </label><br />
    <input type="text" placeholder='Gmail' onChange={(e)=>setGmail(e.target.value)} /><br /><br />
    <label htmlFor="">Password : </label><br /> 
    <input type="password" placeholder='Password' onChange={(e)=>setPass(e.target.value)}/><br /><br />
    <label htmlFor="">Amount : </label><br />
    <input type="number" placeholder='Amount' onChange={(e)=>setAmount(e.target.value)}/><br /><br /><br />
    <Button type="submit">submit</Button>
    </form>
    </div>
    </>)
}