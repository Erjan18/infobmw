import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Award, Globe } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ActionButtons } from '../components/ui/ActionButtons';
import { bmwModels } from '../data/models';
import { newsArticles } from '../data/news';

export function Home() {
  const featuredModels = bmwModels.slice(0, 3);
  const latestNews = newsArticles.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://motor.ru/imgs/2024/05/08/07/6460671/ea354a10ec13c7443a1b2c42ff40b00888742c7b.jpg')`
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Радость вождения.
              <br />
              <span className="text-bmw-blue-light">Создано для вас.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Откройте для себя мир BMW — где инновации встречаются с элегантностью, 
              а каждая поездка становится незабываемым опытом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group">
                <Link to="/catalog">
                  Изучить модели
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900">
                <a href="#features">
                  Узнать больше
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Почему выбирают BMW
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Более века инноваций, качества и превосходства в автомобильной индустрии
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: 'Инновации',
                description: 'Передовые технологии и инженерные решения в каждом автомобиле'
              },
              {
                icon: Shield,
                title: 'Безопасность',
                description: 'Высочайшие стандарты безопасности и защиты для вас и ваших близких'
              },
              {
                icon: Award,
                title: 'Качество',
                description: 'Непревзойденное качество сборки и материалов премиум-класса'
              },
              {
                icon: Globe,
                title: 'Надежность',
                description: 'Глобальная сеть сервиса и поддержки в более чем 140 странах'
              }
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-bmw-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-bmw-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Models */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Рекомендуемые модели
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Откройте для себя наши самые популярные модели
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredModels.map((model, index) => (
              <div 
                key={model.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={model.image}
                    alt={model.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-bmw-blue font-medium">{model.series}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{model.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {model.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {model.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-bmw-blue">
                      {model.price}
                    </span>
                    <Button asChild variant="outline" size="sm">
                      <Link to={`/catalog/${model.id}`}>
                        Подробнее
                      </Link>
                    </Button>
                  </div>
                  <ActionButtons modelName={model.name} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/catalog">
                Посмотреть все модели
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Последние новости
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Будьте в курсе последних событий и инноваций BMW
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((article, index) => (
              <article 
                key={article.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-bmw-blue font-medium">{article.category}</span>
                    <time className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(article.date).toLocaleDateString('ru-RU')}
                    </time>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm">
                      <Link to={`/news/${article.id}`}>
                        Читать далее
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/news">
                Все новости
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-bmw-blue to-bmw-blue-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Готовы испытать радость вождения BMW?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Запишитесь на тест-драйв или получите персональное предложение уже сегодня
            </p>
            <ActionButtons className="max-w-md mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}