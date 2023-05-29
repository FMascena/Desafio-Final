import React from "react";
import image1 from "../../assets/GalleryPersonalize1.png";
import image2 from "../../assets/GalleryPersonalize2.png";
import image3 from "../../assets/GalleryPersonalize3.png";
import image4 from "../../assets/GalleryPersonalize4.png";
import image5 from "../../assets/GalleryPersonalize5.png";
import image6 from "../../assets/GalleryPersonalize6.png";
import image7 from "../../assets/GalleryPersonalize7.png";
import image8 from "../../assets/GalleryPersonalize8.png";
import hover1 from "../../assets/HoverGalleryPersonalize1.png";
import hover2 from "../../assets/HoverGalleryPersonalize2.png";
import hover3 from "../../assets/HoverGalleryPersonalize3.png";
import hover4 from "../../assets/HoverGalleryPersonalize4.png";
import hover5 from "../../assets/HoverGalleryPersonalize5.png";
import hover6 from "../../assets/HoverGalleryPersonalize6.png";
import hover7 from "../../assets/HoverGalleryPersonalize7.png";
import hover8 from "../../assets/HoverGalleryPersonalize8.png";
import './styles.css'


function GalleryPersonalize() {
  return (
    <div className="bg-bege-100 m-auto">
      <div className="container m-auto w-10/12 py-16">
        <div className="grid grid-cols-4 items-center gap-4">
          <div>
            <div className="wrapper rounded-[30px]">
                <figure className="py-2 rounded-[30px]">
                    <div className="img-area rounded-[30px]">
                        <img className="img-back rounded-[30px]" src={hover1} alt="" />
                        <img className="img-front rounded-[30px]" src={image1} alt="" />
                    </div>
                </figure>
            </div>
            <div className="wrapper rounded-[30px]">
                <figure className="py-2 rounded-[30px]">
                    <div className="img-area rounded-[30px]">
                        <img className="img-back rounded-[30px]" src={hover2} alt="" />
                        <img className="img-front rounded-[30px]" src={image2} alt="" />
                    </div>
                </figure>
            </div>
          </div>
          <div>
            <div className="wrapper rounded-[30px]">
                <figure className="py-2 rounded-[30px]">
                    <div className="img-area rounded-[30px]">
                        <img className="img-back rounded-[30px]" src={hover3} alt="" />
                        <img className="img-front rounded-[30px]" src={image3} alt="" />
                    </div>
                </figure>
            </div>
            <div className="wrapper rounded-[30px]">
                <figure className="py-2 rounded-[30px]">
                    <div className="img-area rounded-[30px]">
                        <img className="img-back rounded-[30px]" src={hover4} alt="" />
                        <img className="img-front rounded-[30px]" src={image4} alt="" />
                    </div>
                </figure>
            </div>
          </div>
          <div>
            <div className="wrapper rounded-[30px]">
                <figure className="py-2 rounded-[30px]">
                    <div className="img-area rounded-[30px]">
                        <img className="img-back rounded-[30px]" src={hover5} alt="" />
                        <img className="img-front rounded-[30px]" src={image5} alt="" />
                    </div>
                </figure>
            </div>
            <div className="wrapper rounded-[30px]">
                <figure className="py-2 rounded-[30px]">
                    <div className="img-area rounded-[30px]">
                        <img className="img-back rounded-[30px]" src={hover6} alt="" />
                        <img className="img-front rounded-[30px]" src={image6} alt="" />
                    </div>
                </figure>
            </div>
          </div>
          <div>
            <div className="wrapper rounded-[30px]">
                <figure className="py-2 rounded-[30px]">
                    <div className="img-area rounded-[30px]">
                        <img className="img-back rounded-[30px]" src={hover7} alt="" />
                        <img className="img-front rounded-[30px]" src={image7} alt="" />
                    </div>
                </figure>
            </div>
            <div className="wrapper rounded-[30px]">
                <figure className="py-2 rounded-[30px]">
                    <div className="img-area rounded-[30px]">
                        <img className="img-back rounded-[30px]" src={hover8} alt="" />
                        <img className="img-front rounded-[30px]" src={image8} alt="" />
                    </div>
                </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryPersonalize;
