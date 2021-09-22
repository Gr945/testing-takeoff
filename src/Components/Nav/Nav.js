import React from "react";
import { Route, Link } from "react-router-dom";
import "./Nav.css";
import { poiskAC } from "../../Redux/ActionCreators";
import { useDispatch } from "react-redux";

function Nav(props) {
  const dispatch = useDispatch();

  const poiskContact = (e) => {
    dispatch(poiskAC(e.target.value));
  };

  return (
    <div className="glavDiv">
      <Route exact path="/contacts">
        <input
          placeholder="🔍︎ поиск по имяни"
          onChange={(e) => poiskContact(e)}
        />
        <Link className="linkClass" to="/">
          на главную
        </Link>
      </Route>
    </div>
  );
}

export default Nav;
