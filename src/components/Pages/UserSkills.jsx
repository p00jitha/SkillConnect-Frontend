import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
import axios from 'axios'
import './styles/UserSkill.css'
const UserSkills = () => {
  const navigate = useNavigate();
  const [skill, setSkill] = useState([]);
  const id = localStorage.getItem("userId");
  const sendRequest = async () => {
    const res = await axios
      .get(`https://skillconnect-backend.onrender.com/api/skill/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => {
      const { usersWithSkills } = data;
      const [{ skills }] = usersWithSkills;
      setSkill(skills || [])
    });
  }, []);
  const deleteRequest = async (skillid) => {
    const res = await axios
      .delete(`https://skillconnect-backend.onrender.com/api/skill/${id}/${skillid}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleDelete = (skillid) => {
    deleteRequest(skillid)
    .then(() => {
      navigate("/");
    })
    .catch((error) => {
      console.error("Error deleting skill:", error);
    });
  };
  return (
    <>
      {skill.length > 0 ? (<div>
        {skill.map(skills => (
          <div className='userskills' key={skills._id}>
            <div className="card dark" id="card">
              <img src={`https://skillconnect-backend.onrender.com/Skills/${skills.credentials}`} className="card-img-top" id="card-img" alt="..." />
              <div className="card-body">
                <div className="text-section">
                  <h5 className="card-title fw-bold">{skills.skillName}</h5>
                  <p className="card-text">{skills.description}</p>
                </div>
                <div>
                  <div className="cta-section">
                    <a href="#" className="btn btn-light" onClick={() => handleDelete(skills._id)}>Delete</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>) : (
        <>
          <div>
            <div className="px-4 py-5 my-5 text-center">
              <h1 className="display-5 fw-bold" style={{ color: "white" }}>🌟Empower.💡Share.🎓Learn.🤝Connect.🌱Grow.</h1>
              <div className="col-lg-6 mx-auto">
                <h2 className="lead mb-4" style={{ color: "white" }}>🚀 Ready to share your expertise and ignite a passion for learning? Don't wait! Add your skills now
                  and become a beacon of knowledge in your community. 🌟 Whether it's coding, cooking, or crafting, your talents can
                  inspire others to reach new heights. Let's embark on this exciting journey together! 💡</h2>
                  <p> #UnlockYourPotential #EmpowerOthers 🌱</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to='/addskill'><button type="submit" className="btn btn-primary me-2">ADD SKILLS</button></Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default UserSkills

{/* <div>
{skill.map(skills => (
  <p key={skills._id}>{skills.description}</p>
))}
</div> */}
