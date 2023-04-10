function validParenthesis(par){
 let stack=[];
 var check=stack[stack.length-1];
 for(let i=0;i<par.length;i++){
    if(par[i]=="(" || par[i]=="["||par[i]=='{'){
        stack.push(par[i]);
    }
   else if(par[i==')'&& check ==='('&& stack.length !== 0]){
    stack.pop();
   }
   else if(par[i==']'&& check ==='['&& stack.length !== 0]){
    stack.pop();
   }
   else if(par[i=='}'&& check ==='{'&& stack.length !== 0]){
    stack.pop();
   }
   else return false;
 }
  if(stack.length){
    return false;
  }
  else return true;
}
let ans= validParenthesis('(]');
console.log(ans);