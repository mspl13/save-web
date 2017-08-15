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

  // Inspect the raw component options
  // it("has a created hook", () => {
  //   expect(typeof SawDeleteLinkComponent.created).toBe("function");
  // });

  // Inspect imported the correct components
  it("has a created a delete function", () => {
    expect(SawLinkElementComponent.components["saw-delete-link"])
      .toBeTruthy();
  });

  // Evaluate the results of functions in the raw component options
  // it("sets the correct default data", () => {
  //   expect(typeof SawDeleteLinkComponent.data).toBe("function");

  //   const defaultData = SawDeleteLinkComponent.data();
  //   expect(defaultData.message).toBe("hello!");
  // });

  // Inspect the component instance on mount
  // it("correctly sets the message when created", () => {
  //   const vm = new Vue(SawDeleteLinkComponent).$mount();
  //   expect(vm.message).toBe("bye!");
  // });

  // Mount an instance and inspect the render output
  // it("renders the correct message", () => {
  //   const Ctor = Vue.extend(SawDeleteLinkComponent);
  //   const vm = new Ctor().$mount();
  //   expect(vm.$el.textContent).toBe("bye!");
  // });
});
