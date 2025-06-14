import React, { useState } from 'react';
import { User, Phone, Mail, Car, MessageSquare } from 'lucide-react';
import { Button } from '../ui/Button';
import toast from 'react-hot-toast';

interface RequestFormProps {
  onClose: () => void;
  modelName?: string;
  formType: 'quote' | 'testdrive';
}

export function RequestForm({ onClose, modelName, formType }: RequestFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    model: modelName || '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    const successMessage = formType === 'quote' 
      ? 'Заявка на предложение отправлена! Мы свяжемся с вами в ближайшее время.'
      : 'Заявка на тест-драйв отправлена! Мы свяжемся с вами для согласования времени.';

    toast.success(successMessage);
    setIsSubmitting(false);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const title = formType === 'quote' ? 'Запросить предложение' : 'Записаться на тест-драйв';

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-6">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h4>
        <p className="text-gray-600 dark:text-gray-300">
          {formType === 'quote' 
            ? 'Получите персональное предложение на автомобиль BMW'
            : 'Запишитесь на тест-драйв и почувствуйте радость вождения BMW'
          }
        </p>
      </div>

      {/* Name */}
      <div className="relative">
        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          name="name"
          placeholder="Ваше имя *"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
        />
      </div>

      {/* Phone */}
      <div className="relative">
        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="tel"
          name="phone"
          placeholder="Телефон *"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
        />
      </div>

      {/* Email */}
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-bmw-blue focus:border-transparent"
        />
      </div>

      {/* Model Selection */}
      <div className="relative">
        <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <select
          name="model"
          value={formData.model}
          onChange={handleChange}
          required
          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-bmw-blue focus:border-transparent appearance-none"
        >
          <option value="">Выберите модель *</option>
          <option value="BMW 3 Series">BMW 3 Series</option>
          <option value="BMW 5 Series">BMW 5 Series</option>
          <option value="BMW 7 Series">BMW 7 Series</option>
          <option value="BMW X3">BMW X3</option>
          <option value="BMW X5">BMW X5</option>
          <option value="BMW i4">BMW i4</option>
        </select>
      </div>

      {/* Message */}
      <div className="relative">
        <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
        <textarea
          name="message"
          placeholder="Дополнительные пожелания"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-bmw-blue focus:border-transparent resize-none"
        />
      </div>

      {/* Submit Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-bmw-blue hover:bg-bmw-blue-dark text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
        >
          {isSubmitting ? 'Отправка...' : title}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          className="flex-1 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium py-3 px-6 rounded-lg transition-all duration-200"
        >
          Отмена
        </Button>
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
        * Обязательные поля. Нажимая кнопку "{title}", вы соглашаетесь с обработкой персональных данных.
      </p>
    </form>
  );
}