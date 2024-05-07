import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { authActions } from "../Store";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/logo.jpeg';
function Header() {
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn)
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#074173" }}>
      <Container>
        <div style={{ display: "flex", flexDirection: "row", gap: "1px" }}>
          <img src={logo} className="rounded-circle" style={{ width: '60px', height: "50px" }} />
          <Navbar.Brand href="#" style={{ color: "#ffffff", fontFamily: "Brush Script MT", fontWeight: "bolder", fontSize: "30px" }}><span style={{ color: "white" }}>Skill</span><span style={{ color: "white" }}>Connect</span></Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/" style={{ color: "#ffffff" }} >HOME</Nav.Link>
              {isLoggedIn && <>
                <Nav.Link href="/profile" style={{ color: "#ffffff" }} >PROFILE</Nav.Link>
                <Nav.Link href="/display" style={{ color: "#ffffff" }} >SEARCH SKILLS</Nav.Link>
                <Nav.Link href="/addskill" style={{ color: "#ffffff" }}>ADD SKILL</Nav.Link>
                <Nav.Link href="/myskills" style={{ color: "#ffffff" }}>MY SKILLs</Nav.Link></>
                }
            {!isLoggedIn && <><Nav.Link href="/login" style={{ color: "#ffffff" }} >LOGIN</Nav.Link>
                <Nav.Link href="/signup" style={{ color: "#ffffff" }}>SIGNUP</Nav.Link></> }
              {isLoggedIn && <Link to='/'><button type="button" className="btn btn-primary me-2" onClick={() => dispath(authActions.logout())}>Logout</button></Link>}
            </Nav>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;