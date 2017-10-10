var score, roundscore, activeplayer, dice;

score = [0,0];
roundscore = 0;
activeplayer = 0;
var x =0;

dice = Math.floor(Math.random() * 6)+1;

 //document.querySelector('#score-'+activeplayer).textContent = dice;
//document.querySelector('#score-'+activeplayer).innerHTML = '<em>' + dice + '</em>';

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('final-0').textContent = '0';
document.getElementById('final-1').textContent = '0';

document.querySelector('.roll').addEventListener('click', function(){
    
    dice = Math.floor(Math.random() * 6)+1;
    var domObj =  document.querySelector('.dice');
    var dicpic = document.querySelector('.dicepic');
    domObj.style.display = 'block';
    dicpic.src = 'dice-' + dice + '.png';
    if (dice==1){
       if(activeplayer==1){
           document.getElementById('score-'+activeplayer).textContent = '0';
           activeplayer=0;
           roundscore=0;
           invert(activeplayer);
           
       }
        else{
            document.getElementById('score-'+activeplayer).textContent = '0';
            activeplayer=1;
            roundscore=0;
            invert(activeplayer);
        }
    }
    
    if(dice !== 1){
        roundscore += dice;
        document.getElementById('score-'+activeplayer).textContent = roundscore;
    }
    
});


document.querySelector('.hold').addEventListener('click', function(){
    
   
    
   
    if(activeplayer==1){
         score[1] += roundscore; 
         document.getElementById('final-'+activeplayer).textContent = score[1];
         activeplayer=0;
         roundscore=0;
        invert(activeplayer);
    }
    else{
         score[0] += roundscore; 
         document.getElementById('final-'+activeplayer).textContent = score[0];
         activeplayer=1;
         roundscore=0;
        invert(activeplayer);
      
        
    }
if(score[0]>=100){
    document.getElementById('player-0').textContent = 'Winner';
    document.getElementById('rolling').disable = true;
    document.getElementById('holding').disable = true;
    
}
    else if(score[1]>=100){
        document.getElementById('player-1').textContent = 'Winner';
        document.getElementById('rolling').disable = true;
    document.getElementById('holding').disable = true;
    }
});

function invert(x){
   if(x==0){
       document.querySelector('.section1').style.backgroundColor = '#f7f7f7';
       document.querySelector('.section2').style.backgroundColor = '#ffffff';
       document.querySelector('.section3').style.background = 'linear-gradient(90deg, #f7f7f7 50%, #ffffff 50%)';
   }
    else{
        document.querySelector('.section2').style.backgroundColor = '#f7f7f7';
        document.querySelector('.section1').style.backgroundColor = '#ffffff';
        document.querySelector('.section3').style.background = 'linear-gradient(90deg, #ffffff 50%, #f7f7f7 50%)';
    }
}

document.querySelector('.start').addEventListener('click',function(){
    window.location.reload();
})
