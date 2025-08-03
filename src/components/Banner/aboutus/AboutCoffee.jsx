import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import KaldCoffee from '../../../assets/images/kaldcoffee.jpg'; 
import Mankra from '../../../assets/images/monkra.jpg';
import Museum from '../../../assets/images/musiam.jpg';
import Ceremony1 from '../../../assets/images/cere.png';

const AboutCoffee = () => {
  return (
    <div className="container py-4" style={{ backgroundColor: '#f8f9fa', marginTop: '30px' }}>
      <h3 className="text-center mb-3" style={{ color: '#007bff', fontWeight: 'bold', marginTop: '40px'}}>ABOUT COFFEE</h3>
      <h4 className="text-center mb-3" style={{ color: '#007bff', fontWeight: 'bold' }}>History</h4>
      <p style={{ textAlign: 'justify', fontSize: '1rem', lineHeight: '1.6' }}>
      The coffee plant originates in the Ethiopian region of Kaffa. 
            According to legend, the 9th-century goat herder Kaldi discovered the coffee plant
             after noticing the energizing effect the plant had on his flock, but this story did not appear 
             in writing until 1671. After originating in Ethiopia, coffee was consumed as a beverage in Yemen, 
             possibly around the 6th century, even though the origin of coffee drinking is obscure. 
             From Yemen, coffee spread into Istanbul, Cairo, and Damascus. Ethiopian Christians refrained 
             from drinking coffee due to its perceived association with Muslims until the 19th century.
             The first coffee houses in Europe opened in Venice in 1645. The first coffee house in the 
             United States began in Boston in 1689. Demand for coffee 
             increased drastically in the 1960s, leading to opening of the first Starbucks store in Seattle in 1971.
      </p>

      {/* Section 1 */}
      <div className="row align-items-center my-4">
        <div className="col-md-6">
          <h5 style={{ color: '#007bff', fontWeight: 'bold' }}>Herd Kalli Aaddi</h5>
          <p style={{ textAlign: 'justify', fontSize: '0.95rem', lineHeight: '1.5' }}>
          The goat herd which locally known as Kall Addi the coffee legendary,
                 was born in Kaffa Decha district Makira kebele in the sub-village called Buni. This young 
                 herd as usual took his goat to feed them in the forest. The story goes and it is said that Kall Addi 
                 discovered coffee after recognizing that his goat, after eating red berries from a tree, 
                 became so excited that they spent the night without sleep. Hence, this surprising story
                  passed to elders, then to village and spread throughout nation and worldwide. The name droppers, 
                  of coffee literature writers modified the local name Kall Addi and associate it with Arab name to 
                  change destination of coffee origin. This breath taking story never ends here- 
                so come to the birthplace of Kall Addi and enjoy coffee in its birthplace.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src={KaldCoffee} alt="Kald coffee" className="img-fluid rounded shadow" style={{ width: '90%', maxHeight: '250px' }} />
        </div>
      </div>

      {/* Section 2 */}
      <div className="row align-items-center my-4">
        <div className="col-md-6">
          <h5 style={{ color: '#007bff', fontWeight: 'bold' }}>Makira Coffee Forest & Mother Coffee Tree</h5>
          <p style={{ textAlign: 'justify', fontSize: '0.95rem', lineHeight: '1.5' }}>
          Arabica coffee is first discovered and tasted in south west of Ethiopia, 
                Kaffa in unique place called Makira in Decha district, at Buni sub-village. Ethiopia was not only 
                origin and home land of mankind, but also home land of Arabica coffee. Coffee is called 'Bunna' 
                (boo-na) in Ethiopia ,but as the plant spread out in the area as far as the Arabian peninsula
                across the Red Sea people referred to it as Kaffa or Coffee for the region it came from. The reason 
                for its early spread was as an edible product mostly for the caffeine. Hence,after extensive study
                 and documentation Kaffa- Makira is recognized as a birthplace of coffee Arabica and this unique
                  area is registered in the worldwide network UNESCO Biosphere Reserve in June 2010 G.C. If you are 
                  excited with legend of coffee, please come and visit the living laboratory of precious coffee Arabica 
                  genetic pool/more than 5000 varieties/ within Makira area. Kaffa may very well be, as Bruce (1804) 
                  noted two centuries ago, the birthplace of coffee plant ,prior to kaffa Amhara war, Kaffa was said 
                  to have been, the place of coffee producing 
                  land in Africa, kaffa was exporting some 350,000 kilo gram of the valuable coffee bean annually.
          </p>
          Mother Coffee Tree in mankira,20 feet tall and eight inches thick, 
          it is reputed to be the oldest coffee tree in the world.
          <p style={{ textAlign: 'justify', fontSize: '0.95rem', lineHeight: '1.5' }}>
          
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src={Mankra} alt="Mankra" className="img-fluid rounded shadow" style={{ width: '90%', maxHeight: '250px' }} />
        </div>
      </div>

      {/* Section 3 */}
      <div className="row align-items-center my-4">
        <div className="col-md-6">
          <h5 style={{ color: '#007bff', fontWeight: 'bold' }}>National Coffee Museum, Bonga-Kaffa</h5>
          <p style={{ textAlign: 'justify', fontSize: '0.95rem', lineHeight: '1.5' }}>
          The Federal Government of Ethiopia decided to celebrate the Ethiopian 
                Millennium throughout the country.Following this decision, the National Millennium celebration 
                committee, this is led by the late Prime Minister Meles Zenawi emanate the idea to commemorate 
                the Ethiopia Millennium with laying some concrete evidence that to be traced by for the upcoming 
                future generation.Hence, the idea of National coffee Museum was born at that national meeting.Therefore, 
                for the remembrance of the Ethiopian Millennium celebration in Bonga National coffee Museum was dedicated 
                kaffa people in recognition as homeland of Arabica Coffee. Thus, the cornerstone was laid by Girma W/giorgis, the late FDRE President in June 2007.G.C. The construction of the Bonga National coffee Museum was completed in April 6, 2015 G.C. And inaugurated by H.E. Hailemariam Desalegn prime Minister of Ethiopia. This unique and specialized coffee Museum is the first of its kind in Africa. It is a hub for Ethiopian coffee history, tradition and culture. In one stop tourists will 
                visit and enjoy the traditional coffee artifacts and the unique Ethiopian coffee ceremonies.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src={Museum} alt="National Coffee Museum" className="img-fluid rounded shadow" style={{ width: '90%', maxHeight: '250px' }} />
        </div>
      </div>

      {/* Section 4 */}
      <div className="row align-items-center my-4">
        <div className="col-md-6">
          <h5 style={{ color: '#007bff', fontWeight: 'bold' }}>Traditional Coffee Ceremony in Kaffa</h5>
          <p style={{ textAlign: 'justify', fontSize: '0.95rem', lineHeight: '1.5' }}>
          An invitation to a coffee ceremony denotes friendship and respect. 
                A woman begins the ceremony in a corner of the house by scattering fresh cut grass which
                 provides a fresh scent. She seats herself on a stool before a charcoal brazier. Incense 
                 burns to enhance the atmosphere. She roasts the coffee beans in a pan over the coals shaking 
                 them in order to roast them evenly. As they roast, guests draw the aromatic smoke toward 
                 themselves breathing deeply as a polite gesture. Next, the woman grounds the roasted beans
                 with a mortar and pestle. The pestle's pounding noise serves as an invitation for everyone 
                  to join the coffee ceremony. The coffee is then brewed in a traditional ceramic coffee pot 
                  or a natural bamboo cup. She serves the coffee in a small cup with three spoonfuls of sugar.
                  Traditional ensete, or false banana (Ensete ventricosum), bread is often served with the coffee. 
                   When the first pot is finished the woman will often brew another pot. Tradition allows for three 
                   rounds of coffee to be brewed with the same grounds. This ceremony 
                signifies solidarity in the community which is especially important in times of food shortage.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src={Ceremony1} alt="Coffee Ceremony in Ethiopia" className="img-fluid rounded shadow" style={{ width: '90%', maxHeight: '250px' }} />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-2 mt-4">
        <p className="mb-1">&copy; 2025 Kaffa Tourism. All Rights Reserved.</p>
        <p className="mb-0">Follow us on <a href="#" className="text-white text-decoration-underline">Social Media</a></p>
      </footer>
    </div>
  );
};

export default AboutCoffee;
