import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./accordionTable.css?inline";

interface accordionTableProps {
  content: object;
}

export default component$((props: accordionTableProps) => {
  useStylesScoped$(styles);

  return (
    <table className={`table`} cellSpacing="0">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Date</th>
          <th>Seller</th>
          <th>Sales Channel</th>
          <th>Source</th>
          <th>Items</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="orderId">#2323</td>
          <td>23/10/2022</td>
          <td>Julia Roberts</td>
          <td>Amazon</td>
          <td>International</td>
          <td>5</td>
          <td>
            <span className={`status ${'fulfilled'}`}>
              <span className="dot">
                <i class="fa-solid fa-circle"></i>
              </span>
              <span>Fulfilled</span>
            </span>
          </td>
          <td>
            <div className="circle">
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </td>
        </tr>
        <tr>
          <td className="orderId">#2324</td>
          <td>31/10/2022</td>
          <td>Roberto Gonzales</td>
          <td>Alibaba</td>
          <td>Domestic</td>
          <td>2</td>
          <td>
            <span className={`status ${'pending'}`}>
              <span className="dot">
                <i class="fa-solid fa-circle"></i>
              </span>
              <span>Pending</span>
            </span>
          </td>
          <td>
            <div className="circle">
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </td>
        </tr>
        <tr>
          <td className="orderId">#2325</td>
          <td>17/12/2022</td>
          <td>Margaret Thatcher</td>
          <td>Ebay</td>
          <td>International</td>
          <td>2</td>
          <td>
            <span className={`status ${'unfulfilled'}`}>
              <span className="dot">
                <i class="fa-solid fa-circle"></i>
              </span>
              <span>Unfulfilled</span>
            </span>
          </td>
          <td>
            <div className="circle">
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
});
