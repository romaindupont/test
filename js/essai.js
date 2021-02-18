const essai={

    init:function(){
        const card = document.querySelector(".card");
        const title = document.querySelector(".title h1");
        const containerImage = document.querySelector(".container-image img");
        const container = document.querySelector(".container");
        const description = document.querySelector(".description");
        container.addEventListener('mousemove',essai.contain);
        container.addEventListener('mouseleave',essai.contain2);   
        container.addEventListener('mouseenter',essai.contain3);    
        title.container.addEventListener('mouseleave',essai.title2);   
        title.addEventListener('mouseenter',essai.title3);
        containerImage.addEventListener('mouseenter',essai.contenainerImgIn);
        containerImage.addEventListener('mouseleave',essai.contenainerImgOut);   
   
    },
    contain:function(evt){
        const card = document.querySelector(".card");
        //console.log(evt.pageX);
        let xAxis = (window.innerWidth / 2 - evt.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - evt.pageY) / 25;
        card.style.transform= `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    },
    container3:function(evt){
        const card = document.querySelector(".card");
        card.style.transition="none"; 
        
    },
    contain2:function(evt){
        const card = document.querySelector(".card");
        card.style.transform= "rotateY(0deg) rotateX(0deg)";
        card.style.transition = "all 0.5s ease";
    },
    title3:function(evt){
        title.style.transform="translateZ(125px)";
    },
    title2:function(evt){
        title.style.transform="translateZ(0px)";
    },
    contenainerImgIn:function(evt){
        containerImage.style.transform="translateZ(200px) rotateZ(-45deg)";
    },
    contenainerImgOut:function(evt){
        containerImage.style.transform="translateZ(0px) rotateZ(0deg)";
    }
};
essai.init();