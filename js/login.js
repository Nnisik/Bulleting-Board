const img_array = ["./img/icon8-closed-eye-48.png", "./img/icon8-eye-48.png"];

function changeForm(page) {
  document.querySelectorAll("form").forEach((form) => {
    form.style.display = "none";
  });

  document.querySelector(`#${page}`).style.display = "flex";
}

function SubmitButton(props) {
  return <button class="form-submit-btn">{props.text}</button>;
}

function InputField(props) {
  return (
    <div class="flex form-input">
      <input
        type={props.type}
        name={props.name}
        placeholder={props.text}
        class="form-text-input"
      />
    </div>
  );
}

function ChangeFormBtn(props) {
  return (
    <div class="chng-form-btn-container">
      <button data-page={props.page} class="chng-form-btn">
        {props.text}
      </button>
    </div>
  );
}

function SignUpForm(props) {
  return (
    <div id="signup-form" class="flex flex-column form">
      <h3 class="form-header">Создать аккаунт</h3>
      <form
        class="flex flex-column form-container"
        action="./includes/signup.inc.php"
        method="post"
      >
        <InputField type="text" name="name" text="Имя пользователя" />
        <InputField type="text" name="login" text="Логин" />
        <InputField type="password" name="pwd" text="Пароль" />
        <InputField type="password" name="pwd_rpt" text="Повторите пароль" />
        <SubmitButton text="Продолжить" />
      </form>
      <ChangeFormBtn text="Войти" page="login-form" />
    </div>
  );
}

function LoginForm() {
  return (
    <div id="login-form" class="flex flex-column form">
      <h3 class="form-header">Логин</h3>
      <form
        class="flex flex-column form-container"
        action="./includes/login.inc.php"
        method="post"
      >
        <InputField type="text" name="login" text="Логин" />
        <InputField type="password" name="pwd" text="Пароль" />
        <SubmitButton text="Войти" />
      </form>
      <ChangeFormBtn text="Зарегистрироваться" page="signup-form" />
    </div>
  );
}

function Form() {
  return (
    <div class="flex login-container">
      <LoginForm />
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  //! FIXME: find tutorial on making JS authentification form
  document.querySelectorAll(".chng-form-btn").forEach((button) => {
    button.onclick = function () {
      changeForm(this.dataset.page);
    };
  });
});

ReactDOM.render(<Form />, document.querySelector("#main"));
