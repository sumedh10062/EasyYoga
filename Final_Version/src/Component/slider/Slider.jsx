import "./slider.css";
import image1 from "./Yoga1.jpg"
import image2 from "./Yoga2.png"
import image3 from "./Yoga3.jpg"
import image4 from "./Yoga4.jpg"
import { useEffect } from "react";

const sliderLogic = () => {
    const images = document.querySelectorAll('.banner img');
    console.log(images)
		const dots = document.querySelectorAll('.banner .dots span');
		let current = 0;

		function showImage(index) {
			images[current].classList.remove('active');
			dots[current].classList.remove('active');
			current = index;
			images[current].classList.add('active');
			dots[current].classList.add('active');
		}

		setInterval(() => {
			let next = current + 1;
			if (next >= images.length) {
				next = 0;
			}
			showImage(next);
		}, 3000);

		dots.forEach((dot, index) => {
			dot.addEventListener('click', () => {
				showImage(index);
			});
		});
}
const Slider = () => {
    useEffect(
        sliderLogic,
    []
    );
    return(
        <div>
            {/* <h1>Banner Slider POC</h1> */}
	            <div className="banner">
                    <img src={image1} alt="Preview not available" className="active"/>
                    <img src={image2} alt="Preview not available"/>
                    <img src={image3} alt="Preview not available"/>
                    <img src={image4} alt="Preview not available"/>
                    <div className="dots">
                        <span className="active"></span>
                        <span></span>
                        <span></span>
                        <span></span>
		            </div>
	            </div>
        </div>
    )
}

export default Slider