import * as React from 'react';
import './styles.module.css';
declare type Props = {
    /** The config of the chatbot */
    config?: UiConfig;
    /** The id of the chatbot */
    clientId: string;
};
interface UiConfig {
    /** The width of the chatbot container with unit px
     * @default 500
     */
    containerWidth: number;
    /** The height of the chatbot container with unit vh
     * @default 80
     */
    containerHeight: number;
}
export declare const SamiChatBox: ({ config, clientId }: Props) => React.JSX.Element;
export {};
