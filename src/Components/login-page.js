import React from "react";
import Particles from "react-particles-js";

import "../Styles/login-page.scss";
const LoginPage = () => (
  <section className="login-page">
    <div className="login-main">
      <h1>سامانه اخذ مدارک ترفیع و پایه اساتید</h1>
      <div className="particles-containe">
        <Particles />
      </div>
    </div>
    <div className="login-menu">
      <h3>وارد شوید</h3>
      <form className="login-form" onSubmit="">
        <div className="field">
          <label htmlFor="email">ایمیل :</label>
          <input type="email" name="email" />
        </div>
        <div className="field">
          <label htmlFor="password">گذرواژه :</label>
          <input type="password" name="password" />
        </div>
        <div className="field">
          <input type="submit" value="ورود" />
        </div>
      </form>
      <div className="info">
        <p>
          حسابی ندارید؟ یک حساب جدید ایجاد کنید. <br />
          آیا گذرواژه خود را فراموش کرده اید؟ فراموشی گذرواژه
        </p>
      </div>
    </div>
  </section>
);

export default LoginPage;
