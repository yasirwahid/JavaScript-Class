


var a=document.getElementById('one');
var b=document.getElementById('two');
var c=document.getElementById('three');



function flip(flag){
    document.getElementById('win').innerHTML = "You've Failed , Try Again" ;
   var find='file:///C:/Users/Dell/Desktop/yasir/image2.png'
    var images = ['image1.png','image2.png','image4.png']
    var l = images.length;
    for(var i=0; i<3; i++){
    var random = Math.floor(Math.random()*Math.floor(l))
  
    if(i==0){
        a.src = images[random];
        if (flag == 0 && a.src==find){
            document.getElementById('win').innerHTML = 'You Win' ;
        } 
    
images.splice(random,1) 
  l--; 
}
    if(i==1){
        b.src = images[random];
        if (flag == 1 && b.src==find){
            document.getElementById('win').innerHTML = 'You Win' ;
        } 
        images.splice(random,1)   
        l--; }

    else if(i==2){
        c.src = images[random];
        if (flag == 2 && c.src==find){
            document.getElementById('win').innerHTML = 'You Win' ;  
        } 
    
    }
    
}

}
function reload(){
    location.reload(true);
}

