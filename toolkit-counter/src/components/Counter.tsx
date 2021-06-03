import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from 'stores';
import { decrease, increase } from 'stores/counter/counter.slice';

const Counter = (): JSX.Element => {
  const dispatch = useDispatch();
  const { value } = useSelector((state: RootState) => state.counterSlice);

  return (
    <CounterWrap>
      <button onClick={() => dispatch(decrease())}>감소</button>
      <button>{value}</button>
      <button onClick={() => dispatch(increase())}>증가</button>
    </CounterWrap>
  );
}

const CounterWrap = styled.div`
  display: flex;
  align-items: center;
`;

export default Counter;