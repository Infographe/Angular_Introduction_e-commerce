import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSelectionkeywordsComponent } from './product-selectionkeywords.component';

describe('ProductSelectionkeywordsComponent', () => {
  let component: ProductSelectionkeywordsComponent;
  let fixture: ComponentFixture<ProductSelectionkeywordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSelectionkeywordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSelectionkeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
