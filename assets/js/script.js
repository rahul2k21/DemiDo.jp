
// preloder of the first page animation

document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll(".preload-image");
  var loader = document.getElementById("preloader");

  var currentImageIndex = 0;

  function showNextImage() {
    if (currentImageIndex < images.length) {
      if (currentImageIndex > 0) {
        images[currentImageIndex - 1].classList.remove("show"); 
      }
      images[currentImageIndex].classList.add("show");
      if (currentImageIndex === 1) {
        images[currentImageIndex].classList.add("secoundimg"); 
      }
      currentImageIndex++;
      setTimeout(showNextImage, 2000); 
    } else {
      hideLoader();
    }
  }



  function hideLoader() {
    loader.style.opacity = 0;
    setTimeout(function() {
      loader.style.display = "none";
    }, 5000); 
  }

  showNextImage();
});




// var div = document.getElementById('show-bar');
// var display = 0;

// function HideSHow1() {
//     var menuButton = document.getElementById('menuButton');
//     if (display == 1) {
//         div.style.display = 'block';
//         display = 0;
//         menuButton.innerHTML = 'CLOSE';
//     } else {
//         div.style.display = 'none';
//         display = 1;
//         menuButton.innerHTML = 'MENU';
//     }
// }


function HideShow1() {
  var showBar = document.getElementById('show-bar');
  var menuBtn = document.getElementById('menuBtnShow');
  
  showBar.classList.toggle('show');

  if (showBar.classList.contains('show')) {
    menuBtn.textContent = "CLOSE";
  } else {
    menuBtn.textContent = "MENU";
  }
}



// Singlg Bottle  section  imge up down 

// document.addEventListener('scroll', function() {
//   var scrollPosition = window.scrollY;
//   var threshold = 2900; 
//   var imageContainer = document.querySelector('.text-card2');

//   if (scrollPosition > threshold) {
//     imageContainer.classList.add('scrolleddir1');
//     imageContainer.classList.remove('scrolledup1');
//   } else {
//     imageContainer.classList.remove('scrolleddir1');
//     imageContainer.classList.add('scrolledup1');
//   }
// });



//s-2-img-1 animation
gsap.registerPlugin(ScrollTrigger);

gsap.to(".text-card2", {
  scrollTrigger: {
    trigger: ".text-card2",
    scroller: "body",
    start: "top 100%",
    end: "top 20%",
    scrub: true,
    toggleActions: "play none none reverse",
    onUpdate: (self) => {
      const direction = self.direction === -1 ? "up" : "down";
      if (direction === "up") {
        gsap.to(".text-card2", { y: 70, duration: 0.5, ease: "power2.inOut" });
      } else {
        gsap.to(".text-card2", { y: -70, duration: 0.5, ease: "power2.inOut" });
      }
    }
  }
});












// Onclick button new Tab Open   

function newTabOpen()
{
  var rahul="https://youtu.be/jxKivfJ3OUw?si=H3LXca-VBmRO-z7b";

  window.open(rahul);
}


// crousal  tab

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,


    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 412,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
    
   
  $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // autoplaySpeed: 2000,
    infinite: true
  });
    




//   let lastScrollPosition = 0;

// window.addEventListener('scroll', function() {
//   var targetElement = document.querySelector('.target-element1');
//   var scrollPosition = window.scrollY;

//   console.log("Scroll Position:", scrollPosition);

//   var threshold = 7700; 

//   if (scrollPosition > threshold && scrollPosition > lastScrollPosition) {
//     targetElement.classList.add('scrolled1');
//     targetElement.classList.remove('scrolled1-reverse');
//   } else if (scrollPosition < threshold && scrollPosition < lastScrollPosition) {
//     targetElement.classList.add('scrolled1-reverse');
//     targetElement.classList.remove('scrolled1');
//   }

//   lastScrollPosition = scrollPosition;
// });





  

//   let lastScrollPosition2 = 0;

// window.addEventListener('scroll', function() {
//   var targetElement = document.querySelector('.target-element2');
//   var scrollPosition = window.scrollY;

