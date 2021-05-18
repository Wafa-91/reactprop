import React from 'react'
import PropTypes from 'prop-types';

function Profile({fullName,profession,handleName,bio="bio is deffault prop"}) {
    let styleinline={color:"blue",textDecoration: 'underline black'}
    return (
        
        <div>
             {handleName (fullName)} 
           <h1 style={styleinline}>Hello My name is {fullName} im a {profession} </h1>
           <h2>{bio}</h2>
           {/* <button onClick={()=>handleName (fullName)} > alert</button> */}
          
        </div>
    )
}
Profile.propTypes = {
   
   fullName: PropTypes.string,
   profession: PropTypes.string
  

}

export default Profile

