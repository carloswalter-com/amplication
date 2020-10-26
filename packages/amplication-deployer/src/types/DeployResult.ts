export enum EnumDeployStatus {
  Running = "Running",
  Completed = "Completed",
  Failed = "Failed",
}

export type DeployResult = {
  statusQuery?: object;
  status: EnumDeployStatus;
  deployUrl?: string;
};
