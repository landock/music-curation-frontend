import * as CurationSearchBarModule from '.';
import { of } from 'rxjs/observable/of';

import getSelectorStream from '../../getSelectorStream';
import handleSubmit from './handleSubmit';

jest.mock('../../getSelectorStream');
jest.mock('./handleSubmit');

describe('CurationSearchBar', () => {
  let { view, dispatch } = CurationSearchBarModule;
  describe('view', () => {
    it('match snapshot', () => {
      const searchTerm = 'beagles al dente';
      const mockProps = {};
      const mockState = { searchTerm };
      const result = new view(mockProps, mockState);
      expect(result).toMatchSnapshot();
    });
  });
  describe('dispatch', () => {
    it('should call getSelectorStream and handleSubmit and return the result as an array', () => {
      const searchTerm = 'beagles al dente';

      getSelectorStream.mockReturnValue(of('whatever'));
      const state = of({ id: 1 });
      const mockSources = {
        select: of('www'),
        state,
        props: of({}),
      };
      CurationSearchBarModule.handleSubmit = jest.fn();

      const result = new dispatch(mockSources);

      expect(getSelectorStream).toHaveBeenCalled();
      expect(handleSubmit).toHaveBeenCalled();
    });
  });
});
