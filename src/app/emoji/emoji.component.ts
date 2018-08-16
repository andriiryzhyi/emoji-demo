import { Component, OnInit } from '@angular/core';
import { flags } from './flags';
import { smileysPeople } from './smileys_people';
import { animalsNature } from './animals_nature';
import { foodDrink } from './food_drink';
import { activities } from './activities';
import { travelsPlaces } from './travels_places';
import { objects } from './objects';
import { symbols } from './symbols';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.scss']
})
export class EmojiComponent implements OnInit {

  smileysPeople = smileysPeople;
  animalsNature = animalsNature;
  foodDrink = foodDrink;
  activities = activities;
  travelsPlaces = travelsPlaces;
  objects = objects;
  symbols = symbols;
  flags = flags;

  // '👨🏾‍🎓'.codePointAt(6).toString(16);

  emojiRe = `(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])+(?:[\u200d]\\S*)?`;

  constructor() { }

  ngOnInit() {
    // let i = 1;
    // this.emojiData.forEach((item) => {
    //   if (item.skin_variations.length) {
    //     console.log(i, item.id);
    //     i++;
    //     const b = u1f3fb.filter((emoji) => emoji.id === item.id);
    //     const c = u1f3fc.filter((emoji) => emoji.id === item.id);
    //     const d = u1f3fd.filter((emoji) => emoji.id === item.id);
    //     const e = u1f3fe.filter((emoji) => emoji.id === item.id);
    //     const f = u1f3ff.filter((emoji) => emoji.id === item.id);
    //     item.skin_variations[0] = b[0];
    //     item.skin_variations[1] = c[0];
    //     item.skin_variations[2] = d[0];
    //     item.skin_variations[3] = e[0];
    //     item.skin_variations[4] = f[0];
    //   }
    // });
    // console.log('emoji data', this.emojiData);
    // this.emojiData.forEach(item => {
    //   if (item.short_name === 'grin') {
    //     console.log('item', item);
    //     this.emojiData = [item];
    //   }
    // })
  }

  selectEmoji(emoji) {
    console.log(emoji);
  }

}
