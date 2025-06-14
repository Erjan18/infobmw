import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, Search } from 'lucide-react';
import { newsArticles } from '../data/news';
import { Button } from '../components/ui/Button';

export function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // Get unique categories
  const categories = useMemo(() => {
    return [...new Set(newsArticles.map(article => article.category))].sort();
  }, []);

  // Filter articles
  const filteredArticles = useMemo(() => {
    return newsArticles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || article.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 animate-slide-up">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Новости BMW
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Следите за последними новостями, обновлениями и инновациями от BMW
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Поиск новостей..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
            >
              <option value="">Все категории</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-300">
            Найдено: <span className="font-semibold">{filteredArticles.length}</span> {
              filteredArticles.length === 1 ? 'статья' : 
              filteredArticles.length < 5 ? 'статьи' : 'статей'
            }
          </p>
        </div>

        {/* Featured Article */}
        {filteredArticles.length > 0 && (
          <div className="mb-12 animate-slide-up">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={filteredArticles[0].image}
                    alt={filteredArticles[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-sm text-bmw-blue font-medium bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                      {filteredArticles[0].category}
                    </span>
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(filteredArticles[0].date).toLocaleDateString('ru-RU')}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {filteredArticles[0].title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {filteredArticles[0].excerpt}
                  </p>
                  <Button asChild>
                    <Link to={`/news/${filteredArticles[0].id}`}>
                      Читать полностью
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        {filteredArticles.length > 1 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(1).map((article, index) => (
              <article 
                key={article.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group animate-slide-up"
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
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-bmw-blue font-medium bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="w-4 h-4" />
                      <time>{new Date(article.date).toLocaleDateString('ru-RU')}</time>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to={`/news/${article.id}`}>
                      Читать далее
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        ) : filteredArticles.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Новости не найдены
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Попробуйте изменить параметры поиска
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
              }} 
              variant="outline"
            >
              Очистить фильтры
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}