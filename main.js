


function changeBg(){
    var navbar = document.getElementById('navbar');
    var scrollvalue = window.scrollY;
    if(scrollvalue<350){
        navbar.classList.remove('bgColor');
    }
    else{
        navbar.classList.add('bgColor');
    }
}

window.addEventListener('scroll',changeBg);

const hamburgur = document.querySelector('hamburger');

hamburgur.addEventListener('click',function(){
    this.classList.toggle('.is-active');
});


// will excecute this later 

// let about_us_section = document.querySelectorAll('container');
// let navlink = document.querySelectorAll('navbar ul li a');

// window.onscroll = () =>{

//     section.foreach(sec =>{

//         let top = window.scrollY;
//         let offset = 
//     }
        
//     )
// }


   
