import { Component, input } from '@angular/core';
import { ArticleData } from '../article-card/article-card';

@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.html',
  styleUrl: './slider.scss',
})
export class Slider {
  items = input<ArticleData[]>([]);
}
