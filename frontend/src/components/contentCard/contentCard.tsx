import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./contentCard.css?inline";

interface CardProps {
  title?: string;
  style?: string;
}

export default component$((props: CardProps) => {
  useStylesScoped$(styles);

  return (
    <div className={`card ${props.style}`}>
      <span className="card-title">{props.title}</span>
    </div>
  );
});
