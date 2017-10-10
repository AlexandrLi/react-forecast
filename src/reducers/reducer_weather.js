import {
  FETCH_WEATHER
} from '../actions';

export default function (state = [], action) {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_WEATHER:
      return action.payload.cod === '200' ? [...state, action.payload] : state;
    default:
      return state;
  }
}