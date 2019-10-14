declare interface IMyAppWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'MyAppWebPartStrings' {
  const strings: IMyAppWebPartStrings;
  export = strings;
}
