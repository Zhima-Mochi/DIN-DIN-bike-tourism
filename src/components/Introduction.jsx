import IntroTitle from "./IntroTitle";
import tip_plan from '../assets/icon/tip-plan.svg'
import tip_bike from '../assets/icon/tip-bike.svg'
import tip_backpack from '../assets/icon/tip-backpack.svg'
import arrow_forward from '../assets/icon/arrow-forward.svg'
function Step({ num, logo, title, desc1, desc2 }) {
    return (
        <div className="flex-1 ">
            <p className="font-bold text-3xl mr-24" style={{ color: "#51AB5B" }}>{num}</p>
            <img className="mx-auto w-20" src={logo} />
            <p className=" font-bold text-2xl mb-1">{title}</p>
            <p className=" font-normal text-base">{desc1}</p>
            <p className=" font-normal text-base mb-16">{desc2}</p>
        </div>
    );
}

export default function Introduction() {
    return (
        <div className="w-full bg-white pt-20  ">
            <IntroTitle title_1="How does it work" title_2="如何展開一場單車之旅" />
            <div className="flex flex-col text-center lg:flex-row mt-3">
                <Step num={1} logo={tip_plan} title={"規劃旅程"} desc1="透過探索地圖找到目的地" desc2="搭配周遭美食景點規劃完整行程" />
                <img src={arrow_forward} className="hidden lg:block w-8" />
                <Step num={2} logo={tip_bike} title={"確認租借站點"} desc1="確認附近的Ubike站點" desc2="租借車輛是否足夠" />
                <img src={arrow_forward} className="hidden lg:block w-8" />
                <Step num={3} logo={tip_backpack} title={"整裝出發"} desc1="收拾裝備，穿上運動鞋" desc2="展開一場單車之旅" />

            </div>
        </div>
    )
}