import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballercardComponent } from './footballercard.component';

describe('FootballercardComponent', () => {
  let component: FootballercardComponent;
  let fixture: ComponentFixture<FootballercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootballercardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
