function dialog(){
        let questions = [
            "Do you like our portfolio?",
            "Are you going to tell your friends about us?",
            "Did you find everithing essential on our site?"
        ];
    
        let totalScore = 0;
    
        for (let i = 0; i < questions.length; i++) {
            let answer;
            let isValidAnswer = false;
            while (!isValidAnswer) {
                answer = prompt(questions[i]);
               
                if (answer.toLowerCase() == "yes"||answer.toLowerCase() == "no" ) {
                    isValidAnswer = true;
                } else {
                    alert("Answer must be yes or no.");
                }
            }
    
            if (i === 0 && answer.toLowerCase() === "yes") {
                totalScore += 10;
            } else if (i === 1 && answer.toLowerCase() === "yes") {
                totalScore += 20;
            } else if (i === 2 && answer.toLowerCase() === "yes") {
                totalScore += 15;
            }
        }
    
        let feedback = "";
        if (totalScore >= 25) {
            feedback = "Thanks for your high rate!";
        } else if (totalScore >= 10) {
            feedback = "We are happy that you love our portfolio!";
        } else {
            feedback = "Thanks for your rate!";
        }
    
        alert(feedback);
    
}


function showPageAuthor(lastName, firstName, position = "web-developer"){
    alert("Інформація про автора сторінки:\n" +
          "Прізвище: " + lastName + "\n" +
          "Ім'я: " + firstName + "\n" +
          "Посада: " + position);
}


function compareStrings(){
    str1 = prompt("Input first string: ");
    str2 = prompt("Input second string: ");
    let feedback = "Bigger string is: ";
    if (str1.length > str2.length) {
        alert(feedback+str1);
    } else if (str2.length > str1.length) {
        alert(feedback+str2);
        return str2;
    } else {
        alert("Strings are equal.");
    }
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

document.body.style.background ="white";
setTimeout(()=>document.body.style.background ="",30000)