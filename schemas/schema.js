import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
// Schemas
import project from "./project";
import home from "./Home";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([project]),
});
