import express from 'express';
import http from 'http';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { rateLimit } from 'express-rate-limit';
import { config } from './config/index.js';
import { initializeWebSocket } from './websocket/index.js';

// Routes
import authRoutes from './routes/auth.js';
import storyRoutes from './routes/stories.js';
import userRoutes from './routes/users.js';

const app = express();
const server = http.createServer(app);

// Enable trust proxy to allow proper IP detection
app.set('trust proxy', true);

// Initialize WebSocket
initializeWebSocket(server);

// Middleware
app.use(cors({ origin: config.corsOrigin }));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(limiter);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/stories', storyRoutes);
app.use('/api/users', userRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
