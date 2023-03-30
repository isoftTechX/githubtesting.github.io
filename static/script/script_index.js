var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function changeText(element, num) {
    var span = element.querySelector('span');
    var text = span.innerHTML;
    let timeoutId;

    if (num === 1) {
        timeoutId = setTimeout(function () {
            span.innerHTML = text + ": <br><br>Developing customized software applications tailored to meet the unique needs of your clients."
        }, 400);
    }
    if (num === 2) {
        timeoutId = setTimeout(function () {
            span.innerHTML = text + ": <br><br>Designing and building web-based applications to provide clients with the ability to manage their businesses online."
        }, 400);
    }
    if (num === 3) {
        timeoutId = setTimeout(function () {
            span.innerHTML = text + ": <br><br>Designing intuitive and visually appealing user interfaces that enhance the user experience and increase engagement."
        }, 400);
    }
    if (num === 4) {
        timeoutId = setTimeout(function () {
            span.innerHTML = text + ": <br><br>Offering ongoing maintenance and support services to ensure the continued optimal performance of the software you develop."
        }, 400);
    }
    element.onmouseout = function () {
        clearTimeout(timeoutId);
        span.innerHTML = text;
    }
}

window.addEventListener('load', function () {

    var text = "Where innovation meets technology";
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


    const cards = document.querySelectorAll('.card');

    if (window.innerWidth < 1500) {
        const randomIndices = [];
        while (randomIndices.length < 2) {
            const randomIndex = Math.floor(Math.random() * cards.length);
            if (!randomIndices.includes(randomIndex)) {
                randomIndices.push(randomIndex);
            }
        }

        randomIndices.forEach(index => {
            console.log(cards[index])
            cards[index].classList.add('hide');
        });
    }

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
    })


})

