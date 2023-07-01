import React from "react";
import { useNavigate } from "react-router-dom";


//shoe component that will render in the main page

const Shoe = ({
  icon,
  shoe,
  id,
}) => {
  let navigate = useNavigate();
  return (
    <div>
        <img src={icon} alt="Shoe Icon" />
        <h2>{shoe}</h2>
        <button onClick={() => {navigate(`/ShoePage/${id}`); }}> More Info </button>
    </div>
  );
};

export default Shoe;
