const frames = document.querySelectorAll('.frame');
let currentFrame = null;
let clickCount = 0;
const errorMessages = [
  'why did you click this? it doesn\'t work',
  'stop clicking the boxes idiot',
  'kys',
  'please stop',
];

frames.forEach(frame => {
  handleFrameEvents(frame);
});

const addFrame = document.querySelector('.add-frame');

addFrame.addEventListener('click', e =>{
  const frame = document.createElement('canvas');
  frame.classList.add('frame');
  frame.classList.add('canvas');
  frame.width = '900px';
  frame.height = '500px';
  handleFrameEvents(frame);
  frame.textContent = 'Test';
  const frameContainer = document.getElementById('frame-container');
  frameContainer.insertBefore(frame, addFrame);
  addFrame.scrollIntoView(false);
});

//handle frame event listeners for given frame
function handleFrameEvents(frame){
  frame.addEventListener('mouseover', e => {
    frame.style.border = '5px solid rgba(0, 0, 0, 0.5)';
  });
  frame.addEventListener('mouseout', e => {
    frame.style.border = '5px solid rgba(0, 0, 0, 0)';
  });
  frame.addEventListener('click', e => {
    log(errorMessages[clickCount]);
    clickCount++;
    if(clickCount > errorMessages.length-1){
      clickCount--;
    }
    currentFrame = frame;
  });
}