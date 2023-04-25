let d=0;
for(let months=1;months<=12;months++){

  if(months==2){
    d=28;
  }
  else if(months==4 || months==6 || months==9 || months==11){
    d=30;
}
else{
  d=31;
}
  for(let day=1;day<=31;day++){
    console.log(day+ "_"+months);
  }
}