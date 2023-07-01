import React from "react";
import { useNavigate } from "react-router-dom";


//shoe component that will render in the main page

const Shoe = ({
  icon,
  shoeName,
  id,
}) => {
  let navigate = useNavigate();
  return (
    <div>
        <img src={icon} alt="Shoe Icon" />
        <h1 className="coinName">{shoeName.name}</h1>
        <button onClick={() => {navigate(`/ShoePage/${id}`); }}> More Info </button>
    </div>
  );
};

export default Shoe;
