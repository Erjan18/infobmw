import React from 'react';
import { Calendar, Award, Globe, Users, Zap, Shield } from 'lucide-react';

export function About() {
  const milestones = [
    {
      year: '1916',
      title: 'Основание BMW',
      description: 'Основание Bayerische Motoren Werke в Мюнхене как производителя авиационных двигателей'
    },
    {
      year: '1928',
      title: 'Первый автомобиль',
      description: 'Выпуск первого автомобиля BMW — модели 3/15 PS'
    },
    {
      year: '1972',
      title: 'BMW 5 Series',
      description: 'Дебют BMW 5 Series, ставшей эталоном бизнес-седанов'
    },
    {
      year: '1975',
      title: 'BMW 3 Series',
      description: 'Запуск BMW 3 Series — самой успешной линейки компании'
    },
    {
      year: '1999',
      title: 'BMW X5',
      description: 'Революционный BMW X5 создает новый сегмент SAV'
    },
    {
      year: '2013',
      title: 'BMW i Series',
      description: 'Запуск электрической линейки BMW i с моделями i3 и i8'
    },
    {
      year: '2021',
      title: 'Электрическое будущее',
      description: 'Объявление стратегии полной электрификации к 2030 году'
    }
  ];

  const values = [
    {
      icon: Zap,
      title: 'Инновации',
      description: 'Мы постоянно внедряем передовые технологии для создания автомобилей будущего'
    },
    {
      icon: Award,
      title: 'Качество',
      description: 'Непревзойденное качество в каждой детали — наш главный приоритет'
    },
    {
      icon: Shield,
      title: 'Безопасность',
      description: 'Высочайшие стандарты безопасности для защиты вас и ваших близких'
    },
    {
      icon: Globe,
      title: 'Устойчивость',
      description: 'Ответственный подход к экологии и устойчивому развитию'
    }
  ];

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            О бренде BMW
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Более века BMW определяет стандарты в автомобильной индустрии, создавая автомобили, 
            которые воплощают радость вождения, инновационные технологии и непревзойденное качество.
          </p>
        </div>

        {/* Brand Story */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Наша история
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  BMW была основана в 1916 году в Мюнхене как производитель авиационных двигателей. 
                  Название Bayerische Motoren Werke (Баварские моторные заводы) отражает наши 
                  корни в авиационной индустрии, где точность и производительность были критически важны.
                </p>
                <p>
                  В 1928 году мы выпустили наш первый автомобиль, и с тех пор BMW стала синонимом 
                  спортивной элегантности, инновационных технологий и радости вождения. Каждый 
                  автомобиль BMW создается с страстью к совершенству и вниманием к деталям.
                </p>
                <p>
                  Сегодня BMW Group включает бренды BMW, MINI и Rolls-Royce, представляя весь 
                  спектр премиальной мобильности — от спортивных автомобилей до роскошных седанов 
                  и электрических моделей будущего.
                </p>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://di-uploads-pod16.dealerinspire.com/bmwofpeoria/uploads/2019/09/2020-BMW-M5-Driving-Down-Highway.jpg"
                alt="BMW История"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Наши ценности
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Принципы, которые направляют нашу работу и определяют будущее мобильности
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-bmw-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-bmw-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ключевые вехи
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Важнейшие моменты в истории BMW, которые сформировали компанию сегодня
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-bmw-blue/20 hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`flex flex-col lg:flex-row items-center gap-8 animate-slide-up ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold text-bmw-blue mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:block w-4 h-4 bg-bmw-blue rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>
                  
                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-bmw-blue to-bmw-blue-dark text-white rounded-xl p-8 lg:p-12 animate-slide-up">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              BMW сегодня
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Цифры, которые отражают наш глобальный успех и влияние на автомобильную индустрию
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '100+', label: 'Лет инноваций' },
              { number: '140+', label: 'Стран присутствия' },
              { number: '2.5M+', label: 'Автомобилей в год' },
              { number: '133K+', label: 'Сотрудников по всему миру' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="mt-16 text-center animate-slide-up">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Наше видение будущего
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              BMW стремится к устойчивому будущему мобильности. К 2030 году мы планируем 
              полную электрификацию нашей линейки, внедрение автономного вождения и 
              создание экосистемы умной мобильности, которая сделает каждую поездку 
              более эффективной, безопасной и приятной.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <Zap className="w-12 h-12 text-bmw-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Электрификация
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Полный переход на электрические и гибридные технологии
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <Users className="w-12 h-12 text-bmw-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Автономность
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Развитие технологий автономного вождения для безопасности
                </p>
              </div>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <Globe className="w-12 h-12 text-bmw-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Устойчивость
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Углеродная нейтральность во всех аспектах производства
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}