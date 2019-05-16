import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as UserActions } from '../ducks/users';
import { Creators as ModalActions } from '../ducks/modal';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);

    const isDuplicated = yield select(state => state.users.data.find(user => user.id === data.id));

    if (isDuplicated) {
      yield put(UserActions.addUserFailure('Usuário duplicado'));
    } else {
      const userData = {
        id: data.id,
        name: data.name,
        login: data.login,
        avatar: data.avatar_url,
        cordinates: action.payload.cordinates,
      };

      yield put(UserActions.addUserSuccess(userData));
    }
  } catch (error) {
    yield put(UserActions.addUserFailure('Erro ao adicionar usuário'));
  } finally {
    yield put(ModalActions.hideModal());
  }
}
