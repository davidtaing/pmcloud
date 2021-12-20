import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    testEnvironment: "node",
    runner: "groups",
  };
};
