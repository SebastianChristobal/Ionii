export interface IPeoplePickerUserItem {
    id: string;
    imageUrl: string; //this.generateUserPhotoLink(item.Email),
    imageInitials: string;
    text: string;
    secondaryText: string;
    tertiaryText: string;
    optionalText: string;
    loginName: string;
}