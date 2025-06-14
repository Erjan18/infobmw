import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Share2 } from 'lucide-react';
import { newsArticles } from '../data/news';
import { Button } from '../components/ui/Button';

export function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  
  const article = newsArticles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Статья не найдена
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Запрашиваемая статья не существует или была удалена.
          </p>
          <Button asChild>
            <Link to="/news">
              Вернуться к новостям
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedArticles = newsArticles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Button asChild variant="outline" size="sm">
            <Link to="/news" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Назад к новостям</span>
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <article className="animate-slide-up">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-sm text-bmw-blue font-medium bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
              {article.category}
            </span>
            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <time>{new Date(article.date).toLocaleDateString('ru-RU', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</time>
            </div>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Featured Image */}
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl mb-8">
            <img 
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              {article.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Share2 className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600 dark:text-gray-400">Поделиться:</span>
              </div>
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-bmw-blue transition-colors duration-200">
                  Facebook
                </button>
                <button className="text-gray-400 hover:text-bmw-blue transition-colors duration-200">
                  Twitter
                </button>
                <button className="text-gray-400 hover:text-bmw-blue transition-colors duration-200">
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-12 animate-slide-up">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Похожие статьи
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <article key={relatedArticle.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img 
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-bmw-blue font-medium bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded-full">
                        {relatedArticle.category}
                      </span>
                      <time className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(relatedArticle.date).toLocaleDateString('ru-RU')}
                      </time>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                    <Button asChild variant="outline" size="sm" className="text-xs">
                      <Link to={`/news/${relatedArticle.id}`}>
                        Читать далее
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}