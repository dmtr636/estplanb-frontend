import Head from "next/head";
import Slider from "@/components/main/Slider/Slider";

export default function Home() {
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
}