//   console.log("Scroll Position:", scrollPosition);

//   var threshold = 7700;

//   if (scrollPosition > threshold && scrollPosition > lastScrollPosition2) {
//     targetElement.classList.add('scrolled2');
//     targetElement.classList.remove('scrolled2-reverse');
//   } else if (scrollPosition < threshold && scrollPosition < lastScrollPosition2) {
//     targetElement.classList.add('scrolled2-reverse');
//     targetElement.classList.remove('scrolled2');
//   }

//   lastScrollPosition2 = scrollPosition;
// });

  



  



//   let lastScrollPosition3 = 0;

// window.addEventListener('scroll', function() {
//   var targetElement = document.querySelector('.target-element3');
//   var scrollPosition = window.scrollY;

//   console.log("Scroll Position:", scrollPosition);

//   var threshold = 8250;

//   if (scrollPosition > threshold && scrollPosition > lastScrollPosition3) {
//     targetElement.classList.add('scrolled3');
//     targetElement.classList.remove('scrolled3-reverse');
//   } else if (scrollPosition < threshold && scrollPosition < lastScrollPosition3) {
//     targetElement.classList.add('scrolled3-reverse');
//     targetElement.classList.remove('scrolled3');
//   }

//   lastScrollPosition3 = scrollPosition;
// });







  // let lastScrollPosition4 = 0;

  // window.addEventListener('scroll', function() {
  //   var targetElement = document.querySelector('.target-element4');
  //   var scrollPosition = window.scrollY;
  
  //   console.log("Scroll Position:", scrollPosition);
  
  //   var threshold = 8250;
  
  //   if (scrollPosition > threshold && scrollPosition > lastScrollPosition4) {
  //     targetElement.classList.add('scrolled4');
  //     targetElement.classList.remove('scrolled4-reverse');
  //   } else if (scrollPosition < threshold && scrollPosition < lastScrollPosition4) {
  //     targetElement.classList.add('scrolled4-reverse');
  //     targetElement.classList.remove('scrolled4');
  //   }
  
  //   lastScrollPosition4 = scrollPosition;
  // });
  


//Section-6

//card-1
let t7 = gsap.timeline({
  scrollTrigger: {
      trigger: ".s-6-mid",
      scroller: "body",
      // markers: true,
      start: "top 38%",
      end: "top 23%",
      scrub: 5,
      // pin: true,
  }
});
t7.to(".card-1", { x: -20, duration: 1, ease: "power1.inOut" })
.to(".card-1", { rotate: -5, duration: 2, ease: "power1.inOut" })
.to(".card-1", { y: -10, duration: 1, ease: "power1.inOut" })
.to(".card-1", { y: -30, duration: 1, ease: "power1.inOut" })
.to(".card-1", { y: -50, duration: 1, ease: "power1.inOut" })
.to(".card-1", { zIndex: 0 , duration: 1, ease: "power1.inOut" })
.to(".card-1", { opacity: 0.7, duration: 1, ease: "power1.inOut" })
.to(".card-1", { rotate: 0, duration: 2, ease: "power1.inOut" })
.to(".card-1", { x: 0, duration: 1, ease: "power1.inOut" })


// card-2
let t8 = gsap.timeline({
  scrollTrigger: {
      trigger: ".card-2",
      scroller: "body",
      // markers: true,
      start: "top 45%",
      end: "top 20%",
      scrub: 5,
      // pin: true,
  }
});
t8.to(".card-2", { x: 20, duration: 1, ease: "power1.inOut" })
.to(".card-2", { rotate: 5, duration: 2, ease: "power1.inOut" })
.to(".card-2", { y: 10, duration: 1, ease: "power1.inOut" })
.to(".card-2", { y: 30, duration: 1, ease: "power1.inOut" })
.to(".card-2", { y: 50, duration: 1, ease: "power1.inOut" })
.to(".card-2", { opacity: 1, duration: 1, ease: "power1.inOut" })
.to(".card-2", { zIndex: 100 , duration: 1, ease: "power1.inOut" })
.to(".card-2", { rotate: 0, duration: 2, ease: "power1.inOut" })
.to(".card-2", { x: 0, duration: 1, ease: "power1.inOut" })

