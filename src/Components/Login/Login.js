import React from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUserSagaAC } from "../../Redux/ActionCreators";

function Login(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const loginUser = async (e) => {
    e.preventDefault();

    dispatch(
      loginUserSagaAC({
        login: e.target.login.value,
        password: e.target.password.value,
      })
    );
  };
  state.user._id && history.push("/contacts");

  return (
    <div className="divLogin animate__animated animate__flipInY">
      <form onSubmit={loginUser}>
        <div className="lab row mb-3">
          <label className="left col-sm-2 col-form-label">логин</label>
          <div style={{ maxWidth: "400px" }} className="col-sm-10">
            <input
              required
              name="login"
              type="string"
              className="form-control"
              id="inputEmail3"
            />
          </div>
        </div>
        <div className="row mb-2">
          <label className="left col-sm-2 col-form-label">пароль</label>
          <div style={{ maxWidth: "400px" }} className="col-sm-10">
            <input
              required
              name="password"
              type="password"
              className="form-control"
              id="inputPassword3"
            />
          </div>
        </div>
        <button className="btn btn-primary animate__animated animate__lightSpeedInRight">
          войти
        </button>
      </form>
    </div>
  );
}

export default Login;
