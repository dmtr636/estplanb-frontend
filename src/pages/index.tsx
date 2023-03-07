import Head from "next/head";
import Slider from "@/components/main/Slider/Slider";

const MainPage = () => {
    return (
        <>
            <Head>
                <title>План Б Недвижимость</title>
            </Head>
            <div style={{ height: "2000px" }}>
                <Slider />
            </div>
        </>
    );
};

export default MainPage;
