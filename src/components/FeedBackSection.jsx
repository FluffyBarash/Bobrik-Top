import Button from "./Button/Button";
import { useState, useRef } from "react";

function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setShow(true);
    }
  }

  return (
    <div>
      <h3>Input value: {show && input.current.value}</h3>
      <input
        ref={input}
        type="text"
        onKeyDown={handleKeyDown}
        className="control"
      />
    </div>
  );
}

export default function FeedBackSection() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("help");
  const [hasError, setHasError] = useState(false);

  function toggleError() {
    setHasError(!hasError);
  }

  return (
    <section>
      <h3>Обратная связь</h3>

      <Button onClick={toggleError}>Toggle Error</Button>

      <form style={{ marginBottom: "1rem" }}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          className="control"
          value={name}
          onChange={(element) => {
            setName(element.target.value);
            setHasError(element.target.value.trim().length === 0);
          }}
          style={{ border: hasError ? "1px solid red" : null }}
        ></input>
        <label htmlFor="reason">Причина обращения:</label>
        <select
          id="reason"
          className="control"
          value={reason}
          onChange={(element) => setReason(element.target.value)}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>
        <Button disabled={hasError}>Отправить</Button>
        <p>Name: {name}</p>
        <p>Reason: {reason}</p>
      </form>
      <hr />
      <StateVsRef />
    </section>
  );
}
