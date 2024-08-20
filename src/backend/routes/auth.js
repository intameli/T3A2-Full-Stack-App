const express = require('express')
const router = express.Router()

router.post('/register', async (req, res) => {
    try {
        // Validate and sanitize input
        const { firstName, lastName, email, password } = req.body;

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Create new user
        const user = new User({ firstName, lastName, email, password });
        await user.save();

        // Generate JWT token
        const token = generateToken(user);

        res.status(201).json({ user, token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
}
)

router.post('/login', async (req, res) => {
    // Validate and sanitize input
    const { email, password } = req.body;

    // Check if email exists
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = generateToken(user);

    res.json({ user, token });
})

router.post('/resetPassword', async (req, res) => {
    const { email, password } = req.body;

    // Check if email exists
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Compare old password
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid old password' });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password
    user.password = hashedPassword;
    await user.save();

    res.json({ message: 'Password reset successfully' });

})

router.post('/recoverPassword', async (req, res) => {
    const { email } = req.body;

    // Check if email exists
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Generate random token
    const token = crypto.randomBytes(20).toString('hex');

    // Save token to user's database
    user.resetToken = token;
    user.resetTokenExpiration = Date.now() + 3600000; // 1 hour
    await user.save();

    // Send email with reset link
    await sendResetEmail(user, token);

    res.json({ message: 'Password reset link sent to your email' });
})


module.exports = router