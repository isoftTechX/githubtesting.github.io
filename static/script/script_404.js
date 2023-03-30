// var script = document.createElement('script');
// script.src = 'https://raw.githubusercontent.com/buzzfeed/libgif-js/master/libgif.js';
// document.getElementsByTagName('head')[0].appendChild(script);
function redirect() {
    window.setTimeout(function() {
        var dialog = document.getElementById("dialog-text")
        dialog.innerHTML = "Hooray! I'm back online! Thank you for fixing me. Let's explore the right path together now."
    }, 6700)
    window.setTimeout(function () {
        window.location = "../index.html";
    }, 12000);
}

function animateGif() {
    var gif = document.getElementById("gif")
    gif.src = "./static/img/robot/reboot_robot.gif"
    gif.setAttribute('onload', 'redirect();');
}

window.addEventListener('load', function () {

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

    const myGIF = document.getElementById("gif");

    myGIF.addEventListener("load", function () {
        console.log("GIF animation completed.");
    });

    const pages = document.querySelectorAll(".navbar-list li a");
    pages.forEach(page => {
        console.log(page)
        page.addEventListener('mouseover', function () {
            var bar = page.querySelector("span");
            bar.style.width = "100%";
            page.addEventListener("mouseout", function () {
                bar.style.width = "0";    
            })
        })
    })


})

