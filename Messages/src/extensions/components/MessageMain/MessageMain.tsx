import * as React from 'react';
import styles from './MessageMain.module.scss';
import {
    IMessageMainProps,
    IMessageMainState
} from '.';

import {
    Icon,
    IIconStyles
} from 'office-ui-fabric-react';
import { MessageService } from '../services';
import { IMessageItem } from '../models';

const iconStyles: IIconStyles = {
    root: {
        color: 'black',
        fontSize: 22,
        float: 'left',
    }
};

export class MessageMain extends React.Component<IMessageMainProps, IMessageMainState>{
    constructor(props: IMessageMainProps) {
        super(props);

        this.state = {
            messageItem: []
        };
    }
    private _messageService = new MessageService(this.props.siteAbsoluteUrl, this.props.spHttpClient);
    public componentDidMount() {
        this.getMessage();
    }
    public render(): React.ReactElement<IMessageMainProps> {
        return (<div>{this.renderMessageItem()}</div>);
    }
    public renderMessageItem(): JSX.Element {
        const { messageItem } = this.state;
        let getCurrentDate = new Date();
        let currentDate = getCurrentDate.toLocaleDateString("sv-se");
        // Har vi något item med hög prio? Isåfall sätter vi en bool
        //let highPriority: boolean = messageItem.filter(item => item.Prioritet == 'Hög').length > 0;

        const items = messageItem.map(item => {
            let messageBackgroundColor = item.Prioritet === 'Hög' ? '#DF5252' : item.Prioritet === "Medel" ? '#FAF317' : '#47CA5F';
            let messageIcon = item.Prioritet === 'Hög' ? 'Warning': 'Info';
            let messageEndDate = new Date(item.Avpubliceringsdatum).toLocaleDateString("sv-se");

            if (messageEndDate >= currentDate) {
                return (<div className={styles.app} style={{backgroundColor: messageBackgroundColor}}>
                    <div className={styles.top}>
                    <div className={styles.container}>
                    <Icon iconName={messageIcon} styles={iconStyles} />
                    <div className={styles.Title}>{item.Title}: </div>
                    <div className={styles.Description}>{item.Beskrivning}</div>
                </div>
                    </div>
                </div>);
            }
        });
        return (<div>{items}</div>);
    }
    public getMessage() {
        this._messageService.getMessageItem().then((items: IMessageItem[]) => {
            this.setState({
                messageItem: items
            });
        });
    }
}