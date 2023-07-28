// Create web server

// Import modules

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

// Import models

const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

// @route   POST api/comments
// @desc    Create a comment
// @access  Private