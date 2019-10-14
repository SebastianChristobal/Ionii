import * as React from 'react';
import styles from './MyApp.module.scss';
import { Link } from 'office-ui-fabric-react/lib/components/Link';
import { IMyAppProps } from './IMyAppProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { GraphService } from '../../../services';
import { MyAppState } from './MyAppState';

import {
  Persona,
  PersonaSize
} from 'office-ui-fabric-react/lib/components/Persona';
import { IUserItem } from '../../../models';

export default class MyApp extends React.Component<IMyAppProps, MyAppState> {

  private _graphService = new GraphService(this.props.graphClientFactory, this.props.msGraphClient);

  constructor(props: IMyAppProps) {
    super(props)
    this.state = {
      userProfile: []
    }
  }
  componentDidMount() {
    this._getUserProfile();
    console.log("hej")
  }

  public _renderUser(): JSX.Element {
    const { userProfile } = this.state;

    const users = userProfile.map(item => {
      let imageUrl = `https://outlook.office365.com/owa/service.svc/s/GetPersonaPhoto?email=${item.mail}&size=HR96x96`;

      return (<div>
        <Persona primaryText={item.displayName}
          secondaryText={'Title:'+ item.jobTitle}
          tertiaryText={this._renderMail(item.mail)}
          onRenderTertiaryText={() => this._renderPhone(item.mobilePhone)}
          imageUrl={imageUrl}
          size={PersonaSize.size100} />
      </div>)
    })
    return <div>{users}</div>
  }
  public render(): React.ReactElement<IMyAppProps> {

    return (<div>{this._renderUser()}</div>);
  }
  private _renderMail = (mail: string): any => {
    if (mail) {
      return <Link href={`mailto:${mail}`}>{mail}</Link>;
    } else {
      return <div />;
    }
  }
  private _renderPhone = (phoneNumber: any): any => {
    if (phoneNumber) {
      return <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>;
    } else {
      return <div />;
    }
  }

  public _getUserProfile() {

    this._graphService.getUserProfileProps().then((item: IUserItem[]) => {
      this.setState({
        userProfile: item
      })
    })
  }
}
