import {makeAutoObservable} from 'mobx';

export default class SessionState {
  id = null;
  createdAt = null;
  expiresAt = null;
  updatedAt = null;
  token = null;

  constructor(sessionData) {
    makeAutoObservable(this);
    this.setSession(sessionData);
  }

  get session() {
    return {
      id: this.id,
      createdAt: this.createdAt,
      expiresAt: this.expiresAt,
      updatedAt: this.updatedAt,
      token: this.token,
    };
  }

  setSession(sessionData) {
    this.id = sessionData.id;
    this.createdAt = new Date(sessionData.createdAt) || null;
    this.expiresAt = new Date(sessionData.expiresAt) || null;
    this.updatedAt = new Date(sessionData.updatedAt) || null;
    this.token = sessionData.token || null;
  }
}
