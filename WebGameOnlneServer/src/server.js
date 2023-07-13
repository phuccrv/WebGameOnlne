const app = require('./app/app');
const PORT = 4001;
app.listen(PORT, async () => {
  try {
    console.log(`Server Express running at http://localhost:${PORT}`);
  } catch (error) {
    console.log('err', error);
  }
});
