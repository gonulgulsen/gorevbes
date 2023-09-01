        const eyeImage = document.getElementById('eyeImage');
        const outImage = document.getElementById('outImage');
        const clickableImages = document.querySelectorAll('.clickable');

        eyeImage.addEventListener('click', function() {
           
            console.log("Eye image clicked!");
        });

        outImage.addEventListener('click', function() {
          
            console.log("Out image clicked!");
        });

        clickableImages.forEach(function(image) {
            image.addEventListener('click', function() {
              
                const altText = image.alt;
                console.log(altText + " image clicked!");
            });
        });