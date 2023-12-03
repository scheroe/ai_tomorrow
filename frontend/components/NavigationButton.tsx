import React from 'react';
import { motion } from 'framer-motion';
import '../styles/buttonStyles.css'

interface NavigationButtonProps {
  label: string;
  onClick: () => void;
  tailClassName?: string;
  style?: React.CSSProperties;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  label,
  onClick,
  tailClassName = '',
  style = {},
}) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`custom-button ${tailClassName}`}
      style={style}
    >
      {label}
    </motion.div>
  );
};

export default NavigationButton;