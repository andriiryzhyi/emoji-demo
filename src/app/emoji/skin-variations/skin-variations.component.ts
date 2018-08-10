import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-skin-variations',
  templateUrl: './skin-variations.component.html',
  styleUrls: ['./skin-variations.component.scss']
})
export class SkinVariationsComponent implements OnInit {

  @Input() emoji;
  @Output() select = new Subject();

  constructor() { }

  ngOnInit() {
  }

  selectEmoji(e) {
    this.select.next(e);
  }

}
