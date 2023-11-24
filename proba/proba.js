function flip(){
    slika=document.getElementById("ajdi");
    randombr=Math.floor(Math.random()*2);
    if(randombr==0){
        slika.src="petka.jpg";
    }else{
        slika.src="kruna.jpg";
    }

}