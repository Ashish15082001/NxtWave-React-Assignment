import HeaderStyles from "./Header.module.css";

export function Header() {
  return (
    <header className={HeaderStyles["header-body"]}>
      <div className={HeaderStyles["logo-container"]}>
        {/* <img src="../../images/companyLogo.jpg" alt="company logo"/> */}
        <h3>NxtWave</h3>
      </div>
      <h3>Avatar</h3>
    </header>
  );
}
