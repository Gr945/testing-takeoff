import React,{useState} from 'react';
import './Contact.css'
import { useDispatch, useSelector } from "react-redux";
import {deleteContactSagaAC, renameContactSagaAC} from '../../Redux/ActionCreators'

function Contact({el}) {
  const dispatch = useDispatch();
  const state= useSelector((state) => state);
  const [rename, setRename] = useState(true)
const deleteContact = () => {
dispatch(deleteContactSagaAC({contId:el._id, userId:state.user._id}))
}

const renameContact = (e) => {
  e.preventDefault()
  const newName = e.target.name.value
  const newPhone = e.target.phone.value
  const contId = el._id 
  const userId = state.user._id
  dispatch(renameContactSagaAC({newName,newPhone,userId,contId}))
  setRename((pre) => !pre)
}

  return (
    <div className="elDiv">
      {rename ?
    <div className='divCont'>
     <h3> {el.name}</h3>
     <h3>{el.phone}</h3>
     <button onClick={()=>setRename((pre) => !pre)}>изменить</button>
     <button onClick={deleteContact}>удалить</button>
    </div>
    :<div>
      <form onSubmit={(e) => renameContact(e)}>
       <div className="mb-3">
         <h1>Задайте новые параметры данному контакту</h1>
         <label htmlFor="formGroupExampleInput" className="form-label">
           Имя
         </label>
         <input
         placeholder={`старое имя + ${el.name}`}
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
         placeholder={`старый телефон + ${el.phone}`}
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
           Ok
         </button>
         <button onClick={()=>setRename((pre) => !pre)}>Отменить</button>
       </div>
     </form>
    </div>}
    </div>
  );
}

export default Contact;
