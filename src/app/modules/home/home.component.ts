import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { PostService } from '@app/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;
  posts: any;

  constructor(
    private quoteService: QuoteService,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    // this.quoteService.getRandomQuote({ category: 'dev' })
    //   .pipe(finalize(() => { this.isLoading = false; }))
      // .subscribe((quote: string) => { this.quote = quote; });
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getAllPosts()
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((posts: any) => {

        this.posts = Object.keys(posts.references.Post)
          .map((key) => {
            return posts.references.Post[key];
          });
      });
  }

}
