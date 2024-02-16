import dotenv from 'dotenv';
dotenv.config();

import APP from './app.js';

const PORT = process.env.server_port || 3000;
APP.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
