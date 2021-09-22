import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  initContactsSagaAC,
  addContactsSagaAC,
} from "../../Redux/ActionCreators";
import Contact from "../Contact/Contact";
import "./Contacts.css";

function Contacts(props) {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const initContacts = () => {
    dispatch(initContactsSagaAC(state.user._id));
  };

  useEffect(() => {
    initContacts();
  }, );

  const addContacts = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const id = state.user._id;

    dispatch(addContactsSagaAC({ name, phone, id }));
    setModal((pre) => !pre);
  };
  
  const sortArr = state.contacts.filter((el) =>
    el.name.toUpperCase().includes(state.poisk.toUpperCase()))


  return (
    <div>
      {!modal ? (
        <div className="contacts">
          <button onClick={() => setModal((pre) => !pre)}>
            Добавить контакт
          </button>
          {state.contacts.length ? (
            sortArr.map((el) => <Contact key={el._id} el={el} />)
          ) : (
            <div>список контактов пуст</div>
          )}
        </div>
      ) : (
        <div className="formDiv animate__animated animate__flipInY">
          <form onSubmit={(e) => addContacts(e)}>
            <div className="mb-3">
              <h1>Добавить новый контакт</h1>
              <label htmlFor="formGroupExampleInput" className="form-label">
                Имя
              </label>
              <input
                name="name"
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Телефон
              </label>
              <input
                min="6"
                name="phone"
                required
                type="number"
                className="form-control"
                id="formGroupExampleInput2"
              />
            </div>
            <div>
              <button type="submit" className="btn btn-success">
                Добавить
              </button>
              <button onClick={() => setModal((pre) => !pre)}>Отменить</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Contacts;
