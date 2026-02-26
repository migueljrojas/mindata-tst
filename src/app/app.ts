import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Section, SearchInput, ArticleCard } from './components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Section, SearchInput, ArticleCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('riu-challenge');
}
