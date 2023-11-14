// message where the mouse is relative to the square.png image
document.addEventListener('DOMContentLoaded', () => {
    var imageContainer = document.getElementById('image-container');
    var img = imageContainer.querySelector('img'); // Select the image inside the container

    imageContainer.addEventListener('mousemove', function(e) {
        var rect = img.getBoundingClientRect();
        
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        // Define the actual square area within the image
        var squareSize = 300; // The size of the square
        var borderSize = (rect.width - squareSize) / 2; // Calculate border size if any

        // Adjusting the detection to the square's area
        var leftBoundary = borderSize;
        var rightBoundary = borderSize + squareSize;
        var topBoundary = borderSize;
        var bottomBoundary = borderSize + squareSize;

        if (x > leftBoundary && x < rightBoundary && y > topBoundary && y < bottomBoundary) {
            document.getElementById('hover-info').textContent = 'In';
        } else {
            var horizontal = '';
            var vertical = '';

            if (x <= leftBoundary) horizontal = 'Left';
            else if (x >= rightBoundary) horizontal = 'Right';

            if (y <= topBoundary) vertical = 'Up';
            else if (y >= bottomBoundary) vertical = 'Down';

            document.getElementById('hover-info').textContent = vertical + horizontal;
        }
    });
});
