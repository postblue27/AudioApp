/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrackService } from './track.service';

describe('Service: Track', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackService]
    });
  });

  it('should ...', inject([TrackService], (service: TrackService) => {
    expect(service).toBeTruthy();
  }));
});
