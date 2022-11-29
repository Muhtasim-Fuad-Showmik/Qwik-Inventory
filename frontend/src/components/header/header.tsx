import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="#" target="_blank">
          <div className="d-flex">
            <img
              src="/Inventory Logo.png"
              alt="Inventory Management Logo"
              width="40px"
            />
            <span class="app-title d-flex flex-direction-col">
              <p>Inventory</p>
              <p>Management</p>
            </span>
          </div>
        </a>
      </div>
      <ul>
        <li>
          <a href="#" target="_blank">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Products
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Procurement
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Inventory
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            Analytics
          </a>
        </li>
      </ul>
    </header>
  );
});
