document.getElementById('compressor-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const input = document.getElementById('image-input');
    const file = input.files[0];

    if (!file) {
        alert('Please select an image file!');
        return;
    }

    // Display original size
    const originalSizeText = `Original Size: ${(file.size / 1024).toFixed(2)} KB`;
    document.getElementById('original-size').textContent = originalSizeText;

    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.src = e.target.result;

        img.onload = function() {
            // Create a canvas element
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Set canvas dimensions to the image dimensions
            const maxWidth = 800; // Set a maximum width for the compressed image
            const maxHeight = 800; // Set a maximum height for the compressed image
            let width = img.width;
            let height = img.height;

            // Calculate new dimensions while maintaining aspect ratio
            if (width > height) {
                if (width > maxWidth) {
                    height *= maxWidth / width;
                    width = maxWidth;
                }
            } else {
                if (height > maxHeight) {
                    width *= maxHeight / height;
                    height = maxHeight;
                }
            }

            canvas.width = width;
            canvas.height = height;

            // Draw the image onto the canvas
            ctx.drawImage(img, 0, 0, width, height);

            // Compress the image by converting it to a Blob
            canvas.toBlob(function(blob) {
                const url = URL.createObjectURL(blob);
                const compressedImage = document.getElementById('compressed-image');
                const downloadLink = document.getElementById('download-link');

                compressedImage.src = url;
                downloadLink.href = url;

                // Display compressed size
                const compressedSizeText = `Compressed Size: ${(blob.size / 1024).toFixed(2)} KB`;
                document.getElementById('compressed-size').textContent = compressedSizeText;

                // Show the result
                document.getElementById('result').style.display = 'block';

                // Save button functionality
                document.getElementById('save-button').onclick = function() {
                    const savedImages = JSON.parse(localStorage.getItem('savedImages')) || [];
                    savedImages.push({ url: url, originalSize: file.size, compressedSize: blob.size });
                    localStorage.setItem('savedImages', JSON.stringify(savedImages));
                    alert('Image saved successfully!');
                };
            }, 'image/jpeg', 0.7); // 0.7 is the quality of the compressed image
        };
    };

    reader.readAsDataURL(file);
});
