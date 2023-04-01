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


    ril__caption, .ril__toolbar {
        background-color: transparent;
    }


    .ril__navButtonPrev {
        display: block;
        left: 30px;
        background: transparent url(${prevBtn}) no-repeat center;
        background-size: 8px;
        // background-postion: 2px;
        backdrop-filter: opacity(1);
        border-radius: 50%;
        border: 2px solid white;
        padding: 20px;
        // box-shadow: 0 0 3px rgba(198, 198, 211, 0.4);
        box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
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
        background-size: 8px;
        backdrop-filter: opacity(1);
        border-radius: 50%;
        border: 2px solid white;
        padding: 20px;
        // box-shadow: 0 0 3px rgba(198, 198, 211, 0.4);
        box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
        opacity : 1
    }

    .ril__closeButton {
        background: transparent url(${closeIcon}) no-repeat center;
        background-size: 12px;
        box-shadow:rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.4) 0px 2px 4px 0px inset
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
        width: 30px;
        height: 30px;
        border: 2px solid white;
        padding: 18px;
        border-radius: 50%;
        opacity: 1;
    }
`;