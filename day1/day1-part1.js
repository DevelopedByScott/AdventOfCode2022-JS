const fs = require('fs')

const input = fs.readFileSync('day1\\input.txt', 'utf8')

var arr = input.split('\r\n\r\n');

var objects = arr.map(function (item) {
    return item.split('\r\n');
});

var elf = function() {
    this.name = i;
    this.total = total;
    this.calories = objects[i]
}

var elfList = [];
//Step through each elf
for (var i = 0; i < objects.length; i++) {
    var total = 0;
    //Step through each calorie item in array
    for (var j = 0; j < objects[i].length; j++) {
        total += parseInt(objects[i][j]);
    }
    //Create elf object
    elfList.push(new elf()); 
}
//Sort the list by total
elfList.sort((x,y) => y.total-x.total);
//Get the top 3 elves and add their total together
totalTop3 = elfList[0].total + elfList[1].total + elfList[2].total;
//Print the total
console.log("Total Calories - Top 3 Sum: " + totalTop3);
