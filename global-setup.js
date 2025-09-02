// global-setup.js
require('dotenv').config();

module.exports = async () => {
  // Verify API key is loaded
  if (process.env.OPENWEATHER_API_KEY) {
    console.log('✅ OpenWeather API key loaded successfully');
  } else {
    console.log('⚠️  OpenWeather API key not found - API tests will be skipped');
  }
};