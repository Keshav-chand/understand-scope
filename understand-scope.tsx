var id: number = 123456;

function getGlobalValue(): void {
    console.log(id); // Logs the global variable 'id'
    let f_name: string = "Rahul"; // Use lowercase 'string' for the type
}

getGlobalValue();

function getvalue:void {
    console.log("Name function");
    let l_name: string = "John"; // Use lowercase 'string' for the type
    console.log(id); // Logs the global variable 'id'
}

getvalue();
console.log("More function------")
 var storevalue=function(){
    return"Anonymous function without return type\n"+(5+4)
 }
 console.log(storevalue())

 console.log("Named function with number as return type")
 var storeresult=function sum():number{return (5+3)}
 console.log(storeresult)

 console.log("Anonymous function with parameter inputs and number as return type without return keyword")
 var storeData = (x : number, y : number) =>x+y
 console.log(storeData(12,12))

 console.log("Anonymous function with optional parameter")
 var getDate = (f_name : string = "James", l_name? : string) =>{ return f_name+ ' '+l_name}
 console.log(getDate("Jojin"))