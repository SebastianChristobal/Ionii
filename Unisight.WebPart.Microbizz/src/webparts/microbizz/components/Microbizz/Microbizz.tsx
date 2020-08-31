import * as React from 'react';
import styles from './Microbizz.module.scss';
import { IMicrobizzProps } from './IMicrobizzProps';
import { IMicrobizzState } from './IMicrobizzState';
import { escape } from '@microsoft/sp-lodash-subset';
import { CurrentUsersTodos } from '../Todos';
import { NewTodo } from '../NewTodo';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react';


export default class Microbizz extends React.Component<IMicrobizzProps, IMicrobizzState> {

  constructor(props: IMicrobizzProps) {
    super(props);

    this.state = {
      toggleTodoList: true,
      toggleTodoTabs: false,
      currentUserEmail: '',
      currentUserDisplayName: '',
      todos: []
    };
  }
  public componentDidMount() {
    this._currentUserContextProps();

  }
  public render(): React.ReactElement<IMicrobizzProps> {

    return (
      <div className={styles.microbizz}>
        <div className={styles.container}>
          <div className={styles.headerTextRow}>
            <div className={styles.leftColumn}>
              <div>{this.welcomeText()}</div>
              <div>
                <PrimaryButton
                  text="Mina ärenden"
                  onClick={() => this._toggleTodoList()}
                />
                  <DefaultButton className={styles.rightButton}
                    text="Skapa nytt ärende"
                    onClick={() => this._toogleNewTodoTabs()}
                  />
              </div>
            </div>
            {/* <div className={styles.rightColumn}>
              <span className={styles.title}>Kontaktperson</span>
              <img src="https://via.placeholder.com/150" />
            </div> */}
          </div>
          <div className={styles.row}>
            <div>
              {this._getTodoList()}
              {this._getNewTodoTabs()}
            </div>
          </div>
        </div>

      </div>
    );
  }

  private _currentUserContextProps() {
    let currentUserEmail = this.props.currentUserEmail;
    let currentUserDisplayName = this.props.currentUserDisplayName;

    let testUserEmail = "victoria.falkeholm@skansen.se";
    let testUserDisplayName = "Victoria Falkeholm";

    this.setState({
      currentUserEmail: testUserEmail,
      currentUserDisplayName: testUserDisplayName
    });
  }

  private welcomeText(): JSX.Element {

    let renderMyTodosText = 'Microbizz används för att beställa transporter, rapportera skadedjur, felanmäla och beställa till Bygg & Fastighet, Park & Trädgård samt lägga ärenden till IT-support.';
    let renderNewTodoTopText = 'Felanmälningar, beställningar och IT-support';
    let renderNewTodoText = 'Det krävs behörighet för att felanmäla och beställa till Bygg & Fastighet, Park & Trädgård samt att anmäla Skadedjur. Behörigheten ska beställas hos IT via Microbizz av närmaste chef.';

    if (this.state.toggleTodoList) {
      return (<p className={styles.TopText}>{renderMyTodosText}</p>);
    }
    if (this.state.toggleTodoTabs) {
      return (<div>
        <p className={styles.TopText}>{renderNewTodoTopText}</p>
        <p className={styles.subTitle}>{renderNewTodoText}</p>
      </div>);
    }
  }
  private _toggleTodoList() {

    this.setState({
      toggleTodoList: true,
      toggleTodoTabs: false
    });

    this._getTodoList();
  }
  private _toogleNewTodoTabs() {

    this.setState({
      toggleTodoTabs: true,
      toggleTodoList: false
    });

    this._getNewTodoTabs();
  }
  private _getTodoList(): JSX.Element {

    if (this.state.toggleTodoList == true) {
      return (<CurrentUsersTodos {...this.props} currentUserEmail={this.state.currentUserEmail} />);
    }
  }

  private _getNewTodoTabs(): JSX.Element {

    if (this.state.toggleTodoTabs == true) {
      return (<NewTodo
        currentUserEmail={this.state.currentUserEmail}
        currentUserDisplayName={this.state.currentUserDisplayName}
        context={this.props.context}
        SPHttpClient={this.props.SPHttpClient}
        HttpClient={this.props.httpClient}
      />);
    }
  }



}
