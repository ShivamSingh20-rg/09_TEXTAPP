const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const TodoSchema = require("./models/Todo");
const UserSC = require('./models/User')
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')
const configs = require('./config')
const protect = require('./Protect')
mongoose.connect("mongodb+srv://eshivamsingh20_db_user:Shivam1234@shivamdb.qyvvqgu.mongodb.net/TODO-DB");


const app = express();
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",  
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.post("/add", protect,(req, res) => {
  const tasks = req.body.tasks;
console.log("Logged in User ID:", req.user)
  TodoSchema.create({
    tasks: tasks,
    userId: req.user
  }).then((result) => res.json(result))
  .catch((err) => {
        console.error("Database Error:", err);
        res.status(400).json(err);
    });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  TodoSchema.findByIdAndDelete(id).then(
    res.status(200).json({ success: true, id: id }),
  );
});

app.put("/update/:id",protect,(req, res) => { 
  const { id } = req.params;
  const { tasks } = req.body;

  TodoSchema.findOneAndUpdate(
    {   userId: req.user }, // Security: Must match ID AND be the owner
    { tasks: tasks }, 
    { new: true }
  ).then(
    (updatedTodo) => {
      if (!updatedTodo) {
        return res.status(404).json({ message: "Todo not found" });
      }
      res.json(updatedTodo);
    },
  );
});

app.post('/signup', async (req, res) => {
  const { email, password,username } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await  UserSC.create({ username: username, password: hashedPassword, email: email });
    res.json({ status: "ok", user });
  } catch (err) {
    res.status(400).json({ error: "Email already exists" });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await UserSC.findOne({ email });
  
  if (!user) return res.status(404).json({ error: "User not found" });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (isPasswordValid) {
    const token = jwt.sign({ id: user._id }, configs.JWT_SECRET); // Generate Token
    return res.json({ status: "ok", user: { email: user.email, id: user._id }, token });
  } else {
    return res.status(401).json({ error: "Invalid Password" });
  }
});

app.get("/get", protect,(req, res) => {
  TodoSchema.find({ userId: req.user }).then((result) => res.json(result));
});
app.listen(3001, () => {
  console.log("server is runnig on port");
});
