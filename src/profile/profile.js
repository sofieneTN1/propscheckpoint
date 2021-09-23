import React from "react";
import PropTypes from "prop-types";

function Profile(props){

    const handleClick = el => {
        alert("Fullname is "+ el);
      };

    return(
        <div>
            <h1>{props.Fullname}</h1>
            <h2>{props.bio}</h2>
            <h3>{props.profession}</h3>
            <h4><a  href="/" onClick={() => {handleClick(props.Fullname)}}>Click Me</a></h4>
            {props.children}
        </div>

    )
}

Profile.defaultProps = {
    Fullname: "Fullname",
    bio: "bio",
    profession: "profession",
    children:"No Image"

   };

   Profile.propTypes = {
    Fullname:PropTypes.string,
    bio:PropTypes.number,
    profession:PropTypes.string,
    children:PropTypes.any
   };


export default Profile;