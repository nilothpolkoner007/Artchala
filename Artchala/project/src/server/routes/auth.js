import express from 'express';
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';
import { config } from '../config/index.js';

const router = express.Router();
const client = new OAuth2Client(config.googleClientId);

router.post('/google', async (req, res) => {
  try {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: config.googleClientId
    });

    const { sub: googleId, email, name, picture } = ticket.getPayload();
    
    // Here you would typically:
    // 1. Check if user exists in database
    // 2. Create new user if they don't exist
    // 3. Generate JWT token

    const jwtToken = jwt.sign(
      { id: googleId, email, name },
      config.jwtSecret,
      { expiresIn: '7d' }
    );

    res.json({ token: jwtToken, user: { id: googleId, email, name, picture } });
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
});

export default router;