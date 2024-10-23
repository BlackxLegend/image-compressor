<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Compressor</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }
        h1 {
            text-align: center;
            color: #4A90E2;
            margin-bottom: 20px;
            font-size: 2.5em;
        }
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 30px;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        input[type="file"] {
            margin-bottom: 15px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            width: 300px;
            font-size: 16px;
            transition: border-color 0.3s;
        }
        input[type="file"]:focus {
            border-color: #4A90E2;
            outline: none;
        }
        button {
            padding: 10px 25px;
            background-color: #4A90E2;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: #357ABD;
        }
        .compressed-image {
            margin-top: 20px;
            text-align: center;
            background: white;
            padding: 10px;
            border-radius: 8px;
            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
        }
        .compressed-image img {
            max-width: 100%;
            height: auto;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>Image Compressor</h1>
    <form id="compressor-form">
        <input type="file" id="image-input" accept="image/*" required>
        <button type="submit">Compress</button>
    </form>

    <div id="result" class="compressed-image" style="display:none;">
        <h2>Compressed Image:</h2>
        <img id="compressed-image" alt="Compressed Image">
        <p><a id="download-link" href="#" download>Download Compressed Image</a></p>
    </div>

    <script src="compressor.js"></script>
</body>
</html>
