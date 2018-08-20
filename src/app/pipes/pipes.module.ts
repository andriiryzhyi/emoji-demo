import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';
import { EmojiPipe } from '../emoji/emoji.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchPipe, EmojiPipe],
  exports: [SearchPipe, EmojiPipe]
})
export class PipesModule { }
