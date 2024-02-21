// boundingBox.js

class BoundingBox {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
  
    // Method to check if this bounding box intersects with another bounding box
    intersects(other) {
      return (
        this.x < other.x + other.width &&
        this.x + this.width > other.x &&
        this.y < other.y + other.height &&
        this.y + this.height > other.y
      );
    }
  }
  
  module.exports = BoundingBox;
  