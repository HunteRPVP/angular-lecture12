import { TestBed } from '@angular/core/testing';
import { AppServiceService } from './app-service.service';

describe('AppServiceService', () => {
  let service: AppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
      service = TestBed.inject(AppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should have a parameter`, () => {
    expect(service.a).toBeTruthy();
  });

  it('should have square method', () => {
    expect(service.square()).toBeTruthy();
  });

  it(`#a should be 5`, () => {
    expect(service.a).toEqual(5);
  });

  it('#square should be 25', () => {
    expect(service.square()).toEqual(25);
  });
});
