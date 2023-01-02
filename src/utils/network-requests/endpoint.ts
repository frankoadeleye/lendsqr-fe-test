const Endpoint = {
  users: {
    all: `${process.env.REACT_APP_LENDSQR_API_URL}/users`,
    user_details: (id: string) =>
      `${process.env.REACT_APP_LENDSQR_API_URL}/users/:${id}`,
  },
};

export default Endpoint;
