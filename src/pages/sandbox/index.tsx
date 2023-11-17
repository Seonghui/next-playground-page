import Head from "next/head";
import { useCounter } from "@/hooks/useCounter";
import { usePosts } from "@/hooks/api/usePosts";
import Confirm from "@/components/organisms/Confirm";
import { useModal } from "@ebay/nice-modal-react";
import { useCallback } from "react";

function Index() {
  const { counter, increment, decrement, incrementByAmount } = useCounter();
  const { data } = usePosts();

  const confirmModal = useModal(Confirm);
  const handlerUseConfirm = useCallback(async () => {
    const result = await confirmModal.show({
      title: "알람",
      message: "Use Confirm!!!!",
      onConfirm: () => {
        console.log("confirmed!!");
      },
    });

    console.log("confirm result :>> ", result);
  }, [confirmModal]);

  const getRandom = async () => {
    const res = await fetch("/random").then((res) => res.json());
  };

  return (
    <>
      <Head>
        <title key="about">About Page</title>
        <title key="about">About Page</title>
        <title key="about">About Page</title>
      </Head>
      <button onClick={getRandom}>랜덤데이터 불러오기</button>
      <button onClick={handlerUseConfirm}>Confirm</button>
      <div>
        Counter: {counter.value}
        <br />
        <br />
        <span onClick={increment}>increment</span>
        <br />
        <span onClick={decrement}>decrement</span>
        <br />
        <span onClick={() => incrementByAmount(10)}>incrementByAmount(10)</span>
      </div>

      <div>Hello world</div>
      <img src="https://dummyimage.com/600x1000/000/fff" alt="" />
      <img src="https://dummyimage.com/600x1000/000/fff" alt="" />
    </>
  );
}

export default Index;
