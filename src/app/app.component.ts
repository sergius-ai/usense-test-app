import { Component, OnInit } from '@angular/core';

import { timer, of, interval,fromEvent  } from 'rxjs';
import { repeat, delay, first, map} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sub:any = "550j0";
  gRandString() {
    const source = timer(3000);
    const example = source.pipe(repeat());
    const subscribe = example.subscribe((val) => {(
      this.sub = Math.random().toString(36).substr(2, 5));
      console.log(this.sub);
    });
  }
  checkPalindrom (str: string) {
    var strLen = str.length;
    var result = false;
    for (var i = 0; i < strLen; i++) {
      if (str[i] === str[strLen - 1 - i]) { //Сравниваем все элементы от начала строки со всеми элементами с конца строки
        result = true;
      } else {
        result = false;
        return result;
      }
    }
    return result;
  }
  checkAll() {
    if (this.checkPalindrom(this.sub) == true) {
      return 0;
    }
    else if(isNaN(this.sub) == false) {
      return 1;
    }
    else if(this.sub.indexOf('0') != -1) {
      return 2;
    }
    else {
      return ;
    }
  }

  constructor() {}
  ngOnInit() {
    this.gRandString();
  }
}
