import React, { useState, useEffect } from 'react';
import toast from "react-hot-toast";
import '../Home/styles/Banner.css';
import Profile from './Profile'
import img3 from '../Images/img3.jpg';
import axios from 'axios';

const Display = () => {
  const [usersWithSkills, setUsersWithSkills] = useState([]);
  const [address, setAddress] = useState('');

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const fetchData = async () => {
      try {
        const response = await axios.post('https://skillconnect-backend.onrender.com/api/skill/skills', {address: address});
        setUsersWithSkills(response.data.usersWithSkills);
        console.log(usersWithSkills)
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error)
      }
    };
    fetchData();
  };

  return (
    <>
    <div style={{backgroundColor:"white"}}>
      {usersWithSkills.length > 0 ? (
        <div>
          {usersWithSkills.map((userData, index) => (
            <>
            <div key={index}>
              <Profile username={userData.user.username} 
              email={userData.user.email} 
              phoneno={userData.user.phoneno} 
              address={userData.user.address} 
              imgurl={`https://skillconnect-backend.onrender.com/Images/${userData.user.profilePic}`} 
              skills={userData.skills}/>
            </div>
            </>
          ))}
        </div>
      ) : (
        <div>
          <div style={{backgroundColor:"black"}}>
      <div className="static-slider9 position-relative">
  <div className="row">
    <div className="container" style={{margin:"20px"}}>
      <div className="col-md-5 info-detail align-self-center" >
        <h1 className="title">Unleash your potential and fuel your passion</h1>
        <form className="form-inline" onSubmit={handleSubmit}>
          <div className="form-group">
            </div>
            <input type="text" className="form-control form-control-lg mr-2 mb-2" id="address"
          name="address"
          value={address} onChange={handleAddressChange} placeholder="Enter Location" required></input>
          <button type="submit" className="btn btn-md btn-success-gradiant text-white border-0 mb-2">Search</button>
        </form>
      </div>
    </div>
    <div className="col-md-5 bg-img" style={{backgroundImage:`url(${img3})`,backgroundSize: 'cover', height: '70vh',width:"50%",margin:"30px"}}>
    </div>
  </div>
</div>
    </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Display;


