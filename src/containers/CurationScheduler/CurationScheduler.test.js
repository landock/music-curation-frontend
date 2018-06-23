import { of } from 'rxjs/observable/of';

import {
  handleFormSubmit,
  addListenerToElement,
  CurationSchedulerView,
} from '.';

describe('CurationSchedulerView', () => {
  describe('handleFormSubmit', () => {
    it('should return an action object', () => {
      const mockEventStream = of({ target: { value: '', innerText: '' } });
      const result = handleFormSubmit();
    });
  });
});
