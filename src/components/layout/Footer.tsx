import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-bmw-blue p-2 rounded-lg">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">BMW</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Официальный представитель BMW в Кыргызстане. Премиальные автомобили, 
              передовые технологии и исключительный сервис.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-bmw-blue-light transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-bmw-blue-light transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-bmw-blue-light transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-bmw-blue-light transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog" className="text-gray-300 hover:text-bmw-blue-light transition-colors duration-200 text-sm">
                  Каталог автомобилей
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-bmw-blue-light transition-colors duration-200 text-sm">
                  Новости
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-bmw-blue-light transition-colors duration-200 text-sm">
                  О компании
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-bmw-blue-light transition-colors duration-200 text-sm">
                  Тест-драйв
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-bmw-blue-light transition-colors duration-200 text-sm">
                  Сервис
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-bmw-blue-light transition-colors duration-200 text-sm">
                  Продажа автомобилей
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-bmw-blue-light transition-colors duration-200 text-sm">
                  Сервисное обслуживание
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-bmw-blue-light transition-colors duration-200 text-sm">
                  Запчасти и аксессуары
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-bmw-blue-light transition-colors duration-200 text-sm">
                  Финансирование
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-bmw-blue-light transition-colors duration-200 text-sm">
                  Страхование
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-bmw-blue-light mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Бишкек. ул Ауезова 20
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-bmw-blue-light flex-shrink-0" />
                <span className="text-gray-300 text-sm">+996 700 522 255</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-bmw-blue-light flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@bmw-bish.kg</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 BMW. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-bmw-blue-light transition-colors duration-200 text-sm">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-400 hover:text-bmw-blue-light transition-colors duration-200 text-sm">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}