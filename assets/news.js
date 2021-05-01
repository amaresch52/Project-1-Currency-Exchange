
var btn = document.querySelector('#btn');
var selection = document.querySelector('#currencySelector')
    btn.onclick = (event) => {
            event.preventDefault();
            // show the selected index
            var countrySelected = selection.selectedIndex;
            console.log(selection.selectedIndex);


var row_0 = $("<div>").addClass("news");
var row_1 = $("<div>").addClass("news");
var row_2 = $("<div>").addClass("news");
var row_3 = $("<div>").addClass("news");
var row_4 = $("<div>").addClass("news");
var row_5 = $("<div>").addClass("news");

var url_0;
var url_1;
var url_2;
var url_3;
var url_4;
var url_5;

var link_0 = $("<a>").text("No Relevant Articles Could be Found");
var link_1 = $("<a>").text("No Relevant Articles Could be Found");
var link_2 = $("<a>").text("No Relevant Articles Could be Found");
var link_3 = $("<a>").text("No Relevant Articles Could be Found");
var link_4 = $("<a>").text("No Relevant Articles Could be Found");
var link_5 = $("<a>").text("No Relevant Articles Could be Found");

var newsContainerEl = $("#news");

newsContainerEl.append(row_0);
newsContainerEl.append(row_1);
newsContainerEl.append(row_2);
newsContainerEl.append(row_3);
newsContainerEl.append(row_4);
newsContainerEl.append(row_5);

row_0.append(link_0);
row_1.append(link_1);
row_2.append(link_2);
row_3.append(link_3);
row_4.append(link_4);
row_5.append(link_5);


// var API_key = "6dbe293da8ce6cc4220f504c0fdba18f";
var lang = "en";
var countryList = [
                "au", "br", "ca", "ch", "cn", "de", "eg", "es", "fr", "gb", 
                "gr", "hk", "ie", "il", "in", "it", "jp", "nl", "no", "pe",
                "ph", "pk", "pt", "ro", "ru", "se", "sq", "tw", "ua", "us"
            ];
//var countrySelected = 29
var country = countryList[countrySelected]


// https://gnews.io/docs/v4#countries
var API_key = "541b6746307eec710d2e0a1a4116d575"

fetch("https://gnews.io/api/v4/search?q=currency&lang="+ lang +"&country=" + country + "&token=" + API_key)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        console.log(data.articles[0].url);

        url_0 = data.articles[0].url;
        url_1 = data.articles[1].url;
        url_2 = data.articles[2].url;
        url_3 = data.articles[3].url;
        url_4 = data.articles[4].url;
        url_5 = data.articles[5].url;

        link_0.attr("href", url_0).text(data.articles[0].title);
        link_1.attr("href", url_1).text(data.articles[1].title);
        link_2.attr("href", url_2).text(data.articles[2].title);
        link_3.attr("href", url_3).text(data.articles[3].title);
        link_4.attr("href", url_4).text(data.articles[4].title);
        link_5.attr("href", url_5).text(data.articles[5].title);
    })



    console.log(link_0)

};