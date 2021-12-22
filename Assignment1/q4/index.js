fetch(`https://think.cs.vt.edu/corgis/datasets/json/airlines/airlines.json`)
.then(function (response) {
    return response.json();
})
.then(function (data) {
insightData(data);
})
.catch(function (err) {
console.log('error: ' + err);
});

function insightData(){

}