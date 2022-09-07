/*show & close menu header */
const showMenu = (id1,id2) => {

    const obj1 = document.getElementById(id1);
    const obj2 = document.getElementById(id2);
    
    if (obj1 && obj2) {
        obj1.addEventListener('click',() => {
            obj2.classList.toggle('active');
        })        
    }

    document.onclick = (e) => {
        if (e.target.id !== id2 && e.target.id !== id1) {
            obj2.classList.remove('active');
        }
    }
    
}
showMenu('nav-dot','nav-menu-collapse');
showMenu('nav-toggle','nav-menu-wrap');
/*only 1 function at time !?!?!*/

/* show budget */
const budget_btn = document.getElementById('budget-btn');
const opc = document.getElementById('opc');

const data_dots = document.getElementsByClassName('data-dots-custom');
const owl_stage = document.getElementById('owlStage');

if (budget_btn && opc && data_dots) {
    budget_btn.addEventListener('click', () => {
        budget_btn.classList.toggle('active');
        opc.classList.toggle('active');

        data_dots[0].addEventListener('click',()=>{
            for(i=0; i<4; i++){
                data_dots[i].classList.remove('active');
            }
            data_dots[0].classList.add('active');
            owl_stage.style.transform = "translateX(0px)"
            
        })

        data_dots[1].addEventListener('click',()=>{
            for(i=0; i<4; i++){
                data_dots[i].classList.remove('active');
            }
            data_dots[1].classList.add('active');
            owl_stage.style.transform = "translateX(-25%)";
        })

        data_dots[2].addEventListener('click',()=>{
            for(i=0; i<4; i++){
                data_dots[i].classList.remove('active');
            }
            data_dots[2].classList.add('active');
            owl_stage.style.transform = "translateX(-50%)";
        })

        data_dots[3].addEventListener('click',()=>{
            for(i=0; i<4; i++){
                data_dots[i].classList.remove('active');
            }
            data_dots[3].classList.add('active');
            owl_stage.style.transform = "translateX(-75%)";
        })
        
    })
}

/* show scrollup btn */
const scrollup_btn = document.getElementById('scroll-up')

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || 
        document.documentElement.scrollTop > 300) {
        scrollup_btn.classList.add('active')
    } 
    else {
        scrollup_btn.classList.remove('active');
    }
  }





