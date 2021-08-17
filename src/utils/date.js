const days = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
];

const now = new Date();

export const getKorDate = () => {
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const dayName = days[now.getDay()];

  return `${year}년 ${month}월 ${date}일 ${dayName}`;
};

export const getEnDate = () => {
  const enDateForm = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
  }).format(now);

  const enDateArr = enDateForm.split(',');

  return `${enDateArr[0]}${enDateArr[1]},${enDateArr[2]}`;
};
