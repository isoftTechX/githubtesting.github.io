// var script = document.createElement('script');
// script.src = '//code.jquery.com/jquery-1.11.0.min.js';
// document.getElementsByTagName('head')[0].appendChild(script);

window.addEventListener('load', function () {

    var text = "Let's Connect and Build Your Vision Together!";
    var i = 0;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();


    const btnEl = document.querySelector('.btn')
    const toggleOptions = () => {
        const wrapperEl = document.querySelector('.wrapper')
        const iconEl = btnEl.querySelector('i')

        wrapperEl.classList.toggle('active')

        if (iconEl.classList.contains('ri-share-line')) {
            iconEl.classList.replace('ri-share-line', 'ri-close-line')
        } else {
            iconEl.classList.replace('ri-close-line', 'ri-share-line')
        }
    }
    btnEl.addEventListener('click', toggleOptions)


    const sections = document.querySelectorAll('.animate');
    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate--active');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    const activePage = document.querySelector("#active-page");
    var activebar = activePage.querySelector("span");
    console.log(activePage);
    activebar.style.width = "100%";

    const pages = document.querySelectorAll(".navbar-list li a");
    pages.forEach(page => {
        console.log(page)
        page.addEventListener('mouseover', function () {
            if (page !== activePage) {
                var bar = page.querySelector("span");
                activebar.style.width = "0";
                bar.style.width = "100%";
                page.addEventListener("mouseout", function () {
                    activebar.style.width = "100%";
                    bar.style.width = "0";    
                })
            }
        })
    });
})

