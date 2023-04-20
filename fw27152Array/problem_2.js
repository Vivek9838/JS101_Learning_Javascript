let lowerCase=["a","b","c"];
let uperCase=["A","B","C"];
let char="b";
for(let i=0;i<lowerCase.length;i++){
  if(lowerCase[i]==char){
    char=uperCase[i];
  }
 
}
 console.log(char);