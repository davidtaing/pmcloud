import apiSpec from "./api.json";

const { paths: pathsSpec, ...otherSpecs } = apiSpec;
const apiDoc = { paths: {}, ...otherSpecs };
export const paths = pathsSpec;

export default apiDoc;
