import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifieldsComponent } from './classifields.component';

describe('ClassifieldsComponent', () => {
  let component: ClassifieldsComponent;
  let fixture: ComponentFixture<ClassifieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassifieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