//card-3
let t9 = gsap.timeline({
  scrollTrigger: {
      trigger: ".card-3",
      scroller: "body",
      // markers: true,
      start: "top 20%",
      end: "top 5%",
      scrub: 5,
      // pin: true,
  }
});
t9.to(".card-3", { x: -10, duration: 1, ease: "power1.inOut" })
.to(".card-3", { rotate: -5, duration: 2, ease: "power1.inOut" })
.to(".card-3", { y: 10, duration: 1, ease: "power1.inOut" })
.to(".card-3", { y: 30, duration: 1, ease: "power1.inOut" })
.to(".card-3", { y: 50, duration: 1, ease: "power1.inOut" })
.to(".card-3", { opacity: 1, duration: 1, ease: "power1.inOut" })
.to(".card-3", { zIndex: 100 , duration: 1, ease: "power1.inOut" })
.to(".card-3", { rotate: 0, duration: 2, ease: "power1.inOut" })
.to(".card-3", { x: 5, duration: 1, ease: "power1.inOut" })

// card-4
let t10 = gsap.timeline({
  scrollTrigger: {
      trigger: ".card-4",
      scroller: "body",
      // markers: true,
      start: "top 26%",
      end: "top 11%",
      scrub: 5,
      // pin: true,
  }
});
t10.to(".card-4", { x: 10, duration: 1, ease: "power1.inOut" })
.to(".card-4", { rotate: 5, duration: 2, ease: "power1.inOut" })
.to(".card-4", { y: -10, duration: 1, ease: "power1.inOut" })
.to(".card-4", { y: -30, duration: 1, ease: "power1.inOut" })
.to(".card-4", { y: -50, duration: 1, ease: "power1.inOut" })
.to(".card-4", { opacity: 0.7, duration: 1, ease: "power1.inOut" })
.to(".card-4", { zIndex: 0 , duration: 1, ease: "power1.inOut" })
.to(".card-4", { rotate: 0, duration: 2, ease: "power1.inOut" })
.to(".card-4", { x: -5, duration: 1, ease: "power1.inOut" })


























  // Smart Scale Selection...


  // window.addEventListener('scroll', function() {
  //   var targetElement = document.querySelector('.image-1');
  //   var scrollPosition = window.scrollY;

  //   console.log("hello",scrollPosition)
  //   var thresholdA =6690;
  //   if (scrollPosition > thresholdA) {
  //     targetElement.classList.add('scrolled1A');
  //   } else {
  //     targetElement.classList.remove('scrolled1A');
  //   }
  // });

  // window.addEventListener('scroll', function() {
  //   var targetElement = document.querySelector('.image-3');
  //   var scrollPosition = window.scrollY;

  //   console.log("hello",scrollPosition)

  //   var thresholdB = 6690;

  //   if (scrollPosition > thresholdB) {
  //     targetElement.classList.add('scrolled3A');
  //   } else {
  //     targetElement.classList.remove('scrolled3A');
  //   }
  // });

 //Secton 5

// Animation for bottle-1
let t4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".bottle-1",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 30%",
    scrub: 3,
  }
});
t4
  .to(".bottle-1", { y: -190, duration: 10, ease: "power2.inOut" })
  .to(".bottle-1", { rotate: -30, x: -150, y: -185, duration: 10, ease: "power2.inOut" }, "-=5");

// Animation for bottle-2
let t5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".bottle-2",
    scroller: "body",
    start: "top 90%",
    end: "top 30%",
    scrub: 3,
  }
});
t5
  .to(".bottle-2", { y: -200, duration: 10, ease: "power2.inOut" })
  .to(".bottle-2", { rotate: 1, y: -220, x: -10, duration: 10, ease: "power2.inOut" }, "-=5");

