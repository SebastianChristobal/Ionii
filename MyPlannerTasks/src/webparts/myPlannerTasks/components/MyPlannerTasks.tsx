import * as React from 'react';
import styles from './MyPlannerTasks.module.scss';
import { IMyPlannerTasksProps } from './IMyPlannerTasksProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {
  DocumentCard,
  DocumentCardType,
  DocumentCardDetails,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
  ImageFit,
  DocumentCardPreview
} from 'office-ui-fabric-react';
import { GroupList } from './GroupList';
import GroupService from '../components/services/GroupService';
import { IMyPlannerTasksState } from './IMyPlannerTasksState';
export default class MyPlannerTasks extends React.Component<IMyPlannerTasksProps, IMyPlannerTasksState> {

  constructor(props: IMyPlannerTasksProps) {
    super(props);

    this.state = {
      groups: [],
      tasks:[]
    };
  }

  public componentDidMount (): void {
    this._getGroups();
    this._getPlannerTasks();
  }

  public render(): React.ReactElement<IMyPlannerTasksProps> {
    return (
      <div className={ styles.myPlannerTasks }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.myPlannerTasks}>
          <h1>My Office 365 Groups</h1>
          <GroupList groups={this.state.groups} onRenderItem={(item: any, index: number) => this._onRenderItem(item, index)} />
        </div>
    <div>{this._renderPlannerTasks()}</div>
      </div>
    );
  }
  public _renderPlannerTasks(): JSX.Element {

    let myTasks =this.state.tasks.map(item =>{
      return(<div>
         {item.title}
        {item.dueDateTime}
      </div>)
    })

  return <div>{myTasks}</div>
  }

  public _getPlannerTasks(): void{
    GroupService.getPlannerTasks().then(task =>{
     
      this.setState({
        tasks: task
      })
    })
  }

  public _getGroups = (): void => {
    GroupService.getGroups().then(groups => {
     // console.log(groups);
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
      //    groups: prevState.groups.map(group => group.id === groupItem.id ? {...group, url: groupurl.value} : group)
        }));
      })
    ));
    this._getGroupThumbnails(groups);
  }

  public _getGroupThumbnails = (groups: any): void => {
    groups.map(groupItem => (
      GroupService.getGroupThumbnails(groupItem).then(grouptb => {
     //   console.log(grouptb);
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
