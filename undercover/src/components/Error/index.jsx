import './style.scss';
import Page from '../Page';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

/*--- Page404 ---*/

const unicorn = {
	hidden: { pathLength: 0 },
	visible: {
		pathLength: 1,
		transition: {
			pathLength: { delay: 0, type: "spring", duration: 10, bounce: 0 },
		}
	}
};

export function Page404() {
    return(
        <Page>
            <div className='page404'>
                <motion.svg
                    viewBox="0 0 800 800"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    initial="hidden"
				    animate="visible"
                    className="page404_unicorn"
                >
                    <motion.path
                        d="M416.56,747.78c69.31-62.86,35.76-168.11-32.77-217-14.9-12.64-29.07-26.2-43.1-39.83-21-18.14-37.31-40.71-30.27-69.72,2.27-29.57,20.81-61.16,7.5-90.14-2.35-4.39-9.76-10.95-14.45-4.89-16.74,80.07,65,70.77,115.25,92.27,12.48,5.67,19.31,18.23,26.48,29.22,14.48,19.95,29.28,49.4,56.81,50.94,17.42-.53,28-16.27,41.35-24.81,18.88-7,35.48-6,45-28.22,5.35-18-14.16-51.21-24.32-66.29-28.4-30.66-28.37-72.63-38.22-110.86-5.74-16.84-17.21-50.48-40.29-42.8-5.4,2.18-5.07,13.52-1.49,17C514.55,263.35,741.83,60,777.14,27.58,692.6,64.4,611.81,108.94,530.73,152.66q-30.42,16.41-60.86,32.79c-6.22,3.34-13.48,10.24-10.87,17.58,3.86,3.81,9,6.29,13.9,8.57,7.83,4.74,12.16-4.52,13.63-10.88a2.81,2.81,0,0,0-1.4-3.6c-13.11-9.32-25.84-18.08-40-25.75-5.35-4-27.07-16.07-24.46-.37,14.08,23.21,37.39-2.91,41-19.69,3.28-11.44,3.86-23.43,6.6-35,4.13-18.37,17.12-32,27.38-47.1-47.24,1.27-94.55,28.9-124.91,64.21-9.22,11-2.17,16.15,7.75,21.49,38.39,16.52,74.19-23.86,78.32-59.69-15.3,4.55-29.09,13-42.18,21.9-47.87,40-68.94,26.89-124.88,31.39-79.1,10.61-156.25,46.42-213.45,102.24,41.51-18.68,100.37-54.63,147.52-42.32C187,241.67,138,255.73,99,285.8c-31.12,26.84-56.83,60.53-76.14,96.73,39.13-30.77,69.52-72.76,115.58-94.3,4.25-1.84,8.44-4.77,13-5.6,2.38,1.22,4.05,4.45,4.59,7-4,17.09-26,25.67-38.71,36.14-32.58,22.87-58,55.05-74.24,91.3-9,20-15,41.47-16.65,63.39C49,448.56,60,408.6,86.44,379.19c8.67-9.47,23.45-21.29,37.15-20.76a56.79,56.79,0,0,1-4.3,11.14c-13.86,28.31-38.12,49.73-54,76.81C46,482.21,31.75,522.72,28.39,563.48,25,612.32,48.62,531.09,54.24,520.24c6.89-17.66,14.19-35.53,25.18-51.1,9.61-13.62,22.37-25,38.5-30.1-.46.09-1.23,17-1.57,18.76-2.59,13.52-10.73,25.13-18.79,36C73.81,524.55,56,560.58,49.92,599.22c-4.08,28.4-1.65,59.32,11.73,85.1,3-23.55-3.77-47,.12-70.35,9.21-43.86,27.95-67.17,58.61-97.45,3.07-4.35,7-7.9,11.39-3.4,6.33,6.4,5.32,14.44,1.66,21.9-9.49,19.33-21.59,37.21-31,56.56-6.58,13.5-6.08,30.84-7.81,45.53-2.22,26.68-7.71,54.29-5.87,80.95,6.43-21.38,10.63-43.42,18.17-64.49,3.65-43.43,153.58-126.34,118.6-46.48-5.6,11.77-12.59,25.72-27.71,25.29a11.74,11.74,0,0,1-12.11-9.88c-16.63-49.45-24-101.76-17.8-153.77a224.94,224.94,0,0,1,32.39-101.84c11.09-21.38,22.57-43.38,38.38-61.73,9.88-12.72,36.87-30.2,17.49-.88-42.39,69.08-70.6,170.41-10.57,237.64a486,486,0,0,1,46.08,62.83c46,78.61-35.81,168.3-117.39,167.67"
                        stroke="grey"
                        stroke-width="10px"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        variants={unicorn}
                    />
                </motion.svg>
                <h1 className='page404_404'>404</h1>
                <h2 className='page404_text'>Your page is like a unicorn: NOT FOUND</h2>

            </div>
        </Page>
    )
}

/*--- Page404 ---*/
/*--- ErrorMessage ---*/

// export function ErrorMessage({ errors }) {
//     return(
//         <></>
//     )
// }

// ErrorMessage.propTypes = {
//     errors: PropTypes.array.isRequired
// }

export class ErrorMessage {
    
}

/*--- ErrorMessage ---*/