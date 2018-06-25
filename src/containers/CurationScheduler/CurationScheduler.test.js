import { of } from 'rxjs/observable/of';

import { handleFormSubmit, getSelectorStream } from '.';

describe('CurationSchedulerView', () => {
  describe('handleFormSubmit', () => {
    it('should return an action object with state as payload', () => {
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
    it('should execute an addListener method returned from the selector func', () => {
      const mockSelector = jest.fn();
      const mockListener = jest.fn();
      const selectorArg = 'Dawg_pawz';
      const eventName = 'onClick';
      mockSelector.mockReturnValue({ addListener: mockListener });

      getSelectorStream(mockSelector, selectorArg, eventName);

      expect(mockListener.mock.calls.length).toBe(1);
      expect(mockSelector.mock.calls[0][0]).toBe(selectorArg);
      expect(mockListener.mock.calls[0][0]).toBe(eventName);
    });
  });
});
