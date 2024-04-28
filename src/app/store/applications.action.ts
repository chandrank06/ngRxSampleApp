import { createAction, props } from '@ngrx/store';

export const addApplicationAction = createAction(
  'adding applications',
  props<{ appDetails: object }>()
);
export const removeApplicationAction = createAction(
  'removing applications',
  props<{ appDetails: object }>()
);
