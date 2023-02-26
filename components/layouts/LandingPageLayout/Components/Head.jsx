import Head from "next/head";

const HeadTag = ({ title, url, keywords, description }) => (
    <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
            href="https://unpkg.com/@csstools/normalize.css"
            rel="stylesheet"
        />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta name="distribution" content="global" />
        <meta
            name="robots"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="NOKTOS" />
        <meta
            name="google-site-verification"
            content="1aJcFNwYwwB_ljgpY-Ro7TtgMk6I4a3cbM__u35CcR4"
        />
        {/*CONENIDOS PARTICULARES*/}
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta name="keywords" content={keywords} />
        <meta name="Description" content={description} />

        <meta
            http-equiv="Content-Security-Policy"
            content="default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"
        />
        <script data-cfasync="false"
            id="zsiqchat"
            dangerouslySetInnerHTML={{
                __html: `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "ebe8e05a4ffaddf0fb3cc15922329ced56c28ea40304fdb40addfdad42959355", values:{},ready:function(){}};
                var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t)`
                }} />
        {/* <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-P1EG2M9Q69"
        ></script>
        <script
            dangerouslySetInnerHTML={{
                __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){window.dataLayer.push(arguments)}
                            gtag("js", new Date());
                            gtag("config", "G-P1EG2M9Q69");
                        `,
            }}
        /> */}
        {/* <script
            dangerouslySetInnerHTML={{
                __html: `
                                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-P87S5ZW');
                            `,
            }}
        /> */}

            {/* <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-145379396-2"
            />

            <script type="text/javascript" id="hs-script-loader" async defer
                    src="https://js.hs-scripts.com/21582403.js"></script> */}

            {/* <script
                dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments)}
                            gtag("js", new Date());
                            gtag("config", "UA-145379396-2");
                        `,
                }}
        /> */}
        {/* <script
            data-cfasync="false"
            dangerouslySetInnerHTML={{
                __html: `
                            window.purechatApi = { l: [], t: [], on: function () { this.l.push(arguments); } }; 
                            (function () { var done = false; var script = document.createElement('script'); script.async = true; 
                            script.type = 'text/javascript'; script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript'; 
                            document.getElementsByTagName('HEAD').item(0).appendChild(script); script.onreadystatechange = script.onload = function (e) { if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) { var w = new PCWidget({c: '9b4182d6-77af-457f-bbf6-0d803c0ab889', f: true }); 
                            done = true; } }; })();
                        `,
            }}
        /> */}
    </Head>
);

export default HeadTag;
