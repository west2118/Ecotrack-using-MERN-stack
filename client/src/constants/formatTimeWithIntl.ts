export const formatTimeWithIntl = (isoDate: any) => {
  const date = new Date(isoDate);

  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return date.toLocaleTimeString("en-US", options);
};
