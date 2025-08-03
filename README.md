# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import BartaImage from '../../../assets/images/barta.jpg';
import AdiyoImage from '../../../assets/images/adiyo.jpg';
import EllelloImage from '../../../assets/images/ellello.jpg';
import InoImage from '../../../assets/images/ino.jpg';

const Waterfalls = () => {

  const h2Style = {
    color: '#007bff', // Primary blue color for headers
    textAlign: 'center',
    marginTop: '40px'
  };

  const h3Style = {
    color: '#007bff', // Blue color for subheaders
    textAlign: 'center',
    marginTop: '20px'
  };

  const paragraphStyle = { color: '#495057', textAlign: 'justify', lineHeight: '1.8' };
  const imageStyle = { display: 'block', margin: '20px auto', maxWidth: '100%', height: 'auto', borderRadius: '8px' };

  return (
    <div className="container py-5" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', maxWidth: '950px', marginTop: '40px' }}>
      <main>
        <h2 style={h2Style}>WATER FALL</h2>

        <section id="barta-waterfall" className="mb-5">
          <h3 style={h3Style}>Barta Waterfall</h3>
          <img src={BartaImage} alt="Barta Waterfall" style={imageStyle} />
          <p style={paragraphStyle}>
            Barta Waterfall is a beautiful natural attraction located in the Kefa region of Ethiopia. 
            It cascades down a rocky cliff into a pool below, surrounded by lush greenery.
          </p>
          <p style={paragraphStyle}>
            Barta waterfall is 5 km away from Bonga in Gimbo district Malligawa kebele. It is one of the 
            greatest waterfalls in Kaffa, measuring 20 meters wide and about 50 meters high.
            The refraction of light in the spray creates magnificent rainbows, adding to its charm.
          </p>
        </section>

        <section id="adiyo-waterfall" className="mb-5">
          <h3 style={h3Style}>Addiyo Waterfall</h3>
          <img src={AdiyoImage} alt="Addiyo Waterfall" style={imageStyle} />
          <p style={paragraphStyle}>
            Addiyo Waterfall is found in Addiyo district, 50 km away from Bonga and 12 km from Kaka town. 
            The waterfall is sourced from the Addiyo River and cascades in three steps, each around 20 meters high.
          </p>
          <p style={paragraphStyle}>
            The surrounding area is rich in biodiversity, including various bird species, large mammals, 
            and a vast bamboo forest. It is a perfect destination for nature lovers.
          </p>
        </section>

        <section id="ellello-waterfall" className="mb-5">
          <h3 style={h3Style}>Ellello Waterfall</h3>
          <img src={EllelloImage} alt="Ellello Waterfall" style={imageStyle} />
          <p style={paragraphStyle}>
            Ellello Waterfall is found in Gesha district, Andiracha kebele, 135 km from Bonga and 35 km from Dakka town. 
            It spans about 30 meters wide and falls 25 meters high.
          </p>
          <p style={paragraphStyle}>
            This stunning waterfall is nestled within a natural forest rich in bird life. Underneath the waterfall, 
            a cave hall can accommodate over 500 people, serving as a shelter in ancient times.
          </p>
        </section>

        <section id="shinati-water" className="mb-5">
          <h3 style={h3Style}>Shinaati Iinoo / Shinati Mineral Water</h3>
          <img src={InoImage} alt="Shinaati Mineral Water" style={imageStyle} />
          <p style={paragraphStyle}>
            Shinaati Iinoo, or Shinati Mineral Water, is located in Tello district, 5 km from Oda town and 53 km from Bonga. 
            This natural mineral water is rich in different minerals and is traditionally used by locals.
          </p>
        </section>
      </main>

      <footer className="bg-primary text-white text-center py-3 mt-5">
        <p className="mb-0">&copy; 2024 Kaffa Tourism. All Rights Reserved.</p>
        <p className="mb-0">Follow us on <a href="#" className="text-white text-decoration-underline">Social Media</a></p>
      </footer>
    </div>
  );
};

export default Waterfalls;

