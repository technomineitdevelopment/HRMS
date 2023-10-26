const availableLeave = 10;
const consumedLeave = 5;
const totalLeave = 15;

const chartContainer = document.getElementById('chartCanvas');

const data = {
  datasets: [{
    data: [availableLeave, consumedLeave],
    backgroundColor: ['#4CAF50', '#FF5733'],
    borderWidth: 0,
  }],
};

const options = {
  plugins: {
    datalabels: {
      formatter: (value, context) => {
        return context.chart.data.labels[context.dataIndex] || '';
      },
      color: '#fff', // Label text color
    },
  },
};

const myChart = new Chart(chartContainer, {
  type: 'doughnut',
  data: data,
  options: options,
});
