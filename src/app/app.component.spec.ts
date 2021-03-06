import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

const q = !!('');

describe('JS Strict', () => {
  it('should false toBeFalsy is true', () => {
    expect(false).toBeFalsy();
  });

  it('should 0 toBeFalsy is true', () => {
    expect(0).toBeFalsy();
  });

  it('should blank toBeFalsy is true', () => {
    expect('').toBeFalsy();
  });
});

describe('Folder app', () => {
  describe('AppComponent', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [RouterTestingModule, FormsModule],
        declarations: [AppComponent],
      }).compileComponents();
    });

    afterEach(async () => {});

    it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`should have as title 'angular-lecture12'`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app.title).toEqual('angular-lecture12');
    });

    it('should render title', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const spanContent = compiled.querySelector('div.content span')?.textContent;
      expect(spanContent).toContain(
        'angular-lecture12 app is running!'
      );
    });

    it(`should have as param.name as Vadim`, () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      expect(app.param.name).toEqual('Vadim');
    });

    it('should render param.name', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const spanContent = compiled.querySelector('span[data-test-id="param.name"]')?.textContent;
      expect(spanContent).toEqual(
        'Vadim is a cool guy!!!'
      );
    });
  });
});
