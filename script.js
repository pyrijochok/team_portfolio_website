
class EventHandler {
        handleEvent(event){
            setTimeout(alert(event.type+" on "+event.currentTarget),10000);
        }
    }

const toBehance = document.querySelector("#toBehance");
if(toBehance){
    toBehance.onclick = ()=>{
        location.href = "https://www.behance.net/"
    }
    toBehance.addEventListener('mouseover',addShadow);
    toBehance.removeEventListener('mouseover',addShadow);
    toBehance.addEventListener('click',new EventHandler());
   
    
}

const projects = document.querySelectorAll(".projects div");
if(projects){
    projects.forEach((project)=>{
        project.addEventListener("mouseover",addShadow); 
        project.addEventListener("mouseover",makeBigger)}
    );
    projects.forEach((project)=>{
        project.addEventListener("mouseout",removeShadow);
        project.addEventListener("mouseout",normalState)
    });
}

const tools = document.querySelector("#tools");
if (tools){
    tools.onclick = (event)=>{
        let target = event.target;
        if(target.tagName != 'LI'){
            return;
        }
        highlight(target);
    }
}

function highlight(li){
    if(li.classList.contains('highlight')){
        li.classList.remove('highlight')
    }
    else{
        li.classList.add('highlight')
    }
}


class commentsMenu {
    constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this);
    }
    add(){
        addComment();
        commentId++;
    }
    edit(){
        editComment()
    }
    delete(){
        deleteComment()
    }
    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
        this[action]();
        }
    }
}
const commentsmenu = document.querySelector("#commentsMenu")
if(commentsmenu){
    new commentsMenu(commentsmenu);
}


document.addEventListener('click', function(event) {
        if (event.target.dataset.counter != undefined) { 
            event.target.value++;
            if( event.target.value>10){
                event.target.value = 1;
            }
        }
    });

document.addEventListener('click', function(event) {
        let id = event.target.dataset.toggleId;
        if (!id) return;
        let elem = document.getElementById(id);
        elem.hidden = !elem.hidden;
    });

function addShadow(){
    this.style.boxShadow = "0px 0px 10px grey";
}
function removeShadow(){
    this.style.boxShadow = "none";
}
function makeBigger(){
    this.style.width = "30%";
    this.style.paddingLeft = "16px"
}
function normalState(){
    this.style.width = "29.3%";
    this.style.paddingLeft = "7px"
}

function changeLoc(){
    location.href = "https://dribbble.com/";
}


function showMoreWorks(){
    const projectsDiv = document.createElement('div');
    projectsDiv.classList.add('projects','load');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const img1 = document.createElement('img');
    const img2 = document.createElement('img');
    const img3 = document.createElement('img');
    const header1 = document.createElement('h3');
    const header2 = document.createElement('h3');
    const header3 = document.createElement('h3');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const a1 = document.createElement('a');
    const a2 = document.createElement('a');
    const a3 = document.createElement('a');
    const textP1 = document.createTextNode("A mobile application designed to assist travelers in planning routes, discovering points of interest, and connecting with fellow travelers. It's an excellent tool for organizing trips and embarking on new adventures.");
    const textP2 = document.createTextNode("An e-commerce website focused on environmentally friendly products. The design emphasizes sustainability and eco-consciousness, providing users with a seamless shopping experience while promoting eco-friendly choices.");
    const textP3 = document.createTextNode("A health and fitness tracking app designed to help users monitor their exercise routines, nutrition, and overall well-being. With intuitive user interface and engaging visualizations, HealthTrack encourages users to achieve their fitness goals.");
    img1.setAttribute('src','img/Rectangle 11.png');
    img2.setAttribute('src','img/Rectangle 11 (1).png');
    img3.setAttribute('src','img/Rectangle 11 (2).png');
    a1.setAttribute('href','project.html');
    a2.setAttribute('href','project.html');
    a3.setAttribute('href','project.html');
    header1.textContent = 'Travel Buddy';
    header2.textContent = 'Netflix Assistant';
    header3.textContent = 'MoneyTrack';
    p1.textContent = textP1.nodeValue;
    p2.textContent = textP2.nodeValue;
    p3.textContent = textP3.nodeValue;
    a1.textContent = 'View project';
    a2.textContent = 'View project';
    a3.textContent = 'View project';
    div1.append(img1);
    div2.append(img2);
    div3.append(img3);
    img1.after(header1);
    img2.after(header2);
    img3.after(header3);
    div1.append(p1);
    div2.append(p2);
    div3.append(p3);
    div1.append(a1);
    div2.append(a2);
    div3.append(a3);
    projectsDiv.prepend(div1);
    projectsDiv.append(div2);
    projectsDiv.append(div3);
    const prevProjects = document.querySelector('.projects');
    prevProjects.after(projectsDiv);
}

