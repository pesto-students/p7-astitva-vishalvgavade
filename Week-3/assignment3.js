function createIncrement(){
    let count=0;
    function increment(){
        count++;
    }
    let message=`Count is${count}`;
    function log(){
        console.log(message);
    }
    return[increment,log];
}
const[increment,log] = createIncrement();
increment();
increment();
increment();
log()

///explanation
/*
 The output is "Count is 0"
Because In the function createIncrement the count variable has the blocked scope.
the count is accessible in increment function but increment function is not 
concoling anything.
Though the count is increasing in increment function but the incremented count iss
not accessible outside the function.
so the count is still 0 for log function and it returns the "count is 0" 

*/

