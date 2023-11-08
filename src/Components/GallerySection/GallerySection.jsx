import SectionHeading from "../SectionHeading/SectionHeading"


const GallerySection = () => {
    return (
        <div>
            <div className="dark:bg-black dark:text-white mx-auto  my-20">
                <SectionHeading big={"Our Gallery"} small={"Come and work with us !"} />
                <div className="dark:bg-black max-w-7xl dark:text-white mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="mx-auto mb-10 w-[350px] h-[500px] rounded-lg bgx" style={{ backgroundImage: `url(https://i.pinimg.com/564x/4f/bf/71/4fbf7167761509079eba85df0b133d84.jpg)` }}></div>

                    <div className="mx-auto mb-10 w-[350px] h-[500px] aspect-square rounded-lg bgx" style={{ backgroundImage: `url(https://i.pinimg.com/564x/75/cb/54/75cb5431d22ba5a4e7accbf25691a076.jpg)` }}></div>

                    <div className="mx-auto mb-10 w-[350px] h-[500px] aspect-square rounded-lg bgx" style={{ backgroundImage: `url(https://i.pinimg.com/564x/6c/85/77/6c857700b7858e2f43743bb45a9787c2.jpg)` }}></div>

                    <div className="mx-auto w-[350px] h-[500px] aspect-square rounded-lg bgx" style={{ backgroundImage: `url(https://i.pinimg.com/564x/48/65/61/486561da858e98fdb5007d7e85095ffc.jpg)` }}></div>

                    <div className="mx-auto w-[350px] h-[500px] aspect-square rounded-lg bgx" style={{ backgroundImage: `url(https://i.pinimg.com/564x/9f/2c/71/9f2c71523595fbdd23292cd60669ffae.jpg)` }}></div>

                    <div className="mx-auto w-[350px] h-[500px] aspect-square rounded-lg bgx" style={{ backgroundImage: `url(https://i.pinimg.com/564x/60/62/72/6062728ca848849d1ab3f6422695bc86.jpg)` }}></div>
                </div>
            </div>
        </div>
    )
}

export default GallerySection