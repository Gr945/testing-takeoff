import { call, put, takeEvery } from "redux-saga/effects";
import { fetchLoginUser } from "./async/fetchLoginUser";
import {
  loginUserAC,
  initContactsAC,
  addContactsAC,
  deleteContactsAC,
  renameContactAC,
} from "./ActionCreators";
import { fetchInitContacts } from "./async/fetchInitContacts";
import { fetchAddContacts } from "./async/fetchAddContacts";
import { fetchDeleteContacts } from "./async/fetchDeleteContacts";
import { fetchRenameContacts } from "./async/fetchRenameContacts";

//init worker
export function* workerInitContacts(action) {
  try {
    const allContacts = yield call(fetchInitContacts, action.payload);
    yield put(initContactsAC(allContacts));
  } catch (e) {
    yield put({ type: "error", message: e.message });
  }
}

//login
export function* workerLoginUser(action) {
  try {
    const loginUser = yield call(fetchLoginUser, action.payload);
    yield put(loginUserAC(loginUser));
  } catch (e) {
    yield put({ type: "error", message: e.message });
  }
}
//add contacts
export function* workerAddContacts(action) {
  try {
    const addCont = yield call(fetchAddContacts, action.payload);
    yield put(addContactsAC(addCont));
  } catch (e) {
    yield put({ type: "error", message: e.message });
  }
}
//delete contacts worker
export function* workerDeleteContacts(action) {
  try {
    yield call(fetchDeleteContacts, action.payload);
    yield put(deleteContactsAC(action.payload.contId));
  } catch (e) {
    yield put({ type: "error", message: e.message });
  }
}

//rename contacts

export function* workerRenameContacts(action) {
  try {
    const renameContacts = yield call(fetchRenameContacts, action.payload);
    yield put(renameContactAC(renameContacts));
  } catch (e) {
    yield put({ type: "error", message: e.message });
  }
}

export function* watcher() {
  yield takeEvery("LOGIN_USER_SAGA", workerLoginUser);
  yield takeEvery("INIT_CONTACTS_SAGA", workerInitContacts);
  yield takeEvery("ADD_CONTACTS_SAGA", workerAddContacts);
  yield takeEvery("DELETE_CONTACTS_SAGA", workerDeleteContacts);
  yield takeEvery("RENAME_CONTACTS_SAGA", workerRenameContacts);
}
