# ionic-relative-date

Display Time Relatively 

generate a new pipe using below command
```
ionic generate pipe relative-time
```

## relative-time.ts
```javascript
@Pipe({
  name: 'relativeTime',
})
export class RelativeTime implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, args) {
    if(!value) return 'NO_TIME';
    return this.timeDifference(new Date(), new Date(value));
  }

  /**
   * @param  {date} current  
   * @param  {date} previous 
   * @return {string}       
   */
  timeDifference(current, previous):string {
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
      if(Math.round(elapsed/1000)<3) return 'At the moment';
      return Math.round(elapsed/1000) + ' s ago';
    }

    else if (elapsed < msPerHour) {
      return Math.round(elapsed/msPerMinute) + ' min ago';
    }

    else if (elapsed < msPerDay ) {     
      return Math.round(elapsed/msPerHour ) + ' h ago';
    }


    else if (elapsed < msPerMonth) {
       if(Math.round(elapsed/msPerDay ) ==1)return 'Yesterday at '+previous.getHours()+":"+previous.getMinutes();
       return Math.round(elapsed/msPerDay) + ' days ago';
    }

    else if (elapsed < msPerYear) {
      return 'about ' + Math.round(elapsed/msPerMonth) + ' month ago';
    }

    else {
      return this.dateFormat(previous);
    }
  }

dateFormat(value):string{
        var datePipe = new DatePipe("en-US");
        value = datePipe.transform(value, 'dd-MM-yyyy HH:mm');      
         return value;
        }

```
## Usage
The syntax for using a pipe in a template looks like this:
```
{{data | pipe}}
```
example
```
 <ion-note item-right>{{f.date | relativeTime}} </ion-note>
```
