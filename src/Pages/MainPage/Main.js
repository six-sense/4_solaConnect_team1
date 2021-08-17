import React, { useEffect, useState } from 'react';
import ascendingSort from 'utils/ascendingSort';
import { getEnDate, getKorDate } from 'utils/date';
import descendingSort from 'utils/descendingSort';
import { getOnlyNumbers } from 'utils/getOnlyNumber';
import { style } from './MainStyle';

function Main() {
  const [numberArray, setNumberArray] = useState([]);
  const [sortedNums, setSortedNums] = useState([]);
  const [kDate, setKdate] = useState('');
  const [eDate, setEdate] = useState('');

  let result;
  let filteredArray = getOnlyNumbers([...numberArray]);

  const onHandleNumbers = (e) => {
    let nums = e.target.value.split(',');
    setNumberArray(nums);
  };

  const onHandleAscendingSort = (e) => {
    e.preventDefault();
    result = ascendingSort(filteredArray);
    setSortedNums(result);
  };

  const onHandleDescendingSort = (e) => {
    e.preventDefault();
    result = descendingSort(filteredArray);
    setSortedNums(result);
  };

  useEffect(() => {
    const korDate = getKorDate();
    const enDate = getEnDate();

    setKdate(korDate);
    setEdate(enDate);
  }, []);

  return (
    <div>
      <MainContainer>
        <h2>{kDate}</h2>
        <h2>{eDate}</h2>
        <form>
          <InputField
            type="text"
            placeholder="숫자 입력"
            onChange={onHandleNumbers}
          />
          <ButtonContainer>
            <Button onClick={onHandleAscendingSort}>오름차순</Button>
            <Button onClick={onHandleDescendingSort}>내림차순</Button>
          </ButtonContainer>
        </form>
        <h2>{`정렬 결과: ${JSON.stringify(sortedNums)}`}</h2>
      </MainContainer>
    </div>
  );
}
const { MainContainer, InputField, ButtonContainer, Button } = style;

export default Main;
