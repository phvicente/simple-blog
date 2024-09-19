import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ArticleService} from "../../../services/article.service";
import {Article} from "../../../models/article.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{

  articles: Article[] = [];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.articles = this.articleService.getArticles();
  }

}
