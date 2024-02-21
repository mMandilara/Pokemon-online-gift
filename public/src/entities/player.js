class player {
  constructor() {
    const centerX = Math.floor((width + 200) / 2);
    const centerY = Math.floor((height - 50)  / 2);

    this.pos = new position(this,centerX,centerY,0,0);
    this.img = new animator (this,this.pos,"boy_run", 4,4,.2);
    this.controller = new userMovement(this,this.pos,this.img);

    this.properties = [
      this.pos,
      this.img,
      this.controller
    ];

    objects.push(this);
  }
}
