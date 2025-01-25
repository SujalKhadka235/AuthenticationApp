import React, { useState } from "react";
import "../App.css";
import { Box } from "@mui/material";
import MyTextField from "./form/MyTextField";
import MyButton from "./form/MyButton";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "./AxiosInstance";
import MyMessage from "./Message";
import { useParams } from "react-router-dom";
import MyPassField from "./form/MyPassField";
const PasswordReset = () => {
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();
  console.log(token);
  const { handleSubmit, control } = useForm();
  const submission = (data) => {
    AxiosInstance.post(`/api/password_reset/confirm/`, {
      password: data.password,
      token: token,
    }).then((response) => {
      setShowMessage(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    });
  };
  return (
    <>
      <div className={"myBackGround"}>
        {showMessage ? (
          <MyMessage
            text={
              "Your password reset was sucessfull. You will be directed to login page in a second"
            }
          />
        ) : null}
        <form onSubmit={handleSubmit(submission)}>
          <Box className={"whiteBox"}>
            <Box className={"itemBox"}>
              <Box className="title" fontSize={25}>
                Request password Reset
              </Box>
            </Box>
            <Box className={"itemBox"}>
              <MyPassField
                label={"Password"}
                name={"password"}
                control={control}
              />
            </Box>
            <Box className={"itemBox"}>
              <MyPassField
                label={"Confirm password"}
                name={"password2"}
                control={control}
              />
            </Box>

            <Box className={"itemBox"}>
              <MyButton type={"submit"} label={"Reset password"} />
            </Box>
          </Box>
        </form>
      </div>
    </>
  );
};

export default PasswordReset;
