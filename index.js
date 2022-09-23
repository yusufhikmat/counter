let count = 0;

const value = document.querySelector('.value');
const btns = document.querySelectorAll('.btn');

// add event listener to the btns
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const buttons = e.currentTarget.classList;
        if(buttons.contains('decrease')){
            count--;
        }else if(buttons.contains('increase')){
            count++;
        }else{
            count=0;
        }
        if(count > 0){
            value.style.color = 'green';
        }else if(count < 0){
            value.style.color = 'red';
        }else{
            value.style.color= 'black';
        }
        value.textContent = count;
    })
})