import { css } from '@emotion/react';
import nextBtn from '../Assets/image/nextBtn.svg';
import prevBtn from '../Assets/image/prevBtn.svg';
import fullscreen from '../Assets/image/fullscreen.svg';
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


    ril__caption, .ril__toolbar {
        background-color: transparent;
    }

    .fslightbox-slide-btn{
        background: none;
        display: none;
    }

    .fslightbox-slide-btn-next-container{
        background: transparent url(${nextBtn}) no-repeat center;
        color: white
    }

    .fslightbox-slide-btn-previous-container{
        background: transparent url(${prevBtn}) no-repeat center;
        color: white
    }

    .fslightbox-toolbar{
        background: none;
    }

    .fslightbox-toolbar-button:nth-child(1) {
        background: transparent url(${fullscreen}) no-repeat center;
        color: white
    }
`;