import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  imports: [CommonModule],
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [
    {
      image: 'https://lh3.googleusercontent.com/pw/AP1GczMWdVoviiprAKLWPSq1cZT3zab4qDDldL3lno-r8bYIfeRQTzvjPtET28WLXNkqgTjc5X97vCYFvRF3-RIvDxNdTDz5XVwg88acC0g-HmVSKon2lg1U2ihBLgDSbu31wrjQ-aKMczBbHziBt57IjYkCnw=w800-h800-s-no-gm?authuser=0',
      name: 'Салфетница Бургер, пластик',
      description: 'Материал: пластик, цвет: мультикор, размеры: 17.5x8.5 см',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/salfetnitsa-burger-plastik-120287269/?0&c=750000000&ref=shared_link'
    },
    {
      image: 'https://lh3.googleusercontent.com/pw/AP1GczPrcO_bE3hZK752OncDMnlHse6z6aGW-KcJicNtCzNHR-h8-rdO8mVy3Ka42f7X1JtWRItP1gE34-xgNQ2jWQCvMc-eCIvHLLCICivutll8eswEybR6Y3FaWau4aFiFNdD51XWffo3YDP4vIU0r_KXGoQ=w800-h800-s-no-gm?authuser=0',
      name: 'Чайная пара 422710881 300 керамика',
      description: 'Материал: керамика, цвет: белый, розовый, объем: 300.0 мл',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/chainaja-para-422710881-300-keramika-118872263/?0&c=750000000&ref=shared_link'
    },
    {
      image: 'https://lh3.googleusercontent.com/pw/AP1GczO6Z6-hNkBPb6B2obpTY1QSNSfdjs8q7h2ejJchnVSi_dM4I6L4m350e8Y37Z4d1a8QYtAvL9At6I9poQwY9GQeYyeStrAMJN6Gjgvf2zW9wURils85UNzbbgYvjma_VnOmaywJNznfxGv2h3BixNRV8g=w800-h800-s-no-gm?authuser=0',
      name: 'LZQLY KAWOO Waves зеленый',
      description: 'Тип: моно, тип питания: от сети, от аккумулятора, время работы: 5.0 ч.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/lzqly-kawoo-waves-zelenyi-120636556/?0&c=750000000&ref=shared_link'
    },
    {
      image: 'https://lh3.googleusercontent.com/pw/AP1GczM-LZzhCoSZhT8U8XWcZllJrfs0fBV2jGJwX84yihdXeCKyDZmtd_m5A2paa9fQJQ5PrgSsLZnE8B-0FT4FmRQFWL1lyZbjPY9DaP_a6dQCJRNBuNPQuBVIZtHS1xzQWnXkjVOfqaRKHcmFE2F3zoWgwQ=w885-h885-s-no-gm?authuser=0',
      name: 'Декоративная свеча Печенье 4 см, 4 шт',
      description: 'Назначение: декоративная свеча, форма: фигурная, количество: 4',
      rating: 0.0,
      link: 'https://kaspi.kz/shop/p/dekorativnaja-svecha-pechen-e-4-sm-4-sht-133876958/?0&c=750000000&ref=shared_link'
    },
    {
      image: 'https://lh3.googleusercontent.com/pw/AP1GczMeI_sI6sIqGr093v8GPIHn8Vfby3NjxuzMi709NyjJIACzjQTobeudRFtzoIgALJWNU0yEnjXhBnV1SvfD2ffa6NUenbZUmajuEulw2y2TZwzCZtL1FuNbx4--vmNhCBNxbo9KQJEP6qONa5jaGBBQSQ=w555-h925-s-no-gm?authuser=0',
      name: 'Sol de Janeiro Brazilian Crush Cheirosa 68 парфюмированный спрей 90 мл, для женщин',
      description: 'Тип: парфюмированный спрей, семейство: цветочные, фруктовые, пол: для женщин',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/sol-de-janeiro-brazilian-crush-cheirosa-68-parfjumirovannyi-sprei-90-ml-dlja-zhenschin-112590267/?c=750000000&m=3545002&isPromoted=true&ref=shared_link'
    },
    {
      image: 'https://lh3.googleusercontent.com/pw/AP1GczMA-uPVl9woxQ6KriFu2RrOgcNn9RMXR_iN3YTMMOBB7gJHG2HyFaonnRTO1u1RkceTotaJrltsqekWPDktWQBfQrJ51_KoobTFDj4gjFYn8xEgaAPWaeUeYmm1K6MYfmSaCj03sIGLMbNg4fxW84dT7Q=w558-h925-s-no-gm?authuser=0',
      name: 'Наушники Apple AirPods Max розовый',
      description: 'Активное шумоподавление, отличное качество звука, премиальный дизайн.',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/apple-airpods-max-rozovyi-101161561/?c=750000000&ref=shared_link'
    },
    {
      image: 'https://lh3.googleusercontent.com/pw/AP1GczPKXHQZe9A52NNebLa7FAx6kHLKh2eJFDB_alm-Drt_zMrHwr1n7MJ9gWGAh41qMbqAqvR1ooHqDOBVvAJcbMKXM3B3ph96EmOYlwET6QiUAtMnpN_0b6u9wMQKBs9z7r_3GRdAUQ1fM-5zY54-EmUAZw=w600-h600-s-no-gm?authuser=0',
      name: 'PERIPERA Ink Velvet тинт для губ коричневый, бежевый 25 Cinnamon Nude',
      description: 'Яркий стойкий цвет на весь день.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/peripera-ink-velvet-tint-dlja-gub-korichnevyi-bezhevyi-25-cinnamon-nude-105568125/?c=750000000&ref=shared_link'
    },
    {
      image: 'https://lh3.googleusercontent.com/pw/AP1GczPulcH1iuTb_lQ8uD8jbs1kgBG6rXFgZ9a-E4PalM4x6oKGAnRzy-zuoJt6f2n0nESynGw7IV_F692H8i5N_QFvnpJ4SWIpVW4s1Ixu0rIEGmMx1JKYoAC2gzRLb7AhCm-8RXShHZ7PphCUaNYWcY_R1g=w885-h885-s-no-gm?authuser=0',
      name: 'Мягкая игрушка Гусь обнимусь, высота 130 см, белый',
      description: 'Большая мягкая игрушка для обнимашек.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/mjagkaja-igrushka-gus-obnimus-vysota-130-sm-belyi-110625207/?0&c=750000000&ref=shared_link'
    }
  ];

  constructor() {}

  ngOnInit() {
    console.log('ProductsComponent загружен');
  }

  
}
