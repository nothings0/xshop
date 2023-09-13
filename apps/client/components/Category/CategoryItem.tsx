"use client";
import React, { useState } from "react";
import { ICategory } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import img from "@/assets/default-image.jpg";

interface IProps {
  category: ICategory;
}
const URL = "https://backend-md7c.onrender.com";
const CategoryItem: React.FC<IProps> = ({ category }) => {
  const [imgSrc, setImgSrc] = useState<string | StaticImageData>(
    `${URL}${category.attributes.img_cover.data.attributes.url}`
  );

  return (
    <div className="category__item">
      <Link href={`/product?category=${category.attributes.slug}`}>
        <div className="category__item__text">{category.attributes.name}</div>
        <Image
          src={imgSrc}
          alt="category image"
          width={`${Number(
            category.attributes.img_cover.data.attributes.width
          )}`}
          height={`${Number(
            category.attributes.img_cover.data.attributes.height
          )}`}
          onError={() => setImgSrc(img)}
        />
      </Link>
    </div>
  );
};

export default CategoryItem;
