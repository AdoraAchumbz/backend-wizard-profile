// controllers/me.js
const axios = require('axios');

exports.getProfile = async (req, res) => {
  try {
    // Fetch random cat fact
    const response = await axios.get('https://catfact.ninja/fact', {
      timeout: 5000, // 5 seconds timeout
    });

    const catFact = response.data.fact;

    // JSON response
    const result = {
      status: 'success',
      user: {
        email: 'adorachigozieachumba@gmail.com',  
        name: 'Chigozie Achumba',           
        stack: 'Node.js/Express'
      },
      timestamp: new Date().toISOString(), // current UTC time in ISO format
      fact: catFact
    };

    // Send response
    res.status(200).json(result);

  } catch (error) {
    console.error('Error fetching cat fact:', error.message);

    // Handle API failure gracefully
    res.status(500).json({
      status: 'error',
      message: 'Could not fetch cat fact at the moment, please try again later.'
    });
  }
};