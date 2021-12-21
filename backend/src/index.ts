import app from "./app";
import connectDb from "./db";
const PORT = 3000;

async function connectDatabase() {
  await connectDb();
}

connectDatabase();

app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});
