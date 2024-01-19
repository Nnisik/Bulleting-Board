function NavigationButton(props) {
  return (
      <a class="flex flex-column nav-btn" id={props.id} href={props.link}>{props.text}</a>
  );
}

function Navbar() {
  return (
    <div class="flex nav">
      <NavigationButton id="home-btn" text="На Главную" link="./index.php" />
      <NavigationButton id="log_out-btn" text="Выйти" link="./index.php"/>
      <NavigationButton id="log_in-btn" text="Войти" link="./login.php" />
    </div>
  );
}
ReactDOM.render(<Navbar />, document.querySelector("#header"));