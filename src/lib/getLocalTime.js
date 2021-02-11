function getLocalTime(timeString) {
  const time = new Date(timeString);
  const timeZoneOffset = time.getTimezoneOffset();
  const moscowTimeZoneOffset = -180;

  const localTime =
    time.getTime() - (timeZoneOffset - moscowTimeZoneOffset) * 60 * 1000;
  return new Date(localTime);
}

export { getLocalTime };
