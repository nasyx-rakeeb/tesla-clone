
import NavHeader from '../UI/NavHeader';
import Menu from '../Menu/Menu';
import Section from './Section';
import './index.css';
const Home = ({ isMenuOpen, setIsMenuOpen }) => {

    const HeroSections = [
        {
            backgroundImage: "model-s.jpg",
            title: "Model S",
            description: "Order Online for",
            descriptionSpan: "Touchless Delivery",
            leftButton: "Custom Order",
            rightButton: "Exisiting Inventoroy",

        },
        {
            backgroundImage: "model-y.jpg",
            title: "Model Y",
            description: "Order Online for",
            descriptionSpan: "Touchless Delivery",
            leftButton: "Custom Order",
            rightButton: "Exisiting Inventoroy"

        },
        {
            backgroundImage: "model-3.jpg",
            title: "Model 3",
            description: "Order Online for",
            descriptionSpan: "Touchless Delivery",
            leftButton: "Custom Order",
            rightButton: "Exisiting Inventoroy"

        },
        {
            backgroundImage: "model-x.jpg",
            title: "Model X",
            description: "Order Online for",
            descriptionSpan: "Touchless Delivery",
            leftButton: "Custom Order",
            rightButton: "Exisiting Inventoroy"

        },
        {
            backgroundImage: "solar-panel.jpg",
            title: "Lowest Cost Solar Panel in America",
            description: "Money-back guarantee",
            descriptionSpan: "",
            leftButton: "Order Now",
            rightButton: "Learn More"

        },
        {
            backgroundImage: "solar-roof.jpg",
            title: "Solar for New Roofs",
            description: "Solar Roof Costs Less Than a New Roof Plus Solar Panels",
            descriptionSpan: "",
            leftButton: "Order Now",
            rightButton: "Learn More"

        },
        {
            backgroundImage: "accessories.jpg",
            title: "Accessories",
            description: "",
            descriptionSpan: "",
            leftButton: "Shop Now",


        },
    ]

    return (
        <div className="HomePage">
            <NavHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Menu isMenuOpen={isMenuOpen} />
            {HeroSections.map((section, index) => <Section key={index} model={section.model} title={section.title} description={section.description} descriptionSpan={section.descriptionSpan} leftButton={section.leftButton} rightButton={section.rightButton} backgroundImage={section.backgroundImage}
                isMenuOpen={isMenuOpen}
            />)}
        </div>
    )
}

export default Home;