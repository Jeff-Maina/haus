import '@/styles/globals.css'
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("locomotive-scroll").then((locomotiveModule) => {
        let scroll = new locomotiveModule.default({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true,
            smoothMobile: false,
            resetNativeScroll: true,
         });
         
      
         scroll.destroy();  //<-- DOESN'T WORK OR IDK

         setTimeout(function () {
             scroll.init();
         }, 400);
     });
 });

 return (
     <main data-scroll-container>
         <Component {...pageProps} />
     </main>
 );}
