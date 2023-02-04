function createStack(){
    let items = [];
    return {
        pop(){
         return items.pop();
        },
        push(item){
            items.push(item);
        },
        getStack(){
            return items;
        },
    }
}
const stack=createStack();
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.getStack());
console.log(stack.items);