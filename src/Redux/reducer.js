const initialState = { user: {}, contacts: [], poisk: "" };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "INIT_CONTACTS":
      return { ...state, contacts: action.payload };
    case "LOGIN_USER":
      return { ...state, user: action.payload };
    case "ADD_CONTACTS":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "DELETE_CONTACTS":
      return {
        ...state,
        contacts: [...state.contacts.filter((el) => el._id !== action.payload)],
      };
    case "RENAME_CONTACTS":
      return {
        ...state,
        contacts: state.contacts.map((el) => {
          if (el._id === action.payload._id) {
            return {
              ...el,
              name: action.payload.name,
              phone: action.payload.phone,
            };
          } else {
            return el;
          }
        }),
      };
    case "POISK_CONTACTS":
      return { ...state, poisk: action.payload };
    default:
      return state;
  }
}
