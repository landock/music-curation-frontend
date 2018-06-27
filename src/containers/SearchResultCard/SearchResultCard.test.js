import {
  mapClickEventToActionWithPropsAsPayload,
  SearchResultCardView,
} from '.';
import { of } from 'rxjs/observable/of';

describe('SearchResultCard', () => {
  describe('mapClickEventToActionWithPropsAsPayload', () => {
    it('should return an action object that will dispatch the props as a payload', () => {
      const id = 1122333;
      const mockEventStream = of('click');
      const mockPropsStream = of({ id });
      const result = mapClickEventToActionWithPropsAsPayload(
        mockEventStream,
        mockPropsStream
      );

      result.subscribe(val => {
        expect(val.payload.id).toBe(id);
      });
    });
  });
});
