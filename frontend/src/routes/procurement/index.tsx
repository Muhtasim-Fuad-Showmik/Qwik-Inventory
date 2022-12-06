import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from '@builder.io/qwik-city';
import styles from './procurement.css?inline';

export default component$(() => {
    useStylesScoped$(styles);

  return (
    <div class="w-100 h-100">
      <div className="row">
        <div className="title-block">
          <p>Hey Fuad!</p>
          <h1>Procurement</h1>
        </div>

        <div className="right-block row">
          <button className="btn md secondary">Export to Excel</button>
          <button className="btn md secondary">Import Orders</button>
          <button className="btn md primary">New Order</button>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Procurement',
};