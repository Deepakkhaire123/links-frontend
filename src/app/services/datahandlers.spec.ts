import { TestBed } from '@angular/core/testing';

import { Datahandlers } from './datahandlers';

describe('Datahandlers', () => {
  let service: Datahandlers;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Datahandlers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
