import React from 'react'
import img2 from '../Images/img2.png'
import img4 from '../Images/img4.jpg'
import './styles/About.css'
const About = () => {
  return (
    <div>
      <div className="py-5 service-26" style={{backgroundColor:"black"}}>
    <div className="container">
        <div className="row wrap-service-26">
            <div className="col-md-7 align-self-center">
                <div className="max-box"> 
                    <h3 className="title font-weight-light text-white mt-2" style={{color:"white",fontFamily:"Edwardian Script",fontWeight:"bold",fontSize:"60px"}}>Our Mission</h3>
                    <p className="subtitle font-weight-normal" style={{color:"white"}}>At <span style={{fontWeight:"bold",fontFamily:"Edwardian Script"}}>SkillConnect</span>, we believe that everyone has something valuable to teach and something valuable to learn. We're passionate about connecting talented individuals with eager learners, fostering a community where knowledge and expertise are shared freely and enthusiastically.</p>
                    <p className='subtitle font-weight-normal' style={{color:"white"}}>Our mission is to bridge the gap between those who aspire to share their skills and those who are eager to learn, all within their local communities. We understand the challenges individuals face in accessing proper guidance and mentorship, which is why we've created a user-friendly platform that makes learning and teaching accessible to all.</p>
                   
                </div>
            </div>
            <div className="col-md-5 col-md-5"> 
							<img src={img4} className="img-fluid" style={{height:"20em"}} /> 
						</div>
        </div>
        <div className="row wrap-service-26 mt-4 pt-3">
            <div className="col-md-6"> 
							<img src={img2} className="img-fluid"/> 
						</div>
            <div className="col-md-6 align-self-center">
                <h3 className="title font-weight-light text-white mt-2" style={{color:"white",fontFamily:"Edwardian Script",fontWeight:"bold",fontSize:"50px"}}>Our Commitment</h3>
                <p className="subtitle font-weight-normal" style={{color:"white"}}>Through our website, skilled individuals can showcase their expertise and offer teaching services, whether it's in their spare time as a passion project or as a professional endeavor. Meanwhile, learners can explore a diverse range of subjects and find the perfect teacher to guide them on their learning journey.
</p>
                <p className="subtitle font-weight-normal" style={{color:"white"}}>We're committed to democratizing access to education, empowering individuals to share their knowledge, and creating lifelong learning opportunities for everyone. Join us in our mission to make learning a joyful and enriching experience for all members of society</p>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default About