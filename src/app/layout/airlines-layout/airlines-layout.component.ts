import { Component, AfterViewInit } from '@angular/core';
import { from } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { replace } from 'feather-icons';

import { LibraryLoaderService } from '@shared/service/library-loader.service';

@Component({
  selector: 'app-airlines-layout',
  templateUrl: './airlines-layout.component.html',
  styleUrls: ['./airlines-layout.component.scss']
})
export class AirlinesLayoutComponent implements AfterViewInit {
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

    replace();
  }
}