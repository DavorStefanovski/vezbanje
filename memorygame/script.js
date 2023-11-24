window.addEventListener("load",start,false);

function start(){
sliki = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
pogodeni = [0,0,0,0,0,0,0,0,0,0];
par=[-1,-1];
for(var i=0;i<10;i++){
    sluchaen=Math.floor(Math.random()*5);
    if(dvapati(sliki,sluchaen)){
        sliki[i]=sluchaen;
        
    }
    else{
    i--;
    }
}

}

async function imgclicked(br){
    
    if(par[0]==-1){
        par[0]=parseInt(br);
        pechati();
        
    }
    else{
        par[1]=parseInt(br);
        pechati();
        if(sliki[par[0]]==sliki[par[1]]){
            pogodeni[par[0]]=1;
            pogodeni[par[1]]=1;
            par[0]=par[1]=-1;
        }
        else{
            par[0]=par[1]=-1;
        }
        await sleep(2000);
        pechati();
    }
}
function pechati(){
    
    for(var i=0;i<10;i++){
        img=document.getElementById("c"+i);
        if(pogodeni[i]==1 || par[0]==i || par[1]==i){
        
        if(sliki[i]==0)
        img.src="./cards/cat.avif";
        if(sliki[i]==1)
        img.src="./cards/dog.avif";
        if(sliki[i]==2)
        img.src="./cards/elephant.webp";
        if(sliki[i]==3)
        img.src="./cards/snake.jpg";
        if(sliki[i]==4)
        img.src="./cards/squirrel.jpg";
        }
        else{
            img.src="./cards/back.png";
        }
        
    }
    
}

function dvapati(niza,s){
    brojac=0;
    for(var i=0;i<niza.length;i++){
        if(s==niza[i])
        brojac++;
    }
    if(brojac==2)
    return false;
    else
    return true;

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
