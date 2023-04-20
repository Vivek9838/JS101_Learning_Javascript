let a=[1,-2,-3,-4,5,0]
//replace the all negative numbers;
//[1,0,0,0,5,0]

// a[1]=0;
// a[2]=0;
// a[3]=0;
// console.log(a);

for(let i=0;i<a.length;i++){
  if(a[i]<0){
    a[i]=0;
  }
}
console.log(a);