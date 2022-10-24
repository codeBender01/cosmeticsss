import React from "react";

class Account extends React.Component {
  render() {
    return (
      <>
        <section class="account">
          <button class="button uniq top">logout</button>
          <div class="auto__container">
            <div class="account__inner">
              <h5 class="light">My Account</h5>
              <span>Welcome back, name!</span>
              <form action="post" class="form account">
                <div class="form__inner">
                  <div class="form__input">
                    <label for="input__name">User Name</label>
                    <input type="text" id="input__name" value="Adam smith" />
                  </div>
                  <div class="form__input">
                    <label for="input__email">Email</label>
                    <input
                      type="email"
                      id="input__email"
                      value="Adam.smith@gmail.com"
                    />
                  </div>
                  <div class="form__input">
                    <label for="input__number">Phone Number</label>
                    <input
                      type="number"
                      id="input__number"
                      value="99360000000"
                    />
                  </div>
                  <div class="form__input">
                    <label for="input__password">Password</label>
                    <input
                      type="password"
                      id="input__password"
                      value="**********"
                    />
                  </div>
                </div>
                <button class="button uniq">Edit</button>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Account;
