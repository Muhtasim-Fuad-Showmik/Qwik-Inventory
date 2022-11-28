import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./card.css?inline";

interface CardProps {
  title?: string;
  style?: string;
  icon?: string;
  bg?: string;
  value?: number;
  valuePrefix?: string;
  valueHeader?: string;
  secondaryTitle?: string;
  secondaryValue?: number;
  secondaryValuePrefix?: string;
  secondaryValueSuffix?: string;
  olderTitle?: string;
  olderValue?: number;
  olderValuePrefix?: string;
  olderValueSuffix?: string;
}

export default component$((props: CardProps) => {
  useStylesScoped$(styles);

  return (
    <div className={`card ${props.style}`}>
      <span className="card-title">{props.title}</span>

      <div className="my-10 d-flex align-items-center">
        <div className={`card-icon mr-10 ${props.bg}`}>
          <i class={`${props.icon}`}></i>
        </div>

        <div className="card-value-container mr-10">
          <p className="card-value-header">{props.valueHeader}</p>
          <span class="card-value">
            {`${typeof props.valuePrefix  !== "undefined" ? props.valuePrefix : ''}${props.value &&
              props.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
          </span>
        </div>

        <div className="card-value-change-container">
          <i class="fa-solid fa-arrow-up"></i>
          <i class="fa-solid fa-arrow-down"></i>
        </div>
      </div>

      <div className="my-10 d-flex align-items-center justify-content-space-between">
        <div className="w-50">
			<p className="secondary-card-title">
				{props.secondaryTitle}
			</p>
			<p className="secondary-card-value">
				{`${typeof props.secondaryValuePrefix !== "undefined" ?
				props.secondaryValuePrefix : ''}${typeof props.secondaryValue !== "undefined" ?
				props.secondaryValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ''}${typeof props.secondaryValueSuffix !== "undefined" ?
				props.secondaryValueSuffix : ''}`}
			</p>
		</div>
		<div className="w-50">
			<p className="secondary-card-title">
				{props.olderTitle}
			</p>
			<p className="secondary-card-value">
				{`${typeof props.olderValuePrefix !== "undefined" ?
				props.olderValuePrefix : ''}${typeof props.olderValue !== "undefined" ?
				props.olderValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ''}${typeof props.olderValueSuffix !== "undefined" ?
				props.olderValueSuffix : ''}`}
			</p>
		</div>
      </div>
    </div>
  );
});
