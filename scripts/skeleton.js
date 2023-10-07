class Skeleton {
  constructor(x, y, bones){
    this.bones = bones;
    this.x = x;
    this.y = y;
    this.drag = false;
    document.getElementById('canvas').addEventListener('mousedown', e => {
      if(collidePointRect(mouse.x, mouse.y, {x: this.x-7.5, y: this.y-7.5, w: 15, h: 15})){
        this.drag = true;
      }
    });
    document.getElementById('canvas').addEventListener('mousemove', e => {
      if(!this.drag){ return; }
      this.x = mouse.x;
      this.y = mouse.y;
    });
    document.addEventListener('mouseup', e => {
      this.drag = false;
    });
  }
  draw = () => {
    //line to each bone
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    for(const bone of bones){
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x+bone.x, this.y+bone.y);
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.fillStyle = 'red';
    
    //each bone
    for(const bone of bones){
      ctx.rect(this.x+bone.x-bone.w/2, this.y+bone.y-bone.h/2, bone.w, bone.h);
    }
    ctx.fill();
    //main body
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.arc(this.x, this.y, 10, 0, Math.PI*2);
    ctx.fill();

  };
}