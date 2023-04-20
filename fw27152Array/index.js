// let student=["vivek","rahul","ankit","nitesh","coco"]

// let student1=["rahul","ankit","nitesh"]
//one way 
// for(let a=0;a<=4;a++){
//   console.log(student[a]);
// }

//second way
// for(let a=0;a<student.length;a++){
//   console.log(student[a]);
// }

 //pop 
// student.pop("coco");

//Spread operator(...)


// let student2=[...student,...student1];

// console.log(student2);

// let a=[1,2,3,4];
// for(let i=0;i<a.length;i++){
//   if(a[i]==3){
//     console.log("yes")
//   }else{
//   // console.log(a[i])
//   console.log("No")
//   }
// }
// let arr=[1,2,3,4];
    
//         console.log(...arr);
// let arr=[1,2,3,4,5]
 // for(let i=0;i<arr.length;i++){
 //        if(arr[i]<=arr){
 //             console.log(arr[i]);
 //        }
    
        
 //    }

//reverse the arry;
//in this format [5,4,3,2,1];
// let arr=[1,2,3,4,5]
// let b=[];
// for(let i=arr.length-1;i>=0;i--){
//   b.push(arr[i]);
  
// }
// console.log(b);

// replace value 1,2,3=0 & -1,-2,-3=0;
// let a=[1,2,3,-1,-2,-3];
// for(let i=0;i<a.length;i++){
//   if(a[i]>0){
//     a[i]=1;
//   }
//   else{
//     a[i]=0;
//   }
// }
// console.log(a);

// How to find how many even and odd;
// let a=[1,2,3,4,5,6];

// let even_count=0;
// let odd_count=0;
// for(let i=0;i<a.length;i++){
//   if(a[i]%2==0){
//     even_count++;
   
//   }
//   else{
//     odd_count++;
//   }
// }
// console.log("even",even_count,"odd",odd_count);

//minimum value = -70;
//maximum value = 3;
let array=[1,2,-70,3,-30];
let min=+Infinity;
let max=-Infinity;

for(let i=0;i<=array.length;i++){
  if(array[i]<min){
    min=array[i];
  }
  if(array[i]>max){
    max=array[i];
  }
}
console.log("min:-",min,"max:-",max);
