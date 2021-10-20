//Set up Http Request
var xhr = new XMLHttpRequest();

//create and send Get request
//GET,POST,PUT,DELETE,
// Second =>ENdpoint of the url:server url
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// set up our listener to process the request
xhr.onload = function () {
  //process the request and server will return the data
  if (xhr.status >= 200 && xhr.status < 300) {
    var t = JSON.parse(this.response);
    // console.log(t);
    // document.write(t);
    for(i=0;i<t.length;i++){
    console.log(t[i].name);
    console.log(t[i].population);
    console.log(t[i].region);
    console.log(t[i].currency);
  }
  } else {
    //it should not give you data
    console.log("Data is not available");
    // document.write(t);
  }
};

xhr.send();
