export default function getSelectorStream(
  selectorFunc,
  selectorArg,
  eventName
) {
  if (!selectorFunc) return;
  return selectorFunc(selectorArg).addListener(eventName);
}
