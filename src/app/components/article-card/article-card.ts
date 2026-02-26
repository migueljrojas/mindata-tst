import { Component, input } from '@angular/core';

export interface ArticleData {
  title: string;
  content: string;
  date: string;
  link: string;
}

@Component({
  selector: 'app-article-card',
  imports: [],
  templateUrl: './article-card.html',
  styleUrl: './article-card.scss',
})
export class ArticleCard {
  highlight = input(false);
  data = input<ArticleData>({ title: '', content: '', date: '', link: '' });
  private static nextId = 0;
  imageUrl = `https://picsum.photos/seed/${ArticleCard.nextId++}/400/300`;
}