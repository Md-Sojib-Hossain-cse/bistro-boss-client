import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch("menu.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(items => items.category === "popular")
    //             setMenu(popularItems)
    //         })
    // }, [])


    return (
        <section className="mb-8 md:mb-12 lg:mb-20">
            <SectionTitle
                subHeading="Check it out"
                heading="FROM OUR MENU"
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-10 lg:mb-12">
                {
                    popular.map(item => <MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline border-0 border-b-4 uppercase">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;