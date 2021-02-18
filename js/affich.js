const affichage={

    init:function(){
        const plus=document.getElementById('plus');
        const moins=document.getElementById('minus');
        plus.addEventListener('click',affichage.add);
        moins.addEventListener('click',affichage.less);
    },
    add:function(evt){
        evt.preventDefault();
        padd=document.getElementById('container');
        padd.style.display='block';
        plusplus=document.getElementById('plus');
        plusplus.style.display='none';
        minus=document.getElementById('minus');
        minus.style.display='block';

    },
    less:function(evt){
        padd=document.getElementById('container');
        padd.style.display='none';
        plusplus=document.getElementById('plus');
        plusplus.style.display='block';
        minus=document.getElementById('minus');
        minus.style.display='none';        
    }
};
affichage.init();

