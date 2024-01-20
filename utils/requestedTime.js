export function requestedTime(time) {
  const requestedAtTime = new Date(time);
  const currentTime = new Date();
  const durationInMilliseconds = currentTime - requestedAtTime;

  const days = Math.floor(durationInMilliseconds / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (durationInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (durationInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
  );

  let durationText = '';

  if (days > 0) {
    durationText = `${days} day${days === 1 ? '' : 's'} ago`;
  } else if (hours > 0) {
    durationText = `${hours} hour${hours === 1 ? '' : 's'} ago`;
  } else if (minutes > 0) {
    durationText = `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
  } else {
    durationText = 'just now';
  }

  return durationText;
}
