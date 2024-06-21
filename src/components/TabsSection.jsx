import Button from "./Button/Button";

export default function TabsSection({ active, onChang }) {
  return (
    <section style={{ marginBottom: "1rem" }}>
      <Button isActive={active === "main"} onClick={() => onChang("main")}>
        Главная
      </Button>
      <Button
        isActive={active === "feedback"}
        onClick={() => onChang("feedback")}
      >
        Обратная связь
      </Button>
      <Button isActive={active === "effect"} onClick={() => onChang("effect")}>
        Effect
      </Button>
    </section>
  );
}
