
const asynchandler = (requesthandler) => {
    return (req, res, next) => {
      // Ensure that async functions are handled correctly
      Promise.resolve(requesthandler(req, res, next))
        .catch((err) => {
          // Ensure err has a statusCode and a message
          err.statusCode = err.statusCode || 500;
          err.message = err.message || 'Internal Server Error';
          next(err);
        });
    };
  };
  
  export default asynchandler;
  