// Animation for bottle-3
let t6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".bottle-3",
    scroller: "body",
    start: "top 90%",
    end: "top 30%",
    scrub: 3,
  }
});
t6
  .to(".bottle-3", { y: -210, duration: 10, ease: "power2.inOut" })
  .to(".bottle-3", { rotate: 22, x: 130, y: -190, duration: 10, ease: "power2.inOut" }, "-=5");


// GSAP Marquee and Wave Animation

// Break the text into spans for GSAP animation
//var h1Text= document.querySelector("h1").textContent  {Short hand property}

function breakTheText() {
  const h1s = document.querySelectorAll("h1");
  h1s.forEach(h1 => {
      const h1Text = h1.textContent; //It gives the text which is inside the h1
      const splittedText = h1Text.split("");  //Breaks the string into individual chars
      let clutter = "";

      splittedText.forEach(char => {
          clutter += `<span>${char}</span>`;  //chars will be stored in individual spans
      });

      h1.innerHTML = clutter;
  });
}
breakTheText(); // Calling the above function

gsap.fromTo("h1 span", 
{ 
  y: 25,
  duration: 1.5,
  ease: "power1.inOut",
  repeat: -1, 
  yoyo: true, 
  stagger: {
    each: 0.2, 
    repeat: -1
  }
}, 
{ 
  y: -25, 
  duration: 1.5, 
  ease: "power1.inOut", 
  repeat: -1, 
  yoyo: true, 
  stagger: {
    each: 0.2, 
    repeat: -1
  }
}
);

//On scroll animation of text right/left
window.addEventListener("wheel", function(event) {
  if (event.deltaY > 0) {
      gsap.to(".marque", {
          xPercent: -200,
          duration: 10,
          repeat: -1,
          ease: "none",
      });
  } else {
      gsap.to(".marque", {
          xPercent: 0,
          duration: 10,
          repeat: -1,
          ease: "none",
      });
  }
});









  



  // image hide on the scrolll banner section2 


  document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('imageToHide');
    const threshold = 2000; 
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > threshold) {
            if (currentScrollY > lastScrollY) {
                // Scrolling down
                image.classList.add('hidden');
            } else {
                // Scrolling up
                image.classList.remove('hidden');
            }
        } else {
            image.classList.remove('hidden');
        }
        lastScrollY = currentScrollY;
    });
});
  








// document.addEventListener('DOMContentLoaded', () => {
//   const image = document.getElementById('imageToHide');
//   const threshold = 2400; // Change this value to your desired threshold
//   let lastScrollY = window.scrollY;

//   window.addEventListener('scroll', () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY > threshold) {
//           if (currentScrollY > lastScrollY) {
//               // Scrolling down
//               image.classList.add('hidden-down');
//               image.classList.remove('hidden-up');
//           } else {
//               // Scrolling up
//               image.classList.add('hidden-up');
//               image.classList.remove('hidden-down');
//           }
//       } 
//       else {
//           image.classList.remove('hidden-up');
//           image.classList.remove('hidden-down');
//       }
//       lastScrollY = currentScrollY;
//   });
// });




document.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var threshold = 6600; 
  var imageContainer = document.querySelector('.image-container');

  if (scrollPosition > threshold) {
    imageContainer.classList.add('scrolleddir');
    imageContainer.classList.remove('scrolledup');
  } else {
    imageContainer.classList.remove('scrolleddir');
    imageContainer.classList.add('scrolledup');
  }
});






// Producat Card Animation Script 


// document.addEventListener('scroll', function() {
//   var scrollPosition = window.scrollY;
//   var threshold = 9600; 
//   var imageContainer = document.querySelector('.producats-image1');

//   if (scrollPosition > threshold) {
//     imageContainer.classList.add('producats-image1-up');
//     imageContainer.classList.remove('producats-image1-down');
//   } else {
//     imageContainer.classList.remove('producats-image1-up');
//     imageContainer.classList.add('producats-image1-down');
//   }
// });



// document.addEventListener('scroll', function() {
//   var scrollPosition = window.scrollY;
//   var threshold = 10000; 
//   var imageContainer = document.querySelector('.producats-image2');

