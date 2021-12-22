fetch(`http://api.nobelprize.org/v1/prize.json`)
.then(function (response) {
    return response.json();
})
.then(function (data) {
insightData(data);
})
.catch(function (err) {
console.log('error: ' + err);
});

function insightData(data){
    b = data.prizes
    year = b.filter(item => item.year<=2019 && item.year>=2000)
    chemistry = year.filter(item => item.category='chemistry')
    win = chemistry.map(function(item) {
        return (item.laureates)
    });
    console.log(win)
    arr = []
    for(let i =0;i<win.length;i++){
        temp = win[i]
        winner = temp.map(item=>item.firstname+" "+item.surname)
        arr.push(winner)
    }
    arr = arr.reduce((a, b) => a.concat(b), []);
    console.log(arr)

    let div = document.createElement("div");
    for(var i = 0; i < arr.length; i++) {
    let item = document.createElement("div")
    item.textContent = arr[i];
    div.append(item); // Append to in-memory node, not the DOM
    }
    document.body.appendChild(div); // Now inject the completed node just once to the DOM
}
