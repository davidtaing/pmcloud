import apiSpec from "./api.json";
import { OpenAPIV3 } from "openapi-types";

const { paths: pathsSpec, ...otherSpecs } = apiSpec;
const apiDoc = { paths: {}, ...otherSpecs } as OpenAPIV3.Document;
export const paths = pathsSpec as OpenAPIV3.PathsObject;

export default apiDoc;
