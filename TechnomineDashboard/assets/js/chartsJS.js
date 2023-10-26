// const ctx1 = document.getElementById("chart-1").getContext("2d");
// const myChart = new Chart(ctx1, {
//   type: "doughnut",
//   data: {
//     labels: ["Available Leave", "Total Leave", "Consumed Leave"],
//     datasets: [
//       {
//         label: "# of Votes",
//         data: [600, 800, 1000],
//         backgroundColor: [
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 99, 132, 1)",
//           "rgba(255, 206, 86, 1)",
//         ],
//       },
//     ],
//   },
//   options: {
//     responsive: true,
//   },
// });

const ctx1 = document.getElementById("chart-1").getContext("2d");
const myChart = new Chart(ctx1, {
  type: "doughnut",
  data: {
    labels: ["Available Leave", "Consumed Leave"],
    datasets: [
      {
        label: "# of Votes",
        data: [800, 1000],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1, // Add border width to make it more visible
      },
    ],
  },
  options: {
    responsive: true,
    cutout: "80%", // Adjust the cutout to make it more doughnut-like
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return (
              context.label +
              ": " +
              context.parsed.toLocaleString() +
              " leaves"
            );
          },
        },
      },
    },
    elements: {
      center: {
        text: '800', // Total Leave value
        color: '#36a2eb', // Color of the text
        fontStyle: 'Arial', // Font style of the text
        sidePadding: 20, // Padding from the doughnut edge to the text
      },
    },
  },
});

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
//   var ctx = tooltipCanvas.getContext('2d');
//   ctx.clearRect(0, 0, tooltipCanvas.width, tooltipCanvas.height)
  
// 	ctx.restore();
    
//   // Draw value
//   ctx.fillStyle = '#333333';
//   ctx.font = '24px sans-serif';
//   ctx.textBaseline = 'middle';

//   // Define text position
//   var textPosition = {
//     x: Math.round((tooltipCanvas.width - ctx.measureText(value).width) / 2),
//     y: tooltipCanvas.height / 2,
//   };

//   ctx.fillText(value, textPosition.x, textPosition.y);

//   // Draw label
//   ctx.fillStyle = '#AAAAAA';
//   ctx.font = '8px sans-serif';

//   // Define text position
//   var labelTextPosition = {
//     x: Math.round((tooltipCanvas.width - ctx.measureText(label).width) / 2),
//     y: tooltipCanvas.height / 2,
//   };

//   ctx.fillText(label, labelTextPosition.x, labelTextPosition.y - 20);
//   ctx.save();
// }

// Chart.elements.Arc.prototype.draw = function() {
//   var ctx = this._chart.ctx;
//   var vm = this._view;
//   var sA = vm.startAngle;
//   var eA = vm.endAngle;

//   ctx.beginPath();
//   ctx.arc(vm.x, vm.y, vm.outerRadius, sA + window.arcSpacing, eA - window.arcSpacing);
//   ctx.strokeStyle = vm.backgroundColor;
//   ctx.lineWidth = vm.borderWidth;
//   ctx.lineCap = 'round';
//   ctx.stroke();
//   ctx.closePath();
// };

// var config = {
//     type: 'doughnut',
//     data: {
//         labels: ['Pink', 'Grey', 'Blue'],
//         datasets: [
//           {
//               data: [400, 540, 290],
//               backgroundColor: [
//               	gradientRed,
//                 gradientGrey,
//                 gradientBlue,
//               ],
//           }
//         ]
//     },
//     options: {
//     		cutoutPercentage: 80,
//     		elements: {
//         	arc: {
//           	borderWidth: 12,
//           },
//         },
//         legend: {
//         	display: false,
//         },
//         animation: {
//         	onComplete: function(animation) {
//           	if (!window.segmentHovered) {
//               var value = this.config.data.datasets[0].data.reduce(function(a, b) { 
//                 return a + b;
//               }, 0);
//               var label = 'T O T A L';

//               textInCenter(value, label);
//             }
//           },
//         },
//         tooltips: {
//         	enabled: false,
//         	custom: function(tooltip) {
//           	if (tooltip.body) {
//               var line = tooltip.body[0].lines[0],
//               	parts = line.split(': ');
//               textInCenter(parts[1], parts[0].split('').join(' ').toUpperCase());
//               window.segmentHovered = true;
//             } else {
//             	window.segmentHovered = false;
//             }
//           },
//         },
//     },
// };

