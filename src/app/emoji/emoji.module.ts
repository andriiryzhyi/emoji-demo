import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { EmojiComponent } from './emoji.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [EmojiComponent],
  exports: [EmojiComponent]
})
export class EmojiModule { }
