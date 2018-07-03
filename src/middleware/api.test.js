import apiMiddleware, { configureNextAction } from './api.js';
import { types as curationTypes } from '../modules/Curations';
import { types as apiTypes } from '../middleware/api';

describe('apiMiddleware', () => {
  it('should call an api client and dispatch the results', async () => {
    const apiClient = jest.fn();
    const next = jest.fn();
    const store = {
      getState: jest.fn(),
      dispatch: jest.fn(),
    };
    const payload = { url: '/test', params: {} };
    const action = {
      action: curationTypes.CURATIONS_FETCHED,
      type: apiTypes.API_REQUEST,
      payload,
    };

    await apiMiddleware(apiClient)(store)(next)(action);

    expect(apiClient).toHaveBeenCalledWith(payload);
    expect(store.dispatch).toHaveBeenCalled();
  });
});

describe('configureNextAction', () => {
  it('take an action and return a new action with a new type and payload', () => {
    const mockPayload = { id: 121 };
    const actionType = 'test/this/ACTION';
    const mockAction = { action: actionType };

    const result = configureNextAction(mockAction, mockPayload);

    expect(result).toMatchObject({
      type: actionType,
      payload: mockPayload,
    });
  });
});
