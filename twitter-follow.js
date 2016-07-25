
// You need to set twitter in english to work
//Set Followers Count
followCount = 50;

//Leave Numbers Alone - i starts at 5 to skip the left suggestions "who to follow"
i = 5;
u = i - 1;
f = 0;


var wait = 'WAIT SECONDS=' + Math.floor(Math.random()*5 + 5);
var goto = 'URL GOTO=https://twitter.com/followers' + '\n' + wait;
 iimPlayCode(goto);
window.scrollBy(0,20000);

 iimPlayCode(wait);


//Script loops and follows full 50 people disregarding skipped aka already following
while (f < followCount){
    e = window.document.getElementsByClassName('follow-text')[u];
    var css = window.document.defaultView.getComputedStyle(e, null);
    display = css.getPropertyValue('display');


    if(display === "none"){
      var wait2 = 'WAIT SECONDS=' + Math.floor(Math.random()*5 + 5);
    window.scrollBy(0,20000);
    iimPlayCode(wait2);
    u++;
    i++;
    }else {
      iimSet("i",i);
      var wait3 = 'WAIT SECONDS=' + Math.floor(Math.random()*5 + 5);
          var macro = 'TAG POS={{i}} TYPE=BUTTON ATTR=TXT:Follow<SP>Following<SP>Unfollow<SP>Blocked<SP>Unblock<SP>Pen*' + '\n' + wait3;
          i++; f++; u++;
          iimPlayCode(macro);
      }
}//end of Message Count
iimExit();

// 25-07-2016 from GenZai inspired by craigmoney
