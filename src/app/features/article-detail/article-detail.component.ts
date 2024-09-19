import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ArticleService} from "../../services/article.service";
import {Article} from "../../models/article.model";
import {CommonModule} from "@angular/common";
import {MarkdownModule} from "ngx-markdown";



@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css'
})
export class ArticleDetailComponent implements OnInit {

  article: Article | undefined;


  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private articleService: ArticleService,
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? parseInt(idParam, 10) : null;

    if (id !== null) {
      this.article = this.articleService.getArticleById(id);
    }

    if (!this.article) {
      this.router.navigate(['/']);
    }

  }
  public goBack(): void {
    this.router.navigate(['/']);
  }
}
