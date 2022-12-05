import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from '@builder.io/qwik-city';
import styles from './procurement.css?inline';

export default component$(() => {
    useStylesScoped$(styles);

  return (
    <div class="w-100 h-100">
      <div className="p-10">
        <p>Hey Fuad!</p>
        <h1>Procurement</h1>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Procurement',
};