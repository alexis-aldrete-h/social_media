import React from 'react';

import './Home.css';

import Header from '../../components/Header/Header';

const Home = () => {
    return <div>
        <Header />
        <body>
            <div className="main-section">
                <div className="main-post-container">
                    <div className="text-container">
                        <div className="category-title">
                            <h4>Feature</h4>
                        </div>
                        <div className="post-title">
                            <h1>The 5 Top Healthy Habits</h1>
                        </div>
                        <div className="post-caption">
                            <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="secondary-section">
                <div className="posts-container"></div>
            </div>
        </body>
    </div>
}

export default Home;