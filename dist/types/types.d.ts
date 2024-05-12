export interface CaptchaConfig {
    captchaId?: string;
    product?: 'float' | 'popup' | 'bind';
    nativeButton?: {
        width: string;
        height: string;
    };
    rem?: number;
    language?: 'zho' | 'eng' | 'zho-tw' | 'zho-hk' | 'udm' | 'jpn' | 'ind' | 'kor' | 'rus' | 'ara' | 'spa' | 'pon' | 'por' | 'fra' | 'deu';
    protocol?: 'http://' | 'https://';
    timeout?: number;
    hideBar?: ('close' | 'refresh')[];
    mask?: {
        outside: boolean;
        bgColor: string;
    };
    apiServers?: string[];
    nextWidth?: string;
    riskType?: string;
    hideSuccess?: boolean;
    offlineCb?: () => void;
    onError?: (error: any) => void;
    userInfo?: string;
}
export interface Props {
    config: CaptchaConfig;
}
