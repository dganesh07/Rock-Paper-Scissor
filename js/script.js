var score=0;
var userChoice;
var paragraph = document.querySelector('p');

//readable is used to change number choice into english text
var readable = {
    '0':'rock',
    '1':'paper',
    '2':'scissors'
};
var cpuChoice = {
    init:function(){
        this.store = Math.floor(Math.random() * 3);
        //*3 is for computer to choose 3 choices i.e, rock paper sicssor;
        this.text = readable[this.store];
    },
    store:'',
    text:''
};

var order = [0,1,2,0];

/*
1->beats->0
2->beats->1
0->beats->2
*/

var winner = function(player,cpu){
    if(order[player] === order[cpu]){
        return "It's a tie!!! Try again?";
    }
    if(order[player] === order[cpu+1]){
         score++;
        return "You WIN!!!";
       
    }else{
        //score--;
        return "You LOST!";
                    //WHY???
    }
}
    
//UI CODE
var cpuimg = document.getElementById('try');
var userClick = function(tags,pos){
    //Assign a click listner
    tags.addEventListener('click',function(){
        
    //set the players choice
        userChoice = pos;
    //printing out the CPU choice
        cpuChoice.init();
        paragraph.innerText = 'Computer Choice =' + '\t' + cpuChoice.text;
        var text1 = "\"<img src=\"images/" + cpuChoice.text +".png\">\"";
        //cpuimg.innerHTML="<img src=\"images/rock.png\">";
        cpuimg.innerHTML=text1;
    //determine a winner
    //display the winner and the score
        paragraph.innerText += '\n'+ winner(userChoice,cpuChoice.store);
         paragraph.innerText += '\n'+ 'SCORE' + '\t'+ score;
    });
 
}

var images = {
    tags: document.getElementsByTagName('img'),
    init: function(){
        for(var i = 0;i<this.tags.length;i++){      //images.tags.length TRY
            userClick(this.tags[i],i);
        }
    }
    
}
images.init();