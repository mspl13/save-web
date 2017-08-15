// eslint-disable-next-line no-unused-vars
import Vue from "vue";

import SawUserLoginComponent from "../../src/app/components/saw-user-login.vue";

describe("saw-user-login", () => {
  // Inspect defined name
  it("has defined the correct element name", () => {
    expect(SawUserLoginComponent.name).toBe("saw-user-login");
  });

  // Inspect the raw component options
  it("has a beforeMount hook", () => {
    expect(typeof SawUserLoginComponent.beforeMount).toBe("function");
  });

  // Evaluate the results of functions in the raw component options
  it("sets the correct default data", () => {
    expect(typeof SawUserLoginComponent.data).toBe("function");

    const defaultData = SawUserLoginComponent.data();
    expect(defaultData.isLoggedIn).toBeNull();
  });

  // Inspect defined methods
  it("has created a login function", () => {
    expect(typeof SawUserLoginComponent.methods.login).toBe("function");
  });
  it("has created a logout function", () => {
    expect(typeof SawUserLoginComponent.methods.logout).toBe("function");
  });
});
