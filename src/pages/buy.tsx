import React from "react";
import Head from "next/head";
import ObjectMarket from "@/components/objectList/ObjectList/ObjectList";

const BuyPage = () => {
    return (
        <div>
            <Head>
                <title>Купить</title>
            </Head>
            <ObjectMarket />
        </div>
    );
};

export default BuyPage;
