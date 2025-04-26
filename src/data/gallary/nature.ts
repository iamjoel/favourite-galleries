import { ImageInGallery } from "../../types";
const CATEGORY_ID = "nature";
const data: ImageInGallery[] = [
  {
    categoryId: CATEGORY_ID,
    src: "/gallery/nature/shicheju.jpg",
    width: 750,
    height: 560,
    caption: "矢车菊",
    // tags: [
    //   { value: "flower", title: "flower" },
    // ],
  },
  {
    categoryId: CATEGORY_ID,
    src: "/gallery/nature/green-with-golden.jpg",
    width: 768,
    height: 576,
    caption: "金边胡颓子",
  },
  {
    categoryId: CATEGORY_ID,
    src: "/gallery/nature/snow-mountain-fuliangye.jpg",
    width: 576,
    height: 768,
    caption: "富良野雪山滑雪场",
  },
  {
    categoryId: CATEGORY_ID,
    src: "/gallery/nature/sea-clear-sanye.jpg",
    width: 853,
    height: 640,
    caption: "三亚果冻海",
  },
]

export default data;