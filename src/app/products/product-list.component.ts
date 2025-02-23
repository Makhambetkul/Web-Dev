import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../shared/category.model';
import { ProductItemComponent } from './product-item.component';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    @Input() category!: Category;

    products: Product[] = [
    { 
        name: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый', 
        description: 'Размер оперативной памяти: 8 ГБ; Процессор: 6-ядерный Apple A18 Pro; Объем встроенной памяти: 256.0 ГБ', 
        rating: 5.0, 
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h96/ha4/87295491735582.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h3c/h66/87295491768350.png?format=gallery-medium'], 
        link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000', 
        category: 'Электроника', 
        likes: 100 
    },
    { 
        name: 'Смартфон Samsung Galaxy A55 5G 8 ГБ/256 ГБ сиреневый', 
        description: 'Размер оперативной памяти: 8 ГБ; Процессор: 8-ядерный Exynos 1480; Объем встроенной памяти: 256.0 ГБ', 
        rating: 5.0, 
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h14/h12/85428764606494.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h7c/hf1/85428764672030.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h8a/h0c/85428764803102.png?format=gallery-medium'], 
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-sirenevyi-117420262/?c=750000000', 
        category: 'Электроника', 
        likes: 70 
    },
    {
        name: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
        description: 'Корпус в трёх стильных цветах. Мощные датчики для информации о вашем здоровье и активности. Инновационные функции безопасности.',
        rating: 4.9,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pe4/p9a/5542339.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p78/p98/5542340.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000',
        category: 'Электроника',
        likes: 66
    },
    {
        name: 'Салфетница Бургер, пластик',
        description: 'Материал: пластик, цвет: мультикор, размеры: 17.5x8.5 см',
        rating: 5.0,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h68/he3/86252351488030.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h86/ha0/86252351553566.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/salfetnitsa-burger-plastik-120287269/?0&c=750000000&ref=shared_link',
        category: 'Для дома',
        likes: 20
    },
    {
        name: 'Ваза 21 см 746459, стекло',
        description: 'Тип: ваза; Размещение: настольная; Материал: стекло',
        rating: 5.0,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h29/hc8/84965635424286.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h1f/ha6/84965635555358.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h17/h12/84965635686430.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/vaza-21-sm-746459-steklo-114062427/?c=750000000',
        category: 'Для дома',
        likes: 54
    },
    {
        name: 'Декоративный коврик 60x120 см, 355415',
        description: 'Форма: нестандартная; Состав: искусственный мех; Материал: мех',
        rating: 4.8,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h47/h53/84774902661150.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h27/he2/84774902726686.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/dekorativnyi-kovrik-60x120-sm-355415-115625450/?c=750000000',
        category: 'Для дома',
        likes: 20
    },
    {
        name: 'Юбка-шорты LIMIKO белый',
        description: 'Юбка-шорты от LIMIKO является трендом 2024 года. Юбка отлично подойдет для повседневной носки и для мероприятий благодаря удобному крою и современному стилю.',
        rating: 4.7,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pca/p10/24871458.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pe6/p10/24871459.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p8b/p13/24871462.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/jubka-shorty-limiko-li2024-belyi-s-121216602/?c=750000000&sr=67&qid=e7c92cf155619a9201b868b627ace761&ref=shared_link',
        category: 'Одежда',
        likes: 24
    },
    {
        name: 'Пижама белый',
        description: 'Женская пижама с брюками– это одежда, которая прекрасно подойдет для создания уютного и комфортного образа дома. Она идеально дополнит ваш гардероб для теплых домашних вечеров и подарит вам неповторимую атмосферу праздника.',
        rating: 4.9,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pa9/pb3/17533518.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pe5/pde/17533520.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p91/pde/17533523.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/-0123456-belyi-xl-130215510/?c=750000000&sr=107&qid=af357942b359039707cff083c3783e11&ref=shared_link',
        category: 'Одежда',
        likes: 21
    },
    {
        name: 'Блузка LIMIKO белый',
        description: 'Блузка нарядная кружевная с длинным рукавом – это изысканный выбор для женщин, стремящихся выделиться своим стилем.',
        rating: 4.5,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pe9/pcc/24012924.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pd8/pbb/24012929.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p1c/p63/24012934.jpeg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/bluzka-limiko-bluz-n011-belyi-l-134457392/?c=750000000&sr=32&qid=033a889b2b54715d562116f21dac4a61&ref=shared_link',
        category: 'Одежда',
        likes: 2
    },
    {
        name: 'Мягкая игрушка Гусь обнимусь, высота 130 см, белый',
        description: 'Тип: мягкая игрушка; Высота: 130.0 см; Наполнитель: синтепон',
        rating: 5.0,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/hb8/h45/80991620595742.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pe1/p27/19568295.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h70/h90/80991620661278.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/mjagkaja-igrushka-gus-obnimus-vysota-130-sm-belyi-110625207/?c=750000000',
        category: 'Игрушки',
        likes: 257
    },
    {
        name: 'Мягкая игрушка капибара, высота 32 см, коричневый',
        description: 'Милые плюшевые животные изготовлены из ультрамягких тканей, состоящих из плюша и полипропиленового хлопка, и сам материал очень мягкий.',
        rating: 5.0,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h3f/hd3/84855042932766.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hfc/h86/84855043063838.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hc7/h65/84855043129374.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/mjagkaja-igrushka-kapibara-vysota-32-sm-korichnevyi-115809777/?c=750000000',
        category: 'Игрушки',
        likes: 192
    },
    {
        name: 'Мягкая игрушка Kazimport Медведь, высота 120 см, белый',
        description: 'Тип: мягкая игрушка; Высота: 120.0 см; Наполнитель: синтепон',
        rating: 4.7,
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p7d/p57/12661844.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pb5/p57/12661846.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pee/p57/12661848.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/mjagkaja-igrushka-kazimport-medved-vysota-120-sm-belyi-112363603/?c=750000000',
        category: 'Игрушки',
        likes: 14
    }
  ];

  get filteredProducts() {
    return this.category ? this.products.filter(p => p.category === this.category.name) : [];
  }
  
  
}
