class position {
  constructor(parent, x, y, xoff, yoff) {
    this.parent = parent;
    // Calculate the center of the screen
    const centerX = Math.floor((width - 600) / 2);
    const centerY = Math.floor((height - 600) / 2);
    // Calculate the new position with optional offsets
    this.x = x + (xoff == undefined ? centerX : xoff);
    this.y = y + (yoff == undefined ? centerY : yoff);
  }
}
