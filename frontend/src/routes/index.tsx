import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';
import Card from '../components/card/card';

export default component$(() => {
  return (
    <div>

      <p class="greeting">Hey Fuad!</p>
      <h1>
       Overview
      </h1>

      <div className="d-flex justify-content-space-between mb-20">
		<div className="w-32">
			<Card />
		</div>

		<div className="w-32">
			<Card />
		</div>

		<div className="w-32">
			<Card />
		</div>
      </div>

      <Link class="btn standard" href="/flower">
        Sample Button
      </Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Inventory Management',
  meta: [
    {
      name: 'InventoryManagement',
      content: 'An application for managing the inventory of a clothing business',
    },
  ],
};
