import React from "react";
import "../App.css";
import { Box } from "@mui/material";
import MyTextField from "./form/MyTextField";
import MyButton from "./form/MyButton";
import MyPassField from "./form/MyPassField";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AxiosInstance from "./AxiosInstance";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const submission = (data) => {
    AxiosInstance.post(`register/`, {
      email: data.email,
      password: data.password,
    }).then((res) => {
      navigate("/");
    });
  };
  return (
    <>
      <div className={"myBackGround"}>
        <form onSubmit={handleSubmit(submission)}>
          <Box className={"whiteBox"}>
            <Box className={"itemBox"}>
              <Box className="title">User registration</Box>
            </Box>
            <Box className={"itemBox"}>
              <MyTextField label={"Email"} name={"email"} control={control} />
            </Box>
            <Box sx={{ width: "100%" }}>
              <MyPassField
                label={"Password"}
                name={"password"}
                control={control}
              />
            </Box>
            <Box sx={{ width: "100%", marginTop: "12px" }}>
              <MyPassField
                label={"Confirm password"}
                name={"password2"}
                control={control}
              />
            </Box>
            <Box className={"itemBox"}>
              <MyButton type={"submit"} label={"Register"} />
            </Box>
            <Box className={"itemBox"}>
              Aleady have an Account? <Link to={"/"}> login here</Link>
            </Box>
          </Box>
        </form>
      </div>
    </>
  );
};
export default Register;
