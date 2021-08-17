import React, { useEffect, useState } from 'react';
import { getEnDate, getKorDate } from 'utils/date';

function Date() {
  const [kDate, setKdate] = useState('');
  const [eDate, setEdate] = useState('');

  useEffect(() => {
    const korDate = getKorDate();
    const enDate = getEnDate();

    setKdate(korDate);
    setEdate(enDate);
  }, []);

  return (
    <div>
      <h2>{kDate}</h2>
      <h2>{eDate}</h2>
    </div>
  );
}

export default Date;
