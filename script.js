 var count =0;
 var id1;
 let interVal=[];

 function startAnimation(){
     const currentCount=count++;

    let bar= document.createElement('div');
    bar.className='myBar';
    bar.id=currentCount;
    var outer=document.querySelector('.progress');

    outer.appendChild(bar);
     var width = 0;
     var time = 5000;
     id1= setInterval(setTimeFunction);
     interVal.push(id1);
     function setTimeFunction() {
     if (width >= time) {
      clearInterval(id1);
     } else {
      width++; 
      bar.style.width = (100*width)/time + '%'; 
      bar.innerHTML = Math.round((100*width)/time)  + '%';
    }
  }
};
startAnimation();

let btn=document.getElementById("btn");
btn.addEventListener('click', startAnimation)
  
let start=document.getElementById('start');
  start.addEventListener('click',function(){
    let myInput=document.getElementById('myInput').value;
    const toStartInterval=interVal.slice(parseInt(myInput));
    toStartInterval.forEach(ele=>{
      clearInterval(ele);
   })
  })

  let stopBtn=document.getElementById('stop');
  stopBtn.addEventListener('click',function(){
    if(count===1){
      return;
    }
    interVal.forEach(element => {
       clearInterval(element);
    });
  })

  let restart=document.getElementById('restart');
     restart.addEventListener('click',function(){
       window.location.reload();
     })

  
     // Second bar

    var id2;
     function progressBar2(){       
       let inner=document.createElement('div');
       inner.className='myBar2';

       let outer=document.querySelector('.progress2');
       outer.appendChild(inner);

     var width = 0;
     var time = 3000;
     var width = 0;
      id2 = setInterval(setTimeFunction2);
     var time = 3000;
     function setTimeFunction2() {
       if (width >= time) {
         clearInterval(id2);
       } else {
         width++; 
         inner.style.width = (100*width)/time + '%'; 
         inner.innerHTML = Math.round((100*width)/time)  + '%';
       }
     }

     }
     
     let flag=true;

     document.getElementById('start2').addEventListener('click',function(){
       if(flag){
          progressBar2();
          flag=false;
       }
     })
     document.getElementById('stop2').addEventListener('click',function(){
       clearInterval(id2);
     })
     document.getElementById('restart2').addEventListener('click',function(){
       window.location.reload();
     })