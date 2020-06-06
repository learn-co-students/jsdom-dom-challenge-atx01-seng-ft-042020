const plus = document.getElementById('plus');
const minus = document.getElementById('minus');


let commentForm = document.getElementById('comment-form')
let counter = document.getElementById('counter');


const all = [];



plus.addEventListener('click', (e) => {
    counter.innerHTML ++;
    console.log(counter.innerHTML);
});

minus.addEventListener('click', (e) => {
    counter.innerHTML --;
    console.log(counter.innerHTML);
});

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const p = document.createElement('p');
    const pButton = document.createElement('button');
    const pRemove = document.createElement('button');
    const commentInput = document.getElementById('comment-input');
    const likes = document.createElement('integer');
    likes.innerHTML = 0;
    

    console.log("submit");
    pButton.innerText = ' ❤️ '
    pRemove.innerText = ' Vaporize '

    p.innerText = commentInput.value + ' ' + ' ';
    p.style.border = '5px solid #164a96';
    p.style.color = '#164a96';
    p.style.backgroundColor = 'hotpink';
    p.style.padding = '5px';
    p.style.maxWidth = '30%';

    pButton.addEventListener('click', (e) => {
        pButton.appendChild(likes)
        likes.innerHTML ++;
    })

    pRemove.addEventListener('click', (e) => {
        p.remove();
        console.log("removed");
        renderComments();
    });

    p.appendChild(pButton);
    p.appendChild(pRemove);
    all.push(p);
    renderComments();

    commentInput.value = ''
});

function renderComments(){
    const commentList = document.getElementById('list');
    commentList.innerHTML = '';
    all.forEach(p => commentList.appendChild(p))
}

commentForm.addEventListener('input', (e) => {
    console.log(e.target.value);
});

