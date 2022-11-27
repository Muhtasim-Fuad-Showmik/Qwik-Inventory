import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './card.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div className="card">
        
    </div>
  );
});
