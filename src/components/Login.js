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
        email: "",
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
        data.append("username", inpval.email);
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
                <section className=' justify-content-center'>
                    <div className="left_data mt-3 p-3" style={{ height: "100%" }}>
                        <h3 className='text-center col-lg-10'>Sign In</h3>
                        <br></br>
                        <Form >

                            <Form.Group className="mb-3 col-lg-10" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-10" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <br></br>

                            <Button variant="primary" className='col-lg-10' onClick={addData} style={{ background: "black" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <br></br>
                        <p className='text-center col-lg-10'>Welcome Back ! </p>
                    </div>
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Login