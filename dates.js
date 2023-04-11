// Format the date to the desired output format
const options = { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric', 
  hour: 'numeric', 
  minute: 'numeric', 
  hour12: true 
};

export const formattedDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString(undefined, options);
}

