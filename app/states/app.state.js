import {makeAutoObservable} from 'mobx';
import SessionSate from './session.state';
import UserState from './user.state';

export default class AppState {
  session;
  user;

  constructor(appData) {
    makeAutoObservable(this);
    this.session = appData.session || new SessionSate({});
    this.user = appData.user || new UserState({});
  }

  get getSession() {
    return this.session;
  }

  get getUser() {
    return this.user;
  }

  setSession(data) {
    this.session.setSession(data);
  }

  setUser(data) {
    this.user.setUser(data);
  }
}
