var id = 123456;
function getGlobalValue() {
    console.log(id); // Logs the global variable 'id'
    var f_name = "Rahul"; // Use lowercase 'string' for the type
}
getGlobalValue();
function getvalue() {
    console.log("Name function");
    var l_name = "John"; // Use lowercase 'string' for the type
    console.log(id); // Logs the global variable 'id'
}
getvalue();
console.log("More function------");
var storevalue = function () {
    return "Anonymous function without return type\n" + (5 + 4);
};
console.log(storevalue());
console.log("Named function with number as return type");
var storeresult = function sum() { return (5 + 3); };
console.log(storeresult);
console.log("Anonymous function with parameter inputs and number as return type without return keyword");
var storeData = function (x, y) { return x + y; };
console.log(storeData(12, 12));
console.log("Anonymous function with optional parameter");
var getDate = function (f_name, l_name) {
    if (f_name === void 0) { f_name = "James"; }
    return f_name + ' ' + l_name;
};
console.log(getDate("Jojin"));
