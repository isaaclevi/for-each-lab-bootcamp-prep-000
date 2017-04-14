//for-each-lab-bootcamp-prep-000
var iterativeLog = (array) => {
    array.forEach(function(element , index , array) {
          console.log(`${index}: ${element}`);
    });
}


var iterate = (callback) => {
    var NewArray = [1,2,3,4,5,6,7,8,9];
    NewArray.forEach(callback);
    return NewArray;
}

var doToArray = (array , callback) => {
    array.forEach(callback);
}