import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./FeaturedItem.css";

const FeaturedItem = () => {
    return (
        <section className="mb-8 md:mb-12 lg:mb-20 featuredItem text-white bg-fixed">
            <div className="bg-[#151515B3] pt-12">
                <SectionTitle
                    subHeading="check it out"
                    heading="Featured Item"
                    textStyle="white"
                ></SectionTitle>
            </div>
            <div className="md:flex justify-center items-center gap-8 md:gap-10 lg:gap-12 bg-[#151515B3] pb-8
            md:pb-10 lg:pb-12 px-10 md:px-20 lg:px-28">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="space-y-4">
                    <p>March 20,2024</p>
                    <p className="uppercase text-lg">Where can i get some</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reprehenderit cupiditate vero obcaecati architecto deleniti id nulla, quasi perspiciatis soluta. Sapiente nihil, iusto culpa nisi possimus dolore? Rerum eligendi doloribus natus dolor, nihil minus?</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white uppercase">Read More</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedItem;