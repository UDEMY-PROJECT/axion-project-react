import React from 'react';
import './TrustedCompanies.css';

const TrustedCompanies = () => {
  // Updated with your exact CMS SVG links
  const logos = [
    { name: 'Volkswagen', url: 'https://cms-images.udemycdn.com/96883mtakkm8/3E0eIh3tWHNWADiHNBmW4j/3444d1a4d029f283aa7d10ccf982421e/volkswagen_logo.svg' },
    { name: 'Samsung', url: 'https://cms-images.udemycdn.com/96883mtakkm8/2pNyDO0KV1eHXk51HtaAAz/090fac96127d62e784df31e93735f76a/samsung_logo.svg' },
    { name: 'Cisco', url: 'https://cms-images.udemycdn.com/96883mtakkm8/3YzfvEjCAUi3bKHLW2h1h8/ec478fa1ed75f6090a7ecc9a083d80af/cisco_logo.svg' },
    { name: 'Vimeo', url: 'https://cms-images.udemycdn.com/96883mtakkm8/23XnhdqwGCYUhfgIJzj3PM/77259d1ac2a7d771c4444e032ee40d9e/vimeo_logo_resized-2.svg' },
    { name: 'P&G', url: 'https://cms-images.udemycdn.com/96883mtakkm8/1UUVZtTGuvw23MwEnDPUr3/2683579ac045486a0aff67ce8a5eb240/procter_gamble_logo.svg' },
    { name: 'Hewlett Packard', url: 'https://cms-images.udemycdn.com/96883mtakkm8/1GoAicYDYxxRPGnCpg93gi/a8b6190cc1a24e21d6226200ca488eb8/hewlett_packard_enterprise_logo.svg' },
    { name: 'Citi', url: 'https://cms-images.udemycdn.com/96883mtakkm8/2tQm6aYrWQzlKBQ95W00G/c7aaf002814c2cde71d411926eceaefa/citi_logo.svg' },
    { name: 'Ericsson', url: 'https://cms-images.udemycdn.com/96883mtakkm8/7guDRVYa2DZD0wD1SyxREP/b704dfe6b0ffb3b26253ec36b4aab505/ericsson_logo.svg' }
  ];

  return (
    <div className="trusted-wrapper">
      <section className="trusted-container">
        <h2>Trusted by over 17,000 companies and millions of learners around the world</h2>
        
        <div className="logo-grid">
          {logos.map((logo, index) => (
            <img 
              key={index} 
              src={logo.url} 
              alt={`${logo.name} logo`} 
              className="company-logo" 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrustedCompanies;