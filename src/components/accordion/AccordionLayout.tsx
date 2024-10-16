import React, { ReactNode, useRef, useState, useEffect } from 'react';
import styles from './AccordionLayout.module.css'

interface AccordionData {
  data: {
    id?: string;
    password?: string;
    nickname?: string;
    title?: string;
    content?: string;
  };
  name: string;
  children?: ReactNode;
}

const AccordionLayout: React.FC<AccordionData> = ({ data, name, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const accordionContentRef = useRef<HTMLUListElement | null>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (accordionContentRef.current) {
      if (isOpen) {
        accordionContentRef.current.style.maxHeight = `${accordionContentRef.current.scrollHeight}px`;
      } else {
        accordionContentRef.current.style.maxHeight = '0px';
      }
    }
  }, [isOpen]);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleToggle}>
        <h3>{name} {isOpen ? '-' : '+'}</h3>
      </div>
      <ul
        ref={accordionContentRef}
        className={styles.accordionContent}
      >
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>{key}: {value}</li>
        ))}

      </ul>
        {children && <div className="accordion-children">{children}</div>}
    </div>
  );
};

export default AccordionLayout;
