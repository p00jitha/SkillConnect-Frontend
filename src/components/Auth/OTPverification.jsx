import React, { useState ,useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from 'axios';

  const OTPverification = () => {
    const divStyle={
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      minHeight:'90vh',
     color:'white'
    }
    const loginStyle={
      width:'450px',
      height:'300px',
     display:'flex',
      flexDirection:'column',
      padding:'30px 25px 30px 25px',
      boxShadow:'5px 5px 5px 5px white'
   }
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const navigate = useNavigate(); 

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const emailParam = searchParams.get('email');
    setEmail(emailParam);
  }, [location]);


  const handleResendOTP = async () => {
    try {
      const {data} = await axios.post('https://skillconnect-backend.onrender.com/api/auth/resendotp', { email });
      console.log(data)
      toast.success(data.message);
    } catch (error) {
      
      toast.error(error.response.data.error);
      console.error(error);
    }
  };

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://skillconnect-backend.onrender.com/api/auth/verifyotp', {
        email,
        otp,
      })
      .then(()=>{
        navigate('/login')
      })
      console.log(response.data);
    } catch (error) {
      toast.error(error.response.data.error);
      console.error(error);
    }
  };

  return (
    <>
        <div className='container'>
         <div className='container' style={divStyle}>
          <div className='box' style={loginStyle}>
            <form onSubmit={handleOTPSubmit}>
            <h1>OTP Verification</h1>
        <div className="form-outline mb-4">
             <input type="text" className="form-control" name='otp' value={otp} onChange={(e) => setOTP(e.target.value)} placeholder="Enter OTP" autoComplete="off" />
          </div>
          <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
          <button type="submit" className="btn btn-primary btn-block mb-4" style={{width:"100%"}}>Verify OTP</button>
            </div>
            </form>
            <div className="form-outline mb-4" style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <button  className="btn btn-primary btn-block mb-4"  onClick={handleResendOTP} style={{width:"100%"}}>Resend OTP</button>
            </div>
          </div>
         </div>
     </div>
    </>
  )
}

export default OTPverification


{/* <div style={{color:"white"}}>
<h2>OTP Verification</h2>
<form onSubmit={handleOTPSubmit}>
 <input type="text" value={otp} onChange={(e) => setOTP(e.target.value)} placeholder="Enter OTP" />
 <button type="submit">Verify OTP</button>
</form>
<button onClick={handleResendOTP}>Resend OTP</button>
</div> */}