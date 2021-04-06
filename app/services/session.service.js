import axios from 'axios';
import {MMKV} from 'react-native-mmkv';

const loginRequest = (username, password) => {
  const requestData = {
    method: 'post',
    url: 'http://192.168.1.22:3000/session',
    data: {
      username: username,
      password: password,
    },
    headers: {'Content-Type': 'application/json'},
  };
  return axios(requestData);
};

const saveData = (data, name) => {
  if (typeof data === 'object' && Object.keys(data).length > 0) {
    MMKV.set(name, JSON.stringify(data));
  }
};

const getSavedData = (name) => {
  const jsonString = MMKV.getString(name);
  if (typeof jsonString === 'string' && jsonString.length > 0) {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      return;
    }
  }
  return;
};

export {loginRequest, saveData, getSavedData};
