const app = require('./app');

const port = process.env.PORT || 3001;

app.listen(port, () => {
	console.log(`Backend Server is up at port http://localhost:${port}`);
});
