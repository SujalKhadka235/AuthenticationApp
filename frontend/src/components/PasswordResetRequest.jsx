import React, { useState } from "react";
import "../App.css";
import { Box } from "@mui/material";
import MyTextField from "./form/MyTextField";
import MyButton from "./form/MyButton";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "./AxiosInstance";
import MyMessage from "./Message";
const PasswordResetRequest = () => {
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const submission = (data) => {
    AxiosInstance.post(`/api/password_reset/`, {
      email: data.email,
    }).then((response) => {
      setShowMessage(true);
    });
  };
  return (
    <>
      <div className={"myBackGround"}>
        {showMessage ? (
          <MyMessage
            text={
              "If your email exists you have recieved an email with instructions you have recieved an email with instructions for resetting the password"
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
              <MyTextField label={"Email"} name={"email"} control={control} />
            </Box>

            <Box className={"itemBox"}>
              <MyButton type={"submit"} label={"Generate Token"} />
            </Box>
          </Box>
        </form>
      </div>
    </>
  );
};

export default PasswordResetRequest;