// window.chart = new Chart(canvas, config);



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
//   var ctx = tooltipCanvas.getContext('2d');
//   ctx.clearRect(0, 0, tooltipCanvas.width, tooltipCanvas.height);

//   ctx.restore();

//   // Draw value
//   ctx.fillStyle = '#333333';
//   ctx.font = '24px sans-serif';
//   ctx.textBaseline = 'middle';

//   // Define text position
//   var textPosition = {
//     x: Math.round((tooltipCanvas.width - ctx.measureText(value).width) / 2),
//     y: tooltipCanvas.height / 2,
//   };

//   ctx.fillText(value, textPosition.x, textPosition.y);

//   // Draw label
//   ctx.fillStyle = '#AAAAAA';
//   ctx.font = '8px sans-serif';

//   // Define text position
//   var labelTextPosition = {
//     x: Math.round((tooltipCanvas.width - ctx.measureText(label).width) / 2),
//     y: tooltipCanvas.height / 2,
//   };

//   ctx.fillText(label, labelTextPosition.x, labelTextPosition.y - 20);
//   ctx.save();
// }

// Chart.defaults.doughnut.elements.arc.borderWidth = 12;

// var config = {
//   type: 'doughnut',
//   data: {
//     labels: ['Pink', 'Grey', 'Blue'],
//     datasets: [
//       {
//         data: [400, 540, 290],
//         backgroundColor: [
//           gradientRed,
//           gradientGrey,
//           gradientBlue,
//         ],
//       },
//     ],
//   },
//   options: {
//     cutoutPercentage: 80,
//     legend: {
//       display: false,
//     },
//     animation: {
//       onComplete: function(animation) {
//         if (!window.segmentHovered) {
//           var value = this.config.data.datasets[0].data.reduce(function(a, b) {
//             return a + b;
//           }, 0);
//           var label = 'T O T A L';

//           textInCenter(value, label);
//         }
//       },
//     },
//     onAnimationProgress: function() {
//       // Custom animation logic goes here
//       // You can customize the arc elements during the animation progress
//     },
//     tooltips: {
//       enabled: false,
//       custom: function(tooltip) {
//         if (tooltip.body) {
//           var line = tooltip.body[0].lines[0],
//             parts = line.split(': ');
//           textInCenter(parts[1], parts[0].split('').join(' ').toUpperCase());
//           window.segmentHovered = true;
//         } else {
//           window.segmentHovered = false;
//         }
//       },
//     },
//   },
// };

// window.chart = new Chart(canvas, config);

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
//   var ctx = tooltipCanvas.getContext('2d');
//   ctx.clearRect(0, 0, tooltipCanvas.width, tooltipCanvas.height);

//   // Draw value
//   ctx.fillStyle = '#333333';
//   ctx.font = '24px sans-serif';
//   ctx.textBaseline = 'middle';

//   // Define text position
//   var textPosition = {
//     x: Math.round((tooltipCanvas.width - ctx.measureText(value).width) / 2),
//     y: tooltipCanvas.height / 2,
//   };

//   ctx.fillText(value, textPosition.x, textPosition.y);

//   // Draw label
//   ctx.fillStyle = '#AAAAAA';
//   ctx.font = '8px sans-serif';

//   // Define text position
//   var labelTextPosition = {
//     x: Math.round((tooltipCanvas.width - ctx.measureText(label).width) / 2),
//     y: tooltipCanvas.height / 2,
//   };

//   ctx.fillText(label, labelTextPosition.x, labelTextPosition.y - 20);
// }

