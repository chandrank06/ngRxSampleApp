import { createSelector } from '@ngrx/store';
import { AppState } from './applications.state';

export const applicationSelector = (state: AppState) => state.applicationList;

export const applicationCountSelector = createSelector(
  applicationSelector,
  (state) => {
    return state.applicationList.length;
  }
);
