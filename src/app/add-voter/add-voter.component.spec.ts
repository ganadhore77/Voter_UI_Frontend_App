import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVoterComponent } from './add-voter.component';

describe('AddVoterComponent', () => {
  let component: AddVoterComponent;
  let fixture: ComponentFixture<AddVoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVoterComponent]
    });
    fixture = TestBed.createComponent(AddVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
