import Link from "next/link";
import React from "react";

export default function Section5(){
    return (
        <>
        <div className="py-md-5 px-2">
  <div className="container py-2 py-md-5">
    <h2 className="pt-4 mobile-fonts-heading text-center" style={{ fontSize: '75px', color: 'red' }}>
      Powering Industries with Precision Manufacturing
      
    </h2>
  </div>


{/* CARD  */}

<div className="mb-5 scro">
    <div
      className="mx-3 mx-md-5 d-flex flex-column p-3 flex-lg-row align-items-center justify-content-center"
      style={{
        backgroundColor: '#F4F4F4',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      }}
    >
      <div className="p-md-5 w-100 d-flex align-items-center justify-content-center">
      <div id="carouselExampleAutoplaying0" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner pt-2">
        <div className="carousel-item active text-center w-100">
          <img
            src="images/mages/Fabrication/1.jpg"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          <div
            className="p-3 section-6 "
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
             
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              
            }}
          >
            
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Steels Fabrication</h4>
          </div>
        </div>
        
        <div className="carousel-item text-center w-100">
          <img
            src="images/mages/Fabrication/2.jpg"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          {/* <div
            className="p-3 section-6"
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
            
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Cast Basalt Tile</h4>
          </div> */}
        </div>


       


      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying0"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying0"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      </div>
      <div className="w-100 pe-2 pt-5 m-md-5 d-flex flex-column justify-content-around">
        <h2 className="fs-1">Fabrication</h2>
        <h4
          style={{
            color: 'rgb(66, 66, 66)',
            fontWeight: 400,
            textAlign: 'justify',
          }}
        >
          We manufacture high-strength steel components for different industries interests at BMW Steels. Every fabricative endeavour is accomplished with attention to detail owing to our advanced machinery and expert workforce. BMW Steels provides its clients with precise and dependable outcomes.
          </h4>
        <div className="d-flex m-auto m-md-0">
          <Link
            className="btn btn-danger btn-lg mt-4 mx-md-3 me-1"
            href="/Fabrication"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  </div>

