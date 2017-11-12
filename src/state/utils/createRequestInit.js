const createRequestInit = (init) => {
  const headers = {
    Authorization: 'soulchainer',
    'Content-Type': 'application/json',
  };

  return { headers, ...init };
};

export default createRequestInit;
