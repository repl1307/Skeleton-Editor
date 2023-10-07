const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const bones = [
  new Bone(30, 0, 20, 20), // right arm
  new Bone(-30, 0, 20, 20), //left arm
  new Bone(0, -30, 20, 20), //head
  new Bone(-15, 30, 20, 20), // left leg
  new Bone(15, 30, 20, 20), //right leg
];
const player = new Skeleton(canvas.width/2, canvas.height/2,
bones);

let selectedBone = null;
let isDragging = false;
canvas.addEventListener('mousedown', e => {
  let boneCollision = false;
  
  for(const bone of player.bones){
    if(collidePointRect(mouse.x, mouse.y, {
      x: bone.x + player.x-bone.w/2, y: bone.y+player.y-bone.h/2, w: bone.w, h: bone.h
    })){
      selectedBone = {x: bone.x + player.x-bone.w/2, y: bone.y+player.y-bone.h/2, w: bone.w, h: bone.h};
      selectedBone.index = player.bones.indexOf(bone);
      boneCollision = true;
    }
  }
  if(!boneCollision){
    selectedBone = null;
  }
  isDragging = true;
});

canvas.addEventListener('mousemove', e => {
  if(selectedBone && isDragging){
    let bone = player.bones[selectedBone.index];
    bone.x = mouse.x-player.x;
    bone.y = mouse.y-player.y;
    selectedBone.x = bone.x+player.x-bone.w/2;
    selectedBone.y = bone.y+player.y-bone.h/2;
  }
});

canvas.addEventListener('mouseup', e => {
  isDragging = false;
});

function gameLoop(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.draw();
  if(selectedBone){
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.rect(selectedBone.x, selectedBone.y, selectedBone.w, selectedBone.h);
    ctx.stroke();
  }
  requestAnimationFrame(gameLoop);
}
gameLoop();