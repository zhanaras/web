import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../category.service';
import { ProductsServiceService } from '../products-service.service';
import { products } from '../products';
import { categ, item } from '../inter';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categ1: categ;
  categ2: categ;
  categ3: categ;
  categ4: categ;
  categs: categ[];

  item1: item;
  item2: item;
  item3: item;
  item4: item;
  item5: item;
  item6: item;
  item7: item;
  item8: item;

  items: item[];

  constructor() {
    this.item1 = new item();
    this.item1.id = 11;
    this.item1.name = '2019 новая инновация модная курица шлем Забавный узор маленький шлем для собаки шапка в форме птицы головные уборы';
    this.item1.description = 'Отличная функция: предотвращает разбивание курицы и защищает голову курицы.';
    this.item1.rating = 4.9;

    this.item2 = new item();
    this.item2.id = 12;
    this.item2.name = 'Pennywise маска на Хэллоуин чума паровой клюв доктор Праздничная маска латексная кожа Набор масок для вечеринки черный Медный гвоздь серебро один размер';
    this.item2.description = 'Подходит для Хэллоуина, пасхи и тематика ужасов, что делает вас центром внимания толпы.';
    this.item2.rating = 4.5;

    this.item3 = new item();
    this.item3.id = 21;
    this.item3.name = 'Летняя забавная футболка nicolas cage face с 3D принтом принца для мужчин и женщин, уличная одежда, футболка, футболки для спортзала, Harajuku, модные футболки';
    this.item3.description = 'мы можем предложить Прямая доставка и дизайн нового стиля для вас.';
    this.item3.rating = 5;

    this.item4 = new item();
    this.item4.id = 22;
    this.item4.name ='Футболка Nicolas Cage, футболка с рисунком банана, Повседневная футболка с графикой, 100 полиэстер';
    this.item4.description = 'Наши чернила-нерастворимые в воде, не выцветают.Другие чернила растворяются в воде, легко выцветают.';
    this.item4.rating = 4.7;

    this.item5 = new item();
    this.item5.id = 31;
    this.item5.name = 'Качественные маскарадные костюмы monster shrek, реальные фотографии, мультяшные костюмы';
    this.item5.description = 'Охлаждающий вентилятор внутри головки';
    this.item5.rating = 4.9;

    this.item6 = new item();
    this.item6.id = 32;
    this.item6.name = 'Пять малышей для Шрек alien маска фу террор головной убор косплей мультфильм Шрек';
    this.item6.description = 'он может противостоять дождю, ударам и столкновениям';
    this.item6.rating = 5;

    this.item7 = new item();
    this.item7.id = 41;
    this.item7.name = 'Горячая распродажа! Высокое качество космический костюм талисмана костюм астронавта талисмана с рюкзаком с логотипом перчатки, обувь Бесплатная доставка';
    this.item7.description = 'Развлечения и развлечения, тематические парки, рай, различные вечеринки.';
    this.item7.rating = 5;

    this.item8 = new item();
    this.item8.id = 42;
    this.item8.name = 'Латексный вакуумный мешок комбинезон с капюшоном трико на молнии сзади резиновый комбинезон, куртка, боди, бандаж, лицо, шея, вход';
    this.item8.description = 'перед надеванием слегка протрите тальк на внутренней части одежды, так как на резиновой поверхности очень заметны шалость и пыль.';
    this.item8.rating = 4.3;

    this.items = [this.item1, this.item2];
    this.categ1 = new categ();
    this.categ1.id = 1;
    this.categ1.name = 'Жизненно необходимые вещи';
    this.categ1.products = this.items;

    this.items = [this.item3, this.item4];
    this.categ2 = new categ();
    this.categ2.id = 2;
    this.categ2.name = 'Николас Кейдж';
    this.categ2.products = this.items;

    this.items = [this.item5, this.item6];
    this.categ3 = new categ();
    this.categ3.id = 3;
    this.categ3.name = 'Наркотики';
    this.categ3.products = this.items;

    this.items = [this.item7, this.item8];
    this.categ4 = new categ();
    this.categ4.id = 4;
    this.categ4.name = 'Повседневная одежда';
    this.categ4.products = this.items;

    this.categs = [this.categ1, this.categ2, this.categ3, this.categ4];
  }

  getThisCategs(): any{
    return this.categs;
  }

  ngOnInit(): void {
  
  }
}
