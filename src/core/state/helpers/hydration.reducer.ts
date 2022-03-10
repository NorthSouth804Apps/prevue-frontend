import { ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { AppState, statesStorage } from '..';
import { environment } from '../../../environments/environment';

// place here the key of the state data you want to persist, to be storage in the localStorage
const persistStateKeys: (keyof typeof statesStorage)[] = ['auth', 'user'];

/* hydrationMetaReducer, this is a meta reducer to store the specified keys above in the localStorage for future requests to it
 * @param reducer: this is the reducer what is in ejecution at the moment
 * @return: new state
 *  */
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
      localStorage.getItem(environment.localStateKey) || '{}'
    );

    // when init and when update wi will restore the state from the storage state
    if (action.type === INIT || action.type === UPDATE) {
      if (storageValue) {
        // here we update just the keys that are specified in persistStateKeys constant
        Object.keys(storageValue).forEach((storageKey: any) => {
          if (persistStateKeys.indexOf(storageKey as any) > -1) {
            persistValues[storageKey] = storageValue[storageKey];
          }
        });
      }
    }

    if (persistKey && action.type.toLocaleLowerCase().includes('success')) {
      // just will set the localStorage when the call is of success type
      localStorage.setItem(
        environment.localStateKey,
        JSON.stringify({
          ...storageValue,
          [persistKey]: { data: nextState[persistKey].data },
        })
      );
    }

    return { ...nextState, ...persistValues };
  };
};
