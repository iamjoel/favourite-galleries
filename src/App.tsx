// fix react 19 problem: https://github.com/benhowell/react-grid-gallery/issues/375
import { useState } from "react";
import { Gallery } from "./components/react-grid-gallery"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import categories from "./data/category";
import imgs from "./data/gallary";
import Hero from "./components/hero";
import { Category, ImageInGallery } from "./types";
import { CategoryFilter } from "./components/category-filter";

function App() {
  const [index, setIndex] = useState(-1);
  const [currentCategory, setCurrentCategory] = useState<Category>(categories[0]);
  const showImgs: ImageInGallery[] = imgs[currentCategory.id]?.map(image => {
    return {
      ...image,
      customOverlay: (
        //bg-[rgba(0, 0, 0, 0.8)] 
        <div className=" absolute bottom-0 w-full overflow-hidden text-white p-0.5 max-h-[240px] bg-black bg-opacity-80 ">
          <div>{image.caption}</div>
          {image.tags &&
            image.tags.map((t, index) => (
              <div key={index} className="m-0.5 break-words inline-block bg-white h-auto text-[75%] font-semibold leading-none px-[0.6em] pt-[0.2em] pb-[0.3em] rounded-[0.25em] text-black align-baseline ">
                {t.title}
              </div>
            ))}
        </div>
      )
    }
  });

  const handleClick = (index: number) => setIndex(index);

  return (
    <div className="w-full md:w-[80%] mx-auto">
      <Hero />
      <div className="px-1 md:px-0">
        <CategoryFilter
          categories={categories}
          value={currentCategory}
          onCategoryChange={setCurrentCategory}
        />
        <Gallery
          images={showImgs}
          onClick={handleClick}
          enableImageSelection={false}
        />
      </div>
      <Lightbox
        slides={showImgs}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  )
}

export default App
