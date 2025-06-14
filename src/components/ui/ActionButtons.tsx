import React, { useState } from 'react';
import { Button } from './Button';
import { Modal } from './Modal';
import { RequestForm } from '../forms/RequestForm';

interface ActionButtonsProps {
  modelName?: string;
  className?: string;
}

export function ActionButtons({ modelName, className = '' }: ActionButtonsProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isTestDriveModalOpen, setIsTestDriveModalOpen] = useState(false);

  return (
    <>
      <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
        <Button
          onClick={() => setIsQuoteModalOpen(true)}
          className="flex-1 bg-bmw-blue hover:bg-bmw-blue-dark text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Запросить предложение
        </Button>
        <Button
          onClick={() => setIsTestDriveModalOpen(true)}
          variant="outline"
          className="flex-1 border-2 border-bmw-blue text-bmw-blue hover:bg-bmw-blue hover:text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Записаться на тест-драйв
        </Button>
      </div>

      {/* Quote Modal */}
      <Modal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        title="Запросить предложение"
      >
        <RequestForm
          onClose={() => setIsQuoteModalOpen(false)}
          modelName={modelName}
          formType="quote"
        />
      </Modal>

      {/* Test Drive Modal */}
      <Modal
        isOpen={isTestDriveModalOpen}
        onClose={() => setIsTestDriveModalOpen(false)}
        title="Записаться на тест-драйв"
      >
        <RequestForm
          onClose={() => setIsTestDriveModalOpen(false)}
          modelName={modelName}
          formType="testdrive"
        />
      </Modal>
    </>
  );
}