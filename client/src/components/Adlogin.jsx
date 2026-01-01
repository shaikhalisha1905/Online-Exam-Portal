// import React, { useState, useEffect } from "react";
// //import { Link } from "react-router-dom";
// import '../stylesheets/Adlogin.css'

// export default function Adlogin() {

//   const initialvalues = { username: "", password: "" };
//   const [formvalues, setFrormvalues] = useState(initialvalues);
//   const [formerrors, setFormerrors] = useState({})
//   const [isSubmit, setIsSubmit] = useState(false);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFrormvalues({ ...formvalues, [name]: value });
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormerrors(validate(formvalues));
//     setIsSubmit(true);
//   }
//   useEffect(() => {
//     console.log(formerrors);
//     if (Object.keys(formerrors).lenght === 0 && isSubmit) {
//       console.log(formvalues);
//       <p>form submited</p>
//     }
//   })

//   const validate = (values) => {
//     let Admin_name = "admin@gmail.com";
//     let Admin_password = "ad1955";
//     let flag = 1;
//     const errors = {}
//     if (!values.username) {
//       errors.username = "Username is required!";
//       flag = 0;
//     } 
//     else {
//       flag = 1;
//     }
//     if (!values.password) {
//       errors.password = "Password is required!";
//       flag = 0;
//     }
//     else if (values.password.length < 8) {
//       errors.password = "Password must be more than 8 characters";
//       flag = 0;
//     }
//     else {
//       flag = 1;
//     }

//     if (values.username === Admin_name && values.password === Admin_password) {
//       alert("Login successfull...");
//       window.location.href = "/admin/exams";

//     }
    
//     return errors
//   }
//   return (
  
//     <div className="container" style={{marginLeft:"50px",marginRight:"50px"}}>
//       <br /><br />
//       <form onSubmit={handleSubmit} className="flog">
//         <div>
//           <h1 className="logh">Admin Login</h1>
//           {/* <p style={{color:"brown" ,marginLeft:"492px",marginTop:"-30px",fontSize:"23px"}}>Please Enter Data into Fields</p> */}
//           <div className="login_Controll">
//             <label className="loglbl">Username : </label>
//             <input className="logip" type="text" name="username" placeholder="Username" style={{fontSize:"16px",marginLeft:"490px",borderRadius: "20px", borderColor: "gray" ,height:"40px",width:"300px"}} value={formvalues.username} onChange={handleChange} />
//             <p style={{ color: "red" ,fontSize:"18px",marginLeft:"490px"}}>{formerrors.username}</p>

//             <label className="loglbl">Password : </label>
//             <input className="logip" type="password" name="password" placeholder="Password" style={{fontSize:"16px",marginLeft:"490px",borderRadius: "20px", borderColor: "grey" ,height:"40px",width:"300px" }} value={formvalues.password} onChange={handleChange} />
//             <p style={{ color: "red",fontSize:"18px",marginLeft:"490px"}}>{formerrors.password}</p>
//           </div>

//           <input type="submit" align="right" value="Submit" className='logbtnsub'></input>
//         </div>
       

//       </form>
//     </div>
//   )
// }





import { Form, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../apicalls/users";
import { HideLoading, ShowLoading } from "../redux/loaderSlice";

function Adlogin() {
  
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await loginUser(values);
      dispatch(HideLoading());
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("token", response.data);
        window.location.href = "/admin/exams";
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen " style={{backgroundColor:"rgb(34, 34, 95)"}}>
      <div className="card w-400 p-3 bg-white">
        <div className="flex flex-col">
          <div className="flex">
            <h1 className="text-2xl ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Admin Login </h1>
            
          </div>
          <div className="divider"></div>
          <Form layout="vertical" className="mt-2" onFinish={onFinish}>
            <Form.Item name="email" label="Email">
              <input type="text" required/>
            </Form.Item>
            <Form.Item name="password" label="Password">
              <input type="password" required/>
            </Form.Item>
              
            <div className="flex flex-col gap-2">
              <button
                type="submit" style={{borderRadius:"5px",backgroundColor:"rgb(34, 34, 95)",color:"white",fontSize:"19px"}}
                className=""
              >
                Login
              </button>
              
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Adlogin;
