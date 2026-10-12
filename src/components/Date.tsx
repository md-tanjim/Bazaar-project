// 'use client';
// import React from 'react';

// const DateShow = () => {
//     const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" })
//     return (
//         <div suppressHydrationWarning>
//             {date}
            
//         </div>
//     );
// };

// export default DateShow;


'use client';

import { useState, useEffect } from 'react';

const DateShow = () => {
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    // This runs strictly on the client side after mounting
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
