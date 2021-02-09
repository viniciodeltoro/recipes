import {createContext} from 'react';
import AppState from './app.state';

const AppStateContext = createContext(new AppState({}));

export default AppStateContext;
