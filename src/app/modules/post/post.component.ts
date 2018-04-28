import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { PostService, SectionService } from '@app/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  quote: string;
  isLoading: boolean;
  posts: any;
  sections: any;

  constructor(
    private postService: PostService,
    private sectionService: SectionService,
  ) { }

  ngOnInit() {
    this.isLoading = true;
    // this.quoteService.getRandomQuote({ category: 'dev' })
    //   .pipe(finalize(() => { this.isLoading = false; }))
      // .subscribe((quote: string) => { this.quote = quote; });
    this.loadPosts();
    this.loadSections();
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

  loadSections() {
    this.sectionService.getLinks()
      .subscribe((sections) => {
        this.sections = sections;
      });
  }

}
