const projectArea = document.querySelectorAll('.item');
const manageBtn = document.querySelector('.manage-btn');
const scheduleItem = document.querySelectorAll('.schedule-item');
const newProjectBtn = document.querySelector('.new-project');

window.addEventListener('load', function() {
  scheduleEventHandler();
  newProjectBtnHandler();
})

// NEW PROJECT CREATE BTN
function newProjectBtnHandler() {
  newProjectBtn.addEventListener('click', function(){
    if(this.previousElementSibling.lastElementChild.className == 'create-project'){
      document.querySelector('.create-project-input').focus();
      document.querySelector('.create-project-input').value = '';
    } else {
      let newProjectDiv = document.createElement('div');
      newProjectDiv.setAttribute('class', 'create-project');
  
      let newProjectCloseBtn = document.createElement('button');
      newProjectCloseBtn.setAttribute('type', 'button');
      newProjectCloseBtn.setAttribute('class', 'new-project-close');
      
      let closeBtnImg = document.createElement('img');
      closeBtnImg.setAttribute('src', '/img/xmark-solid.svg');
      closeBtnImg.setAttribute('alt', 'new_project_close');
      
      let newProjectForm = document.createElement('form');
      newProjectForm.setAttribute('action', '');
      newProjectForm.setAttribute('method', 'post');
      newProjectForm.setAttribute('class', 'create-project-form');
      
      let newProjectInput = document.createElement('input');
      newProjectInput.setAttribute('class', 'create-project-input');
      newProjectInput.setAttribute('type', 'text');
      newProjectInput.setAttribute('minlength', '2');
      newProjectInput.setAttribute('placeholder', '새 프로젝트 이름');
      newProjectInput.setAttribute('required', '');
      
      this.previousElementSibling.appendChild(newProjectDiv);
      this.previousElementSibling.lastElementChild.appendChild(newProjectForm);
      this.previousElementSibling.lastElementChild.appendChild(newProjectCloseBtn);
      this.previousElementSibling.lastElementChild.lastElementChild.appendChild(closeBtnImg);
      this.previousElementSibling.lastElementChild.firstElementChild.append(newProjectInput);
      
      document.querySelector('.create-project-input').focus();
  
      createProjectInputHandler();
      newProjectInputCloseBtn();
    }
  })
}

function newProjectInputCloseBtn() {
  const newProjectCloseBtn = document.querySelector('.new-project-close');
  
  newProjectCloseBtn.addEventListener('click', function(){
    this.parentNode.remove();
  })
}

function createProjectInputHandler() {
  const createProjectForm = document.querySelector('.create-project-form');
  
  createProjectForm.addEventListener('submit', function(e){
    e.preventDefault();
    this.parentNode.remove();
  })
}

// SCHEDULE LIST EVENT
function scheduleEventHandler() {
  projectHoverSubMenu();
}

function projectHoverSubMenu() {
  for (let i = 0; i < projectArea.length; i++) {
    //MOUSE HOVER SUB MENU
    projectArea[i].addEventListener('mouseover', function(){
      this.childNodes[3].classList.add('active');
    });
    projectArea[i].addEventListener('mouseout', function(){
      this.childNodes[3].classList.remove('active');
    });
    //SCHEDULE OPEN
    
    projectArea[i].addEventListener('click', function(){
      this.nextElementSibling.classList.toggle('open-schedule');
    })
  }
}

// SCHEDULE LIST HOVER CHECK IMG CHANGE
// function scheduleHoverCheckImg() {
//   for (let i = 0; i < scheduleItem.length; i++) {
//     scheduleItem[i].addEventListener('mouseover', function(){
//       this.firstElementChild.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">\n' +
//         '  <g id="group_8" data-name="group 8" transform="translate(-259 -232)">\n' +
//         '    <circle id="circle_4" data-name="circle 4" cx="11" cy="11" r="11" transform="translate(259 232)" fill="#fff"/>\n' +
//         '    <path id="path_5" data-name="path 5" d="M264,119.847l4.026,4.041,6.974-7" transform="translate(1 123.111)" fill="none" stroke="#6243d3" stroke-width="1.4"/>\n' +
//         '  </g>\n' +
//         '</svg>\n';
//     });
//     scheduleItem[i].addEventListener('mouseout', function(){
//       this.firstElementChild.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">\n' +
//         '                      <g id="check-false" data-name="check-false" transform="translate(-256.385 -109.385)">\n' +
//         '                        <g id="ellipse" data-name="ellipse" transform="translate(256.385 109.385)" fill="none" stroke="#34393d" stroke-width="1.4">\n' +
//         '                          <circle cx="11" cy="11" r="11" stroke="none"/>\n' +
//         '                          <circle cx="11" cy="11" r="10.3" fill="none"/>\n' +
//         '                        </g>\n' +
//         '                        <path id="check" data-name="check" d="M264,119.847l4.026,4.041,6.974-7" transform="translate(-1.615 0.496)" fill="none" stroke="#34393d" stroke-width="1.4"/>\n' +
//         '                      </g>\n' +
//         '                    </svg>';
//
//       this.firstElementChild.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">\n' +
//         '                      <g id="check-false" data-name="check-false" transform="translate(-256.385 -109.385)">\n' +
//         '                        <g id="ellipse" data-name="ellipse" transform="translate(256.385 109.385)" fill="none" stroke="#34393d" stroke-width="1.4">\n' +
//         '                          <circle cx="11" cy="11" r="11" stroke="none"/>\n' +
//         '                          <circle cx="11" cy="11" r="10.3" fill="none"/>\n' +
//         '                        </g>\n' +
//         '                        <path id="check" data-name="check" d="M264,119.847l4.026,4.041,6.974-7" transform="translate(-1.615 0.496)" fill="none" stroke="#34393d" stroke-width="1.4"/>\n' +
//         '                      </g>\n' +
//         '                    </svg>';
//     });
//   }
// }