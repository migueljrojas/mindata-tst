import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Section, SearchInput, ArticleCard, Slider } from './components';
import { ArticleData } from './components/article-card/article-card';
import articles from './data/articles.json';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Section, SearchInput, ArticleCard, Slider],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('riu-challenge');
  protected readonly articles = signal<ArticleData[]>(articles);
}
