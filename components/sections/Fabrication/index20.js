import React from "react";
export default function index20(){
    return (
        <>
  <div>
      {/* BANNER */}
      <div className="">
        <div className="text-center px-md-5 px-2">
          <h2 className="pt-4 mobile-fonts-heading" style={{ fontSize: '75px' }}>
            Fabrication
          </h2>

          <div className="px-md-5 py-md-3 text-center">
            <h4 style={{ color: 'rgb(66, 66, 66)', fontWeight: 400 }}>
              BMW Steels Ltd. has state of the art basalt manufacturing plant situated in Bhagwanpur, Haridwar, Uttarakhand.
            </h4>
          </div>
        </div>

        {/* Carousel */}
        <div className="p-3 px-md-5">
          <div className="px-md-5">
            <div
              id="carouselExampleAutoplaying"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="/images/fabrication/1.jpg"
                    alt="Aluminium Fabrication"
                    layout="responsive"
                    className="w-100"
                    style={{ borderRadius: '15px' }}
                  />
                  <div
                    className="p-3 mt-3"
                    style={{
                      color: 'black',
                      backgroundColor: '#D9D9D9',
                      display: 'inline-block',
                      borderRadius: '10px',
                      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    }}
                  >
                    <h4 style={{ color: 'rgb(68, 67, 67)' }}>Aluminium Fabrication</h4>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        {/* Carousel END */}
      </div>
      {/* BANNER END */}

      {/* Section 1 */}
      <div className="p-md-5 mt-3">
        <div className="d-lg-flex px-md-5 justify-content-center align-items-center">
          <div className="w-100 p-3">
            <h2 className="pt-md-4 mobile-fonts-heading" style={{ fontSize: '75px' }}>
              Metal Fabrication Services
            </h2>
            <h5
              className="pt-4"
              style={{
                color: 'rgb(66, 66, 66)',
                fontWeight: 400,
                textAlign: 'justify',
              }}
            >
              We have dedicated metal fabrication services at BMW Steels using many materials, from stainless steel to aluminum, bronze and carbon steel. We have experienced fabricators, and they use a variety of welding processes, including MIG, synergic MIG and TIG, built to your specifications.
            </h5>
            <h5
              className="pt-4"
              style={{
                color: 'rgb(66, 66, 66)',
                fontWeight: 400,
                textAlign: 'justify',
              }}
            >
              To give all our fabrication work an edge of accuracy, we use CAD to provide precision work, and when we create profiles, we laser cut and water cut for accuracy.
            </h5>
          </div>
          <div className="text-center p-3 ps-md-5 w-75">
            <img
              src="/images/fabrication/Fabrication.jpg"
              alt="Metal Fabrication"
              layout="responsive"
              className="w-100"
              style={{
                borderRadius: '10px',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              }}
            />
          </div>
        </div>
      </div>
      {/* Section 1 END */}

      {/* Section 3 */}
      <div className="p-md-5 py-md-0 p-3" style={{ backgroundColor: '#f4f4f4' }}>
        <div className="px-md-5">
          <h2
            className="pt-4 mobile-fonts-heading text-center"
            style={{ fontSize: '75px' }}
          >
            Rolling & Forming Services
          </h2>

          <div>
            <h2 className="fs-1" style={{ color: 'red' }}>1. Rolling</h2>

            <h2 className="fs-4 fw-normal p-3 pt-4">
              We also specialise in a rolling service, which allows for:
            </h2>

            <div className="d-flex flex-column-reverse flex-md-column">
              <div className="d-md-flex pt-2">
                <img
                  src="/images/fabrication/Rolling.jpg"
                  alt="Rolling Service"
                  layout="responsive"
                  
                  className="w-100 p-3"
                />
                <img
                  src="/images/fabrication/Rolling2.jpg"
                  alt="Rolling Service 2"
                  layout="responsive"
                 
                  className="w-100 p-3"
                />
                <div className="w-100"></div>
              </div>
              <div className="p-3 pt-0"></div>
            </div>
          </div>

          <div className="pt-3">
            <h2 className="fs-1" style={{ color: 'red' }}>2. Forming:</h2>

            <h2 className="fs-4 fw-normal p-3 pt-4">
              In addition to rolling, we also can provide forming services to allow for more complex shapes:
            </h2>

            <div className="">
              <div className="d-md-flex pt-2">
                <img
                  src="/images/fabrication/Forming.jpg"
                  alt="Forming Service"
                  layout="responsive"
                  
                  className="w-100 p-3"
                />
                <img
                  src="/images/fabrication/Forming2.jpg"
                  alt="Forming Service 2"
                  layout="responsive"
                 
                  className="w-100 p-3"
                />
                <div className="w-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 END */}

      {/* Section: Machining Services */}
      <div className="p-md-5 py-md-0 p-3" style={{ backgroundColor: '#f4f4f4' }}>
        <div className="px-md-5">
          <h2
            className="pt-4 mobile-fonts-heading text-center"
            style={{ fontSize: '75px' }}
          >
            Machining Services
          </h2>
          <h2 className="fs-4 fw-normal p-3 pt-4">
            Produce work using the machines below:
          </h2>

          <div className="pt-3">
            <h2 className="fs-1" style={{ color: 'red' }}>1. Turning</h2>

            <div className="d-flex flex-column-reverse flex-md-column">
              <div className="d-md-flex pt-2">
                <img
                  src="/images/fabrication/Metal_Turning.jpg"
                  alt="Turning Service"
                  layout="responsive"
                  
                  className="w-100 p-3"
                />
                <div className="w-100"></div>
                <div className="w-100"></div>
              </div>

              <div className="p-3 pt-0">
                <h2 className="fs-4 fw-normal pt-3">Centrifugal Cylinder Casting</h2>
              </div>
            </div>
          </div>

          <div className="pt-3">
            <h2 className="fs-1" style={{ color: 'red' }}>2. Milling:</h2>

            <h2 className="fs-4 fw-normal p-3 pt-4">
              In addition to rolling, we also can provide forming services to allow for more complex shapes:
            </h2>

            <div className="">
              <div className="d-md-flex pt-2">
                <img
                  src="/images/fabrication/Milling.jpg"
                  alt="Milling Service"
                  layout="responsive"
                  
                  className="w-100 p-3"
                />
                <div className="w-100"></div>
                <div className="w-100"></div>
              </div>
            </div>
          </div>

          <div className="pt-3">
            <h2 className="fs-1" style={{ color: 'red' }}>3. Drilling</h2>

            <div className="">
              <div className="d-md-flex pt-2">
                <img
                  src="/images/fabrication/Drilling.jpg"
                  alt="Drilling Service"
                  layout="responsive"
                  
                  className="w-100 p-3"
                />
                <div className="w-100"></div>
                <div className="w-100"></div>
              </div>
            </div>
          </div>

          <div className="pt-3">
            <h2 className="fs-1" style={{ color: 'red' }}>4. Boring</h2>

            <h2 className="fs-4 fw-normal p-3 pt-4">
              We provide work for all machining capacity for any engineering needs to assure accuracy and reliability.
            </h2>

            <div className="">
              <div className="d-md-flex pt-2">
                <img
                  src="/images/fabrication/metal_boring.jpg"
                  alt="Boring Service"
                  layout="responsive"
                  
                  className="w-100 p-3"
                />
                <div className="w-100"></div>
                <div className="w-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Steel Fabrication */}
      <div className="p-md-5 mt-3">
        <div className="d-lg-flex px-md-5 justify-content-center align-items-center">
          <div className="w-100 p-3">
            <h2 className="pt-md-4 mobile-fonts-heading" style={{ fontSize: '75px' }}>
              Steel Fabrication
            </h2>
            <h5
              className="pt-4"
              style={{
                color: 'rgb(66, 66, 66)',
                fontWeight: 400,
                textAlign: 'justify',
              }}
            >
              We manufacture high-strength steel components for different industries interests at BMW Steels. Every fabricative endeavour is accomplished with attention to detail owing to our advanced machinery and expert workforce. BMW Steels provides its clients with precise and dependable outcomes.
              <br /><br />
              At BMW Steels, we do more than fabricate—we build enduring relationships with our clients by offering components that are of the best quality and performance. We are adept and responsive owing to our innovation, control measures, client-focused strategies, and continuous innovation. Reliability, technical marvels, and having an unwavering reputation makes BMW Steels a force in high-strength steel fabrication.
            </h5>
          </div>
          <div className="text-center p-3 ps-md-5 w-75">
            <img
              src="/images/fabrication/Steel_Fabrication.jpg"
              alt="Steel Fabrication"
              layout="responsive"
              className="w-100"
              style={{
                borderRadius: '10px',
                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              }}
            />
          </div>
        </div>
      </div>

      {/* Section: Our Steel Fabrication Services */}
      <div className="p-3 px-md-5">
        <div className="px-md-5">
          <h2
            className="pt-4 mobile-fonts-heading text-center"
            style={{ fontSize: '75px' }}
          >
            Our Steel Fabrication Services Include:
          </h2>

          <h2 className="fs-1 p-3">Structural Steel Components</h2>
          <h2 className="fs-4 fw-normal p-3 pt-4 text-start">
            Columns and beams are prefabricated by us which serve the purpose of reinforcing massive structures and providing long-term stability.
          </h2>

          <h2 className="fs-1 p-3">Custom Equipment Fabrication</h2>
          <h2 className="fs-4 fw-normal p-3 pt-4 text-start">
            Tools and Machines are designed from scratch and crafted according to the specifications for our customers.
          </h2>

          <div className="pt-3">
            <h2 className="fs-1 p-3">Maintenance and Repair</h2>
            <h2 className="fs-4 fw-normal p-3 pt-4 text-start">
              Additional measures are adopted to improve the durability of the aged steel structure.
              <br /><br />
              In order to manufacture competitively strong products, CNC machines, MIG and TIG welding equipment, plasma cutters, and numerous other tools are incorporated into our workflows. We aim to offer the best in steel fabrication without sacrificing creativity.
            </h2>

            <h2 className="pt-4 mobile-fonts-heading text-center" style={{ fontSize: '75px' }}>
              Pipe Fabrication
            </h2>
          </div>
        </div>
      </div>

      {/* Section: Pipe Fabrication */}
      <div className="p-3 px-md-5">
        <div className="px-md-5">
          <h2 className="fs-4 fw-normal py-3 pt-4 text-start">
            Other than tool and machine fabrication, BMW steels supplies pipes to the mining, and cement power plants industries as well. We tend to maintain the reliability and durability of our pipes too.
          </h2>
          <h2 className="fs-1 py-3">Pipe Sizes We Offer:</h2>

          <div className="pt-3">
            <h2 className="fs-1 py-3" style={{ color: 'red' }}>6m pipes</h2>
            <h2 className="fs-4 fw-normal py-3 pt-4 text-start">
              Excellent for use in industrial high-flow systems.
            </h2>
            <div className="d-flex flex-column-reverse flex-md-column">
              <div className="d-md-flex pt-2">
                <div className="w-100">
                  <img
                    src="/images/fabrication/Pipe_Fabrication.jpg"
                    alt="6m Pipes"
                    layout="responsive"
                   
                    className="w-100 p-3"
                  />
                </div>
                <div className="w-100"></div>
                <div className="w-100"></div>
              </div>
              <div className="p-3 pt-0"></div>
            </div>
          </div>

          <div className="pt-3">
            <h2 className="fs-1" style={{ color: 'red' }}>3m pipes</h2>
            <h2 className="fs-4 fw-normal py-3 pt-4 text-start">
              These pipes are suitable for routing in medium-scale modular configurations and open building plans.
            </h2>
            <div className="d-flex flex-column-reverse flex-md-column">
              <div className="d-md-flex pt-2">
                <div className="w-100">
                  <img
                    src="/images/fabrication/3m_steel_pipe.jpg"
                    alt="3m Pipes"
                    layout="responsive"
                    
                    className="w-100 p-3"
                  />
                </div>
                <div className="w-100"></div>
                <div className="w-100"></div>
              </div>
              <div className="p-3 pt-0"></div>
            </div>
          </div>

          <div className="pt-3">
            <h2 className="fs-1" style={{ color: 'red' }}>1.5m pipes</h2>
            <h2 className="fs-4 fw-normal py-3 pt-4 text-start">
              Used in tight spaces for system extension or for use as a maintenance substitute.
            </h2>
            <div className="d-flex flex-column-reverse flex-md-column">
              <div className="d-md-flex pt-2">
                <div className="w-100">
                  <img
                    src="/images/fabrication/1.5m_steel_pipe.jpg"
                    alt="1.5m Pipes"
                    layout="responsive"
                    
                    className="w-100 p-3"
                  />
                </div>
                <div className="w-100"></div>
                <div className="w-100"></div>
              </div>
              <div className="p-3 pt-0"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Pipe Features */}
      <div className="px-md-5 p-3">
        <h2 className="px-md-3 fs-1 my-3 py-4 text-center">
          Pipe Features:
        </h2>
        <div className="d-md-flex container">
          <div className="px-md-3 table-responsive w-100">
            <table className="table">
              <thead className="thead-dark">
                {/* <tr>
                  <th style={{ backgroundColor: '#F48221', color: 'white' }} colspan="9" scope="col" className="text-center">
                    Typical Composition
                  </th>
                </tr> */}
              </thead>
              <tbody>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#f48221' }}>Perfect Fit</td>
                  <td style={{ backgroundColor: '#f48221' }}>We cut and shape pipes carefully so they fit well.</td>
                </tr>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#e7e7e9' }}>Handles High Pressure</td>
                  <td style={{ backgroundColor: '#e7e7e9' }}>Our pipes can handle heat and pressure.</td>
                </tr>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#f48221' }}>Material Choices</td>
                  <td style={{ backgroundColor: '#f48221' }}>Choose from MS, SS, alloy steel, or custom materials.</td>
                </tr>
                <tr style={{ border: '2px solid white' }}>
                  <td style={{ backgroundColor: '#e7e7e9' }}>Longer Life</td>
                  <td style={{ backgroundColor: '#e7e7e9' }}>We can add special coatings to protect pipes from rust and damage.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  


        </>
    )}