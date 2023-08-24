export const timeFirstFormattedDate = (dateString) => {
  const date = new Date(dateString);

  const ordinal = (n) => {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  const formattedTime = date.toLocaleString(undefined, {
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h12',
  });

  const day = ordinal(date.getDate());
  const month = date.toLocaleString(undefined, {
    month: 'long',
  });

  return `${formattedTime} on ${day} ${month}`.toLowerCase();
};

export const formattedDate = (dateString) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  const date = new Date(dateString);
  return date.toLocaleString(undefined, options);
};
export const dateOnly = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};
