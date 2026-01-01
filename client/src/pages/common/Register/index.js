import { Form, message } from "antd";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../../apicalls/users";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
import '../Login/Studlog.css';

function Register() {
  const [name,setName]=useState();
  const [phone,setPhone]=useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await registerUser(values);

      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        navigate("/login");
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-primary">
      <div className="card w-400 p-3 bg-white" style={{borderRadius:"40px"}}>
        <div className="flex flex-col">
          <h1 className="text-2xl"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            REGISTRATION
          </h1>
          <div className="divider"></div>
          <Form layout="vertical" className="mt-2" onFinish={onFinish}>
            <Form.Item name="name" label="Name">
              <input type="text" onChange={(event)=>setName(event.target.value)}/>
            </Form.Item>
            <p className={name?"data":"noData"}>{name? "" : "Please Enter Your Name"}</p>  

            <Form.Item name="phone" label="Phone">
              <input type="text" onChange={(event)=>setPhone(event.target.value)}/>
            </Form.Item>
            <p className={phone?"data":"noData"}>{phone? "" : "Please Enter Your Phone no"}</p>  

            <Form.Item name="email" label="Email" >
              <input type="text" onChange={(event)=>setEmail(event.target.value)} required/>
            </Form.Item>
            <p className={email?"data":"noData"}>{email? "" : "Email is required"}</p>  

            <Form.Item name="password" label="Password">
              <input type="password" onChange={(event)=>setPassword(event.target.value)}/>
            </Form.Item>
            <p className={password?"data":"noData"}>{password? "" : "Password is required"}</p>  

            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="primary-contained-btn mt-2 w-100"
              >
                Register
              </button>
              <p>Have Already an account? &nbsp;
              <Link to="/login">Login Here</Link></p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
