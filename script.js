function updateImage(imageName, captionText) {
    // Update the featured image and its caption
    const featuredImage = document.getElementById('featured-image');
    featuredImage.src = $imageName-large.jpg;
    featuredImage.alt = captionText;

    const imageCaption = document.getElementById('image-caption');
    imageCaption.textContent = captionText;
}