//   if (scrollPosition > threshold) {
//     imageContainer.classList.add('producats-image2-up');
//     imageContainer.classList.remove('producats-image2-down');
//   } else {
//     imageContainer.classList.remove('producats-image2-up');
//     imageContainer.classList.add('producats-image2-down');
//   }
// });






// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// let timeline = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".cards",
//         pin: true,
//         pinSpacing: true,
//         start: "left-=5px left",
//         end: "+=2000",
//         scrub: 1
//     }
// });

// timeline.addLabel('card1');
// timeline.to('.card-1', {
//     yPercent: 0,
//     opacity: 1,
  
  
// });

// timeline.from('.card-2', {
//     yPercent: 75,
//     opacity: 0
// });
// timeline.addLabel("card2");

// timeline.to(".card-1", {
//     scale: 0.95,
//     xPercent: 17,
//     yPercent: -0.5,
//     opacity: 0.5,
    

// }, "-=0.3");

// timeline.to('.card-2', {
//     yPercent: 0,
//     opacity: 1
// });

// timeline.from('.card-3', {
//     yPercent: 75,
//     opacity: 0
// });


// timeline.addLabel('card3');

// timeline.to(".card-2", {
//     scale: 0.98,
//     xPercent: 15,
//     yPercent: -0.4,
//     opacity: 0.6,


// }, "-=0.3");

// timeline.to(".card-3", {
//     yPercent: 0,
//     opacity: 1,
  
// });


// timeline.to('.card-3', {});

// timeline.from('.card-4', {
//     yPercent: 75,
//     opacity: 0,
  
// });
// timeline.addLabel('card4');

// timeline.to(".card-3", {
//     scale: 0.98,
//     xPercent:13,
//     yPercent: -0.4,
//     opacity: 0.6,
  
// }, "-=0.3");

// timeline.to(".card-4", {
//     yPercent: 0,
//     opacity: 1,

// });



// timeline.from('.card-5', {
//   yPercent: 75,
//   opacity: 0,
 
// });
// timeline.addLabel('card5');

// timeline.to(".card-4", {
//   scale: 0.98,
//   yPercent: -0.4,
//   xPercent: 11,
//   opacity: 0.6,
 

// }, "-=0.3");

// timeline.to(".card-5", {
//   yPercent: 0,
//   opacity: 1,
  
// });

// timeline.from('.card-6', {
//   yPercent: 75,
//   opacity: 0,
// });
// timeline.addLabel('card6');

// timeline.to(".card-5", {
//   scale: 0.98,
//   yPercent: -0.4,
//   xPercent: 9,
//   opacity: 0.6,
 

// }, "-=0.3");

// timeline.to(".card-6", {
//   yPercent: 0,
//   opacity: 1,
  
// });

// timeline.from('.card-7', {
//   yPercent: 75,
//   opacity: 0,
 
// });
// timeline.addLabel('card7');

// timeline.to(".card-6", {
//   scale: 0.98,
//   yPercent: -0.4,
//   xPercent: 7,
//   opacity: 0.6,
 

// }, "-=0.3");

// timeline.to(".card-7", {
//   yPercent: 0,
//   opacity: 1,
 
// });

// timeline.from('.card-8', {
//   yPercent: 75,
//   opacity: 0,
 
// });
// timeline.addLabel('card8');

// timeline.to(".card-7", {
//   scale: 0.98,
//   yPercent: -0.4,
  
// }, "-=0.3");

// timeline.to(".card-8", {
//   yPercent: 0,
//   opacity: 1
// });



//Section-7

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-7",
    pin: true,
    pinSpacing: true,
    start: "center center",
    end: "+=4000",
    // markers: true,
    scrub: 1,
  }
});

