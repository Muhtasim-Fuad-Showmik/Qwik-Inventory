import { component$, useMount$, Ref, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./chartJSGraph.css?inline";
import { Chart } from 'chart.js/auto';

interface GraphProps {
  data: object[];
  reference: Ref<Element>;
}

export default component$((props: GraphProps) => {
  useStylesScoped$(styles);

  useMount$(() => {
    new Chart(
      props.reference,
      {
        type: 'bar',
        data: {
          labels: props.data.map(row => Object.values(row)[0] ),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: props.data.map(row => Object.values(row)[1])
            }
          ]
        }
      }
    );
  });

  return (
    <div id="chartContent">
      Graph Placeholder
    </div>
  );
});
