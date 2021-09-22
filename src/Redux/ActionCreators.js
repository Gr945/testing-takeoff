

//login users

export const loginUserSagaAC = (payload) => {
  return {
    type: 'LOGIN_USER_SAGA',
    payload,
  };
};

export const loginUserAC = (payload) => {
  return {
    type: 'LOGIN_USER',
    payload,
  };
};

//init contacts
export const initContactsSagaAC = (payload) => {
  return {
    type: 'INIT_CONTACTS_SAGA',
    payload
  };
};

export const initContactsAC = (payload) => {
  return {
    type: "INIT_CONTACTS",
    payload,
  };
};
//add contacts
export const addContactsSagaAC = (payload) => {
  return {
    type: 'ADD_CONTACTS_SAGA',
    payload
  };
};

export const addContactsAC = (payload) => {
  return {
    type: "ADD_CONTACTS",
    payload,
  };
};
// delete contact

export const deleteContactSagaAC = (payload) => {
  return {
    type: 'DELETE_CONTACTS_SAGA',
    payload,
  };
};

export const deleteContactsAC = (payload) => {
  return {
    type: 'DELETE_CONTACTS',
    payload,
  };
};

//rename contact

export const renameContactSagaAC = (payload) => {
  return {
    type: 'RENAME_CONTACTS_SAGA',
    payload,
  };
};

export const renameContactAC = (payload) => {
  return {
    type: 'RENAME_CONTACTS',
    payload,
  };
};

//poisk contacts

export const poiskAC = (payload) => {
  return {
    type: 'POISK_CONTACTS',
    payload,
  };
};
