let coat = [
    ' “Good for tracking calories and macros with a huge database of food.” lian M.',
    ' “Friendly, easy-to-use app that keeps me accountable.” Dinah L.',
    ' “Can’t lose weight and stay on track without it.” Jennie S.',
    '“Love this app. It keeps me on track with my nutritional goals.” Annette B.',
    '“Not only are the tools super helpful, the customer service is insanely awesome!” Laura K.',
    '“Helped me get moving on my goals and tracking my weight loss and bodybuilding.” Jason B.',
]

const coate = document.querySelector('.coate')
const changable = document.querySelectorAll('.dot');

let userActivityTimeout;
let live_dot = 5


function dotFunc(dot) {
    live_dot = dot
    coate.classList.remove('coate_ani')
    changable.forEach((ele)=>{
        ele.classList.remove('active')
        ele.classList.add('dot')
    } )

    changable.forEach((ele,ind)=>{
        if(ind == dot){
            ele.classList.remove('dot')
            ele.classList.add('active')
        }
    })

    clearInterval(autoChangeInterval);

    clearTimeout(userActivityTimeout);

    coate.innerText = coat[dot]
    
    coate.classList.add('coate_ani')

    userActivityTimeout = setTimeout(() => {
      autoChangeInterval = setInterval(automaticTextChange, 2500);
    }, 100);
  }

  // Function for automatic text change
  function automaticTextChange() {
    let text_loc = live_dot % coat.length
   
    changable.forEach((ele)=>{
        ele.classList.remove('active')
        ele.classList.add('dot')
    } )

    changable.forEach((ele,ind)=>{
        if(ind == text_loc){
            ele.classList.remove('dot')
            ele.classList.add('active')
        }
    })
    coate.innerText = coat[text_loc];
    coate.classList.add('coate_ani')
    live_dot++
  }

  autoChangeInterval = setInterval(automaticTextChange, 3000);