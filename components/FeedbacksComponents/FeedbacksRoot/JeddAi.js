import React from 'react';

const isJeddAIUser = (review) => {
  const JeddId = [26614, 26572];

  return JeddId.includes(Number(review));
};

export default isJeddAIUser;
