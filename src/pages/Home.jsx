import React from 'react';

function Home() {
    return (
        <section className="home">
            <div className="content">
                <h3>E-learning is a better way of learning</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia repellat aperiam libero, beatae debitis iusto quia sit aliquid placeat facilis?</p>
                <a href="#" className="btn">get started</a>
            </div>

            <div className="image">
                <img src="images/home-img.svg" alt=""/>
            </div>
        </section>
    );
}

export default Home;