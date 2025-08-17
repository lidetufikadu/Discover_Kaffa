import React from 'react';
import { Container } from 'react-bootstrap';
import biosphereImage from "../../../assets/images/Biosphere.png";
import 'bootstrap/dist/css/bootstrap.min.css';


const Biosphere = () => {
  const headerStyle = {
    color: '#007bff',
    textAlign: 'center',
    marginTop: '40px'
  };

  const sectionStyle = {
    color: '#6c757d',
    lineHeight: '1.6',
    textAlign: 'justify',
  };

  return (
    <Container className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
      {/* <h1 style={headerStyle}>KEFA BIOSPHERE</h1> */}

      <section id="about" className="mt-4">
        <h2 style={headerStyle}>welcome to kaffa biosphere reserve</h2>
        <div className="text-center mb-4">
          <img src={biosphereImage} alt="Kafa Biosphere Map" className="img-fluid rounded" style={{ maxWidth: '70%' }} />
        </div>
        <p style={sectionStyle}>
          The Kafa Biosphere Reserve is located in the Kafa Zone of Ethiopia approximately 460 
          km southwest of Addis Ababa. The Bonga National Forest Priority Area partly forms the 
          southern boundary of the Biosphere Reserve, whilst the eastern boundary follows the Adiyo
           Woreda with the Gojeb River and Gewata-Yeba (Boginda) National Forest Priority Area forming the northern boundary.
        </p>
        <p style={sectionStyle}>
          It was declared in 2010 and has a surface area of 760,114.1 hectares. It has a population 
          of 608,227 people. It is administered by Kafa Zone Administration, in association with Adiyo 
          Woreda, Bita Woreda, Chena Woreda, Cheta Woreda, Decha Woreda, Gesha Woreda, Gewata Woreda, 
          Gimbo Woreda, Sayilem Woreda, Telo Woreda, and Bonga Town Administration.
        </p>
        <p style={sectionStyle}>
          Ethiopia is a highly diverse country in terms of culture, climate, and nature. In fact, Ethiopia is 
          part of one of the world's 35 biodiversity hotspots and is therefore one of the most biodiverse countries 
          on this planet. The few remaining old-growth forests are considered to be particularly valuable because of 
           natural and cultural treasures. One of these havens is the Kafa Biosphere Reserve in southwest Ethiopia, 
           which is known to be the birthplace of wild Arabica coffee (Coffea arabica). The afromontane cloud forest
            of Kafa is also home to numerous rare and endangered animal and plant species, which make it a unique place to visit 
            off the usual tourist routes in Ethiopia. Visitors to this region can therefore look forward to experiencing 
            authentic cultures, colorful coffee ceremonies as well as striking landscapes and exciting wildlife.
        </p>
        <h2 style={headerStyle}>Ecological characteristics</h2>
        <p style={sectionStyle}>
          The Kafa Biosphere Reserve is located in the Kafa Zone of Ethiopia approximately 460 km southwest of Addis Ababa.
        </p>
        <p style={sectionStyle}>
          The Bonga National Forest Priority Area partly forms the southern boundary 
          of the Biosphere Reserve, whilst the eastern boundary follows the Adiyo Woreda 
          with the Gojeb River and Gewata-Yeba (Boginda) National Forest Priority Area forming the northern boundary.
        </p>
        <p style={sectionStyle}>
          The Saylem Woreda forms the northern part of the Biosphere Reserve and the western boundary 
          constitutes the Gesha National Forest Priority Area. The Kafa Zone contains more than 50% of the remaining montane 
          forests in Ethiopia and it is the center of origin and genetic diversity of wild Coffea arabica.
        </p>
        <h2 style={headerStyle}>Human activities</h2>
        <p style={sectionStyle}>
          The Biosphere Reserve includes the East Afromontane Biodiversity Hotspot and other endemic 
          crops such as Ensete ventricosum and Eragrostis tef, and a cultural and linguistic identity 
          quite distinct from the rest of Africa.
        </p>
        <p style={sectionStyle}>
          Furthermore, it includes a unique coffee culture that is deeply ingrained in the Ethiopian economy and history.
        </p>
        <p style={sectionStyle}>
          The area includes an array of rural settlements, traditional land-use patterns, and sites of cultural
           and natural significance, which are home to approximately 608,227 people.
        </p>
        <p style={sectionStyle}>
          Main economic activities in the area are dominated by agriculture, which contributes approximately 
          41% to the GDP, 80% of exports, and 80% of the labor force. Other sectors include services and tourism,
           manufacturing, and trade. Agriculture forms the backbone of the economy with most of the other sectors 
           (i.e., trade and tourism) depending on its strong backward and forward linkages.
        </p>
        <p style={sectionStyle}>
          The key management focal areas of the Biosphere Reserve include coordination of conservation 
          initiatives with a focus on the protection of the endemic and globally important genetic resources of 
          Coffea arabica and its associated ecosystems, provision of a sustained flow of high-quality water to adjoining 
          regions, and the promotion of sustainable development to alleviate poverty and inequality.
        </p>
      </section>
    </Container>
  );
};

export default Biosphere;
