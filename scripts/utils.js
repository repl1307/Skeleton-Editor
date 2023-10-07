const mouse = {
  x: 0, y: 0
};

function updateMousePos(e){
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width/rect.width;
  const scaleY = canvas.height/rect.height;

  mouse.x = (e.clientX - rect.left)*scaleX;
  mouse.y = (e.clientY - rect.top)*scaleY;
}

document.addEventListener('mousemove', e => {
  updateMousePos(e);
});

function collidePointRect(x, y, r){
  if(x >= r.x && x <= r.x+r.w && y >= r.y && y <= r.y+r.h)
    return true;

  return false;
}
