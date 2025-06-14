import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search, X } from 'lucide-react';
import { bmwModels } from '../data/models';
import { BMWModel } from '../types';
import { Button } from '../components/ui/Button';

export function Catalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeries, setSelectedSeries] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedBodyType, setSelectedBodyType] = useState<string>('');
  const [selectedEngineType, setSelectedEngineType] = useState<string>('');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique filter options
  const filterOptions = useMemo(() => {
    const series = [...new Set(bmwModels.map(model => model.series))].sort();
    const years = [...new Set(bmwModels.map(model => model.year))].sort((a, b) => b - a);
    const bodyTypes = [...new Set(bmwModels.map(model => model.bodyType))].sort();
    const engineTypes = [...new Set(bmwModels.map(model => model.engineType))].sort();
    
    return { series, years, bodyTypes, engineTypes };
  }, []);

  // Filter models based on search and filters
  const filteredModels = useMemo(() => {
    return bmwModels.filter((model: BMWModel) => {
      const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           model.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSeries = !selectedSeries || model.series === selectedSeries;
      const matchesYear = !selectedYear || model.year.toString() === selectedYear;
      const matchesBodyType = !selectedBodyType || model.bodyType === selectedBodyType;
      const matchesEngineType = !selectedEngineType || model.engineType === selectedEngineType;
      
      return matchesSearch && matchesSeries && matchesYear && matchesBodyType && matchesEngineType;
    });
  }, [searchTerm, selectedSeries, selectedYear, selectedBodyType, selectedEngineType]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSeries('');
    setSelectedYear('');
    setSelectedBodyType('');
    setSelectedEngineType('');
  };

  const hasActiveFilters = searchTerm || selectedSeries || selectedYear || selectedBodyType || selectedEngineType;

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 animate-slide-up">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Каталог BMW
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Изучите полную линейку автомобилей BMW и найдите свой идеальный автомобиль
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Поиск автомобилей..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
            />
          </div>

          {/* Filter Toggle Button (Mobile) */}
          <div className="flex justify-center lg:hidden">
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="flex items-center space-x-2"
            >
              <Filter className="w-4 h-4" />
              <span>Фильтры</span>
              {hasActiveFilters && (
                <span className="bg-bmw-blue text-white text-xs px-2 py-1 rounded-full">
                  {[selectedSeries, selectedYear, selectedBodyType, selectedEngineType].filter(Boolean).length}
                </span>
              )}
            </Button>
          </div>

          {/* Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <select
                value={selectedSeries}
                onChange={(e) => setSelectedSeries(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
              >
                <option value="">Все серии</option>
                {filterOptions.series.map(series => (
                  <option key={series} value={series}>{series}</option>
                ))}
              </select>

              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
              >
                <option value="">Все годы</option>
                {filterOptions.years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>

              <select
                value={selectedBodyType}
                onChange={(e) => setSelectedBodyType(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
              >
                <option value="">Все типы кузова</option>
                {filterOptions.bodyTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              <select
                value={selectedEngineType}
                onChange={(e) => setSelectedEngineType(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
              >
                <option value="">Все типы двигателей</option>
                {filterOptions.engineTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {hasActiveFilters && (
              <div className="flex justify-center mt-4">
                <Button
                  onClick={clearFilters}
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <X className="w-4 h-4" />
                  <span>Очистить фильтры</span>
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300">
            Найдено: <span className="font-semibold">{filteredModels.length}</span> {
              filteredModels.length === 1 ? 'автомобиль' : 
              filteredModels.length < 5 ? 'автомобиля' : 'автомобилей'
            }
          </p>
        </div>

        {/* Models Grid */}
        {filteredModels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredModels.map((model, index) => (
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
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
                    <span>{model.bodyType}</span>
                    <span>•</span>
                    <span>{model.engineType}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {model.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-bmw-blue">
                      {model.price}
                    </span>
                    <Button asChild variant="outline" size="sm">
                      <Link to={`/catalog/${model.id}`}>
                        Подробнее
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Автомобили не найдены
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Попробуйте изменить параметры поиска или фильтры
            </p>
            <Button onClick={clearFilters} variant="outline">
              Очистить все фильтры
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}