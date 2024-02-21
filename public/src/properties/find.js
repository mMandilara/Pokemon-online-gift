    let playerInstance; // Declare playerInstance in the global scope
    let currentImage = null; // Track the currently displayed image

    function setupFind(player) {
        playerInstance = player;
        // Add event listener for "keydown" event
        document.addEventListener('keydown', keyDownHandler);
    }

    // function keyDownHandler(event) {
    //     if (event.key.toLowerCase() === 'e') {
    //         if (currentImage === null) {
    //             checkPositionAndShowImage(768, 512, 'res/possible_spiders.png', '25%', '15%', '56%', '71%');
    //         } else {
    //             removeImage(currentImage);
    //             showImage('res/pokeballs_emerald.png', '43%', '68%', '55%', '52%');
    //         }
    //     }
    // }

    function keyDownHandler(event) {
        if (event.key.toLowerCase() === 'e') {
            if (currentImage === null) {
                checkPositionAndShowImage(768, 512, 'res/possible_spiders.png', '25%', '15%', '56%', '71%');
            } else if (currentImage.src.includes('possible_spiders.png')) {
                removeImage(currentImage);
                showImage('res/pokeballs_emerald.png', '43%', '68%', '55%', '52%');
            } else if (currentImage.src.includes('pokeballs_emerald.png')) {
                removeImage(currentImage);
                showImage('res/gf_yes.png', '43%', '68%', '55%', '52%');
            } else if (currentImage.src.includes('gf_yes.png')) {
                removeImage(currentImage);
                showImage('res/choseGF.png', '43%', '68%', '55%', '52%');
            } else if (currentImage.src.includes('choseGF.png')) {
                removeImage(currentImage);
                showImage('res/null.png', '43%', '68%', '55%', '52%');
            } else if (currentImage.src.includes('gf_no.png')) {
                removeImage(currentImage);
                showImage('res/cat_yes.png', '43%', '68%', '55%', '52%');
            } else if (currentImage.src.includes('cat_yes.png')) {
                removeImage(currentImage);
                showImage('res/choseGato.png', '43%', '68%', '55%', '52%');
            } else if (currentImage.src.includes('choseGato.png')) {
                removeImage(currentImage);
                showImage('res/null.png', '43%', '68%', '55%', '52%');
            } else if (currentImage.src.includes('cat_no.png')) {
                removeImage(currentImage);
                showImage('res/dog_yes.png', '43%', '68%', '55%', '52%');
            } else if (currentImage.src.includes('dog_yes.png')) {
                removeImage(currentImage);
                showImage('res/choseTsuki.png', '43%', '68%', '55%', '52%');
            } else if (currentImage.src.includes('choseTsuki.png')) {
                removeImage(currentImage);
                showImage('res/null.png', '43%', '68%', '55%', '52%');
            } else if (currentImage.src.includes('dog_no.png')) {
                removeImage(currentImage);
                showImage('res/gf_yes.png', '43%', '68%', '55%', '52%');
            }
        } else if (event.key.toLowerCase() === 'w') {
            if (currentImage && currentImage.src.includes('gf_no.png')) {
                removeImage(currentImage);
                showImage('res/gf_yes.png', '43%', '68%', '55%', '52%');
            } else if (currentImage && currentImage.src.includes('cat_no.png')) {
                removeImage(currentImage);
                showImage('res/cat_yes.png', '43%', '68%', '55%', '52%');
            } else if (currentImage && currentImage.src.includes('dog_no.png')) {
                removeImage(currentImage);
                showImage('res/dog_yes.png', '43%', '68%', '55%', '52%');
            }
        } else if (event.key.toLowerCase() === 's') {
            if (currentImage && currentImage.src.includes('gf_yes.png')) {
                removeImage(currentImage);
                showImage('res/gf_no.png', '43%', '68%', '55%', '52%');
            } else if (currentImage && currentImage.src.includes('cat_yes.png')) {
                removeImage(currentImage);
                showImage('res/cat_no.png', '43%', '68%', '55%', '52%');
            } else if (currentImage && currentImage.src.includes('dog_yes.png')) {
                removeImage(currentImage);
                showImage('res/dog_no.png', '43%', '68%', '55%', '52%');
            }
        }
    }


    function checkPositionAndShowImage(x, y, imagePath, width, height, left, top) {
        if (playerInstance && playerInstance.pos.x === x && playerInstance.pos.y === y) {
            showImage(imagePath, width, height, left, top);
        }
    }

    function showImage(imagePath, width, height, left, top) {
        removeImage(currentImage); // Remove previous image (if any)
        const alertImage = document.createElement('img');
        alertImage.src = imagePath;
        alertImage.style.position = 'absolute';
        alertImage.style.width = width; // Adjust the width of the image
        alertImage.style.height = height; // Adjust the height of the image
        alertImage.style.left = left; // Adjust the left position of the image
        alertImage.style.top = top; // Adjust the top position of the image
        alertImage.style.transform = 'translate(-50%, -50%)';
        alertImage.style.zIndex = '9999';
        document.body.appendChild(alertImage);
        currentImage = alertImage; // Update currentImage
    }

    function removeImage(image) {
        if (image) {
            document.body.removeChild(image);
            currentImage = null; // Reset currentImage
        }
    }
