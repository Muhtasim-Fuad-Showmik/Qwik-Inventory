import { component$, useMount$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./chartJSGraph.css?inline";

interface GraphProps {
  chartData: object;
}

export default component$((props: GraphProps) => {
  useStylesScoped$(styles);

  useMount$(() => {
  });

  return (
    <>
      <p>Graph Placeholder</p>
    </>
  );
});
