const axios = require('axios');
const cds = require('@sap/cds');

class TokenService {
  constructor() {
    this.tokenCache = null;
    this.tokenExpiry = null;
  }

  async getToken() {
    // Return cached token if still valid
    if (this.tokenCache && this.tokenExpiry > new Date()) {
      return this.tokenCache;
    }

    try {
      const tokenUrl = process.env.TOKENURL;
      const clientId = process.env.CLIENT_ID;
      const clientSecret = process.env.CLIENT_SECRET;

      const response = await axios.post(tokenUrl, 
        new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: clientId,
          client_secret: clientSecret
        }), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );

      // Cache token with 5 minute buffer
      this.tokenCache = response.data.access_token;
      this.tokenExpiry = new Date();
      this.tokenExpiry.setSeconds(this.tokenExpiry.getSeconds() + response.data.expires_in - 300);

      return this.tokenCache;

    } catch (error) {
      cds.log('TokenService').error('Failed to fetch token:', error.response?.data || error.message);
      throw new Error('Authentication failed');
    }
  }
}

module.exports = new TokenService();