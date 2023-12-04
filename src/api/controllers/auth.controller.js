const Adopter = require('../models/adopter');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Function to generate JWT token
const generateToken = (userId) => {
	return jwt.sign({ userId }, process.env.TOKEN_SECRET); // Replace 'your_secret_key' with your actual secret key
};

// Signup a new Adopter
exports.signupAdopter = async (req, res) => {
	try {
		const { name, email, password, address, phone } = req.body;

		// Check if the email already exists
		const existingAdopter = await Adopter.findOne({ email });
		if (existingAdopter) {
			return res
				.status(400)
				.json({ message: 'Email already exists. Please log in.' });
		}

		// Hash the password before saving it to the database
		const hashedPassword = await bcrypt.hash(password, 10);

		const newAdopter = await Adopter.create({
			name,
			email,
			password: hashedPassword,
			address,
			phone,
		});

		const token = generateToken(newAdopter._id);

		res.status(201).json({ message: 'Adopter created successfully', token });
	} catch (err) {
		res
			.status(500)
			.json({ message: 'Error signing up adopter', error: err.message });
	}
};

// Login for Adopter
exports.loginAdopter = async (req, res) => {
	try {
		const { email, password } = req.body;

		const adopter = await Adopter.findOne({ email });

		if (!adopter) {
			return res.status(401).json({ message: 'Invalid email or password' });
		}

		const isPasswordValid = await bcrypt.compare(password, adopter.password);
		if (!isPasswordValid) {
			return res.status(401).json({ message: 'Invalid email or password' });
		}

		const token = generateToken(adopter._id);

		res.status(200).json({ message: 'Login successful', token });
	} catch (err) {
		res
			.status(500)
			.json({ message: 'Error logging in adopter', error: err.message });
	}
};

// Login for Admin
exports.loginAdmin = async (req, res) => {
	try {
		const adminCredentialsValid =
			req.body.username === 'admin' && req.body.password === 'admin123';

		if (!adminCredentialsValid) {
			return res.status(401).json({ message: 'Invalid admin credentials' });
		}

		const token = generateToken('admin');

		res.status(200).json({ message: 'Admin login successful', token });
	} catch (err) {
		res
			.status(500)
			.json({ message: 'Error logging in admin', error: err.message });
	}
};
