import React, { Component } from 'react'
import jeremy from './jeremy-brady-vK26p2SFX3E-unsplash.jpg'
import johann from './johann-siemens-EPy0gBJzzZU-unsplash.jpg'
import pauling from './pauline-heidmets-GTL39WM6QqA-unsplash.jpg'

export class About extends Component {
    render() {
        return (
            <div className='container' style={{ height: '300px' }}>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={jeremy} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={johann} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={pauling} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default About
