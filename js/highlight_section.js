document.addEventListener('DOMContentLoaded', () => {
    var imageContainer = document.getElementById('image-container');
    var img = imageContainer.querySelector('img');

    imageContainer.addEventListener('mousemove', function(e) {
        var rect = img.getBoundingClientRect();

        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        var squareSize = 300; // The size of the square
        var borderSize = (rect.width - squareSize) / 2;

        var leftBoundary = borderSize;
        var rightBoundary = borderSize + squareSize;
        var topBoundary = borderSize;
        var bottomBoundary = borderSize + squareSize;

        // Hide all highlights
        document.querySelectorAll('.highlight-area').forEach(el => el.style.display = 'none');

        // Show highlight based on mouse position
        if (x < leftBoundary) document.getElementById('highlight-left').style.display = 'block';
        else if (x > rightBoundary) document.getElementById('highlight-right').style.display = 'block';

        if (y < topBoundary) document.getElementById('highlight-up').style.display = 'block';
        else if (y > bottomBoundary) document.getElementById('highlight-down').style.display = 'block';
    });
});
