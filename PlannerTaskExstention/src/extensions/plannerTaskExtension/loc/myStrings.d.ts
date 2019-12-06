declare interface IPlannerTaskExtensionCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'PlannerTaskExtensionCommandSetStrings' {
  const strings: IPlannerTaskExtensionCommandSetStrings;
  export = strings;
}
