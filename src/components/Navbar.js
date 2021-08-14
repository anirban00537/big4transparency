const Navbar = () => {
  return (
    <nav
      id="home_header1"
      className="
        navbar
        nav
        navbar-expand-lg navbar-light
        header4-2226db61-fb17-4330-9085-a7ef50b9fba8
        sw-background-color-ffffff
        sw-padding-top-6xs
        sw-padding-bottom-6xs
        sw-border-top-style-none
        sw-border-top-width-xs
        sw-border-top-color-000000
        sw-border-bottom-style-none
        sw-border-bottom-width-xs
        sw-border-bottom-color-000000
      "
    >
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img
            className="sw-width-4xs"
            src="../softr-prod.imgix.net/applications/86edf168-f0d6-40a3-b607-2968eae433fb/assets/d5dcdc77-7861-4225-b2e2-0a64ae4416e1.jpg"
            alt="Publish your designed things."
          />
        </a>
        <button
          style={{
            outline: "none",
            border: "none",
            background: "transparent",
          }}
          id="navbar-toggler"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
