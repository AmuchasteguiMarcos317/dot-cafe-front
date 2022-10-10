import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from "../Features/AlertsSlice";

function Alerts() {

  const alert = useSelector(state => state.alerts)
  const dispatch = useDispatch()
  const success = (msgSuccess) => {
    toast.success(msgSuccess, {
        position: "top-left",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
  };

  const errorOn = (msgError) => {
    toast.info(msgError, {
        position: "top-left",
        autoClose: 4000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
  };

    if(alert.success){
      success(alert.message)
      dispatch(setMessage({
        message: null,
        success: null
      }))
    }else{
      errorOn(alert.message)
      dispatch(setMessage({
        message: null,
        success: null
      }))
    }

  return (
    <>
      <div>
        <ToastContainer />
      </div>
    </>
  );
}

export default Alerts;
