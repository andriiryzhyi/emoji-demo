import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {
  title = 'app';
  emojiData = [];

  ngOnInit() {
    setTimeout(() => {
      const list = document.getElementsByTagName('ngx-emoji');
      // console.log(list);
      for (let i = 0; i < list.length - 1; i++) {
        if (list[i].children[0]) {
          // list[i].children[0].click();
        }
      }
      console.log('EMOJIDATA', this.emojiData);
    }, 500);
  }

  selectEmoji(e) {
    console.log(e);
    if (e.emoji.skin_variations.length) {
      this.emojiData.push(e.emoji);
    }
  }
}