// var config = {
//   type: 'doughnut',
//   data: {
//     labels: ['Pink', 'Grey', 'Blue'],
//     datasets: [
//       {
//         data: [400, 540, 290],
//         backgroundColor: [
//           gradientRed,
//           gradientGrey,
//           gradientBlue,
//         ],
//       },
//     ],
//   },
//   options: {
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         enabled: false,
//         custom: function (tooltip) {
//           if (tooltip.body) {
//             var line = tooltip.body[0].lines[0],
//               parts = line.split(': ');
//             textInCenter(parts[1], parts[0].split('').join(' ').toUpperCase());
//             window.segmentHovered = true;
//           } else {
//             window.segmentHovered = false;
//           }
//         },
//       },
//     },
//     cutout: '80%',
//     onHover: function (event, chartElement) {
//       canvas.style.cursor = chartElement[0] ? 'pointer' : 'default';
//       if (chartElement[0]) {
//         window.segmentHovered = true;
//         if (chartElement[0]._model) {
//           chartElement[0]._model.borderWidth = 20; // Adjust border width on hover
//           window.chart.update(); // Update the chart to reflect the changes
//         }
//       } else {
//         if (!window.segmentHovered) {
//           window.chart.update(); // Reset the chart if not hovering any segment
//         }
//       }
//     },
//     onClick: function (event, chartElement) {
//       if (chartElement[0]) {
//         // Handle click on the chart segment as needed
//         console.log('Segment clicked:', chartElement[0]._index);
//       }
//     },
//     animation: {
//       onComplete: function (animation) {
//         var chartInstance = this.chart || animation.chart;
//         if (!window.segmentHovered) {
//           var value = chartInstance.config.data.datasets[0].data.reduce(function (a, b) {
//             return a + b;
//           }, 0);
//           var label = 'T O T A L';

//           textInCenter(value, label);
//         }
//       },
//     },
//   },
// };

// window.chart = new Chart(canvas.getContext('2d'), config);

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
//   var ctx = tooltipCanvas.getContext('2d');
//   ctx.clearRect(0, 0, tooltipCanvas.width, tooltipCanvas.height)
  
// 	ctx.restore();
    
//   // Draw value
//   ctx.fillStyle = '#333333';
//   ctx.font = '24px sans-serif';
//   ctx.textBaseline = 'middle';

//   // Define text position
//   var textPosition = {
//     x: Math.round((tooltipCanvas.width - ctx.measureText(value).width) / 2),
//     y: tooltipCanvas.height / 2,
//   };

//   ctx.fillText(value, textPosition.x, textPosition.y);

//   // Draw label
//   ctx.fillStyle = '#AAAAAA';
//   ctx.font = '8px sans-serif';

//   // Define text position
//   var labelTextPosition = {
//     x: Math.round((tooltipCanvas.width - ctx.measureText(label).width) / 2),
//     y: tooltipCanvas.height / 2,
//   };

//   ctx.fillText(label, labelTextPosition.x, labelTextPosition.y - 20);
//   ctx.save();
// }

// Chart.elements.Arc.prototype.draw = function() {
//   var ctx = this._chart.ctx;
//   var vm = this._view;
//   var sA = vm.startAngle;
//   var eA = vm.endAngle;

//   ctx.beginPath();
//   ctx.arc(vm.x, vm.y, vm.outerRadius, sA + window.arcSpacing, eA - window.arcSpacing);
//   ctx.strokeStyle = vm.backgroundColor;
//   ctx.lineWidth = vm.borderWidth;
//   ctx.lineCap = 'round';
//   ctx.stroke();
//   ctx.closePath();
// };

// var config = {
//     type: 'doughnut',
//     data: {
//         labels: ['Pink', 'Grey', 'Blue'],
//         datasets: [
//           {
//               data: [400, 540, 290],
//               backgroundColor: [
//               	gradientRed,
//                 gradientGrey,
//                 gradientBlue,
//               ],
//           }
//         ]
//     },
//     options: {
//     		cutoutPercentage: 80,
//     		elements: {
//         	arc: {
//           	borderWidth: 12,
//           },
//         },
//         legend: {
//         	display: false,
//         },
//         animation: {
//         	onComplete: function(animation) {
//           	if (!window.segmentHovered) {
//               var value = this.config.data.datasets[0].data.reduce(function(a, b) { 
//                 return a + b;
//               }, 0);
//               var label = 'T O T A L';

//               textInCenter(value, label);
//             }
//           },
//         },
//         tooltips: {
//         	enabled: false,
//         	custom: function(tooltip) {
//           	if (tooltip.body) {
//               var line = tooltip.body[0].lines[0],
//               	parts = line.split(': ');
//               textInCenter(parts[1], parts[0].split('').join(' ').toUpperCase());
//               window.segmentHovered = true;
//             } else {
//             	window.segmentHovered = false;
//             }
//           },
//         },
//     },
// };

// window.chart = new Chart(canvas, config);