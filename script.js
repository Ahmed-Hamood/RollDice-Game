  let player_score , current_score , active_player , winner_score , isset;

  player_score = [0,0];
  current_score = 0;

  active_player = 0;

  winner_score = 100;
  isset  = false;



  document.getElementById('score-0').textContent = '0'; 
        document.getElementById('current-0').textContent = '0';
        document.getElementById('score-1').textContent = '0'; 
        document.querySelector('#current-1').textContent = '0';

  // write on element



  // document.querySelector('#current-'+active_player).innerHTML = '<em>'+dice+'</em>';


  // read from element
  // let r = document.querySelector('#score-0').textContent;

  // change style of an elemnt property value
  document.querySelector('.dice').style.display = 'none';

  document.getElementById("status").disabled = true;
  document.querySelector('.btn-hold').style.color = 'rgb(223, 223, 223)';





  document.querySelector('.btn-new').addEventListener('click' , init);








  document.querySelector('.btn-hold').addEventListener('click' , function(){
      player_score[active_player] += current_score;
      document.querySelector('#current-'+active_player).textContent = 0;
      document.querySelector('#score-'+active_player).textContent = player_score[active_player]; 

      if( player_score[active_player] >= winner_score)
      {
        document.getElementById('name-'+active_player).textContent = 'WINNER'; 
      
        document.querySelector('.player-'+active_player+'-panel').classList.add('winner');
        document.querySelector('.player-'+active_player+'-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
        document.getElementById("status").disabled = true;
        document.querySelector('.btn-hold').style.color = 'rgb(223, 223, 223)'; // disable color

        document.getElementById("roll-status").disabled = true;
        document.querySelector('.btn-roll').style.color = 'rgb(223, 223, 223)'; // disable color
      }
      else{
        next_player();
      } 

    


  });

  document.querySelector('.btn-roll').addEventListener('click' , function(){

    // get Winner Score input
    let input = document.getElementById('winner_text').value;
     document.querySelector('#winner_text').disabled = true;
     document.querySelector('#winner_text').style.border = '1px solid gray';

    if(input && !isset ){
      winner_score = input;
      isset = true;
     console.log('isset ' + winner_score);
    }



    // 1. Store Random Number
  let dice = Math.floor(Math.random() * 6) + 1 ;

  // 2. display result 
  let dicedom = document.querySelector('.dice');

      document.getElementById("status").disabled = false;
      document.querySelector('.btn-hold').style.color = '#555';
  
      dicedom.style.display = 'block';
      dicedom.src = 'image/Dice/d' + dice + '.png';
      dicedom.style.border = '1px solid rgba(177, 175, 175, 0.815)';

      if(dice > 1){
        current_score += dice;
        // . add result to current scrore
        document.querySelector('#current-'+active_player).textContent = current_score;  
      }else{ 
        
        document.querySelector('#current-'+active_player).textContent = 0;
        dicedom.style.border = '1px solid red';
        next_player( );
        }
      
      

  });


  function next_player( ){
        current_score = 0;
        active_player = (active_player == 0) ?  1 : 0;
      
  
        document.getElementById("status").disabled = true;
    
        document.querySelector('.btn-hold').style.color = 'rgb(223, 223, 223)';
    
        
      //document.querySelector('.player-0-panel').classList.remove('active');
      //document.querySelector('.player-1-panel').classList.add('active');

      // if active doesn't exist then add it to the class then return true
          document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
  }

  function init(){
        player_score = [0,0];
        current_score = 0;
        active_player = 0;
        winner_score = 100;
        isset = false;

        document.querySelector('#winner_text').value = '';
        document.querySelector('#winner_text').style.border = '1px solid rgb(0, 0, 0)';

        document.querySelector('.dice').style.display = 'none';
        document.getElementById("status").disabled = true;
        document.querySelector('.btn-hold').style.color = 'rgb(223, 223, 223)'; // disable color

        document.getElementById("roll-status").disabled = false;
        document.querySelector('.btn-roll').style.color = '#555'; // disable color

        document.getElementById('name-0').textContent = 'PLAYER 1'; 
        document.getElementById('name-1').textContent = 'PLAYER 2'; 

        // reset boards to 0
        document.getElementById('score-0').textContent = '0'; 
        document.getElementById('current-0').textContent = '0';
        document.getElementById('score-1').textContent = '0'; 
        document.querySelector('#current-1').textContent = '0';

        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.remove('active');

        document.querySelector('.player-0-panel').classList.add('active');

        

        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');

        document.querySelector('#winner_text').disabled = false;
  }