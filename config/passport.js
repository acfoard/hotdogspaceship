const jwtScript = require('./jwtConfig');
const db = require('../models');
const bcrypt = require('bcrypt');

const BCRYPT_SALT_ROUNDS = 12;

const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;