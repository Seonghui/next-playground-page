import Head from "next/head";
import { useCounter } from "@/hooks/useCounter";
import { usePosts } from "@/hooks/api/usePosts";

function Index() {
  const { counter, increment, decrement, incrementByAmount } = useCounter();
  const { data } = usePosts();
  const getRandom = async () => {
    const res = await fetch("/random").then((res) => res.json());
    console.log(res.data);
  };

  console.log(data);

  return (
    <>
      <Head>
        <title key="about">About Page</title>
        <title key="about">About Page</title>
        <title key="about">About Page</title>
      </Head>
      <button onClick={getRandom}>랜덤데이터 불러오기</button>
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
