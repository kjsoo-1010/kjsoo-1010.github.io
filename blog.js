// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ["Python", "JAVA", "C++", "HTML, CSS", "JS"],
        datasets: [{
            label: 'SKILL',
            data: [70, 50, 40, 70, 50],
            backgroundColor: [
                'rgba(123, 206, 195,0.2)'
            ],
            borderColor: [
                'rgba(123, 206, 195,1)'
            ],
        }]
    },
    options: {
      scale: {
        ticks:{
          beginAtZero: true,
          min:0,
          max: 100
        }
      },
      responsive : false,
    }
  })


var myBarChart = new Chart(ctx, {


type: 'radar',

data: data,

options: options

});


function setMenu(_menu) {
  var filterButtons = document.querySelectorAll("nav li");
  filterButtons.forEach(function (filterButton) {
    filterButton.classList.remove("on");
  });
  document.querySelector("nav li." + _menu).classList.add("on");
  document.querySelector("main").className = _menu;
}