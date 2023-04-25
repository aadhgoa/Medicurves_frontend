import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import Navbar from './Navbar';


const Home = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword:""
    })

   


    const [data,setData] = useState([]);
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

        const { name, email,password,confirmpassword } = inpval;

        if (name === "") {
            toast.error(' username is required!',{
                position: "top-center",
            });
        } else if (email === "") {
             toast.error('email id is required',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('please enter valid email id',{
                position: "top-center",
            });
        }  else if (password === "") {
             toast.error('password field is requred',{
                position: "top-center",
            });
        } else if (password.length < 5) {
             toast.error('password length greater five',{
                position: "top-center",
            });
        } else if (confirmpassword === "") {
            toast.error('please confirm your password',{
               position: "top-center",
           });
       }
        else {
            console.log("data added succesfully");
            history("/login")
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

        }

    }

    return (
        <>
        {/* <Navbar/> */}
            <div className="container mt-3 col-lg-6">
                <section >
                    <div className="left_data " >
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <br></br>

                        <Form >
                            <Form.Group className="mb-3 col-lg-15" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Username" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-15" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email id" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-15" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-15" controlId="formBasicConfirmPassword">
        <Form.Label> Confirm Password</Form.Label>
        <Form.Control type="password" name='confirmpassword' onChange={getdata} placeholder="Confirm Password" />
      </Form.Group>
      <br></br>
                            <Button variant="primary" className='col-lg-15' onClick={addData} style={{ background: "black" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
                    </div>
                    <div className="right_data"> </div> 

                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Home