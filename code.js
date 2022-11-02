document.onkeydown = blog;

function blog(e){
  if(e.keyCode===37){
    left();
  }
  if(e.keyCode===38){
    up();
  }
  if(e.keyCode===39){
    right();
  }
  if(e.keyCode===40){
    down();
  }
}
function newb(max, min){
  let cont = false;
  let i = 0;
  while(i<16){
    i+=1;
    if((document.getElementById(i).innerHTML)==="\u200B" || document.getElementById(i).innerHTML==="​	"){
      cont = true;
      break;
    }
  }
  if(cont===true){
    let z = Math.floor(Math.random()*(max-min))+min;
    console.log(z);
    console.log((document.getElementById(z).innerHTML)==="\u200B");
    while(((document.getElementById(z).innerHTML))!=="\u200B"){
      z = Math.floor(Math.random()*(max-min))+min;
      console.log("again");
    }
    return z;
  }else{
    document.getElementById("demo").innerHTML="You Lose!";
  }
}

function newa(){
  let x = 2;
  if (Math.floor(Math.random()*6)>4){
    return 4;
  }
  else{
    return x;
  }
    
}
function keyp(e){
  e = event.charCode();
  console.log(e);
  if(e === 97){
    document.getElementById("demo").innerHTML="A";
  }
}
function newc(){
  document.getElementById(newb(1,17)).innerHTML = newa();
  update();
}
function load(){
  newc();
  newc();
  update();
}
function move(){
  inp="none";
  inp=(document.getElementById('in').value);
  console.log(document.getElementById("in").keycode);
  document.getElementById('in').value ="";
  if (inp ==="w"){
    up();
  }
  if (inp==="s"){
    down();
  }
  if (inp==="d"){
    right();
  }
  if(inp === "a"){
    left();
  }
}
function update(){
  ind=1;
  while (ind<17){
    if(document.getElementById(ind).innerHTML==="NaN" || document.getElementById(ind).innerHTML==="\u200B"){
      document.getElementById(ind).innerHTML = "&#8203";
      document.getElementById(ind).style.background="#FFF";
      document.getElementById(ind).style.color="#000";
    }
    else if(document.getElementById(ind).innerHTML==="2"){
      document.getElementById(ind).style.background="#FFD";
      document.getElementById(ind).style.color="#000";
      console.log("aa");
    }
    else if(document.getElementById(ind).innerHTML==="4"){
      document.getElementById(ind).style.background="#FFB";
      document.getElementById(ind).style.color="#000";
    }
    else if(document.getElementById(ind).innerHTML==="8"){
      document.getElementById(ind).style.background="#FF9";
      document.getElementById(ind).style.color="#000";
    }
    else if(document.getElementById(ind).innerHTML==="16"){
      document.getElementById(ind).style.background="#FF7";
      document.getElementById(ind).style.color="#000";
    }
    else if(document.getElementById(ind).innerHTML==="32"){
      document.getElementById(ind).style.background="#FF5";
      document.getElementById(ind).style.color="#000";
    }
    else if(document.getElementById(ind).innerHTML==="64"){
      document.getElementById(ind).style.background="#FCF";
      document.getElementById(ind).style.color="#000";
    }
    else if(document.getElementById(ind).innerHTML==="128"){
      document.getElementById(ind).style.background="#F8F";
      document.getElementById(ind).style.color="#000";
    }
    else if(document.getElementById(ind).innerHTML==="256"){
      document.getElementById(ind).style.background="#F1F";
      document.getElementById(ind).style.color="#000";
    }
    else if(document.getElementById(ind).innerHTML==="512"){
      document.getElementById(ind).style.background="#8FF";
      document.getElementById(ind).style.color="#000";
    }
    else if(document.getElementById(ind).innerHTML==="1024"){
      document.getElementById(ind).style.background="#49F";
      document.getElementById(ind).style.color="#000";
    }
    else if(document.getElementById(ind).innerHTML==="2048"){
      document.getElementById(ind).style.background="#000";
      document.getElementById(ind).style.color="#FFF";
    }
    else if(document.getElementById(ind).innerHTML==="4096"){
      document.getElementById(ind).style.background="#000";
      document.getElementById(ind).style.color="#F99";
  }
    ind+=1;
  }
}
function moveup(){
  x=12;
  while(x>0){
    if(document.getElementById(x).innerHTML === "\u200B" || document.getElementById(x).innerHTML==="​	"){
      document.getElementById(x).innerHTML=document.getElementById(x+4).innerHTML;
      if(x>8){
      document.getElementById(x+4).innerHTML='&#8203';
    }
    else{
      document.getElementById(x+4).innerHTML=document.getElementById(x+8).innerHTML;
      if(x>4){
        document.getElementById(x+8).innerHTML="&#8203";
      }
      else{
        document.getElementById(x+8).innerHTML=document.getElementById(x+12).innerHTML;
        document.getElementById(x+12).innerHTML="&#8203";
      }
    }
    
    }
    x-=1;
  }
}
function moveright(){
  x=2;
  while(x<17){
    if(document.getElementById(x).innerHTML === "\u200B" || document.getElementById(x).innerHTML==="​	"){
      document.getElementById(x).innerHTML=document.getElementById(x-1).innerHTML;
      if(x%4<3 && x%4!==0){
      document.getElementById(x-1).innerHTML="&#8203";
    }
    else{
      document.getElementById(x-1).innerHTML=document.getElementById(x-2).innerHTML;
      if(x%4===0){
        document.getElementById(x-2).innerHTML=document.getElementById(x-3).innerHTML;
        document.getElementById(x-3).innerHTML="&#8203";
      }
      else{
        document.getElementById(x-2).innerHTML="&#8203";
      }
    }
    }
    if(x%4===0){
      x+=2;
    }
    else{
      x+=1;
    }
  }
    
}
function moveleft(){
  x=15;
  while(x>0){
    if(document.getElementById(x).innerHTML === "\u200B" || document.getElementById(x).innerHTML==="​	"){
      document.getElementById(x).innerHTML=document.getElementById(x+1).innerHTML;
      if(x%4===3){
      document.getElementById(x+1).innerHTML="&#8203";
    }
    else{
      document.getElementById(x+1).innerHTML=document.getElementById(x+2).innerHTML;
      if(x%4===1){
        document.getElementById(x+2).innerHTML=document.getElementById(x+3).innerHTML;
        document.getElementById(x+3).innerHTML="&#8203";
      }
      else{
        document.getElementById(x+2).innerHTML="&#8203";
      }
    }
    }
    if(x%4===1){
      x-=2;
    }
    else{
      x-=1;
    }
  }
  
}
function movedown(){
  x=5;
  while(x<17){
    if(document.getElementById(x).innerHTML === "\u200B" || document.getElementById(x).innerHTML==="​	"){
      document.getElementById(x).innerHTML=document.getElementById(x-4).innerHTML;
      if(x<9){
      document.getElementById(x-4).innerHTML='&#8203';
    }
    else{
      document.getElementById(x-4).innerHTML=document.getElementById(x-8).innerHTML;
      if(x<13){
        document.getElementById(x-8).innerHTML="&#8203";
      }
      else{
        document.getElementById(x-8).innerHTML=document.getElementById(x-12).innerHTML;
        document.getElementById(x-12).innerHTML="&#8203";
      }
    }
    }
    x+=1;
  }
}
function up(){
  moveup();
  x=1;
  while(x<5){
    if(document.getElementById(x).innerHTML===document.getElementById(x+4).innerHTML){
      document.getElementById(x).innerHTML*=2;
      if(document.getElementById(x+12).innerHTML===document.getElementById(x+8).innerHTML){
        document.getElementById(x+8).innerHTML=document.getElementById(x+12).innerHTML*2;
        document.getElementById(x+12).innerHTML= "&#8203";
      }
      document.getElementById(x+4).innerHTML="&#8203";
    }
    else if(document.getElementById(x+4).innerHTML===document.getElementById(x+8).innerHTML){
      document.getElementById(x+4).innerHTML*=2;
      document.getElementById(x+8).innerHTML=document.getElementById(x+12).innerHTML;
      document.getElementById(x+12).innerHTML="&#8203";
    }
    else if(document.getElementById(x+12).innerHTML===document.getElementById(x+8).innerHTML){
        document.getElementById(x+8).innerHTML*=2;
        document.getElementById(x+12).innerHTML= "&#8203";
      }
    x+=1;
  }
  ind=1;
  update();
  moveup();
  newc();
}

