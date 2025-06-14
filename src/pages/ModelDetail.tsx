import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Fuel, Settings, Gauge, Clock, Zap, Car } from 'lucide-react';
import { bmwModels } from '../data/models';
import { Button } from '../components/ui/Button';
import { ActionButtons } from '../components/ui/ActionButtons';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';

export function ModelDetail() {
  const { id } = useParams<{ id: string }>();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const model = bmwModels.find(m => m.id === id);

  if (!model) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Модель не найдена
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Запрашиваемая модель не существует или была удалена.
          </p>
          <Button asChild>
            <Link to="/catalog">
              Вернуться к каталогу
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const specIcons = {
    engine: Settings,
    power: Zap,
    torque: Gauge,
    acceleration: Clock,
    topSpeed: Gauge,
    consumption: Fuel,
    transmission: Car,
    drivetrain: Car
  };

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Button asChild variant="outline" size="sm">
            <Link to="/catalog" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Назад к каталогу</span>
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4 animate-slide-up">
            {/* Main Image */}
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
              <img 
                src={model.gallery[selectedImageIndex]}
                alt={`${model.name} - изображение ${selectedImageIndex + 1}`}
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {model.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-w-16 aspect-h-9 overflow-hidden rounded-lg transition-all duration-200 ${
                    selectedImageIndex === index 
                      ? 'ring-2 ring-bmw-blue' 
                      : 'hover:opacity-75'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`${model.name} - миниатюра ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Model Info */}
          <div className="space-y-6 animate-slide-in-right">
            {/* Basic Info */}
            <div>
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-sm text-bmw-blue font-medium bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                  {model.series}
                </span>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{model.year}</span>
                </div>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {model.name}
              </h1>
              <div className="flex items-center space-x-6 mb-4 text-gray-600 dark:text-gray-400">
                <span className="flex items-center space-x-2">
                  <Car className="w-4 h-4" />
                  <span>{model.bodyType}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Fuel className="w-4 h-4" />
                  <span>{model.engineType}</span>
                </span>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {model.description}
              </p>
            </div>

            {/* Price */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Стоимость
              </h3>
              <p className="text-3xl font-bold text-bmw-blue mb-4">
                {model.price}
              </p>
              <ActionButtons modelName={model.name} />
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-12 animate-slide-up">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Технические характеристики
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(model.specifications).map(([key, value]) => {
              const Icon = specIcons[key as keyof typeof specIcons] || Settings;
              const labels = {
                engine: 'Двигатель',
                power: 'Мощность',
                torque: 'Крутящий момент',
                acceleration: 'Разгон 0-100 км/ч',
                topSpeed: 'Максимальная скорость',
                consumption: 'Расход топлива',
                transmission: 'Коробка передач',
                drivetrain: 'Привод'
              };

              return (
                <div key={key} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-bmw-blue/10 p-2 rounded-lg">
                      <Icon className="w-5 h-5 text-bmw-blue" />
                    </div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {labels[key as keyof typeof labels]}
                    </h3>
                  </div>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* History Section */}
        <div className="mt-12 animate-slide-up">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              История модели
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {model.history}
            </p>
          </div>
        </div>

        {/* Related Models */}
        <div className="mt-12 animate-slide-up">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Похожие модели
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bmwModels
              .filter(m => m.id !== model.id && (m.series === model.series || m.bodyType === model.bodyType))
              .slice(0, 3)
              .map((relatedModel) => (
                <div key={relatedModel.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img 
                      src={relatedModel.image}
                      alt={relatedModel.name}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-bmw-blue font-medium">{relatedModel.series}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{relatedModel.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {relatedModel.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                      {relatedModel.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-bmw-blue">
                        {relatedModel.price}
                      </span>
                      <Button asChild variant="outline" size="sm">
                        <Link to={`/catalog/${relatedModel.id}`}>
                          Подробнее
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}