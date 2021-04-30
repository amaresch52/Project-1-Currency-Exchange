
var urlYear = [
  "2017-04-01",
  "2018-04-01",
  "2019-04-01",
  "2020-04-01",
  "2021-04-01",
];
var rateEUR = [];
var rateGBP = [];
var rateAUD = [];
var rateCAD = [];
var rateCHF = [];
var chartDate = [];
var apiYear;
var myChart;
async function createChart() {
  await chart();

  async function chart() {
    await processApi();

    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: chartDate,
        datasets: [
          {
            label: "USD to EUR",
            data: rateEUR,
            backgroundColor: "rgba(255, 99, 132, 0.2)",

            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "USD to GBP",
            data: rateGBP,
            pointBackgroundColor: "white",
            borderColor: "rgba(360, 100, 100, 1)",
          },
          {
            label: "USD to AUD",
            data: rateAUD,
            pointBackgroundColor: "white",
            borderColor: "rgba(209, 0, 0, 1)",
          },

          {
            label: "USD to CAD",
            data: rateCAD,
            pointBackgroundColor: "white",
            borderColor: "rgba(153, 100, 100, 1)",
          },
          {
            label: "USD to CHF",
            data: rateCHF,
            pointBackgroundColor: "white",
            borderColor: "rgba(133, 100, 100, 1)",
          },
        ],

        options: {
          scales: {
            yAxes: {
              ticks: {
                stepSize: 0.01,
                suggestedMin: 0,
                beginAtZero: true,
              },
              title: {
                text: "USD",

                display: true,
              },
            },
          },
        },
      },
    });
  }

  function addData(chart, label, data) {
    chart.data.labels.push(chartDate);
    chart.data.datasets.forEach((dataset) => {
      dataset.data.push(yearOne.rate);
    });
    chart.update();
  }

  function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    chart.update();
  }
}

async function processApi() {
  urlYear.forEach(histData);

  function histData(urlYear) {
    const url =
      "https://api.currencyscoop.com/v1/historical?api_key=be59db5257683bb8fe032567b71cc01e&base=USD&date=" +
      urlYear;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dataGbp = { date: data.response.date, rate: data.response.rates.GBP };
        dataEur = { date: data.response.date, rate: data.response.rates.EUR };
        dataAud = { date: data.response.date, rate: data.response.rates.AUD };
        dataCad = { date: data.response.date, rate: data.response.rates.CAD };
        dataChf = { date: data.response.date, rate: data.response.rates.CHF };

        rateEUR.push(parseFloat(dataEur.rate));
        chartDate.push(dataEur.date);
        rateGBP.push(parseFloat(dataGbp.rate));
        rateAUD.push(parseFloat(dataAud.rate));
        rateCAD.push(parseFloat(dataCad.rate));
        rateCHF.push(parseFloat(dataChf.rate));

        console.log(dataGbp);
        console.log(dataEur);
        console.log(dataAud);
        console.log(dataCad);
        console.log(dataChf);
        console.log(data);
      });
  }
}

createChart();

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
