
var header = $("#news-header").text("NEWS");
var row_0 = $("<div>").text("NEWS");
var row_1 = $("<div>").text("NEWS");
var row_2 = $("<div>").text("NEWS");
var row_3 = $("<div>").text("NEWS");
var row_4 = $("<div>").text("NEWS");
var row_5 = $("<div>").text("NEWS");

var newsContainerEl = $("#news");

newsContainerEl.append(row_0);
newsContainerEl.append(row_1);
newsContainerEl.append(row_2);
newsContainerEl.append(row_3);
newsContainerEl.append(row_4);
newsContainerEl.append(row_5);

fetch("https://gnews.io/api/v4/top-headlines?token=541b6746307eec710d2e0a1a4116d575")
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        console.log(data.articles[0].url);
        row_0.text(data.articles[0].title)
        row_1.text(data.articles[1].title)
        row_2.text(data.articles[2].title)
        row_3.text(data.articles[3].title)
        row_4.text(data.articles[4].title)
        row_5.text(data.articles[5].title)
    })

