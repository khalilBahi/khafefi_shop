import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCommandComponent } from './liste-command.component';

describe('ListeCommandComponent', () => {
  let component: ListeCommandComponent;
  let fixture: ComponentFixture<ListeCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCommandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
