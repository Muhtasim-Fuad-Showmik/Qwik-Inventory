import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="/">
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
          <a href="/">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#">
            Products
          </a>
        </li>
        <li>
          <a href="/procurement">
            Procurement
          </a>
        </li>
        <li>
          <a href="#">
            Inventory
          </a>
        </li>
        <li>
          <a href="#">
            Analytics
          </a>
        </li>
      </ul>
    </header>
  );
});
