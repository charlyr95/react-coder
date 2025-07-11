const LandingHero = () => {
    return (
        <div className="video-container position-relative bg-dark">
            <img src="/media/intro-1_thumbnail.jpg" className="position-absolute z-0" alt="" style={{ objectFit: "cover", height: "100%", width: "100%" }} loading="lazy" />
            <video className="w-100 z-1" src="/media/intro-1.mp4" autoPlay muted playsInline loop loading="lazy"></video>
            <div className="overlay-text z-2 animate__animated animate__fadeInLeft">
                <h2 className="slogan-text fs-1">El movimiento nos une</h2>
            </div>
        </div>
    );
}

export default LandingHero;