import * as React from 'react';
import styles from './Portal.module.scss';
import { IPortalProps } from './IPortalProps';
import { escape } from '@microsoft/sp-lodash-subset';


export default class Portal extends React.Component<IPortalProps, {}> {
  public render(): React.ReactElement<IPortalProps> {
    return (
      <div>
        <div className={styles.portal}>
          <div className={styles.navBar}>
            <div><h3 style={{color:"white"}}>NavBar</h3>
            </div>
          </div>
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
        </div>
      </div>
    );
  }
}