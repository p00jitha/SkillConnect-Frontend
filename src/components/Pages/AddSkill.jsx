import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

const PostSkill = () => {
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
 const dispath = useDispatch();
  const [formData, setFormData] = useState({
    userId: '',
    skillName: '',
    description: '',
    credentialsphoto: null
  });

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    console.log(userId)
    if (userId) {
      setFormData({ ...formData, userId });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      credentialsphoto: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = new FormData();
    postData.append('userId', formData.userId);
    postData.append('skillName', formData.skillName);
    postData.append('description', formData.description);
    postData.append('credentials', formData.credentialsphoto);

    try {
      const response = await axios.post('https://skillconnect-backend.onrender.com/api/skill/add_skills', postData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(()=>toast.success("Skill added successfully"))
      .then(()=>navigate('/display'))
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
   <>
   <div className='container'>
         <div className='container' style={divStyle}>
          <div className='box' style={loginStyle}>
            <form onSubmit={handleSubmit}>
            <h1>ADD SKILLS</h1>
            <div className="form-outline mb-4"></div>
            <div className="form-outline mb-4"></div>
        <div className="form-outline mb-4">
             <label className="form-label" for="form2Example1">SkillName</label>
            <input type="text" name="skillName" className="form-control" placeholder="Skill Name"   value={formData.skillName} onChange={handleChange}  required />
          </div>
          <div className="form-outline mb-4">
           <label className="form-label" for="form2Example2">Description</label>
           <textarea name="description" className="form-control" placeholder="Description" value={formData.description} onChange={handleChange} required></textarea>
         </div>
         <div className="form-outline mb-4">
           <label className="form-label" for="form2Example2">Credentials</label>
           <div >
           <input type="file" name="credentials" onChange={handleFileChange} required />
           </div>
         </div>
         <button type="submit" className="btn btn-primary btn-block mb-4">Post Skill</button>
            </form>
          </div>
         </div>
     </div>
   </>
  );
}

export default PostSkill;


