// msgPopUp.js

class ImagePopup {
  constructor(imagePath, posX, posY) {
    this.imagePath = imagePath;
    this.posX = posX;
    this.posY = posY;

    // Call the showPopup method after a delay
    setTimeout(() => {
      this.showPopup();
    }, 3900);
  }

  showPopup() {
    let popupImage = document.createElement('img');
    popupImage.src = this.imagePath;
    popupImage.alt = 'First popup Image';
    popupImage.style.position = 'absolute';
    popupImage.style.top = this.posY + 'px';
    popupImage.style.left = this.posX + 'px';
    popupImage.style.width = '25%';
    popupImage.style.height = '15%';
    document.body.appendChild(popupImage);

    document.addEventListener('keydown', this.keyDownHandler.bind(this));
  }

  keyDownHandler(event) {
    if (event.key.toLowerCase() === 'e') {
      let popupImage = document.querySelector('img[src="' + this.imagePath + '"]');
      if (popupImage) {
        popupImage.remove(); // Remove the popup image

        new SecondImagePopup("res/sec_message.png", this.posX, this.posY, () => {
          // Callback function to remove the second image
          new AlertAnimation([
            "res/029-Emotion011.png",
            "res/029-Emotion012.png",
            "res/029-Emotion013.png",
            "res/029-Emotion014.png"
          ], 704, 480).startAnimation(); // Start animation after second image is removed

          new ThirdImagePopup("res/third_message.png", this.posX, this.posY)        
        });
      }
      document.removeEventListener('keydown', this.keyDownHandler.bind(this));
    }
  }
}

class SecondImagePopup {
  constructor(secImagePath, posX, posY, removeCallback) {
    this.secImagePath = secImagePath;
    this.posX = posX;
    this.posY = posY;
    this.removeCallback = removeCallback;
    this.secondImage = null;
    this.showPopup();
  }

  showPopup() {
    this.secondImage = document.createElement('img');
    this.secondImage.src = this.secImagePath;
    this.secondImage.alt = 'Second Popup Image';
    this.secondImage.style.position = 'absolute';
    this.secondImage.style.top = this.posY + 'px';
    this.secondImage.style.left = this.posX + 'px';
    this.secondImage.style.width = '25%';
    this.secondImage.style.height = '15%';
    document.body.appendChild(this.secondImage);

    document.addEventListener('keydown', this.keyDownHandler.bind(this));
  }

  keyDownHandler(event) {
    if (event.key.toLowerCase() === 'e') {
      let secondImage = document.querySelector('img[src="' + this.secImagePath + '"]');
      if (secondImage) {
        secondImage.remove(); // Remove the second image
        this.removeCallback(); // Call the callback function to proceed
      }
      document.removeEventListener('keydown', this.keyDownHandler.bind(this));
    }
  }
}

class AlertAnimation {
  constructor(imagePaths, posX, posY) {
    this.imagePaths = imagePaths;
    this.posX = posX;
    this.posY = posY;
    this.currentImageIndex = 0;
    this.animationInterval = null;
    this.animationStarted = false;
    this.alertImages = [];
  }

  startAnimation() {
    this.animationInterval = setInterval(() => {
      this.displayCurrentImage();
      this.currentImageIndex++;
      if (this.currentImageIndex >= this.imagePaths.length) {
        clearInterval(this.animationInterval);
      }
    }, 30);
  }

  displayCurrentImage() {
    let alertImage = document.createElement('img');
    alertImage.src = this.imagePaths[this.currentImageIndex];
    alertImage.alt = 'Alert Image';
    alertImage.style.position = 'absolute';
    alertImage.style.top = this.posY + 'px';
    alertImage.style.left = this.posX + 'px';
    alertImage.style.width = '7%';
    alertImage.style.height = '10%';
    document.body.appendChild(alertImage);
    this.alertImages.push(alertImage); // Add created image to the array

    document.addEventListener('keydown', this.keyDownHandler.bind(this));
  }

  keyDownHandler(event) {
    if (event.key.toLowerCase() === 'e') {
      this.alertImages.forEach(alertImage => {
        alertImage.remove(); // Remove all alert images
      });
      this.alertImages = []; // Clear the array
      document.removeEventListener('keydown', this.keyDownHandler.bind(this));
    }
  }
  

}

class ThirdImagePopup {
  constructor(thirdImagePath, posX, posY, removeCallback) {
    this.thirdImagePath = thirdImagePath;
    this.posX = posX;
    this.posY = posY;
    this.removeCallback = removeCallback;
    this.thirdImage = null;
    this.showPopup();
  }

  showPopup() {
    this.thirdImage = document.createElement('img');
    this.thirdImage.src = this.thirdImagePath;
    this.thirdImage.alt = 'Third Popup Image';
    this.thirdImage.style.position = 'absolute';
    this.thirdImage.style.top = this.posY + 'px';
    this.thirdImage.style.left = this.posX + 'px';
    this.thirdImage.style.width = '25%';
    this.thirdImage.style.height = '15%';
    document.body.appendChild(this.thirdImage);

    document.addEventListener('keydown', this.keyDownHandler.bind(this));
  }

  keyDownHandler(event) {
    if (event.key.toLowerCase() === 'e') {
      let thirdImage = document.querySelector('img[src="' + this.thirdImagePath + '"]');
      if (thirdImage) {
        thirdImage.remove(); // Remove the third image
        this.removeCallback(); // Call the callback function to proceed
      }
      document.removeEventListener('keydown', this.keyDownHandler.bind(this));
    }
  }
}

// Define the removeThirdImage function to handle removal of the third image
function removeThirdImage() {
  // Logic to remove the third image goes here
}
