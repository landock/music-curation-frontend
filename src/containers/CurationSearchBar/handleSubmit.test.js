import handleSubmit from './handleSubmit';
import { of } from 'rxjs/observable/of';
import configureActionAndDispatchIt from './configureActionAndDispatchIt';

// jest.mock('rxjs/Observable');
jest.mock('./configureActionAndDispatchIt');

it('should', () => {
  const selectorStream = of('duck');
  const stateStream = of({ searchTerm: 'deliver' });
  const propsStream = of({ test: 'this' });
  const result = new handleSubmit(selectorStream, stateStream, propsStream);

  result.subscribe(val => {
    expect(configureActionAndDispatchIt).toHaveBeenCalled();
  });
});
