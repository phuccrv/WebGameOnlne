const userRouter = require('./user.route')
const productRouter = require('./product.route')
function Routes(app) {
  app.use("/api/v1/user",userRouter)
  app.use("/api/v1/product",productRouter)
}

module.exports = Routes;
