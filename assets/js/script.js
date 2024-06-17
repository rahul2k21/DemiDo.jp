
// preloder of the first page animation

document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll(".preload-image");
  var loader = document.getElementById("preloader");

  var currentImageIndex = 0;

  function showNextImage() {
    if (currentImageIndex < images.length) {
      if (currentImageIndex > 0) {
        images[currentImageIndex - 1].classList.remove("show"); // Hide the previous image
      }
      images[currentImageIndex].classList.add("show");
      if (currentImageIndex === 1) {
        images[currentImageIndex].classList.add("secoundimg"); // Add animation to the second image
      }
      currentImageIndex++;
      setTimeout(showNextImage, 2000); // Adjust the time delay between each image (in milliseconds)
    } else {
      hideLoader();
    }
  }



  function hideLoader() {
    loader.style.opacity = 0;
    setTimeout(function() {
      loader.style.display = "none";
    }, 5000); // Adjust the time delay before hiding the loader (in milliseconds)
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



// banner section  imge 

document.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var threshold = 2900; 
  var imageContainer = document.querySelector('.text-card2');

  if (scrollPosition > threshold) {
    imageContainer.classList.add('scrolleddir1');
    imageContainer.classList.remove('scrolledup1');
  } else {
    imageContainer.classList.remove('scrolleddir1');
    imageContainer.classList.add('scrolledup1');
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
    
  

  // card animation 

  // window.addEventListener('scroll', function() {
  //   var targetElement = document.querySelector('.target-element1');
  //   var scrollPosition = window.scrollY;

  //   console.log("hello",scrollPosition)

  //   var threshold = 7790; 

  //   if (scrollPosition > threshold) {
  //     targetElement.classList.add('scrolled1');
  //   } else {
  //     targetElement.classList.remove('scrolled1');
  //   }
  // });


  let lastScrollPosition = 0;

window.addEventListener('scroll', function() {
  var targetElement = document.querySelector('.target-element1');
  var scrollPosition = window.scrollY;

  console.log("Scroll Position:", scrollPosition);

  var threshold = 7700; 

  if (scrollPosition > threshold && scrollPosition > lastScrollPosition) {
    targetElement.classList.add('scrolled1');
    targetElement.classList.remove('scrolled1-reverse');
  } else if (scrollPosition < threshold && scrollPosition < lastScrollPosition) {
    targetElement.classList.add('scrolled1-reverse');
    targetElement.classList.remove('scrolled1');
  }

  lastScrollPosition = scrollPosition;
});





  // window.addEventListener('scroll', function() {
  //   var targetElement = document.querySelector('.target-element2');
  //   var scrollPosition = window.scrollY;

  //   console.log("hello",scrollPosition)

  //   var threshold = 7790;  

  //   if (scrollPosition > threshold) {
  //     targetElement.classList.add('scrolled2');
  //   } else {
  //     targetElement.classList.remove('scrolled2');
  //   }
  // });


  let lastScrollPosition2 = 0;

window.addEventListener('scroll', function() {
  var targetElement = document.querySelector('.target-element2');
  var scrollPosition = window.scrollY;

  console.log("Scroll Position:", scrollPosition);

  var threshold = 7700;

  if (scrollPosition > threshold && scrollPosition > lastScrollPosition2) {
    targetElement.classList.add('scrolled2');
    targetElement.classList.remove('scrolled2-reverse');
  } else if (scrollPosition < threshold && scrollPosition < lastScrollPosition2) {
    targetElement.classList.add('scrolled2-reverse');
    targetElement.classList.remove('scrolled2');
  }

  lastScrollPosition2 = scrollPosition;
});

  



  // window.addEventListener('scroll', function() {
  //   var targetElement = document.querySelector('.target-element3');
  //   var scrollPosition = window.scrollY;

  //   console.log("hello",scrollPosition)
  //   var threshold = 8350;
  //   if (scrollPosition > threshold) {
  //     targetElement.classList.add('scrolled3');
  //   } else {
  //     targetElement.classList.remove('scrolled3');
  //   }
  // });




  let lastScrollPosition3 = 0;

window.addEventListener('scroll', function() {
  var targetElement = document.querySelector('.target-element3');
  var scrollPosition = window.scrollY;

  console.log("Scroll Position:", scrollPosition);

  var threshold = 8250;

  if (scrollPosition > threshold && scrollPosition > lastScrollPosition3) {
    targetElement.classList.add('scrolled3');
    targetElement.classList.remove('scrolled3-reverse');
  } else if (scrollPosition < threshold && scrollPosition < lastScrollPosition3) {
    targetElement.classList.add('scrolled3-reverse');
    targetElement.classList.remove('scrolled3');
  }

  lastScrollPosition3 = scrollPosition;
});




  // window.addEventListener('scroll', function() {
  //   var targetElement = document.querySelector('.target-element4');
  //   var scrollPosition = window.scrollY;

  //   console.log("hello",scrollPosition)
  //   var threshold = 8350; 

  //   if (scrollPosition > threshold) {
  //     targetElement.classList.add('scrolled4');
  //   } else {
  //     targetElement.classList.remove('scrolled4');
  //   }
  // });


  let lastScrollPosition4 = 0;

  window.addEventListener('scroll', function() {
    var targetElement = document.querySelector('.target-element4');
    var scrollPosition = window.scrollY;
  
    console.log("Scroll Position:", scrollPosition);
  
    var threshold = 8250;
  
    if (scrollPosition > threshold && scrollPosition > lastScrollPosition4) {
      targetElement.classList.add('scrolled4');
      targetElement.classList.remove('scrolled4-reverse');
    } else if (scrollPosition < threshold && scrollPosition < lastScrollPosition4) {
      targetElement.classList.add('scrolled4-reverse');
      targetElement.classList.remove('scrolled4');
    }
  
    lastScrollPosition4 = scrollPosition;
  });
  

  // Smart Scale Selection...


  window.addEventListener('scroll', function() {
    var targetElement = document.querySelector('.image-1');
    var scrollPosition = window.scrollY;

    console.log("hello",scrollPosition)
    var thresholdA =6690;
    if (scrollPosition > thresholdA) {
      targetElement.classList.add('scrolled1A');
    } else {
      targetElement.classList.remove('scrolled1A');
    }
  });

  window.addEventListener('scroll', function() {
    var targetElement = document.querySelector('.image-3');
    var scrollPosition = window.scrollY;

    console.log("hello",scrollPosition)

    var thresholdB = 6690;

    if (scrollPosition > thresholdB) {
      targetElement.classList.add('scrolled3A');
    } else {
      targetElement.classList.remove('scrolled3A');
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






gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".cards",
        pin: true,
        pinSpacing: true,
        start: "left-=5px left",
        end: "+=2000",
        scrub: 1
    }
});

timeline.addLabel('card1');
timeline.to('.card-1', {
    yPercent: 0,
    opacity: 1,
  
  
});

timeline.from('.card-2', {
    yPercent: 75,
    opacity: 0
});
timeline.addLabel("card2");

timeline.to(".card-1", {
    scale: 0.95,
    xPercent: 17,
    yPercent: -0.5,
    opacity: 0.5,
    

}, "-=0.3");

timeline.to('.card-2', {
    yPercent: 0,
    opacity: 1
});

timeline.from('.card-3', {
    yPercent: 75,
    opacity: 0
});


timeline.addLabel('card3');

timeline.to(".card-2", {
    scale: 0.98,
    xPercent: 15,
    yPercent: -0.4,
    opacity: 0.6,


}, "-=0.3");

timeline.to(".card-3", {
    yPercent: 0,
    opacity: 1,
  
});


timeline.to('.card-3', {});

timeline.from('.card-4', {
    yPercent: 75,
    opacity: 0,
  
});
timeline.addLabel('card4');

timeline.to(".card-3", {
    scale: 0.98,
    xPercent:13,
    yPercent: -0.4,
    opacity: 0.6,
  
}, "-=0.3");

timeline.to(".card-4", {
    yPercent: 0,
    opacity: 1,

});



timeline.from('.card-5', {
  yPercent: 75,
  opacity: 0,
 
});
timeline.addLabel('card5');

timeline.to(".card-4", {
  scale: 0.98,
  yPercent: -0.4,
  xPercent: 11,
  opacity: 0.6,
 

}, "-=0.3");

timeline.to(".card-5", {
  yPercent: 0,
  opacity: 1,
  
});

timeline.from('.card-6', {
  yPercent: 75,
  opacity: 0,
});
timeline.addLabel('card6');

timeline.to(".card-5", {
  scale: 0.98,
  yPercent: -0.4,
  xPercent: 9,
  opacity: 0.6,
 

}, "-=0.3");

timeline.to(".card-6", {
  yPercent: 0,
  opacity: 1,
  
});

timeline.from('.card-7', {
  yPercent: 75,
  opacity: 0,
 
});
timeline.addLabel('card7');

timeline.to(".card-6", {
  scale: 0.98,
  yPercent: -0.4,
  xPercent: 7,
  opacity: 0.6,
 

}, "-=0.3");

timeline.to(".card-7", {
  yPercent: 0,
  opacity: 1,
 
});

timeline.from('.card-8', {
  yPercent: 75,
  opacity: 0,
 
});
timeline.addLabel('card8');

timeline.to(".card-7", {
  scale: 0.98,
  yPercent: -0.4,
  
  // xPercent: -3,

 
  // opacity: 0.6
}, "-=0.3");

timeline.to(".card-8", {
  yPercent: 0,
  opacity: 1
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