function left(){
  moveright();
  x=13;
  while(x>0){
  if(document.getElementById(x).innerHTML===document.getElementById(x+1).innerHTML){
    document.getElementById(x).innerHTML*=2;
    document.getElementById(x+1).innerHTML="&#8203";
    if (document.getElementById(x+2).innerHTML===document.getElementById(x+3).innerHTML){
      document.getElementById(x+2).innerHTML=document.getElementById(x+2).innerHTML*2;
      document.getElementById(x+3).innerHTML="&#8203";
    }
  }
  else if(document.getElementById(x+2).innerHTML===document.getElementById(x+1).innerHTML){
    document.getElementById(x+1).innerHTML*=2;
    document.getElementById(x+2).innerHTML="&#8203";
  }
  else if(document.getElementById(x+3).innerHTML===document.getElementById(x+2).innerHTML){
    document.getElementById(x+2).innerHTML*=2;
    document.getElementById(x+3).innerHTML="&#8203";
  }
  x-=4;
  }
  ind=1;
  update();
  moveleft();
  newc();
}

function down(){
  movedown();
  x=16;
  while(x>12){
    if(document.getElementById(x).innerHTML===document.getElementById(x-4).innerHTML){
      document.getElementById(x).innerHTML*=2;
      if(document.getElementById(x-12).innerHTML===document.getElementById(x-8).innerHTML){
        document.getElementById(x-8).innerHTML=document.getElementById(x-12).innerHTML*2;
        document.getElementById(x-12).innerHTML= "&#8203";
      }
      document.getElementById(x-4).innerHTML="&#8203";
    }
    else if(document.getElementById(x-4).innerHTML===document.getElementById(x-8).innerHTML){
      document.getElementById(x-4).innerHTML*=2;
      document.getElementById(x-8).innerHTML=document.getElementById(x-12).innerHTML;
      document.getElementById(x-12).innerHTML="&#8203";
    }
    else if(document.getElementById(x-12).innerHTML===document.getElementById(x-8).innerHTML){
        document.getElementById(x-8).innerHTML*=2;
        document.getElementById(x-12).innerHTML= "&#8203";
      }
    x-=1;
  }
  ind=1;
  update();
  movedown();
  newc();
}
function right(){
  moveright();
  x=4;
  while(x<17){
  if(document.getElementById(x).innerHTML===document.getElementById(x-1).innerHTML){
    document.getElementById(x).innerHTML*=2;
    document.getElementById(x-1).innerHTML="&#8203";
    if (document.getElementById(x-2).innerHTML===document.getElementById(x-3).innerHTML){
      document.getElementById(x-2).innerHTML=document.getElementById(x-2).innerHTML*2;
      document.getElementById(x-3).innerHTML="&#8203";
    }
  }
  else if(document.getElementById(x-2).innerHTML===document.getElementById(x-1).innerHTML){
    document.getElementById(x-1).innerHTML*=2;
    document.getElementById(x-2).innerHTML="&#8203";
  }
  else if(document.getElementById(x-3).innerHTML===document.getElementById(x-2).innerHTML){
    document.getElementById(x-2).innerHTML*=2;
    document.getElementById(x-3).innerHTML="&#8203";
  }
  x+=4;
  }
  ind=1;
  update();
  moveright();
  newc();
}
document.onload = update();


