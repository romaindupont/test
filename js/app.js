const input= {
    init:function(){
        const afficheText=document.getElementById('name');
        afficheText.addEventListener('focus',input.doIt);
        afficheText.addEventListener('blur',input.doThat);
        
    },

    doIt: function(evt){
        evt.preventDefault();
        visible=document.getElementById('myname');
        visible.style.display="block";
        visible.classList.add('label-animated'); 
        visible1=document.getElementById('name');
        visible1.classList.add('animated');

    },
    doThat:function(evt){
        evt.preventDefault();
        invisible=document.getElementById('myname');
        
        invisible.style.display="none";

        invisible1=document.getElementById('name');
        invisible1.classList.remove('animated');
    }
};

input.init();