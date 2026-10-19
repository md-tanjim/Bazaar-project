


'use client';

import { useState, useEffect } from 'react';

const DateShow = () => {
  const [date, setDate] = useState<string>('');

  useEffect(() => {
  
    const formattedDate = new Date().toLocaleDateString("bn-BD", { 
      dateStyle: "full" 
    });
    setDate(formattedDate);
  }, []);

  return (
    <div>
      {date}
    </div>
  );
};

export default DateShow;