{/* CARD end  */}


  {/* CARD */}
  <div className="mb-5 scro">
    <div
      className="mx-3 mx-md-5 d-flex flex-column p-3 flex-lg-row align-items-center justify-content-center"
      style={{
        backgroundColor: '#F4F4F4',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      }}
    >
      <div className="p-md-5 w-100 d-flex align-items-center justify-content-center">
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner pt-2">
        <div className="carousel-item active text-center w-100">
          <img
            src="images/mages/Cast-Basalt-Tiles/1.jpg"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          <div
            className="p-3 section-6 "
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
             
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              
            }}
          >
            
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Cast Basalt Lined Equipment</h4>
          </div>
        </div>
        <div className="carousel-item text-center w-100">
          <img
            src="images/mages/Cast-Basalt-Tiles/2.jpg"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          <div
            className="p-3 section-6"
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
              
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Cast Basalt Cylinder</h4>
          </div>
        </div>
        <div className="carousel-item text-center w-100">
          <img
            src="images/mages/Cast-Basalt-Tiles/5.jpg"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          <div
            className="p-3 section-6"
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
            
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Cast Basalt Tile</h4>
          </div>
        </div>


        <div className="carousel-item text-center w-100">
          <img
            src="images/mages/Cast-Basalt-Tiles/6.jpg"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          <div
            className="p-3 section-6"
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
              
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Cast Basalt Tile</h4>
          </div>
        </div>


      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      </div>
      <div className="w-100 pe-2 pt-5 m-md-5 d-flex flex-column justify-content-around">
        <h2 className="fs-1">Cast Basalt Division</h2>
        <h4
          style={{
            color: 'rgb(66, 66, 66)',
            fontWeight: 400,
            textAlign: 'justify',
          }}
        >
          BMW extracts and grades basalt with a unique structure for maximum erosion resistance. The basalt is melted at 1325°C and cast into molds, followed by controlled heat treatment to enhance re-crystallization. This process yields dense, inert, and highly erosion-resistant products with zero porosity, thanks to advanced processing and quality control systems.
        </h4>
        <div className="d-flex m-auto m-md-0">
          <Link
            className="btn btn-danger btn-lg mt-4 mx-md-3 me-1"
            href="/CastBasalt"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* CARD end */}

  {/* CARD */}
  
  {/* CARD end */}

  {/* CARD */}


  <div className="mb-5 scro">
    <div
      className="mx-3 mx-md-5 d-flex flex-column p-3 flex-lg-row align-items-center justify-content-center"
      style={{
        backgroundColor: '#F4F4F4',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      }}
    >
      <div className="p-md-5 w-100 d-flex align-items-center justify-content-center">
      <div id="carouselExampleAutoplaying1" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner pt-2">
        <div className="carousel-item active text-center w-100">
          <img
            src="images/mages/Alumina-Powder/5.jpg"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          <div
            className="p-3 section-6 "
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
             
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              
            }}
          >
            
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Aluminia Melt After Cooling And Fracturing</h4>
          </div>
        </div>
        <div className="carousel-item text-center w-100">
          <img
            src="images/mages/Alumina-Powder/2.jpg"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          <div
            className="p-3 section-6"
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
              
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Aluminia Alumina Powder After Ball Milling</h4>
          </div>
        </div>
        <div className="carousel-item text-center w-100">
          <img
            src="images/mages/Alumina-Powder/1.jpg"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          <div
            className="p-3 section-6"
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
            
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Calcined Fused Alumina Abrasive</h4>
          </div>
        </div>


        <div className="carousel-item text-center w-100">
          <img
            src="images/mages/Alumina-Powder/3.jpg"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          <div
            className="p-3 section-6"
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
              
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Calcined Fused Alumina Abrasive</h4>
          </div>
        </div>




        <div className="carousel-item text-center w-100">
          <img
            src="images/mages/Alumina-Powder/4.jpg"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          <div
            className="p-3 section-6"
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
              
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Mullite Flakes</h4>
          </div>
        </div>




        


      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying1"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying1"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      </div>
      <div className="w-100 pe-2 pt-5 m-md-5 d-flex flex-column justify-content-around">
        <h2 className="fs-1">Alumina Powder and Fused Alumina Abrasive</h2>
        <h4
          style={{
            color: 'rgb(66, 66, 66)',
            fontWeight: 400,
            textAlign: 'justify',
          }}
        >
           BMW's Wear Seal® series, including Wear Seal® Diamond and Wear Seal® CBC, protects against extreme wear, abrasion, and corrosion. These customizable linings are applied to pipes, chutes, and hoppers, offering a cost-effective solution to extend machinery life in cement, mining, and power generation industries.
           </h4>
        <div className="d-flex m-auto m-md-0">
          <Link
            className="btn btn-danger btn-lg mt-4 mx-md-3 me-1"
            href="/FusedAluminaAbrasive"
          >
          Know More
          </Link>
        </div>
      </div>
    </div>
  </div>

  
  {/* CARD end */}






  <div className="mb-5 scro">
    <div
      className="mx-3 mx-md-5 d-flex flex-column p-3 flex-lg-row align-items-center justify-content-center"
      style={{
        backgroundColor: '#F4F4F4',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      }}
    >
      <div className="p-md-5 w-100 d-flex align-items-center justify-content-center">
      <div id="carouselExampleAutoplaying2" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner pt-2">
        <div className="carousel-item active text-center w-100">
          <img
            src="images/mages/Alumina-Ceramic/1.jpg"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          <div
            className="p-3 section-6 "
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
             
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              
            }}
          >
            
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>92%Fused Alumina Powder with additives after spray drying ready for pressing</h4>
          </div>
        </div>
        <div className="carousel-item text-center w-100">
          <img
            src="images/mages/Alumina-Ceramic/2.jpg"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          <div
            className="p-3 section-6"
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
              
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Sintering Process of Alumina Ceramic</h4>
          </div>
        </div>
        <div className="carousel-item text-center w-100">
          <img
            src="images/mages/Alumina-Ceramic/8.jpg"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          <div
            className="p-3 section-6"
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
            
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Alumina Ceramic Tiles after hydraulic pressing ready for sintering at 1550°C</h4>
          </div>
        </div>


        <div className="carousel-item text-center w-100">
          <img
            src="images/mages/Alumina-Ceramic/4.jpg"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          <div
            className="p-3 section-6"
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
              
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Alumina Ceramic Liner</h4>
          </div>
        </div>




        <div className="carousel-item text-center w-100">
          <img
            src="images/mages/Alumina-Ceramic/5.jpg"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          <div
            className="p-3 section-6"
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
              
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Alumina Ceramic Liner</h4>
          </div>
        </div>



        <div className="carousel-item text-center w-100">
          <img
            src="images/mages/Alumina-Ceramic/6.jpg"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          <div
            className="p-3 section-6"
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
              
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            
            <h4 style={{ color: 'rgb(68, 67, 67)' }}> Alumina Ceramic Grinding Media Balls & Cylpebs</h4>
          </div>
        </div>




        <div className="carousel-item text-center w-100">
          <img
            src="images/mages/Alumina-Ceramic/7.jpg"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          <div
            className="p-3 section-6"
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
              
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Alumina Ceramic Grinding Media Balls & Cylpebs</h4>
          </div>
        </div>




        


      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying2"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying2"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      </div>
      <div className="w-100 pe-2 pt-5 m-md-5 d-flex flex-column justify-content-around">
        <h2 className="fs-1">Aluminia Creamic Division</h2>
        <h4
          style={{
            color: 'rgb(66, 66, 66)',
            fontWeight: 400,
            textAlign: 'justify',
          }}
        >
          BMW sources high-grade sintered and fine-ground alumina with a special microstructure for optimal erosion resistance. The alumina powder is mixed with additives and water in a ball mill, then dried in a spray dryer to form granules. These granules are pressed into shape and fired in a tunnel furnace at 1550°C. Each batch undergoes rigorous quality checks to ensure top quality.
          </h4>
        <div className="d-flex m-auto m-md-0">
          <Link
            className="btn btn-danger btn-lg mt-4 mx-md-3 me-1"
            href="/AluminiaCeramic"
          >
          Know More
          </Link>
        </div>
      </div>
    </div>
  </div>









  















  {/* CARD */}











  <div className="mb-5 scro">
    <div
      className="mx-3 mx-md-5 d-flex flex-column p-3 flex-lg-row align-items-center justify-content-center"
      style={{
        backgroundColor: '#F4F4F4',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      }}
    >
      <div className="p-md-5 w-100 d-flex align-items-center justify-content-center">
      <div id="carouselExampleAutoplaying3" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner pt-2">
        <div className="carousel-item active text-center w-100">
          <img
            src="images/mages/CBC/1.jpg"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          {/* <div
            className="p-3 section-6 "
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
             
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              
            }}
          >
            
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>92%Fused Alumina Powder with additives after spray drying ready for pressing</h4>
          </div> */}
        </div>
        <div className="carousel-item text-center w-100">
          <img
            src="images/mages/CBC/3.jpg"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          {/* <div
            className="p-3 section-6"
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
              
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Sintering Process of Alumina Ceramic</h4>
          </div> */}
        </div>
        <div className="carousel-item text-center w-100">
          <img
            src="images/mages/CBC/2.jpg"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          {/* <div
            className="p-3 section-6"
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
            
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Alumina Ceramic Tiles after hydraulic pressing ready for sintering at 1550°C</h4>
          </div> */}
        </div>


        <div className="carousel-item text-center w-100">
          <img
            src="images/mages/CBC/4.jpg"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          {/* <div
            className="p-3 section-6"
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
              
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Alumina Ceramic Liner</h4>
          </div> */}
        </div>








        


      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying3"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying3"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
      </div>
      <div className="w-100 pe-2 pt-5 m-md-5 d-flex flex-column justify-content-around">
        <h2 className="fs-1">Chemically Bonded Compound Series (CBC)</h2>
        <h4
          style={{
            color: 'rgb(66, 66, 66)',
            fontWeight: 400,
            textAlign: 'justify',
          }}
        >
         CBC has an advantage for all the grades about flexibility of use. CBCTM can be employed to install new linings with difficult profiles and on the roofs too using few simple lining tools. Recommended CBCTM lining thickness depends on the job requirements and application conditions. The thickness of the lining can be recommended after technical evaluation of BMW at the lining site. Curing time of CBCTM series of compounds is 48 hours.</h4>
        
        <div className="d-flex m-auto m-md-0">
          <Link
            className="btn btn-danger btn-lg mt-4 mx-md-3 me-1"
            href="/ChemicallyBondedCompoundSeries"
          >
          Know More
          </Link>
        </div>
      </div>
    </div>
  </div>






  {/* CARD end */}
</div>
        </>
    )}