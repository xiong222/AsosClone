import { getFloor, setFloor } from '../modules/asos-site-chrome-store-presentation';
import { setGender } from '../template/state/modules/layout/actions';

const isValidGender = (gender) => [FEMALE, MALE].includes(gender);

const getTokenGender = (tokens) =>
  (isValidGender(tokens.gender) ? tokens.gender : DEFAULT);

const getStateGender = (state) => state.layout.gender;

const getGender = (state, tokens) => {
  const genders = [getTokenGender(tokens), getFloor(), getStateGender(state)];

  return genders.find(isValidGender) || DEFAULT;
};

const updateGenderCookie = (gender) => {
  setFloor(gender);
  return gender;
};

export default ({ store, initialState, newState }) => {
  const newGender = updateGenderCookie(getGender(initialState, newState));

  if (getStateGender(initialState) !== newGender) {
    store.dispatch(setGender(newGender));
  }
};
