const PASSWORD="Ganesha";
const NEXT_CLUE="Where lamps gather and footsteps slow,<br>seek the place where the celebration begins.";

const s1=document.getElementById("screen1"),s2=document.getElementById("screen2"),s3=document.getElementById("screen3");
const pass=document.getElementById("password"),err=document.getElementById("error");

function go(from,to){from.classList.remove("active");setTimeout(()=>{to.classList.add("active");window.scrollTo(0,0)},80)}
document.getElementById("begin").onclick=()=>go(s1,s2);
document.getElementById("unlock").onclick=unlock;
pass.addEventListener("keydown",e=>{if(e.key==="Enter")unlock()});
function unlock(){
  if(pass.value.trim().toUpperCase()===PASSWORD){
    err.textContent="✓ The gate recognizes you.";
    setTimeout(()=>{go(s2,s3);rain();},450);
  }else{
    err.textContent="The gate remains closed... think of the earlier clues.";
    pass.animate([{transform:"translateX(0)"},{transform:"translateX(-8px)"},{transform:"translateX(8px)"},{transform:"translateX(0)"}],{duration:300});
  }
}
document.getElementById("reveal").onclick=()=>{
  document.getElementById("clue").innerHTML=NEXT_CLUE;
  document.getElementById("clue").classList.remove("hidden-clue");
  document.getElementById("reveal").textContent="CLUE REVEALED ✦";
  document.getElementById("reveal").disabled=true;
  document.getElementById("note").textContent="Read carefully. Every word matters.";
};
function rain(){
  for(let i=0;i<28;i++){
    const x=document.createElement("div");x.className="petal";x.textContent=["🌼","✦","🌺","•"][Math.floor(Math.random()*4)];
    x.style.left=Math.random()*100+"vw";x.style.animationDuration=(3+Math.random()*4)+"s";x.style.animationDelay=Math.random()*1.2+"s";
    document.getElementById("petals").appendChild(x);setTimeout(()=>x.remove(),7000);
  }
}
setInterval(()=>{if(Math.random()<.45)rain()},4500);
