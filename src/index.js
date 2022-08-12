module.exports = function check(str, bracketsConfig) {
  let arr = [];
  for (i = 0; i < str.length; i++){
    for (let n=0;n < bracketsConfig.length; n++){
      let j = bracketsConfig[n];
      if (str[i] === j[0]) {
        arr.push(str[i]);         
        if (str[i] !== j[1]) break;
        else if (arr[arr.length-1] === arr[arr.length-2]) { arr.splice(-2); break;}
            else  break;        
        }
      if (str[i] === j[1]){        
        if (arr[arr.length-1] !== j[0]) {return false;} 
        else arr.pop();  break;
      }
      else if (n !== bracketsConfig.length-1) {continue;}  else {return false;};      
    }
  }  
  return arr.length === 0 ? true : false;
}
