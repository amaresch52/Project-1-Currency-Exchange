
function chart(){
  var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'USD to EUR',
            data: [.901699, .886758, .886758, .847541, .892882, .876819],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});}

const url = //"https://api.currencyscoop.com/v1/timeseries?api_key=be59db5257683bb8fe032567b71cc01e&base=EUR&start_date=2021-01-01&end_date=2021-04-01"

"http://api.exchangeratesapi.io/v1/2021-04-01?access_key=d3e53a748e74d26a4953371c48145316"

function histData(){
    fetch(url)
        .then(response => response.json())
        .then(data => {
   



console.log(data)
},








//fetch('https://gnews.io/api/v4/top-headlines?&token=6dbe293da8ce6cc4220f504c0fdba18f')
  //  .then(function (response) {
      //  return response.json();
   // })
    //.then(function (data) {
      //  console.log(data);
    //});
)}
chart()
histData()