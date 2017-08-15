// eslint-disable-next-line no-unused-vars
import Vue from "vue";

import SawDeleteLinkComponent
  from "../../src/app/components/saw-delete-link.vue";

describe("saw-delete-link", () => {
  // Inspect defined name
  it("has defined the correct element name", () => {
    expect(SawDeleteLinkComponent.name).toBe("saw-delete-link");
  });

  // Inspect defined properties
  it("has defined the correct element properties", () => {
    // linkId property
    expect(typeof SawDeleteLinkComponent.props.linkId.type).toBe("function");
    expect(SawDeleteLinkComponent.props.linkId.required).toBeTruthy();
  });

  // Inspect defined methods
  it("has created a delete function", () => {
    expect(typeof SawDeleteLinkComponent.methods.deleteLink).toBe("function");
  });
});
