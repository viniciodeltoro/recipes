import {createContext} from 'react';
import AppState from './app.state';

const appState = new AppState({});

const AppStateContext = createContext(appState);
export {AppStateContext, appState};
