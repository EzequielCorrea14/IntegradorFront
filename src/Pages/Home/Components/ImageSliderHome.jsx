import React from 'react';
import styles from './Slider.module.css';
import { FaCircleArrowLeft , FaCircleArrowRight} from "react-icons/fa6";

function ImageSliderHome({ images }) {
	// Variables y Estados
	const [currentImage, setcurrentImage] = React.useState(0);
	const quantity = images?.length;

	// Return prematuro para evitar errores
	if (!Array.isArray(images) || quantity === 0) return;

	const nextImage = () => {
		setcurrentImage(currentImage === quantity - 1 ? 0 : currentImage + 1);
	};

	const formerImage = () => {
		setcurrentImage(currentImage === 0 ? quantity - 1 : currentImage - 1);
	};

	return (
		<div className={styles.container}>
      <FaCircleArrowLeft style={{color:'black', fontSize:'100px', position:'relative',left:'68px'}} onClick={formerImage} />
			
			{images.map((image, index) => {
				return (
					<div
						className={
							currentImage === index
								? `${styles.slide} ${styles.active}`
								: styles.slide
						}>
						{currentImage === index && (
							<img style={{ width: '94%', height:'auto', marginLeft: '20px'  }} key={index} src={image} alt="image" />
						)}
					</div>
				);
			})}
      <FaCircleArrowRight style={{color:'black', fontSize:'100px', position:'relative',right:'62px'}} onClick={nextImage} />
			
		</div>
	);
}

export default ImageSliderHome;