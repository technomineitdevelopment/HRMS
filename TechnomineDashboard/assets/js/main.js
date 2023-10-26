let navigation = document.querySelector(".navigation");
let list = document.querySelectorAll(".navigation li");

function activeLink(event) {
    if (event.target.tagName === 'LI') {
        list.forEach((item) => {
            item.classList.remove("hovered");
        });
        event.target.classList.add("hovered");
    }
}

navigation.addEventListener("mouseover", activeLink);

// Menu Toggle
let toggle = document.querySelector(".toggle");
let main = document.querySelector(".main");

toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};

// Dropdown Toggle
let user = document.querySelector(".user");
let dropdownContent = document.querySelector(".dropdown-content");

user.onclick = function () {
    dropdownContent.classList.toggle("active");
};

// var canvas = document.getElementById("canvas");
// var tooltipCanvas = document.getElementById("tooltip-canvas");

// var gradientBlue = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
// gradientBlue.addColorStop(0, '#5555FF');
// gradientBlue.addColorStop(1, '#9787FF');

// var gradientRed = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
// gradientRed.addColorStop(0, '#FF55B8');
// gradientRed.addColorStop(1, '#FF8787');

// var gradientGrey = canvas.getContext('2d').createLinearGradient(0, 0, 0, 150);
// gradientGrey.addColorStop(0, '#888888');
// gradientGrey.addColorStop(1, '#AAAAAA');

// window.arcSpacing = 0.15;
// window.segmentHovered = false;

// function textInCenter(value, label) {
//     var ctx = tooltipCanvas.getContext('2d');
//     ctx.clearRect(0, 0, tooltipCanvas.width, tooltipCanvas.height);

//     // Draw value
//     ctx.fillStyle = '#333333';
//     ctx.font = '24px sans-serif';
//     ctx.textBaseline = 'middle';

//     // Define text position
//     var textMetrics = ctx.measureText(value);
//     var textPosition = {
//         x: (tooltipCanvas.width - textMetrics.width) / 2,
//         y: tooltipCanvas.height / 2,
//     };

//     ctx.fillText(value, textPosition.x, textPosition.y);

//     // Draw label
//     ctx.fillStyle = '#AAAAAA';
//     ctx.font = '8px sans-serif';

//     // Define text position
//     var labelTextPosition = {
//         x: (tooltipCanvas.width - ctx.measureText(label).width) / 2,
//         y: textPosition.y + 20,
//     };

//     ctx.fillText(label, labelTextPosition.x, labelTextPosition.y);
// }

// Chart.elements.Arc.prototype.draw = function() {
//     var ctx = this._chart.ctx;
//     var vm = this._view;
//     var sA = vm.startAngle;
//     var eA = vm.endAngle;

//     ctx.beginPath();
//     ctx.arc(vm.x, vm.y, vm.outerRadius, sA + window.arcSpacing, eA - window.arcSpacing);
//     ctx.strokeStyle = vm.backgroundColor;
//     ctx.lineWidth = vm.borderWidth;
//     ctx.lineCap = 'round';
//     ctx.stroke();
//     ctx.closePath();
// };

// var config = {
//     type: 'doughnut',
//     data: {
//         labels: ['Pink', 'Grey', 'Blue'],
//         datasets: [
//             {
//                 data: [400, 540, 290],
//                 backgroundColor: [
//                     gradientRed,
//                     gradientGrey,
//                     gradientBlue,
//                 ],
//             },
//         ],
//     },
//     options: {
//         cutoutPercentage: 80,
//         elements: {
//             arc: {
//                 borderWidth: 12,
//             },
//         },
//         legend: {
//             display: false,
//         },
//         animation: {
//             onComplete: function(animation) {
//                 if (!window.segmentHovered) {
//                     var value = this.config.data.datasets[0].data.reduce(function(a, b) {
//                         return a + b;
//                     }, 0);
//                     var label = 'T O T A L';

//                     textInCenter(value, label);
//                 }
//             },
//         },
//         tooltips: {
//             enabled: false,
//             custom: function(tooltip) {
//                 if (tooltip.body) {
//                     var line = tooltip.body[0].lines[0],
//                         parts = line.split(': ');
//                     textInCenter(parts[1], parts[0].split('').join(' ').toUpperCase());
//                     window.segmentHovered = true;
//                 } else {
//                     window.segmentHovered = false;
//                 }
//             },
//         },
//     },
// };

// window.chart = new Chart(canvas, config);
