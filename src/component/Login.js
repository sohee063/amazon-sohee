import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h1>로그인</h1>
        <form>
          <h5> 이메일 </h5>
          <input type="text" />
          <h5> 비밀번호 </h5>
          <input type="password" />

          <button className="login-singInButton"> 로그인 하기 </button>
        </form>
        <p>이용 약관 동의하십니까?</p>
        <button className="login-registerButton"> 회원 가입 </button>
      </div>
    </div>
  );
};

export default Login;
