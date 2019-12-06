import * as React from 'react';
import styles from './PlannerTasks.module.scss';
import { IPlannerTasksProps } from './IPlannerTasksProps';
import { escape } from '@microsoft/sp-lodash-subset';
import GroupService from '../components/services/GroupService';
import {IPlannerTasksState} from './IPlannerTasksState';
import {GroupList} from './GroupList';
import {
  DocumentCard,
  DocumentCardType,
  DocumentCardDetails,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
  ImageFit,
  DocumentCardPreview
} from 'office-ui-fabric-react';

export default class PlannerTasks extends React.Component<IPlannerTasksProps, IPlannerTasksState> {

  constructor(props: IPlannerTasksProps) {
    super(props);

    this.state = {
      groups: []
    };
  }

  public componentDidMount(){

  }

  public render(): React.ReactElement<IPlannerTasksProps> {
    return (
      <div className={ styles.plannerTasks }>
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
        <div className={styles.plannerTasks}>
          <h1>My Office 365 Groups</h1>
          <GroupList groups={this.state.groups} onRenderItem={(item: any, index: number) => this._onRenderItem(item, index)} />
        </div>
      </div>
    );
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
