"use client";
import React, { useState } from "react";
import { IProductFamous } from "@/type";
import Image from "next/image";

interface IProps {
  data: IProductFamous;
}
const URL = "https://backend-md7c.onrender.com";
import img from "@/assets/default-image.jpg";
import { StaticImageData } from "next/image";

const ProductFamousItem: React.FC<IProps> = ({ data }) => {
  const [imgSrc, setImgSrc] = useState<string | StaticImageData>(
    `${URL}${data.attributes.img_cover.data.attributes.url}`
  );

  return (
    <div className="product__famous__item">
      <Image
        alt=""
        src={imgSrc}
        width={`${Number(data.attributes.img_cover.data.attributes.width)}`}
        height={`${Number(data.attributes.img_cover.data.attributes.height)}`}
        onError={() => setImgSrc(img)}
      />
      <div className="product__famous__text">
        <span>{data.attributes.type}</span>
        <h4>{data.attributes.name}</h4>
        <p>{data.attributes.desc}</p>
      </div>
    </div>
  );
};

export default ProductFamousItem;
