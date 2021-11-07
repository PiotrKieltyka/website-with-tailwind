import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error404PageComponent } from './error-404-page.component';

describe('Error404PageComponent', () => {
  let component: Error404PageComponent;
  let fixture: ComponentFixture<Error404PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Error404PageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Error404PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create error 404 page component', () => {
    expect(component).toBeTruthy();
  });

  it('should render h1 message', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rendered = compiled.querySelector('.container > div > h1');
    expect(rendered?.classList).toContain('text-6xl');
    expect(rendered?.textContent).toContain('Oops!');
  });

  it('should render h2 message', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rendered = compiled.querySelector('.container > div > h2');
    expect(rendered?.classList).toContain('text-3xl');
    expect(rendered?.textContent).toContain('Are You lost?');
  });

  it('should render 404 error', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rendered = compiled.querySelector('.container > div > p');
    expect(rendered?.textContent).toContain('404 - Page not found');
  });

  it('should render redirection button with home route', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rendered = compiled.querySelector('.container > div > button');
    expect(rendered?.attributes.getNamedItem('routerlink')?.value).toContain(
      '/home',
    );
  });
});
