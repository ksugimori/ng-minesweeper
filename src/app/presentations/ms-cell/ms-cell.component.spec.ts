import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsCellComponent } from './ms-cell.component';

describe('MsCellComponent', () => {
  let component: MsCellComponent;
  let fixture: ComponentFixture<MsCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsCellComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#cssClassArray', () => {
    it ('デフォルトで cell クラスのみセットされていること', () => {
      expect(component.cssClassArray.length).toBe(1);
      expect(component.cssClassArray).toContain('cell');
    });

    it('開いたセルには open クラスが追加されること', () => {
      component.isOpen = true;

      expect(component.cssClassArray.length).toBe(2);
      expect(component.cssClassArray).toContain('cell');
      expect(component.cssClassArray).toContain('open');
    });

    it('count = 1 のとき、 cell-1 クラスが追加されること', () => {
      component.isOpen = true;
      component.count = 1;

      expect(component.cssClassArray.length).toBe(3);
      expect(component.cssClassArray).toContain('cell');
      expect(component.cssClassArray).toContain('open');
      expect(component.cssClassArray).toContain('cell-1');
    });

    it('isMine = true のとき、 cell-mine クラスが追加されること', () => {
      component.isOpen = true;
      component.count = 1;
      component.isMine = true;

      expect(component.cssClassArray.length).toBe(3);
      expect(component.cssClassArray).toContain('cell');
      expect(component.cssClassArray).toContain('open');
      expect(component.cssClassArray).toContain('cell-mine');
    });
  });
});
