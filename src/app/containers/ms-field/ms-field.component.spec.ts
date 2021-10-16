import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MsLongTapDirective } from 'src/app/directives/ms-long-tap/ms-long-tap.directive';
import { GameService } from 'src/app/game.service';
import { Game } from 'src/app/models/Game';
import { MsCellComponent } from 'src/app/presentations/ms-cell/ms-cell.component';

import { MsFieldComponent } from './ms-field.component';

describe('MsFieldComponent', () => {
  let component: MsFieldComponent;
  let fixture: ComponentFixture<MsFieldComponent>;
  let spyGameService: GameService;

  beforeEach(async () => {
    spyGameService = jasmine.createSpyObj('GameService', ['open', 'flag']);

    await TestBed.configureTestingModule({
      declarations: [MsFieldComponent, MsCellComponent, MsLongTapDirective],
      providers: [{ provide: GameService, useValue: spyGameService }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsFieldComponent);
    component = fixture.componentInstance;

    component.game = new Game();
    component.game.initialize();

    fixture.detectChanges();
  });

  describe('#onLeftClick', () => {
    it('セルをクリックすると GameService#open メソッドにその座標が渡されること', () => {
      // (2, 7) のセルを抽出
      // css の nth-chilid のインデックスは 1 始まりなので x, y 座標は１つずれることに注意
      const cell_2_7 = fixture.debugElement
        .query(By.css('.field'))
        .query(By.css('.row:nth-child(8)'))
        .query(By.css('ms-cell:nth-child(3)')).query(By.css('.cell'));

      // (2, 7) をクリック
      cell_2_7.nativeElement.click();

      expect(spyGameService.open).toHaveBeenCalledWith(2, 7);
    });
  });

  describe('#onRightClick', () => {
    it('セルをクリックすると GameService#flag メソッドにその座標が渡されること', () => {
      // (5, 1) のセルを抽出
      // css の nth-chilid のインデックスは 1 始まりなので x, y 座標は１つずれることに注意
      const cell_5_1 = fixture.debugElement
        .query(By.css('.field'))
        .query(By.css('.row:nth-child(2)'))
        .query(By.css('ms-cell:nth-child(6)')).query(By.css('.cell'));

      // (5, 1) を右クリック
      cell_5_1.triggerEventHandler('contextmenu', null);

      expect(spyGameService.flag).toHaveBeenCalledWith(5, 1);
    });
  });
});
