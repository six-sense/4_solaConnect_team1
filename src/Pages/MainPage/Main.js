import Date from 'Components/Date';
import React, { useState } from 'react';
import ascendingSort from 'utils/ascendingSort';

import descendingSort from 'utils/descendingSort';
import { getOnlyNumbers } from 'utils/getOnlyNumber';
import { style } from './MainStyle';

function Main() {
  const [numberArray, setNumberArray] = useState([]);
  const [ascendNums, setAscendNums] = useState([]);
  const [descendNums, setDescendNums] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  let ascendResult;
  let descendResult;
  let filteredArray = getOnlyNumbers([...numberArray]);

  const onHandleNumbers = (e) => {
    let nums = e.target.value.split(',');
    setNumberArray(nums);
  };

  const onHandleAscendingSort = (e) => {
    e.preventDefault();
    ascendResult = ascendingSort(filteredArray);
    setAscendNums(ascendResult);
  };

  const onHandleDescendingSort = (e) => {
    e.preventDefault();
    descendResult = descendingSort(filteredArray);
    setDescendNums(descendResult);
  };

  const onHandleSort = (e) => {
    onHandleAscendingSort(e);
    setIsDisabled(true);

    setTimeout(() => {
      onHandleDescendingSort(e);
      setIsDisabled(false);
    }, 3000);
  };

  console.log('isDisabled: ', isDisabled);
  return (
    <MainContainer>
      <Date />
      <form>
        <InputField
          type="text"
          placeholder="숫자 입력"
          onChange={onHandleNumbers}
        />
        <ButtonContainer>
          <Button
            onClick={onHandleSort}
            disabled={isDisabled}
            isDisabled={isDisabled}
          >
            실행
          </Button>
        </ButtonContainer>
      </form>

      <h2>{`오름차순 정렬 결과: ${JSON.stringify(ascendNums)}`}</h2>
      <h2>{`내림차순 정렬 결과: ${JSON.stringify(descendNums)}`}</h2>
    </MainContainer>
  );
}
const { MainContainer, InputField, ButtonContainer, Button } = style;

export default Main;
