// eslint-disable-next-line no-unused-vars
import Vue from "vue";

import SawLinkElementComponent
  from "../../src/app/components/saw-link-element.vue";

describe("saw-link-element", () => {
  // Inspect defined name
  it("has defined the correct element name", () => {
    expect(SawLinkElementComponent.name).toBe("saw-link-element");
  });

  // Inspect defined properties
  it("has defined the correct element properties", () => {
    // linkItem property
    expect(typeof SawLinkElementComponent.props.linkItem.type).toBe("function");
    expect(SawLinkElementComponent.props.linkItem.required).toBeTruthy();
  });

  // Inspect imported the correct components
  it("has a created a delete function", () => {
    expect(SawLinkElementComponent.components["saw-delete-link"])
      .toBeTruthy();
  });
});
