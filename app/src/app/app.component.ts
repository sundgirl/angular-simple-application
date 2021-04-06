import { Component, Input } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() articles: Article[];
  
  constructor() {
    this.articles = [
      new Article('Angular', 'https://www.youtube.com/', 3),
      new Article('JS', 'https://www.youtube.com/', 5),
      new Article('CSS', 'https://www.youtube.com/', 2),
    ]
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link ${link.value}`);
    this.articles = [...this.articles, new Article(title.value, link.value, 0)];
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article,b: Article) => b.votes- a.votes)
  }
 }
