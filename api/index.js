import app from '../src/app.js';
import serverless from 'serverless-http';
const PORT = process.env.PORT;

export const handler = serverless(app);
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

