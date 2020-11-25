import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSelectionbycriteriaComponent } from './product-selectionbycriteria.component';

describe('ProductSelectionbycriteriaComponent', () => {
  let component: ProductSelectionbycriteriaComponent;
  let fixture: ComponentFixture<ProductSelectionbycriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSelectionbycriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSelectionbycriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
