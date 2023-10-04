import Ccart from "./basket-icon.jsx";

function ComponentHeader() {
  return (
    <div className="CompHeader">
      <h1 className="TitleText">Ratman Jones</h1>
      <div className="NavBar">
        <a className="SideNavLink" href="">
          <button className="NavKnap">fyld</button>
        </a>
        <a className="SideNavLink" href="">
          <button className="NavKnap">fyld</button>
        </a>
        <a className="SideNavLink" href="">
          <button className="NavKnap">fyld</button>
        </a>
        <a className="SideNavLink" href="">
          <button className="NavKnap">fyld</button>
        </a>
        <Ccart />
      </div>
    </div>
  );
}
export default ComponentHeader;
