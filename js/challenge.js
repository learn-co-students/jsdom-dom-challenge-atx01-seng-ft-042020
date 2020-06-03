document.addEventListener("DOMContentLoaded", () => {

    let likeCount = 0; //used to reset likes each second
    let likeButton = document.getElementById('heart');
    let plus = document.getElementById("plus");
    let minus = document.getElementById("minus");
    // increment count using setInterval
    let counter = document.getElementById("counter");
    let count = parseInt(counter.innerText);

    function increment() {
        count += 1;
    }
    function decrement() {
        count -= 1;
    }

    function timer() {
        return setInterval(() => {
            increment();
            likeCount = 0;
        }, 1000);
    }

    // set interval
    let counting = timer();


    // pause button
    let pause = document.getElementById("pause");
    let paused = false;
    pause.addEventListener("click", togglePause);
    function togglePause() {
        if (paused) {
            counting = timer();
            plus.disabled = false;
            minus.disabled = false;
            likeButton.disabled = false;
            paused = false;
        } else {
            clearInterval(counting);
            // disable buttons
            plus.disabled = true;
            minus.disabled = true;
            likeButton.disabled = true;
            paused = true;
        }
    }

    // plus and minus buttons

    plus.addEventListener('click', increment);
    minus.addEventListener('click', decrement);

    // setup like button
    let likes = document.querySelector('.likes');
    likeButton.addEventListener('click', likeCounter)

    function likeCounter() {
        likeCount += 1;
        if (likeCount > 1) {
            let last = likes.children[likes.children.length - 1];
            last.innerText = `${count} has been liked ${likeCount} times`;
        } else {
            let li = document.createElement('li');
            li.innerText = `${count} has been liked ${likeCount} times`;
            likes.appendChild(li);
        }
    }

    let form = document.getElementById("comment-form");
    let list = document.getElementById("list");

    form.addEventListener('submit', addComment);
    function addComment(e) {
        e.preventDefault();
        let p = document.createElement('p')
        p.innerText = e.target.comment.value;
        list.appendChild(p)
        e.target.comment.value = "";
    }

    function start() {
        counter.innerText = count;

        requestAnimationFrame(start)
    }
    start();

})