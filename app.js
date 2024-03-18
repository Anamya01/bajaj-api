const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data;
        const user_id = "anamya_vats_06112003";

        const response = {
            is_success: true,
            user_id: user_id,
            email: "anamya2103.be21@chitkara.edu.in",
            roll_number: "2110992103",
            odd_numbers: [],
            even_numbers: [],
            alphabets: []
        };

        data.forEach(item => {
            if (typeof item === 'string') {
                if (/^\d+$/.test(item)) {
                    if (parseInt(item) % 2 === 0) {
                        response.even_numbers.push(item);
                    } else {
                        response.odd_numbers.push(item);
                    }
                } else if (/^[a-zA-Z]+$/.test(item)) {
                    response.alphabets.push(item.toUpperCase());
                }
            }
        });

        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
