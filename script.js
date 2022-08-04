let id = 90
let adviceID = document.querySelector('#advice-number');
let adviceText = document.querySelector('.advice');
let btn = document.querySelector('.dice-img');
let container = document.querySelector('.container');

function getAdvice() {
    let url = "https://api.adviceslip.com/advice";

    let request = new XMLHttpRequest();

    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                let response = request.response

                adviceID.textContent = response.slip.id;
                adviceText.textContent = "''" + response.slip.advice + "''";
            } else {
                alert('ERROR');
            }
        }
    }
};

getAdvice();

btn.addEventListener('click', ()=> {
    getAdvice();
    container.classList.add('change')
    setTimeout(() => {
        container.classList.remove('change')
    }, 0500);
    
})


