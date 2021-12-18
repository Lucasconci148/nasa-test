import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
    ],
      declarations: [
        HomeComponent
      ],

    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('initial properties', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    expect(component.showPhotos).toBe(false);
    expect(component.firstTime).toBe(true);
    expect(component.selectedRover).toBe('');
  });

  it('getRover test', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.componentInstance;

    const spy = spyOn(component['_nasaService'], 'getRover').and.callThrough();
    component.getRover('spirit');

    expect(component.showPhotos).toBe(false);
    expect(component.firstTime).toBe(false);
    expect(spy).toHaveBeenCalledWith('spirit');
  })
});
