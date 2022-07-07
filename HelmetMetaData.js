import React from "react";
import { Helmet } from "react-helmet";
const HelmetMetaData = ({title, description, imageUrl, imageAlt})=> {
    return (
        <Helmet>
        <meta property="og:title" content={title}/>
        <meta property="og:type" content="article" />
        <meta property="og:image" content={imageUrl}/>
        <meta property="og:url" content={window.location.pathname+window.location.search}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="og:description" content={description}/>
        <meta property="og:site_name" content="European Travel, Inc."/>
        <meta name="twitter:image:alt" content={imageAlt}/>
        </Helmet>
    );
}


export default HelmetMetaData;