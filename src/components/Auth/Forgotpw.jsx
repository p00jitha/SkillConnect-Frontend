import React,{ useState } from 'react';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from 'axios'

const Forgotpw = () => {
    const divStyle={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'90vh',
       color:'white'
      }
      const loginStyle={
        width:'450px',
        height:'500px',
       display:'flex',
        flexDirection:'column',
        padding:'30px 25px 30px 25px',
        boxShadow:'5px 5px 5px 5px white'
     }
  const navigate = useNavigate(); 
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const sendRequest = async () => {
    try {
        const res = await axios.post('https://skillconnect-backend.onrender.com/api/auth/forgotpw', {
          email: email,
          password: password,
          confirmPassword: confirmPassword
        });
    
        const data = await res.data;
        return data;
      } catch (error) {
          toast.error(error.response.data.error);
          console.error(error);
          throw error;
      }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
    sendRequest()
    .then(()=>toast.success("Password Changed Successfully"))
    .then(()=>navigate('/login'))
}
catch (error) {
  console.log(error)
}
  };

  return (
    <div>
       <div className='container'>
         <div className='container' style={divStyle}>
          <div className='box' style={loginStyle}>
            <form onSubmit={handleSubmit}>
            <h1>Change Password</h1>
            <div className="form-outline mb-4"></div>
            <div className="form-outline mb-4"></div>
        <div className="form-outline mb-4">
             <label className="form-label">Email</label>
            <input type="email" id="form2Example1" className="form-control" placeholder='enter email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}  autoComplete="off" required/>
          </div>
          <div className="form-outline mb-4">
           <label className="form-label">Password</label>
           <input type="password" id="form2Example2" className="form-control" placeholder='enter password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
         </div>
         <div className="form-outline mb-4">
           <label className="form-label">Confirm Password</label>
           <input type="password" id="form2Example3" className="form-control" placeholder='enter confirm password' name='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
         </div>
         <button type="submit" className="btn btn-primary btn-block mb-4">Change Password</button>
            </form>
          </div>
         </div>
     </div>
    </div>
  )
}

export default Forgotpw
