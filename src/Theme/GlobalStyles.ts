import { css } from '@emotion/react';
import prevBtn from '../Assets/svg/prevBtn.svg';
import nextBtn from '../Assets/svg/nextBtn.svg';
import closeIcon from '../Assets/svg/closeIcon.svg';
export const GlobalStyles = css`

    @font-face {
        font-family: 'Criteria CF';
        font-style: normal;
        font-weight: 300;
        src: url('/Fontspring-DEMO-criteriacf-thin.otf');
    }
    @font-face {
        font-family: 'Criteria CF';
        font-style: normal;
        font-weight: 400;
        src: url('/Fontspring-DEMO-criteriacf-regular.otf');
    }

    @font-face {
        font-family: 'Criteria CF';
        font-style: normal;
        font-weight: 500;
        src: url('/Fontspring-DEMO-criteriacf-medium.otf');
    }

    @font-face {
        font-family: 'Criteria CF';
        font-style: normal;
        font-weight: 700;
        src: url('/Fontspring-DEMO-criteriacf-super.otf');
    }

    @font-face {
        font-family: 'Criteria CF';
        font-style: normal;
        font-weight: 700;
        src: url('/Fontspring-DEMO-criteriacf-super.otf');
    }

    @font-face {
        font-family: 'Cosi Azure';
        font-style: normal;
        font-weight: 700;
        src: url('/CosiAzure-Bold.ttf');
    }

    @font-face {
        font-family: 'Neue Haas Grotesk Text Pro';
        font-style: normal;
        font-weight: 400;
        src: url('/NHaasGroteskTxPro-55Rg.ttf');
    }

    @font-face {
        font-family: 'Neue Haas Grotesk Text Pro';
        font-style: normal;
        font-weight: 500;
        src: url('/NHaasGroteskTxPro-65Md.ttf');
    }
    
    @font-face {
        font-family: 'Neue Haas Grotesk Text Pro';
        font-style: normal;
        font-weight: 700;
        src: url('/NHaasGroteskTxPro-75Bd.ttf');
    }


    ril__caption, .ril__toolbar {
        background-color: transparent;
    }


    .ril__navButtonPrev {
        display: block;
        left: 30px;
        background: transparent url(${prevBtn}) no-repeat center;
        background-size: 15px;
        backdrop-filter: opacity(1);
        padding: 20px;
        opacity: 1
    }

    .ril__navButtonPrev:hover{
        transform: scale(1.1);
        background-position: 1em;
        transition: all .3s ease-out;
    }

    .ril__navButtonNext: hover{
        transform: scale(1.1);
        background-position: right 1em center;
        transition: all .3s ease-out;
    }


    .ril__navButtonNext {
        display: block;
        right: 30px;
        background: transparent url(${nextBtn}) no-repeat center;
        background-size: 15px;
        backdrop-filter: opacity(1);
        padding: 20px;
        opacity : 1
    }

    .ril__closeButton {
        background: transparent url(${closeIcon}) no-repeat center;
        background-size: 15px;
    }

    ril__caption, .ril__toolbar {
        background-color: transparent;
    }

    .ril__toolbar {
        top: 25px;
        right: 10px;
        height: 50px;
        cursor: pointer;
    }

    .ril__inner {
        cursor: pointer;
    }

    .ril__builtinButton {
        padding: 18px;
        opacity: 1;
    }
`;