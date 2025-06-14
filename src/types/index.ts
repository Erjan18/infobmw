export interface BMWModel {
  id: string;
  name: string;
  series: string;
  year: number;
  bodyType: 'Седан' | 'Универсал' | 'Купе' | 'Кабриолет' | 'Хэтчбек' | 'Кроссовер' | 'Внедорожник';
  engineType: 'Бензиновый' | 'Дизельный' | 'Гибридный' | 'Электрический';
  price: string;
  image: string;
  gallery: string[];
  specifications: {
    engine: string;
    power: string;
    torque: string;
    acceleration: string;
    topSpeed: string;
    consumption: string;
    transmission: string;
    drivetrain: string;
  };
  description: string;
  history: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
}

export interface FilterOptions {
  series: string[];
  years: number[];
  bodyTypes: string[];
  engineTypes: string[];
}