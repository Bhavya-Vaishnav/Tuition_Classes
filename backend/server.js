const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({ path: __dirname + "/.env" });

const app = express();
app.use(express.json());
app.use(cors());

const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET || "dev-secret";

if (!MONGO_URI) {
  console.error(
    "MONGO_URI not set in backend/.env. Set it before starting the server."
  );
}

// Mongoose models
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["student", "teacher"], default: "student" },
  className: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const studentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  className: { type: String },
  // add other student-specific fields here
});

const teacherSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  subjects: { type: [String], default: [] },
  // add other teacher-specific fields here
});

const User = mongoose.model("User", userSchema);
const Student = mongoose.model("Student", studentSchema);
const Teacher = mongoose.model("Teacher", teacherSchema);

async function start() {
  try {
    await mongoose.connect(MONGO_URI, { dbName: "tuition_classes" });
    console.log("Connected to MongoDB");
    console.log("MongoDB host:", mongoose.connection.host);
    console.log("MongoDB db name:", mongoose.connection.name);
  } catch (err) {
    console.error("MongoDB connection error", err);
    process.exit(1);
  }

  // Routes
  app.get("/", (req, res) => {
    res.send("Hello World");
  });

  // Register user and create role-specific document
  app.post("/register", async (req, res) => {
    try {
      const { name, email, password, role = "student", className } = req.body;
      if (!name || !email || !password)
        return res
          .status(400)
          .json({ message: "name, email and password are required" });

      const exists = await User.findOne({ email: email.toLowerCase() });
      if (exists)
        return res.status(409).json({ message: "Email already registered" });

      const hashed = await bcrypt.hash(password, 10);
      const user = new User({
        name,
        email: email.toLowerCase(),
        password: hashed,
        role,
        className,
      });
      await user.save();
      console.log(`User created: ${user._id} ${user.email} ${user.role}`);

      if (role === "student") {
        const student = new Student({ user: user._id, className });
        await student.save();
        console.log(
          "Student created:",
          student._id.toString(),
          "for user",
          user._id.toString()
        );
      } else if (role === "teacher") {
        const teacher = new Teacher({ user: user._id });
        await teacher.save();
        console.log(
          "Teacher created:",
          teacher._id.toString(),
          "for user",
          user._id.toString()
        );
      }

      const token = jwt.sign(
        { id: user._id, role: user.role, email: user.email },
        JWT_SECRET,
        { expiresIn: "7d" }
      );

      return res.status(201).json({
        message: "Registered",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } catch (err) {
      console.error("Registration error", err);
      return res.status(500).json({ message: "Server error" });
    }
  });

  // Login
  app.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        return res.status(400).json({ message: "Email and password required" });

      const user = await User.findOne({ email: email.toLowerCase() });
      if (!user)
        return res.status(401).json({ message: "Invalid credentials" });

      const ok = await bcrypt.compare(password, user.password);
      if (!ok) return res.status(401).json({ message: "Invalid credentials" });

      const token = jwt.sign(
        { id: user._id, role: user.role, email: user.email },
        JWT_SECRET,
        { expiresIn: "7d" }
      );

      return res.json({
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } catch (err) {
      console.error("Login error", err);
      return res.status(500).json({ message: "Server error" });
    }
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

start();
