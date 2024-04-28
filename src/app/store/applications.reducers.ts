import { createReducer, on } from '@ngrx/store';
import {
  addApplicationAction,
  removeApplicationAction,
} from './applications.action';
import { AppState } from './applications.state';

export const applicationObj: AppState = {
  applicationList: [],
};
export const applicationsReducer = createReducer(
  applicationObj,
  on(addApplicationAction, (state: any, { appDetails }) => {
    console.log(state);

    return {
      ...state,
      applicationList: [...state.applicationList, appDetails],
    };
  }),
  on(removeApplicationAction, (state, props) => {
    return state;
  })
);
