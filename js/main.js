//active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on")
    }
}

//nav hide
let navBar= document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(
    function(a){
        a.addEventListener("click", function(){
            navCollapse.classList.remove("show")
        })
    }
)

//counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }

            }, step);

        }
        counter("c1" ,1 , 10 ,2000);
        counter('c2' ,1 , 15 ,2000);
        counter('c3' ,1 , 25 ,2000);
        counter('c4' ,1 , 35 ,2000);
    });
