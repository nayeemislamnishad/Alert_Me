document.getElementById('uploadBtn').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;
    const gallery = document.getElementById('gallery');

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const fileType = file.type.split('/')[0]; // Get the file type (image or video)
            let mediaElement;

            if (fileType === 'image') {
                mediaElement = document.createElement('img');
                mediaElement.src = e.target.result; // Set image source
            } else if (fileType === 'video') {
                mediaElement = document.createElement('video');
                mediaElement.src = e.target.result; // Set video source
                mediaElement.controls = true; // Show video controls
            }

            gallery.appendChild(mediaElement); // Add media to gallery
        };

        reader.readAsDataURL(file); // Read the file
    }
});
