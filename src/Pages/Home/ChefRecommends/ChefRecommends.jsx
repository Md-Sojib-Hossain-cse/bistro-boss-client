import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Card1Img from "../../../assets/home/slide1.jpg";

const ChefRecommends = () => {
    return (
        <section className="mb-8 md:mb-12 lg:mb-20">
            <SectionTitle
                subHeading="Should Try"
                heading="Chef Recommends"
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card shadow-xl">
                    <figure className="h-[300px] w-full">
                        <img
                            src={Card1Img}
                            alt="cardImg"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="card-title">Caeser Salad</h4>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 uppercase text-[#BB8506] hover:text-[#BB8506]">View Full Menu</button>
                        </div>
                    </div>
                </div>
                <div className="card shadow-xl">
                    <figure className="h-[300px] w-full">
                        <img
                            src={Card1Img}
                            alt="cardImg"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="card-title">Caeser Salad</h4>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 uppercase text-[#BB8506] hover:text-[#BB8506]">View Full Menu</button>
                        </div>
                    </div>
                </div>
                <div className="card shadow-xl">
                    <figure className="h-[300px] w-full">
                        <img
                            src={Card1Img}
                            alt="cardImg"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className="card-title">Caeser Salad</h4>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-outline border-0 border-b-4 uppercase text-[#BB8506] hover:text-[#BB8506]">View Full Menu</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecommends;