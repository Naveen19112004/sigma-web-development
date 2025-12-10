function createCard(title, cName, views, monthsOld, duration, thumbnail){
    // Finish this function
    let strviews;
    if(views<100000){
        strviews=views/1000+"K";
    }
    else if(views<1000000){
        strviews=views/10000+"K";
    }
    let html=`<div class="container">
        <div class="card">
            <div class="imgage">
                <img src=${thumbnail} alt="">
                <div class="timer">${duration}</div>
            </div>
            <div class="text">
                <h1>${title} | Sigma Web Development Course-Tutorial #1</h1>
                <p>${cName}. &${views}K views . ${monthsOld} months ago</p>
            </div>
        </div>
    </div>`
    document.body.innerHTML=document.body.innerHTML+html;
}
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry",
     560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
