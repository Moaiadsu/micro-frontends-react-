const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = ( err, req, res, next ) => {
    const status = res.statusCode === 200 ? 500 : res.statusCode;

    console.log('this is the url errorHandler',req.url)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack
    });
};

module.exports =  {notFound, errorHandler};