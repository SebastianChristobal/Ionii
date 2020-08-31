import * as React from 'react';
import { Pivot, PivotItem, PivotLinkFormat, PivotLinkSize } from 'office-ui-fabric-react/lib/Pivot';
import { Label } from 'office-ui-fabric-react/lib/Label';
import Iframe from '@trendmicro/react-iframe';
import { INewTodoProps, INewTodoState } from '../NewTodo';
import { UserPermissionSiteGroups } from '../services';
import { ISharePointGroup } from '../models';
import { CurrentUsersTodos } from '../Todos';
import styles from '../Microbizz/Microbizz.module.scss';

export class NewTodo extends React.Component<INewTodoProps, INewTodoState>{

    private _userGroups = new UserPermissionSiteGroups(this.props.SPHttpClient, this.props.context);

    constructor(props: INewTodoProps) {
        super(props);
        this._getUserGroups();
        this._microBizzFormIT();
        this._microBizzFormBygg();
        this._microBizzFormPark();
        this._microBizzFormTransport();
        this._microBizzFormSkadedjur();
       
        this.state = {
            currentUser: [],
            currentUserGroups: [],
            tabLabel: '',
            CanCurrentUserViewMembership: null
        };

    }
  
    public render(): React.ReactElement<INewTodoProps> {

        const { currentUserGroups } = this.state;
        let currentUserGroupIds: number[] = [];

        currentUserGroups.forEach((group) => {
            currentUserGroupIds.push(group.Id);
        });
        return (
            <div>
                <Pivot aria-label="Links of Large Tabs Pivot Example" className={styles.pivotNavBar}
                    linkFormat={PivotLinkFormat.tabs}
                    linkSize={PivotLinkSize.large}>
                    {
                        //this.state.CanCurrentUserViewMembership == true &&
                        currentUserGroupIds.indexOf(619) >= 0 &&
                        <PivotItem headerText="IT">
                            <div style={{ marginTop: '25px' }}>
                            <Label className={styles.pivotLeftColumn} ></Label>
                                <div className={styles.pivotRightColumn}>{this._microBizzFormIT()}</div>                              
                            </div>
                        </PivotItem>
                    }
                    {
 
                        currentUserGroupIds.indexOf(621) >= 0 &&
                        <PivotItem headerText="Bygg & Fastighet">
                            <div style={{ marginTop: '25px' }}>
                                <Label className={styles.pivotLeftColumn}>Här kan ni anmäla fel eller göra beställningar som är av mindre art. Arbetet bör uppskattningsvis inte ta mer än 1 till 2 dagars arbete i anspråk. Exempel på felanmälningar och beställningar: Snickeri: Trasiga staket, Måleri, mur, smide: Bättringsmålning, klottersanering, påkörda stuprör, justering av portar och grindar, låsproblem, dörrar som inte kan öppnas / stängas, Drift, El, VVS: Ärenden är av mindre art inom el, vatten och avlopp, värme och ventilation. Specifika fel som kan uppstår är trasiga eluttag, stopp i avlopp, trasiga element, ljuskällor eller ventilationsanläggningar som har stannat.</Label>
                                <div className={styles.pivotRightColumn}> {this._microBizzFormBygg()}</div>
                            </div>
                        </PivotItem>
                    }
                    {
                        currentUserGroupIds.indexOf(622) >= 0 &&
                        <PivotItem headerText="Park & Trädgård">
                            <div style={{ marginTop: '25px' }} >
                                <Label className={styles.pivotLeftColumn} >Här kan man beställa container, traktortransport, specialsnöröjning etc.</Label>
                                <div className={styles.pivotRightColumn}>{this._microBizzFormPark()}</div>
                            </div>
                        </PivotItem>
                    }
                    {

                        currentUserGroupIds.indexOf(623) >= 0 &&
                        <PivotItem headerText="Transport & Service">
                            <div style={{ marginTop: '25px' }} >                            
                                <Label className={styles.pivotLeftColumn} ></Label>
                                <div className={styles.pivotRightColumn} >{this._microBizzFormTransport()}</div>
                            </div>
                        </PivotItem>
                    }
                    {
                         currentUserGroupIds.indexOf(624) >= 0 &&
                        <PivotItem headerText="Skadedjur">
                            <div style={{ marginTop: '25px' }} >
                                <Label className={styles.pivotLeftColumn} >Här anmäls alla typer av skadedjur/skadedjursangrepp, tex råttor, trägnagare, getingar mm.</Label>
                                <div className={styles.pivotRightColumn} >{this._microBizzFormSkadedjur()}</div>
                            </div>
                        </PivotItem>
                    }
                </Pivot>
            </div>
        );
    }
    public _getUserGroups() {
        this._userGroups.getCurrentUserSiteGroups().then((currentUsergroupData: ISharePointGroup[]) => {
            this.setState({
                currentUserGroups: currentUsergroupData
            });
            this._currentUserGroupsId();
        });
    }
    private _currentUserGroupsId(){
        
        var userGroupId;
        this.state.currentUserGroups.map((groupId) =>{
            userGroupId = groupId.Id;
        })
        this._userGroups.getCurrentUserSiteGroupId(userGroupId).then((result) =>{
            this.setState({
                CanCurrentUserViewMembership: result
            })
      
        });
    }
    public _microBizzFormIT(): JSX.Element {
        let splitDisplayName = this.props.currentUserDisplayName.split(" ");
        let firstName = splitDisplayName[0];
        let lastName = splitDisplayName[1];
        let email = this.props.currentUserEmail;
        let url = `https://system18.microbizz.dk/x/qf.php/2563/94?email=${email}&fornamn=${firstName}&efternamn=${lastName}`;

        return (<div><Iframe src={url} width="100%" height={240} /></div>);
    }
    public _microBizzFormBygg(): JSX.Element {
        let splitDisplayName = this.props.currentUserDisplayName.split(" ");
        let firstName = splitDisplayName[0];
        let lastName = splitDisplayName[1];
        let email = this.props.currentUserEmail;
        let url = `https://system18.microbizz.dk/x/qf.php/2563/45?email=${email}&fornamn=${firstName}&efternamn=${lastName}`;
        
        return (<div><Iframe src={url} width="100%" height={240} /></div>);
    }
    public _microBizzFormPark(): JSX.Element {
        let splitDisplayName = this.props.currentUserDisplayName.split(" ");
        let firstName = splitDisplayName[0];
        let lastName = splitDisplayName[1];
        let email = this.props.currentUserEmail;
        let url = `https://system18.microbizz.dk/x/qf.php/2563/22?email=${email}&fornamn=${firstName}&efternamn=${lastName}`;

        return (<div><Iframe src={url} width="100%" height={240} /></div>);
    }
    public _microBizzFormTransport(): JSX.Element {
        let splitDisplayName = this.props.currentUserDisplayName.split(" ");
        let firstName = splitDisplayName[0];
        let lastName = splitDisplayName[1];
        let email = this.props.currentUserEmail;
        let url = `https://system18.microbizz.dk/x/qf.php/2563/46?email=${email}&fornamn=${firstName}&efternamn=${lastName}`;

        return (<div><Iframe src={url} width="100%" height={240} /></div>);
    }
    public _microBizzFormSkadedjur(): JSX.Element {
        let splitDisplayName = this.props.currentUserDisplayName.split(" ");
        let firstName = splitDisplayName[0];
        let lastName = splitDisplayName[1];
        let email = this.props.currentUserEmail;
        let url = `https://system18.microbizz.dk/x/qf.php/2563/70?email=${email}&fornamn=${firstName}&efternamn=${lastName}`;

        return (<div><Iframe src={url} width="100%" height={240} /></div>);
    }
}