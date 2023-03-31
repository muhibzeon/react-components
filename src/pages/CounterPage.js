import Button from "../components/Button";
import useCounter from "../hooks/use-counter";

function CounterPage({ initialCounter }) {
  const { count, increment } = useCounter(initialCounter);

  return (
    <div>
      The current Count is {count}
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}

export default CounterPage;
