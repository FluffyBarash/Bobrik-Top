import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import { useEffect, useState, useCallback } from "react";
import useInput from "./hooks/useinput";

export default function EffectsSections() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const input = useInput();

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <h3>Effects</h3>
      <Button onClick={() => setIsModalOpen(!isModalOpen)}>Open Info</Button>
      <Modal open={isModalOpen}>
        <h3>Hello from moadal!</h3>
        <p>
          Если в VS Code я наберу «lorem», а затем нажму Enter, будет
          сгенерирован абзац lorem ipsum. Единственная проблема заключается в
          том, что абзац выглядит как одна очень длинная строка текста, а не в
          несколько строк в текстовом редакторе. Есть ли настройка, которую я
          могу изменить, чтобы она автоматически генерировала мой lorem ipsum в
          нескольких строках?
        </p>
        <Button onClick={() => setIsModalOpen(!isModalOpen)}>Close</Button>
      </Modal>
      {loading && <p>Loading...</p>}
      {!loading && (
        <>
          <input type="text" className="control" {...input} />
          <h6>{input.value}</h6>
          <ul>
            {users
              .filter((user) => user.name.toLowerCase().includes(input.value))
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </div>
  );
}
