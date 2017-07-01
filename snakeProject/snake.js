function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total  = 0;
  this.tail   = [];

  // Eat
  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  // Dir
  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  // Death
   this.death = function(){
     for (var i = 0; i < this.tail.length; i++) {
       var pos = this.tail[i];
       var d   = dist(this.x, this.y, pos.x, pos.y);
       if(d < 1){
         console.log('Game Over');
         this.total = 0;
         this.tail  = [];
       }
     }
   }

 // Update
  this.update = function() {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  // Show
  this.show = function() {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }

    rect(this.x, this.y, scl, scl);
  }
}

//End
