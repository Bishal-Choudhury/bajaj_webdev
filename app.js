const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.post('/bfhl', (req, res) => {
    const data = req.body.data;  // Extract the data array from the request body
    const numbers = data.filter(item => !isNaN(item));  // Filter out numbers
    const alphabets = data.filter(item => isNaN(item));  // Filter out alphabets
    const lowercaseAlphabets = alphabets.filter(item => item >= 'a' && item <= 'z');
    const highestLowercaseAlphabet = lowercaseAlphabets.sort().pop() || '';

    // Create the response object
    const response = {
        is_success: true,
        user_id: "bishal_choudhury",  
        email: "bishal.choudhury2021@vit.ac.in",  
        roll_number: "21BCI0184",  
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    };

    res.status(200).json(response);  // Send the response
});

app.get('/bfhl', (req, res) => {
    const response = {
        operation_code: 1
    };

    res.status(200).json(response);  // Send the response
});
