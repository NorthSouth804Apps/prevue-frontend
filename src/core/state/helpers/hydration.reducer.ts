import { ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { AppState, statesStorage } from '..';

// place here the key of the state data you want to persist
const persistStateKeys: (keyof typeof statesStorage)[] = ['auth'];

/* hydrationMetaReducer, */
export const hydrationMetaReducer = (
  reducer: ActionReducer<AppState>
): ActionReducer<AppState> => {
  return (state, action) => {
    console.log(action, 'action');
    // finding the keys according to the type executed
    const persistKey = persistStateKeys.find((stateKey) =>
      action.type.includes(stateKey)
    );
    // looking for the next state
    const nextState = reducer(state, action);
    const persistValues: any = {};
    const storageValue = JSON.parse(
      localStorage.getItem('storageState') || '{}'
    );
    console.log('storage', storageValue);

    if (action.type === INIT || action.type === UPDATE) {


      if (storageValue) {
        Object.keys(storageValue).forEach((storageKey: any) => {
          if (persistStateKeys.indexOf(storageKey as any) > -1) {
            persistValues[storageKey] = storageValue[storageKey];
          }
        });
      }

    }

    if (persistKey && action.type.toLocaleLowerCase().includes('success')) {
      localStorage.setItem('storageState', JSON.stringify({ ...storageValue, [persistKey]: nextState[persistKey] }));
    }
    return { ...nextState, ...persistValues };
  };
};
