import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  
  this.feed;

  }


feed = [
  {     
        "id":"1",
        "name":"Finn",
        "date":this.dateTime(-1,'day'),
         "desc":"Listen, I've had a pretty messed up day..."        
    },
    {     
        "id":"2",
        "name":"Fred",
        "date":this.dateTime(-30,'min'),
         "desc":"I've got enough on my plate as it is, and I..."        
    },
    {     
        "id":"3",
        "name":"tony",
        "date":this.dateTime(-2,'day'),
         "desc":"You will remove these restraints and leave..."        
    },
    {     
        "id":"4",
        "name":"Erick",
        "date":this.dateTime(-10,'second'),
         "desc":"I feel the good in you, the conflict..."        
    },
    {     
        "id":"5",
        "name":"Marc",
        "date":this.dateTime(-10,'hh'),
         "desc":"I just upgraded my X-Wing. Next time..."        
    },
    {     
        "id":"6",
        "name":"Bob",
        "date":this.dateTime(-24,'hh'),
         "desc":"These aren't the droids you're looking for..."        
    }
  
];


dateTime(num,typ){

if (typ=='day') {    
    return new Date(Date.now() + num * 24*60*60*1000);
}
else if(typ=='min'){
    return new Date(Date.now() + num * 60000);
}
else if(typ=='second'){
    return new Date(Date.now() + num * 1000);
}
else if(typ=='hh'){
    return new Date(Date.now() + num * 60*60*1000);
}

}


}
