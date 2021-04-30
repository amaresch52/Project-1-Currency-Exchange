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

