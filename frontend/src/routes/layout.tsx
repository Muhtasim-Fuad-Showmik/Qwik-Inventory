import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <>
      <main>
        <div className="d-flex flex-direction-row">
          <div className="leftPane">
            <Header />
          </div>
          <div className="rightPane">
            <section>
              <Slot />
            </section>
          </div>
        </div>
      </main>
      <footer>
        <a href="https://peaceful-sable-131357.netlify.app/" target="_blank">
          &#169; Muhtasim Fuad Showmik
        </a>
      </footer>
    </>
  );
});
