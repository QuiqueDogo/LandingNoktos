import Head from "next/head";

const HeadComponent = ({ title }) => (
    <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico"/>
        <link
            href="https://unpkg.com/@csstools/normalize.css"
            rel="stylesheet"
        />
        <meta
            http-equiv="Content-Security-Policy"
            content="default-src *; style-src 'self' http://* 'unsafe-inline'; script-src 'self' http://* 'unsafe-inline' 'unsafe-eval'"
        />
        <script
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
        />
    </Head>
);

export default HeadComponent;
