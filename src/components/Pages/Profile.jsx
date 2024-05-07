import React from 'react';
import './styles/Profile.css'

const Profile = ({ username, email, phoneno, address, imgurl, skills }) => {
    return (
        <div className="row py-5 px-4" id="a" >
            <div className="col-md-5 mx-auto">
                <div className="bg-dark shadow rounded overflow-hidden">
                    <div className="px-4 pt-0 pb-4 cover">
                        <div className="media align-items-end profile-head">
                            <div className="profile mr-3">
                                <div className="row">
                                    <div className="col-4">
                                        <img
                                            src={imgurl}
                                            alt="..."
                                            width="130"
                                            className="rounded mb-2 img-thumbnail"
                                        />
                                    </div>
                                    <div className="col-8">
                                        <h4 style={{ fontFamily: "Edwardian Script", fontWeight: "bold" }}>{username}</h4>

                                        <p>Address: {address}</p>
                                        <p>Email:{email}</p>
                                        <p>Phone: {phoneno}</p>
                                        {skills.length > 0 && (
                                            <div>

                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-5 py-5" style={{ marginTop: "20px", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" }}>
                        <h5>Skills:</h5>
                        <ul>
                            {skills.map((skill, index) => (
                                <li key={index}>
                                    <div style={{ display: "flex", flexDirection: "row",alignItems:"center",justifyContent:"center"}}>
                                        <div>
                                            <p><span style={{fontWeight:"bold"}}>Skill Name:</span> {skill.skillName}</p>
                                            <p> {skill.description}</p>
                                        </div>
                                        <div className="col-lg-6 mb-2 pr-lg-1">
                                            <img
                                                src={`https://skillconnect-backend.onrender.com/Skills/${skill.credentials}`}
                                                alt=""
                                                className="img-fluid rounded shadow-sm"
                                            />
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;