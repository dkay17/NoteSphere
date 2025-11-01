import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ fullScreen = false }) => {
  const content = (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full"
      />
      <p className="text-gray-600 font-medium">Loading...</p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {content}
      </div>
    );
  }

  return content;
};

export default Loader;
