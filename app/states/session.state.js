import {makeAutoObservable} from 'mobx';

export default class SessionState {
  id = '';
  createdAt = '';
  expiresAt = '';
  username = '';
  fullName = '';

  constructor(sessionData) {
    makeAutoObservable(this);
    this.id = sessionData.id;
    this.createdAt = sessionData.createdAt || '';
    this.expiresAt = sessionData.expiresAt || '';
    this.username = sessionData.username || '';
    this.fullName = sessionData.fullName || '';
  }

  get sessionId() {
    return this.id;
  }

  get sessionCreatedAt() {
    return this.createdAt;
  }

  get sessionExpiresAt() {
    return this.expiresAt;
  }

  get sessionUsername() {
    return this.username;
  }

  get sessionFullName() {
    return this.fullName;
  }
}
