import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        text: "",
        password: ""
    })

    // const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        // const getuserArr = localStorage.getItem("useryoutube");
        // console.log(getuserArr);

        //fastAPI backend using axios

        const { email, password } = inpval;

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        myHeaders.append("Access-Control-Allow-Origin", "*");

        console.log(myHeaders);
        const data = new URLSearchParams();
        data.append("username", inpval.text);
        data.append("password", inpval.password);
        console.log(data);


        axios.post("http://127.0.0.1:8000/login", data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then((res) => {
                console.log(res.data);
                if (res.data === "invalid details") {
                    toast.error('invalid details', {
                        position: "top-center",
                    });
                }

                if (email === "") {
                    toast.error('email field is requred', {
                        position: "top-center",
                    });
                // } else if (!email.includes("@")) {
                //     toast.error('plz enter valid email addres', {
                //         position: "top-center",
                //     });
                } else if (password === "") {
                    toast.error('password field is requred', {
                        position: "top-center",
                    });
                } else if (password.length < 5) {
                    toast.error('password length greater five', {
                        position: "top-center",
                    });
                } else {
                    toast.success('login successfully', {
                        position: "top-center",
                    });
                    history('/details');
                }

            }
            )
            .catch((err) => {
                console.log(err);
            })

    }

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-4 p-3" style={{ height: "100%",marginLeft:75 }}>
                        <h3 className='text-center col-lg-20'>Sign In</h3>
                        <br></br>
                        <Form  >

                            <Form.Group className="mb-4 col-lg-29" controlId="formBasicEmail">

                                <Form.Control type="text" name='text' onChange={getdata} placeholder="Enter username" autoComplete="off"/>
                            </Form.Group>

                            <Form.Group className="mb-4 col-lg-29" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" autoComplete="off" />
                            </Form.Group>
                            <br></br>

                            <Button variant="primary" className='col-lg-50 d-flex justify-content-center' onClick={addData} style={{ background: "black",width:100,marginLeft:50,borderRadius: 5}} type="submit">
                             <div style={{color: "#FFDB58"}} > SIGN IN </div>  
                            </Button>
                        </Form>
                        <br></br>
                        <p className='text-center col-lg-17'>Welcome Back ! </p>
                    </div>
                    <div className= "position-fixed top-50 start-100 translate-middle" style={{maxwidth:50 ,position:"left"}}> 
                    <img src="https://www.allen.ac.in/ace2223/assets/images/login.png" style={{maxWidth:400,marginRight:750}} alt="" />
                    </div>
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Login