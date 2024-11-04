const axios = require('axios');

exports.handler = async (event) => {
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const fileId = event.queryStringParameters.file_id;

    try {
        // Retrieve the file path
        const filePathResponse = await axios.get(`https://api.telegram.org/bot${botToken}/getFile?file_id=${fileId}`);
        const filePath = filePathResponse.data.result.file_path;

        // Construct the direct video URL
        const videoUrl = `https://api.telegram.org/file/bot${botToken}/${filePath}`;

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({ videoUrl })
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 404,
            body: JSON.stringify({ error: 'File not found' })
        };
    }
};

