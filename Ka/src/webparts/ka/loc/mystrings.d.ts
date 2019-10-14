declare interface IKaWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'KaWebPartStrings' {
  const strings: IKaWebPartStrings;
  export = strings;
}
