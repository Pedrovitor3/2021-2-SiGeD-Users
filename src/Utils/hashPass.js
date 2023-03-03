const bcrypt = require('bcrypt');

const hashPass = async (pass, saltRounds = 10) => {
  const salt = await bcrypt.genSalt(saltRounds);
  return bcrypt.hash(pass, salt);
};

module.exports = { hashPass };
