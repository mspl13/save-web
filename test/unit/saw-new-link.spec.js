// eslint-disable-next-line no-unused-vars
import Vue from "vue";

import SawNewLinkComponent from "../../src/app/components/saw-new-link.vue";

describe("saw-new-link", () => {
  // Inspect defined name
  it("has defined the correct element name", () => {
    expect(SawNewLinkComponent.name).toBe("saw-new-link");
  });

  // Inspect the raw component options
  it("has a created hook", () => {
    expect(typeof SawNewLinkComponent.created).toBe("function");
  });

  it("has a destroyed hook", () => {
    expect(typeof SawNewLinkComponent.destroyed).toBe("function");
  });

  // Evaluate the results of functions in the raw component options
  it("sets the correct default data", () => {
    expect(typeof SawNewLinkComponent.data).toBe("function");

    const defaultData = SawNewLinkComponent.data();
    expect(defaultData.isLoggedIn).toBeFalsy();
  });

  // Inspect defined methods
  it("has created a saveNewLink function", () => {
    expect(typeof SawNewLinkComponent.methods.saveNewLink).toBe("function");
  });

  // Inspect fired events on mount
  // TODO:

  // Inspect fired events on destroy
  // TODO:
});
