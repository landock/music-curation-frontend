import { of } from 'rxjs/observable/of';
import { camelCase } from 'lodash';

import {
  handleFormSubmit,
  getSelectorStream,
  addListenerToElementReducer,
} from '.';

describe('CurationSchedulerView', () => {
  describe('handleFormSubmit', () => {
    it('should return an action object with current state as payload', () => {
      const id = 1337;
      const mockEventStream = of({ target: { value: '', innerText: '' } });
      const mockStateStream = of({ id });
      const result = handleFormSubmit(mockEventStream, mockStateStream);
      result.subscribe(value => {
        expect(value.payload.id).toBe(id);
      });
    });
  });

  describe('getSelectorStream', () => {
    it('should execute an addListener method the selector functions return object', () => {
      let selectorArgFromMock, eventNameFromMock;
      const mockSelector = jest.fn();
      const mockListener = jest.fn();
      const selectorArg = 'a-class-name';
      const eventName = 'onClick';
      mockSelector.mockReturnValue({ addListener: mockListener });

      getSelectorStream(mockSelector, selectorArg, eventName);
      selectorArgFromMock = mockSelector.mock.calls[0][0];
      eventNameFromMock = mockListener.mock.calls[0][0];

      expect(mockListener.mock.calls.length).toBe(1);
      expect(selectorArgFromMock).toBe(selectorArg);
      expect(eventNameFromMock).toBe(eventName);
    });
  });

  describe('addListenerToElementReducer', () => {
    const mockDomId = 'jpeg-mafia';
    const mockValue = 'digital blackface';
    const mockEvent = { target: { id: mockDomId, value: mockValue } };
    const expectedPropertyName = camelCase(mockDomId);
    const mockState = {};
    const result = addListenerToElementReducer(mockState, mockEvent);

    expect(result).toMatchObject({
      [expectedPropertyName]: mockValue,
    });
  });
});
