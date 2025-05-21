"use client";

import { useRouter } from "next/navigation";
import { assets } from "@/assets/assets";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface SliderItem {
    id: number;
    title: string;
    offer: string;
    buttonText1: string;
    buttonText2: string;
    imgSrc: string;
}

const sliderData: SliderItem[] = [
    {
        id: 1,
        title: "Experience Pure Sound - Your Perfect Headphones Awaits!",
        offer: "Limited Time Offer 30% Off",
        buttonText1: "Buy now",
        buttonText2: "Find more",
        imgSrc: assets.header_headphone_image,
    },
    {
        id: 2,
        title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
        offer: "Hurry up, only a few left!",
        buttonText1: "Shop Now",
        buttonText2: "Explore Deals",
        imgSrc: assets.header_playstation_image,
    },
    {
        id: 3,
        title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
        offer: "Exclusive Deal 40% Off",
        buttonText1: "Order Now",
        buttonText2: "Learn More",
        imgSrc: assets.header_macbook_image,
    },
];

const Sliderpage: React.FC = () => {
    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isPaused, setIsPaused] = useState<boolean>(false);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % sliderData.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isPaused]);

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
    };

    const handleBuyClick = () => {
        router.push("/userDetail");
    };

    return (
        <div
            className="overflow-hidden relative w-full bg-gradient-to-r from-[#f9f9f9] to-[#e6e6e6] dark:from-gray-900 dark:to-gray-800 py-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* SLIDER CONTAINER */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {sliderData.map((slide, index) => (
                    <div
                        key={slide.id}
                        className="flex flex-col-reverse md:flex-row items-center justify-between px-5 md:px-14 min-w-full gap-6"
                    >
                        {/* TEXT CONTENT */}
                        <div className="flex flex-col gap-4 md:gap-6 md:w-1/2 text-center md:text-left">
                            <p className="text-orange-600 font-medium text-sm md:text-base tracking-wide">
                                {slide.offer}
                            </p>
                            <h1 className="text-2xl md:text-[42px] leading-tight font-bold text-gray-800 dark:text-white">
                                {slide.title}
                            </h1>

                            {/* BUTTONS */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                <Button
                                    onClick={() => handleBuyClick()}
                                    className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6 py-2 text-sm md:text-base transition"
                                >
                                    {slide.buttonText1}
                                </Button>
                                <Button
                                    className="group flex items-center gap-2 text-orange-600 hover:text-orange-700 px-4 py-2 transition font-medium"
                                    variant="ghost"
                                >
                                    {slide.buttonText2}
                                    <Image
                                        src={assets.arrow_icon}
                                        alt="arrow_icon"
                                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                    />
                                </Button>
                            </div>
                        </div>

                        {/* IMAGE */}
                        <div className="md:w-1/2 flex justify-center">
                            <Image
                                src={slide.imgSrc}
                                alt={slide.title}
                                className="md:w-80 w-52 object-contain"
                                priority={index === 0}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* DOTS */}
            <div className="flex items-center justify-center gap-3 mt-6">
                {sliderData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleSlideChange(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        className={`h-3 w-3 rounded-full transition-all duration-300 border-2 ${currentSlide === index
                            ? "bg-orange-600 border-orange-600 scale-110"
                            : "bg-gray-400/30 border-gray-400/30"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sliderpage;
