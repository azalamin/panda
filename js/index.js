// Change the color of section title
const sectionTitle = document.getElementsByClassName('section-title');
for (const title of sectionTitle) {
    title.style.color = "tomato"
};

// Border radius 30 px
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = "30px";

};

// Console.log
function showItem() {
    console.log("Subscribed Clicked")
};

// remove child over click
const buttons = document.getElementsByClassName('btn-warning');
for (const button of buttons) {
    button.addEventListener('click', function(event) {
        event.target.parentNode.removeChild(event.target)
    })
};

// Enable and disable email form
document.getElementById('email-field').addEventListener('keyup', function(event) {
    const subscribeBtn = document.getElementById('subscribe-btn');
    if (event.target.value == 'email') {
        subscribeBtn.removeAttribute('disabled')
    } else {
        subscribeBtn.setAttribute('disabled', true)
    }
});

// Change the images when mouse is enter;
document.getElementById('shoe-1').addEventListener('mouseenter', function(e) {
    e.target.src = "../images/bags/bag-3.png";
})

// By dabble Click change the background color
document.getElementById('subscribe').addEventListener('dblclick', function(e) {
    document.getElementById('subscribe').style.backgroundColor = "tomato";
})