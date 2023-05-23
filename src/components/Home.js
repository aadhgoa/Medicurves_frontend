import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import Navbar from './Navbar';
import axios from 'axios';
import { FaAlignJustify } from 'react-icons/fa';


const Home = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        username: "",
        email: "",
        password: "",
        confirm_password: ""
    })




    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        console.log(value, name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    // const addData = (e) => {
    //     e.preventDefault();

    //     const { name, email, password, confirm_password } = inpval;

    //     const body = {
    //         username: inpval.username,
    //         email: inpval.email,
    //         password: inpval.password,
    //         confirm_password: inpval.confirm_password
    //     }
    //     console.log(body)

    //     //fastAPI backend using axios
    //     axios.post('http://localhost:8000/register', body)
    //         .then((res) => {
    //             console.log(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })

    //     //     axios.post('http://localhost:8000/register', inputvalJSON)
    //     //         .then((res) => {
    //     //             console.log(res.data);

    //     //             if (name === "") {
    //     //                 toast.error(' username is required!', {
    //     //                     position: "top-center",
    //     //                 });
    //     //             } else if (email === "") {
    //     //                 toast.error('email id is required', {
    //     //                     position: "top-center",
    //     //                 });
    //     //             } else if (!email.includes("@")) {
    //     //                 toast.error('please enter valid email id', {
    //     //                     position: "top-center",
    //     //                 });
    //     //             } else if (password === "") {
    //     //                 toast.error('password field is requred', {
    //     //                     position: "top-center",
    //     //                 });
    //     //             } else if (password.length < 5) {
    //     //                 toast.error('password length greater five', {
    //     //                     position: "top-center",
    //     //                 });
    //     //             } else if (confirmpassword === "") {
    //     //                 toast.error('please confirm your password', {
    //     //                     position: "top-center",
    //     //                 });
    //     //             }
    //     //             else {
    //     //                 console.log("data added succesfully");


    //     //             }

    //     //         }
    //     //         )
    //     //         .catch((err) => {
    //     //             console.log(err);
    //     //         }
    //     //         )
    // }

    const addData = (e) => {
        e.preventDefault();

        const { username, email, password, confirm_password } = inpval;

        console.log(username, email, password, confirm_password);

        // check if password and confirm_password match
        if (password !== confirm_password) {
            toast.error('Passwords do not match!', {
                position: "top-center",
            });
            return;
        }

        // send POST request to backend
        axios.post(`http://127.0.0.1:8000/register?username=${inpval.username}&email=${inpval.email}&password=${inpval.password}&confirm_password=${inpval.confirm_password}`)
            .then((res) => {
                console.log(res.data);
                toast.success('User registered successfully!', {
                    position: "top-center",
                });
                history('/login');
            })
            .catch((err) => {
                console.log(err);
                toast.error('Error registering user!', {
                    position: "top-center",
                });
            });
    };



    return (
        <>
            {/* <Navbar/> */}
            <div className="container mt-3 ">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-30 p-3 " style={{width:"50%" ,height:"50",marginLeft:65,borderRadius: 10}} >
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        

                        <Form >
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name='username' onChange={getdata} placeholder="Enter Username" autoComplete="off" required/>
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email id" autoComplete="off" required/>
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" autoComplete="off" minLength="6" required/>
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicConfirmPassword">
                                <Form.Label> Confirm Password</Form.Label>
                                <Form.Control type="password" name='confirm_password' onChange={getdata} placeholder="Confirm Password" autoComplete="off" minLength="6" required />
                            </Form.Group>
                            <br></br>
                            <Button variant="primary" className='col-lg-2.9' onClick={addData} style={{ background: "black", width:100,marginLeft:65,borderRadius: 5}} type="submit">
                            <div style={{color: "#FFDB58"}} > SIGN UP </div>  
                            </Button>
                        </Form>
                        <p className='mt-3'style={{ marginLeft:6.5}}>Already Have an Account? <span><NavLink to="/login">Sign In</NavLink></span> </p>
                    </div>
                    <div className= "position-fixed top-50 start-100 translate-middle" style={{maxwidth:100 ,position:"left"}}> 
                    <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?w=2000" style={{maxWidth:350,marginRight:700,borderRadius: 290}} alt="" />
                    </div>

                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Home