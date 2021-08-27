const postReducer = (posts = [], { type, payload }) => {
  switch (type) {
    case 'FETCH_ALL':
      return payload;

    case 'CREATE':
      return [
        ...posts,
        payload,
      ];

    default:
      return posts;
  }
};

export default postReducer;
