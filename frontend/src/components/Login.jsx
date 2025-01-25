import React from "react";
import "../App.css";
import { Box } from "@mui/material";
import MyTextField from "./form/MyTextField";
import MyButton from "./form/MyButton";
import MyPassField from "./form/MyPassField";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "./AxiosInstance";
const Login = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const submission = (data) => {
    AxiosInstance.post(`login/`, {
      email: data.email,
      password: data.password,
    })
      .then((response) => {
        console.log(response);
        localStorage.setItem("Token", response.data.token);
        navigate(`/home`);
      })
      .catch((error) => {
        console.error("Error during login", error);
      });
  };
  return (
    <>
      <div className={"myBackGround"}>
        <form onSubmit={handleSubmit(submission)}>
          <Box className={"whiteBox"}>
            <Box className={"itemBox"}>
              <Box className="title">Login for Auth App</Box>
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
            <Box className={"itemBox"}>
              <MyButton type={"submit"} label={"Login"} />
            </Box>
            <Box
              className={"itemBox"}
              sx={{ flexDirection: "column", rowGap: 2 }}
            >
              <Link to={"/register"}>Don't have an Account? register here</Link>
              <Link to={"/request/password_reset"}> Forgot password?</Link>
            </Box>
          </Box>
        </form>
      </div>
    </>
  );
};
export default Login;