function showOnlyRecent(){
    const loadedProjects = document.querySelectorAll('.load');
    loadedProjects.forEach(e=>e.remove());
}

// commentsMenu
function addComment(){
    const commentText = prompt('Your comment:','comment');
    const comment = document.createElement('div');
    comment.id = `comment${commentId}`;
    const commentName = document.createElement('h4');
    commentName.textContent = `Comment ${commentId}`;
    comment.append(commentName);
    comment.append(commentText);
    const commentsSection = document.querySelector('h3');
    commentsSection.after(comment);

}
function editComment(){
    const commentNum = prompt('Number of comment you want to change:');
    const commentToChange = document.getElementById(`comment${commentNum}`);
    const changedComment = document.createElement('div');
    changedComment.id = commentToChange.id;
    const newCommentText = prompt('Change:',commentToChange.textContent);
    const commentName = document.createElement('h4');
    commentName.textContent = `Comment ${commentNum}`;
    changedComment.append(commentName);
    changedComment.append(newCommentText);
    commentToChange.replaceWith(changedComment);
}

function deleteComment(){
    const commentNum = prompt('Number of comment you want to delete:');
    const commentToDelete = document.getElementById(`comment${commentNum}`);
    commentToDelete.innerHTML = '';
    commentToDelete.outerHTML = '';
}

let commentId = 1;

// lab8
const pins = document.querySelectorAll(".pin")
if(pins){
    pins.forEach((pin)=>{
        pin.onmousedown = (e)=>{
            let shiftX = e.clientX - pin.getBoundingClientRect().left;
            let shiftY = e.clientY - pin.getBoundingClientRect().top;
            pin.style.position = 'absolute';
            pin.style.zIndex = 1000;
            pin.style.cursor = "grabbing"
            document.body.append(pin);
            moveAt(e.pageX,e.pageY);
            function moveAt(pageX,pageY){
                pin.style.left = pageX -shiftX + 'px';
                pin.style.top = pageY -shiftY + 'px';
            }
            function onMouseMove(e){
                moveAt(e.pageX,e.pageY)
            }
            document.addEventListener('mousemove',onMouseMove);
            pin.onmouseup = ()=>{
                document.removeEventListener('mousemove',onMouseMove);
                pin.onmouseup = null;
                pin.style.cursor = "grab"
    
            }
            pin.ondragstart = ()=>{
                return false;
            }
        }
       
    })
}


document.onmouseover = (e)=>{
    if(e.target.tagName=='LI' && e.target.classList.contains("mover")){
        
        e.target.classList.add("highlight")
    }
    if(e.relatedTarget.tagName=='LI' && e.relatedTarget.classList.contains("mover")){
        e.relatedTarget.classList.remove("highlight")
    }
    
}

const simpleLiH = document.querySelectorAll(".simpleh");
simpleLiH.forEach((li)=>{
    li.onmouseover = ()=>{
        li.classList.add("highlight")
    }
    li.onmouseout = ()=>{
        li.classList.remove("highlight")
    }
})




