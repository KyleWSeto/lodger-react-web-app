import "./index.css";

function Login() {
    return (
        <div>
          <div class="row d-flex justify-content-md-center">
              <div class="col-6 text-center border-end py-5 proj-bg-img-register">
                  <h1 class="display-1 proj-heading-font">Register</h1>
                  <h6 class="proj-heading-font">New User?</h6>
                  <form>
                    <div class="col-md-auto py-5">
                      <label for="exampleInputFirstName1" class="form-label proj-label-font proj-label-color">First Name</label>
                      <input type="first-name" class="form-control mx-auto w-50" id="exampleInputFirstName1" aria-describedby="emailHelp" />
                    </div>
                    <div class="col-md-auto py-5">
                      <label for="exampleInputLastName1" class="form-label proj-label-font proj-label-color">Last Name</label>
                      <input type="last-name" class="form-control mx-auto w-50" id="exampleInputLastName1" aria-describedby="emailHelp" />
                    </div>
                      <div class="col-md-auto py-5">
                        <label for="exampleInputUsername1" class="form-label proj-label-font proj-label-color">Username</label>
                        <input type="username" class="form-control mx-auto w-50" id="exampleInputUsername1" aria-describedby="emailHelp" />
                      </div>
                      <div class="col-md-auto py-5">
                        <label for="exampleInputPassword1" class="form-label proj-label-font proj-label-color">Password</label>
                        <input type="password" class="form-control mx-auto w-50" id="exampleInputPassword1" />
                      </div>
                      <div class="col-md-auto py-2">
                          <h3 class="proj-heading-font proj-heading-color">Roles</h3>
                          <div class="form-check form-check-inline">
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                              <label class="form-check-label proj-label-font proj-label-color" for="inlineRadio1">User</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                              <label class="form-check-label proj-label-font proj-label-color" for="inlineRadio2">Admin</label>
                            </div>
                            <div class="invalid-feedback">
                              You must choose one before submitting.
                            </div>
                          </div>
                        </div>
                        <div class="col-md-auto py-2">
                          <button class="btn proj-color-btn proj-font-btn" type="submit">Register</button>
                        </div>
                  </form>
              </div>
              <div class="col-6 text-center border-start py-5 proj-bg-img-login">
                  <h1 class="display-1 proj-heading-font">Login</h1>
                  <h6 class="proj-heading-font">Existing User?</h6>
                  <form>
                      <div class="col-md-auto py-5">
                        <label for="exampleInputUsername1" class="form-label proj-label-font proj-label-color">Username</label>
                        <input type="username" class="form-control mx-auto w-50" id="exampleInputUsername1" aria-describedby="emailHelp" />
                      </div>
                      <div class="col-md-auto py-5">
                        <label for="exampleInputPassword1" class="form-label proj-label-font proj-label-color">Password</label>
                        <input type="password" class="form-control mx-auto w-50" id="exampleInputPassword1" />
                      </div>
                        <div class="col-md-auto">
                          <button class="btn proj-color-btn proj-font-btn" type="submit">Login</button>
                        </div>
                  </form>
              </div>
          </div>
      </div>
    )
}

export default Login;