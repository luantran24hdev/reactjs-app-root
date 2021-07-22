import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actSetUserInfo } from "../store/user/actions";
import axios from "axios";

export default function CompLogin() {
  const dispatch = useDispatch();
  let history = useHistory();
  const id = "60f8ee7ba102b1b30a631d99";
  const [form, setForm] = useState({ email: "", password: "" });
  const onChangeFormData = (keyField) => (evt) => {
    setForm({
      ...form,
      [keyField]: evt.target.value,
    });
  };

  // submit form
  const handleSubmitLogin = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:4000/users/signin/${id}`, form).then((res) => {
      dispatch(actSetUserInfo(res));

      if (res.data.statusCode === 200) {
        alert(res.data.message);
        history.push("/");
      } else {
        alert(res.data.message);
      }
    });
  };
  return (
    <div className="ass1-login">
      <div className="ass1-login__content inner-form-login">
        <p className="inner-form-login__title">Login Form</p>
        <div className="ass1-login__form">
          <form action="#">
            <input
              value={form.email}
              onChange={onChangeFormData("email")}
              type="text"
              className="form-control"
              placeholder="Email or User"
              required
            />
            <div className="ass1-input-copy">
              <input
                value={form.password}
                onChange={onChangeFormData("password")}
                type="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-control btn-login" onClick={handleSubmitLogin}>
              LOGIN
            </div>
            <div className="form-control login-with with-color">
              Or Login with
            </div>
            <div className="ass1-login__send fb_go">
              <button className="btn__login">
                <Link to="" className="face">
                  Facebook
                </Link>
              </button>
              <button className="btn__login">
                <Link to="" className="goo">
                  Google
                </Link>
              </button>
            </div>

            <div className="remember">
              Not a remember? <Link to="/register">Signup now</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
