import { component$, useClientEffect$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./chartJSGraph.css?inline";
import { Chart } from 'chart.js/auto';

interface GraphProps {
  height: string;
  width: string;
  chartData: object;
}

export default component$((props: GraphProps) => {
  useStylesScoped$(styles);

  const outputRef = useSignal<Element>();

  useClientEffect$(() => {
    new Chart(
      outputRef.value,
      {
        type: 'line',
        data: props.chartData
      }
    );
  });

  return (
    <>
      <canvas ref={outputRef} width={props.width} height={props.height}>
      </canvas>
    </>
  );
});