timeline.addLabel('card1')
  .fromTo('.s-7-card-1', {yPercent: 100}, {yPercent: 0, opacity: 1})
  .fromTo('.s-7-card-2', {zIndex: 1, yPercent: 100}, {yPercent: -5, opacity: 1, xPercent: 2}, "+=0.5")
  .to('.s-7-card-1', {xPercent: 5, yPercent: -4, opacity: 0.9, zIndex: -1}, "-=0.3")

  .addLabel('card2')
  .fromTo('.s-7-card-3', {zIndex: 1, yPercent: 100}, {yPercent: -5, opacity: 1, xPercent: 4}, "+=0.5")
  .to('.s-7-card-1', {xPercent: 10, yPercent: -15}, "-=0.3")
  .to('.s-7-card-2', {xPercent: 7, yPercent: -13, opacity: 0.9, zIndex: -1}, "-=0.5")

  .addLabel('card3')
  .fromTo('.s-7-card-4', {zIndex: 1, yPercent: 100}, {yPercent: -8, opacity: 1, xPercent: 6}, "+=0.5")
  .to('.s-7-card-1', {xPercent: 13, yPercent: -28}, "-=0.3")
  .to('.s-7-card-2', {xPercent: 10, yPercent: -22}, "-=0.5")
  .to('.s-7-card-3', {xPercent: 7, yPercent: -14, opacity: 0.9, zIndex: -1}, "-=0.5")

  .addLabel('card4')
  .fromTo('.s-7-card-5', {zIndex: 1, yPercent: 100}, {yPercent: -11, opacity: 1, xPercent: 8}, "+=0.5")
  .to('.s-7-card-1', {xPercent: 22, yPercent: -26}, "-=0.3")
  .to('.s-7-card-2', {xPercent: 18, yPercent: -23}, "-=0.5")
  .to('.s-7-card-3', {xPercent: 14, yPercent: -20}, "-=0.5")
  .to('.s-7-card-4', {xPercent: 10, yPercent: -17, opacity: 0.9, zIndex: -1}, "-=0.5")

  .addLabel('card5')
  .fromTo('.s-7-card-6', {zIndex: 1, yPercent: 100}, {yPercent: -13, opacity: 1, xPercent: 10}, "+=0.5")
  .to('.s-7-card-1', {xPercent: 29, yPercent: -40}, "-=0.3")
  .to('.s-7-card-2', {xPercent: 25, yPercent: -35}, "-=0.5")
  .to('.s-7-card-3', {xPercent: 21, yPercent: -30}, "-=0.5")
  .to('.s-7-card-4', {xPercent: 17, yPercent: -25}, "-=0.5")
  .to('.s-7-card-5', {xPercent: 13, yPercent: -21, opacity: 0.9, zIndex: -1}, "-=0.5")

  .addLabel('card6');


  //Section-8
  gsap.registerPlugin(ScrollTrigger, ModifiersPlugin);

  gsap.to(".s-8-card-up", {
    xPercent: 620,
    duration: 25,
    ease: "none",
    repeat: -1,
    modifiers: {
      xPercent: gsap.utils.wrap(620, 0) // xPercent modifier with gsap.utils.wrap creates the effect of an infinite loop by wrapping the xPercent value.
    }
  });

  gsap.to(".s-8-card-down", {
    xPercent: -620,
    duration: 25,
    ease: "none",
    repeat: -1,
    modifiers: {
      xPercent: gsap.utils.wrap(-620, 0)
    }
  });















// click image new window 

document.getElementById('clickableImage1').addEventListener('click', function() {
  window.open('https://demido.jp/mens/', '_blank');
});


document.getElementById('clickableImage2').addEventListener('click', function() {
  window.open('https://www.demi.nicca.co.jp/media/', '_blank');
});


document.getElementById('clickableImage3').addEventListener('click', function() {
  window.open('https://demido.jp/mens/', '_blank');
});

document.getElementById('salonCard').addEventListener('click', function() {
  window.open('https://www.demi.nicca.co.jp/salon/', '_blank');
});

document.getElementById('abtBtn').addEventListener('click', function() {
  window.open('https://demido.jp/about/', '_blank');
});


document.getElementById('videoPlaybtn').addEventListener('click', function() {
  window.open('https://www.youtube.com/watch?v=XDVlUHL6pB4&list=TLGGiaODbZLO-pUxMjA2MjAyNA/f', '_blank');
});

