import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  @Input() links: any;
  hiddenItems: any[];
  displayedItems: any[];
  isCollapsed = true;
  collapseText = (this.isCollapsed ? 'Vis alle' : 'Gjem alle');

  constructor() { }

  ngOnInit() {
    if (this.links.links.length >= 3) {
      this.displayedItems = this.createDisplayedArray(this.links.links)
      this.hiddenItems = this.createHiddenArray(this.links.links);
    } else {
      this.displayedItems = this.links.links;
    }

    console.log(this.links.links);
  }

  createDisplayedArray(items: any) {
    return items.slice(0, 3);
  }

  createHiddenArray(items: any) {
    return items.slice(3, this.links.links.length);
  }

  toggleContent() {
    this.isCollapsed = !this.isCollapsed;
    this.collapseText = this.isCollapsed ? 'Vis alt' : 'Gjem';
  }


}
