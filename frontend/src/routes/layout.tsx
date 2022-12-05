import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";

export default component$(() => {
  return (
    <>
      <main className="h-90vh">
        <div className="d-flex flex-direction-row h-100">
          <div className="leftPane h-100">
            <Header />
          </div>
          <div className="rightPane h-100">
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
