import {makeAutoObservable} from 'mobx';
import SessionSate from './session.state';

export default class AppState {
  session;

  constructor(appData) {
    makeAutoObservable(this);
    this.session = appData.session || new SessionSate({});
  }

  get getSession() {
    return this.session;
  }
}
