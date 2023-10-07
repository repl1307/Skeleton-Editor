const addButton = document.getElementById('add-to-hierarchy');
const header = document.getElementById('hierarchy-header');
const hierarchy = document.getElementById('hierarchy');
const form = document.getElementById('create-bone-form');
const boneFile = document.getElementById('bone-file');
const boneName = document.getElementById('bone-name');

let boneContentCount = 0; // for giving bone data elements unique ids
//toggle add bone form
addButton.addEventListener('click', e => {
  if(getComputedStyle(form).display == 'none')
    form.style.display = 'block';
  else
    form.style.display = 'none';
});

//upload file
boneFile.addEventListener('change', e => {
  document.getElementById('file-upload-text').textContent = boneFile.files.item(0).name;
});

//add bone on submit
form.addEventListener('submit', e => {
  e.preventDefault();
  //locals
  const data = {file: boneFile.files.item(0) || {name: 'No file inputted'}, name: boneName.value};
  const boneElem = document.createElement('div');
  const boneTitle = document.createElement('p');
  const boneInfo = createBoneInfo(data);

  boneTitle.textContent = boneName.value;
  boneTitle.addEventListener('click', e => {
    const file = boneTitle.nextSibling;
    if(getComputedStyle(file).display != 'none')
      file.style.display = 'none'
    else
      file.style.display = 'block';
  });
  
  boneTitle.classList.add('bone-title');
  boneInfo.classList.add('bone-info');
  //appends
  boneElem.appendChild(boneTitle);
  boneElem.appendChild(boneInfo);
  hierarchy.appendChild(boneElem);
  //clear values
  document.getElementById('file-upload-text').textContent = 'Upload Image';
  boneName.value = '';
  form.style.display = 'none';
});

//create bone info div
function createBoneInfo(data){
  const boneInfo = document.createElement('div');
  const name = createBoneInfoItem('Name', data.name);
  const file = createBoneInfoItem('File', data.file.name);

  boneInfo.appendChild(name);
  boneInfo.appendChild(file);

  //create bone info item
  function createBoneInfoItem(itemName, itemContent){
    const div = document.createElement('div');
    div.style.margin = '5px';
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'text';
    
    input.id = 'bone-content'+boneContentCount;
    label.htmlFor = input.id;
    boneContentCount++;
    
    label.textContent = itemName +': ';
    input.value = itemContent;

    div.appendChild(label);
    div.appendChild(input);
    return div;
  }
  return boneInfo;
}