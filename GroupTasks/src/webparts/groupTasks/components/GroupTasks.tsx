import * as React from 'react';
import styles from './GroupTasks.module.scss';
import { IGroupTasksProps } from './IGroupTasksProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IReactMyGroupsState } from './IGroupTaskState';
import GroupService from '../components/services/GroupService';
import { GroupList } from './GroupList';
import {
  DocumentCard,
  DocumentCardType,
  DocumentCardDetails,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
  ImageFit,
  DocumentCardPreview
} from 'office-ui-fabric-react';
export default class GroupTasks extends React.Component<IGroupTasksProps, IReactMyGroupsState> {

  constructor(props: IGroupTasksProps) {
    super(props);

    this.state = {
      groups: []
    };
  }

  public componentDidMount (): void {
    this._getGroups();
  }
  
  public render(): React.ReactElement<IGroupTasksProps> {
    return (
      <div className={styles.groupTasks}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.groupTasks}>
          <h1>My Office 365 Groups</h1>
          <GroupList groups={this.state.groups} onRenderItem={(item: any, index: number) => this._onRenderItem(item, index)} />
        </div>
      </div>
    );
  }
  public _getGroups = (): void => {
    GroupService.getGroups().then(groups => {
      console.log(groups);
      this.setState({
        groups: groups
      });
      this._getGroupLinks(groups);
    });
  }
  public _getGroupLinks = (groups: any): void => {
    groups.map(groupItem => (
      GroupService.getGroupLinks(groupItem).then(groupurl => {
        // console.log(groupurl.value);
        this.setState(prevState => ({
          groups: prevState.groups.map(group => group.id === groupItem.id ? {...group, url: groupurl.value} : group)
        }));
      })
    ));
    this._getGroupThumbnails(groups);
  }

  public _getGroupThumbnails = (groups: any): void => {
    groups.map(groupItem => (
      GroupService.getGroupThumbnails(groupItem).then(grouptb => {
        console.log(grouptb);
        this.setState(prevState => ({
          groups: prevState.groups.map(group => group.id === groupItem.id ? {...group, thumbnail: grouptb} : group)
        }));
      })
    ));
  }

  private _onRenderItem = (item: any, index: number): JSX.Element => {
    const previewProps: IDocumentCardPreviewProps = {
      previewImages: [
        {
          previewImageSrc: item.thumbnail,
          imageFit: ImageFit.center,
          height: 48,
          width: 48
        }
      ]
    };
    return (
      <div>
        <DocumentCard
          type={DocumentCardType.compact}
        >
          <DocumentCardPreview {...previewProps} />
          <DocumentCardDetails>
            <a href={item.url}>
              <DocumentCardTitle
                title={item.displayName}
              />
            </a>
          </DocumentCardDetails>
        </DocumentCard>
      </div>
    );
  }
}
