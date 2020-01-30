import { Component, AfterViewInit } from '@angular/core';
import { from } from 'rxjs';
import { concatMap } from 'rxjs/operators';

import { LibraryLoaderService } from '@shared/service/library-loader.service';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements AfterViewInit {
  constructor(
    private libLoader: LibraryLoaderService
  ) { }

  ngAfterViewInit() {
    const scriptLinks = [
      'dashforge.js',
      'dashforge.aside.js'
    ];

    from(scriptLinks)
      .pipe(
        concatMap(link => this.libLoader.loadScript(link))
      )
      .subscribe();
  }
}