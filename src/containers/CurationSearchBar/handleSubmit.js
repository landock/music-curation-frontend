import configureActionAndDispatchIt from './configureActionAndDispatchIt';
import { map, withLatestFrom } from 'rxjs/operators';

export default function handleSubmit(selectorStream, stateStream, propsStream) {
  console.log(selectorStream.pipe, '\n', stateStream, '\n', propsStream);
  let stream = selectorStream.pipe(
    withLatestFrom(stateStream),
    map(([e, state]) => state),
    withLatestFrom(propsStream),
    map(([state, props]) => {
      const { searchTerm } = state;
      return configureActionAndDispatchIt(props, searchTerm);
    })
  );
  return stream;
}
