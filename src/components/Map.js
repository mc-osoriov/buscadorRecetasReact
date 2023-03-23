import React,{useEffect,useState} from 'react'
function Mapa(){
    return(
        <div>
             <section id="mapa" className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 intro-text">
                            <h1>Supermercados</h1>
                            <p>Estos son los supermercados más cerca de ti.</p>
                        </div>
                    </div>
                </div>
            </section>
            <script src="./scriptMapa.js"></script>
        
        </div>
        
    )
}
export default Mapa
