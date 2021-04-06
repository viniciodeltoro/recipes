import {makeAutoObservable} from 'mobx';

export default class UserState {
  id = null;
  name = null;
  username = null;
  phoneNumber = null;
  email = null;
  createdAt = null;

  constructor(userData) {
    makeAutoObservable(this);
    this.setUser(userData);
  }

  get user() {
    return {
      id: this.id,
      name: this.name,
      username: this.username,
      phoneNumber: this.phoneNumber,
      email: this.email,
      createdAt: this.createdAt,
    };
  }

  setUser(userData) {
    this.id = userData.id;
    this.name = userData.name || null;
    this.username = userData.username || null;
    this.phoneNumber = userData.phoneNumber || null;
    this.email = userData.email || null;
    this.createdAt = new Date(userData.createdAt) || null;
  }
}
