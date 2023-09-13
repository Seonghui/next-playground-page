import useSWR from "swr";

let state = {
  value: 0,
};

export const useCounter = () => {
  //data는 현재 상태값
  //mutate는 상태값 갱신
  const { data, mutate } = useSWR("counter", () => state);

  //상태 변화 유발
  const increment = () => {
    state = {
      ...state,
      value: state.value + 1,
    };
    mutate(state);
  };
  const decrement = () => {
    state = {
      ...state,
      value: state.value - 1,
    };
    mutate(state);
  };
  const incrementByAmount = (amount) => {
    state = {
      ...state,
      value: state.value + amount,
    };
    mutate(state);
  };

  return {
    //첫 호출시 초기값은 undefined로 세팅되었다가 이후 state값으로 설정되므로
    //undefined일때 state로 값을 설정해준다
    counter: data ?? state,

    increment,
    decrement,
    incrementByAmount,
  };
};
