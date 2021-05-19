import React from 'react';
import Background from './64495434_p0.jpg';
import SignInSide from './Login.js';

var sectionStyle = {
  height : '100vh',
  backgroundRepeat: 'no-repeat',
// makesure here is String确保这里是一个字符串，以下是es6写法
  backgroundImage: `url(${Background})` 
};

const Login=(props)=>{
  return (
    <div style={sectionStyle}>
        <SignInSide onLogin={props.onLogin}/>
    </div>
    )
}
export default Login;