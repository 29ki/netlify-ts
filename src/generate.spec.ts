import { loadConfig } from "./input";
import { generateTypes } from "./generate";

describe("Output testing", () => {
  it("should parse kitchen sink correctly", () => {
    const collections = loadConfig("kitchen-sink.yml");

    expect(generateTypes(collections, { label: false })).toMatchSnapshot();
  });

  it("should parse kitchen sink with label option", () => {
    const collections = loadConfig("kitchen-sink.yml");

    expect(generateTypes(collections, { label: true })).toMatchSnapshot();
  });

  it("should support capitalization of type names", () => {
    const collections = loadConfig("kitchen-sink.yml");

    expect(generateTypes(collections, { capitalize: true })).toMatchSnapshot();
  });

  it("should support custom delimiter for type names", () => {
    const collections = loadConfig("kitchen-sink.yml");

    expect(generateTypes(collections, { delimiter: "-" })).toMatchSnapshot();
  });

  it("should support label, capitalization and delimiter at the same time", () => {
    const collections = loadConfig("kitchen-sink.yml");

    expect(
      generateTypes(collections, { label: true, capitalize: true, delimiter: "" }),
    ).toMatchSnapshot();
  });
});
