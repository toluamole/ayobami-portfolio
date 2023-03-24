import { Global } from '@emotion/react';
import React from 'react';

export const Fonts = () => (
	<Global
		styles={`
      @font-face {
        font-family: 'Cosi Azure';
        font-style: normal;
        font-weight: 700;
        src: url("../Fonts/CosiAzure-Bold.ttf") format("truetype");
      }

      @font-face {
        font-family: 'Maison Neue';
        font-style: normal;
        font-weight: 700;
        src: url("../Fonts/FontsFree-Net-Maison-Neue-Bold.ttf") format("truetype");
      }

      @font-face {
        font-family: 'Maison Neue';
        font-style: normal;
        font-weight: 300;
        src: url("../Fonts/FontsFree-Net-Maison-Neue-Light.ttf") format("truetype");
      }

      @font-face {
        font-family: 'Maison Neue';
        font-style: Book;
        font-weight: 500;
        src: url("../Fonts/FontsFree-Net-Maison-Neue-Book.ttf") format("truetype");
      }


      @font-face {
        font-family: 'Maison Neue';
        font-style: mono;
        font-weight: 600;
        src: url("../Fonts/FontsFree-Net-Maison-Neue-Mono.ttf") format("truetype");
      }

      @font-face {
        font-family: 'Criteria CF Medium';
        font-weight: 500;
        src: url("../Fonts/Fontspring-DEMO-criteriacf-medium.otf") format("opentype");
      }
      
      @font-face {
        font-family: 'Criteria CF';
        font-style: normal;
        font-weight: 600;
        src: url("../Fonts/Fontspring-DEMO-criteriacf-super.otf") format("opentype");
      }
      `}
	/>
);