function Artists(){
    return (
        <div className="Artists">
            {/* Unique */}
            <div className="artist-box">
                <div className="experience-box">
                    <h1 className="experience-text">
                        Being the youngest member of IV of Spades, 
                        Unique brought a raw, expressive energy that set the band’s 
                        early sound apart, his haunting vocals and enigmatic presence 
                        made every performance feel surreal. 
                        Even in silence, he stood out, 
                        letting his artistry speak louder than any spotlight.
                    </h1>
                </div>
                <img className="artist-image" src="image/unique.jpg"/>
            </div>
            {/* Zild */}
            <div className="artist-box">
                <div className="experience-box">
                    <h1 className="experience-text">
                        Zild’s dynamic stage presence and masterful command 
                        of the bass gave IV of Spades its groovy backbone, 
                        often stealing the spotlight with his 
                        effortless cool and rhythmic flair. 
                        Beyond playing, he shaped the band's identity with his creativity, 
                        later evolving into a fearless solo artist 
                        unafraid to explore deeper, personal sounds.
                    </h1>
                </div>
                <img className="artist-image" src="image/zild.jpg"/>
            </div>
            {/* Blaster */}
            <div className="artist-box">
                <img className="artist-image" src="image/blaster.jpg"/>
                <div className="experience-box">
                    <h1 className="experience-text">
                        Blaster brought a vibrant and youthful spark to IV of Spades 
                        with his sharp guitar riffs and playful charisma, 
                        often lighting up the stage with his infectious energy. 
                        His unique style blended funk and rock effortlessly, 
                        adding a colorful layer to the band's signature sound.
                    </h1>
                </div>
            </div>
            {/* Badjao */}
            <div className="artist-box">
                <img className="artist-image" src="image/badjao.jpg"/>
                <div className="experience-box">
                    <h1 className="experience-text">
                        Badjao was the heartbeat of IV of Spades, 
                        delivering powerful and precise drumming 
                        that anchored the band’s intricate rhythms. 
                        With his calm demeanor and technical brilliance, 
                        he balanced the group's wild energy, giving 
                        their music both structure and soul.
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Artists;