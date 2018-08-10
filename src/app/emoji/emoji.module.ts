import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { EmojiComponent } from './emoji.component';
import { SkinVariationsComponent } from './skin-variations/skin-variations.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [EmojiComponent, SkinVariationsComponent],
  exports: [EmojiComponent]
})
export class EmojiModule { }
