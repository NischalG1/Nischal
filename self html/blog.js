var box = document.getElementById('imageBox');
        var images = ['heroman.jpg', 'whatlook.jpg'];
        var currentIndex = 0;

        document.getElementById('hoverTrigger').addEventListener('mouseover', function() {
            currentIndex = (currentIndex +1 ) % images.length; // Cycle through the two images
            box.style.backgroundImage = "url(" + images[currentIndex] + ")";
        });

      