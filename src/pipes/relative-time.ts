import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

/**
 * Generated class for the RelativeTime pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
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
   * 相对时间长度
   * @param  {date} current  当前时间
   * @param  {date} previous 历史时间
   * @return {string}        相对时间长度
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
}
