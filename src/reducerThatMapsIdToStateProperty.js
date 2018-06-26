import { camelCase } from 'lodash';

export default function reducerThatMapsIdToStateProperty(state, e) {
  if (!e) return;
  const { value, innerText } = e.target;
  const id = e.target.id || e.target.parentElement.parentElement.id; //if select component then target is nested 2 deep
  let camelCaseId = camelCase(id);
  return {
    ...state,
    [camelCaseId]: value || innerText,
  };
}
