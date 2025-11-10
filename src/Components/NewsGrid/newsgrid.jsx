import React from "react";
import img from "../../assets/images/img4.jpg";
import adimg from "../../assets/images/ad.jpg";

function NewsGrid() {
    return (
        <div className="more-news-container">
            <div className="more-heading-card-container">
                <h4>சிறப்பு செய்தி</h4>
                <section className="more-heading-card">
                    <div className="more-heading-card-img" style={{ backgroundImage: `url("${img}")` }}>
                        <div className="card-line-container">
                            <section className="card-small-line"></section>
                            <section className="card-small-news-flex">
                                <p>கேட்கப்படாதவர்களின் குரல்கள் புறக்கணிக்க முடியாததாக மாற வேண்டும்</p>
                                <p>— சமூக தலைவர்</p>
                            </section>
                        </div>
                    </div>
                    <div className="more-heading-card-content">
                        <h3>விசாரணை அறிக்கை: அமைப்புரீதியான சமத்துவமின்மை பற்றிய மௌனத்தை உடைக்கிறது.</h3>
                        <p>நாடு முழுவதும் சிறுபான்மை சமூகங்களை பாதிக்கும் வீட்டுவசதி கொள்கைகளில் தசாப்தங்களாக கவனிக்கப்படாத பாகுபாட்டை ஆழமான விசாரணை வெளிப்படுத்துகிறது.</p>
                    </div>
                    <section className="more-heading-card-percentages">
                        <h6>சிக்கிய புள்ளிவிவரங்கள்</h6>
                        <div>
                            <section className="percentages-title-flex">
                                <p>வீட்டுவசதி பாகுபாடு</p>
                                <p>68%</p>
                            </section>
                            <div className="percentages-line-one"></div>
                            <section className="percentages-title-flex">
                                <p>வீட்டுவசதி பாகுபாடு</p>
                                <p>58%</p>
                            </section>
                            <div className="percentages-line-two"></div>
                        </div>
                    </section>
                    <div className="more-heading-card-read-button">
                        <button>முழு விசாரணையைப் படிக்கவும்</button>
                    </div>
                </section>
                <img src={adimg} alt="ad" />

                <div className="news-small-grid-container">
                    <h3>சமீபத்திய செய்திகள்</h3>

                    <section className="news-small-grid-sub-container">

                    </section>
                </div>
            </div>
        </div>
    )
}
export default NewsGrid;