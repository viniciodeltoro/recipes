import axios from 'axios';
import {appState} from '../states/app.state.context';

const loginRequest = async (username, password) => {
  const requestData = {
    method: 'post',
    url: 'http://192.168.1.20:3000/session',
    data: {
      username: username,
      password: password,
    },
  };
  try {
    const response = await axios.post(requestData);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

export default loginRequest;
