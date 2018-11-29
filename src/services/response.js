class Response {

  static success = (res, data, message) => res.send({
    data,
    message: message || 'ok',
    success: true,
  });

  static fail = (res, data, message) => res.send({
    data,
    message: message || 'fail',
    success: false,
  });
};

export default Response;