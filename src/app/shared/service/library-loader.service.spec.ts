import { TestBed } from '@angular/core/testing';

import { LibraryLoaderService } from './library-loader.service';

describe('LibraryLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryLoaderService = TestBed.get(LibraryLoaderService);
    expect(service).toBeTruthy();
  });
});
