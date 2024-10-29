import "./other.css";
import React, { useState, useEffect } from "react";
import albumArt from 'album-art'; // Import the album-art library
import movieArt from 'movie-art'; // Import movie-art library if applicable

export default function Other() {
    const [hoveredAlbum, setHoveredAlbum] = useState(null);
    const [albumImages, setAlbumImages] = useState([]);
    const [movieImages, setMovieImages] = useState([]);

    const albums = [
        // { artist: "Akimbo4s", album: "Repetition" },
        // { artist: "Baby Smoove", album: "Hardwood Classic" },
        { artist: "Bar Italia", album: "The Twits" },
        { artist: "Beach House", album: "Bloom" },
        { artist: "Birth Day", album: "Boyhood" },
        { artist: "Bladee", album: "Cold Visions" },
        { artist: "Bladee", album: "Red Light" },
        { artist: "Bôa", album: "Twilight" },
        { artist: "Crystal Castles", album: "Crystal Castles" },
        { artist: "Current Joys", album: "Wild Heart" },
        { artist: "D. Savage", album: "D. Phoenix" },
        { artist: "Destroy Lonely", album: "</3²"},
        // { artist: "DJ ESCO", album: "Project E.T. Esco Terrestrial (Hosted By Future)" },
        { artist: "Drake", album: "Nothing Was the Same (Deluxe)" },
        { artist: "Duster", album: "Stratosphere" },
        { artist: "Duwap Kaine", album: "Bad Kid from the 4" },
        { artist: "Duwap Kaine", album: "On the Way" },
        { artist: "Duwap Kaine", album: "Underdog" },
        { artist: "Duwap Kaine", album: "Underdog 2" },
        { artist: "Earl Sweatshirt", album: "Doris" },
        { artist: "EKKSTACY", album: "misery" },
        { artist: "Flawed Mangoes", album: "The Unwavering Hand" },
        { artist: "Frank Ocean", album: "Channel ORANGE" },
        { artist: "Future", album: "DS2" },
        { artist: "jaydes", album: "rose" },
        // { artist: "KanKan", album: "Nun to Me"},
        { artist: "Ken Carson", album: "A Great Chaos (Deluxe)" },
        // { artist: "Ken Carson", album: "XTENDED" },
        { artist: "King Krule", album: "Space Heavy" },
        { artist: "Lil Peep", album: "Come Over When You're Sober" },
        { artist: "Lil Shine", album: "Losing Myself"},
        { artist: "Lucki", album: "FLAWLESS LIKE ME" },
        { artist: "Mariah Carey", album: "The Emancipation of Mimi" },
        { artist: "Marlon DuBois", album: "Bender" },
        { artist: "Matt Maltese", album: "Krystal" },
        { artist: "MF DOOM", album: "Operation: Doomsday" },
        { artist: "MGMT", album: "Oracular Spectacular" },
        // { artist: "Nettspend", album: "Shine N Peace" },
        { artist: "Night Tapes", album: "Perfect Kindness" },
        { artist: "Odd Future", album: "The OF Tape Vol. 2" },
        { artist: "Pinegrove", album: "Need 2" },
        { artist: "PinkPantheress", album: "to hell with it" },
        // { artist: "Playboi Carti", album: "Die Lit" },
        { artist: "Playboi Carti", album: "Playboi Carti" },
        { artist: "Playboi Carti", album: "Whole Lotta Red" },
        { artist: "Quannic", album: "Stepdream" },
        { artist: "Rx Papi & Gud", album: "Foreign Exchange" },
        { artist: "Sade", album: "Love" },
        { artist: "Sickboyrari", album: "BALLAD OF A GLIME" },
        // { artist: "Sickboyrari", album: "City of Crows" },
        { artist: "sign crushes motorist", album: "I'll Be Okay"},
        // { artist: "Slimesito", album: "Scarface Sito"},
        { artist: "Slowdive", album: "Souvlaki" },
        // { artist: "Summrs", album: "Free Do / Can't Do It" },
        { artist: "Summrs", album: "Nothing more Nothing LESS" },
        { artist: "Thaiboy Digital", album: "Legendary Member" },
        { artist: "The Smiths", album: "The Queen is Dead" },
        { artist: "Tyler, The Creator", album: "Wolf"},
        { artist: "UnoTheActivist", album: "Live.Shyne.Die" },
        { artist: "Vacations", album: "Changes" },
        { artist: "Veeze", album: "Ganger" },
        { artist: "Weezer", album: "Weezer" },
        { artist: "Weiland", album: "Vices" },
        { artist: "Whirr", album: "Muta/Blue Sugar" },
        { artist: "Wisp", album: "Once then we'll be free"},
        // { artist: "Wisp", album: "Your face"},
        { artist: "Yabujin", album: "Chalice of Mind" },
        { artist: "Yhappojj", album: "Evolution of Xur" },
        { artist: "Yot Club", album: "Bpolar" },
        // { artist: "Young Thug", album: "Barter 6" },
        { artist: "Young Thug", album: "Slime Season 3" },
        // { artist: "03Greedo", album: "Sweet Lady" },


    ];

    const movies = [
        { title: "Godfather", year: "1972" },
        { title: "Stand By Me", year: "1986" },
        // { title: "La Haine", year: "1995" },
        // { title: "Good Will Hunting", year: "1997" },
        { title: "Gummo", year: "1997" },
        { title: "American Psycho", year: "2000" },
        { title: "Zoolander", year: "2001" },
        { title: "Ali G Indahouse", year: "2002" },
        { title: "Napoleon Dynamite", year: "2004" },
        { title: "Superbad", year: "2007" },
        { title: "Juno", year: "2007" },
        { title: "The Boy in the Striped Pajamas", year: "2008" },
        { title: "The Social Network", year: "2010" },
        // { title: "Scott Pilgrim vs. the World", year: "2010" },
        { title: "Django Unchained", year: "2012" },
    ];

    useEffect(() => {
        // Fetch album art for each album when the component mounts
        const fetchAlbumArt = async () => {
            const images = await Promise.all(
                albums.map(async (album) => {
                    const imageUrl = await albumArt(album.artist, { album: album.album, size: 'medium' });
                    return imageUrl;
                })
            );
            setAlbumImages(images);
        };

        const fetchMovieArt = async () => {
            const images = await Promise.all(
                movies.map(async (movie) => {
                    const imageUrl = await movieArt(movie.title);
                    return imageUrl;
                })
            );
            setMovieImages(images);
        };

        fetchAlbumArt();
        fetchMovieArt();
    }, []);

    return (
        <div className="other-container">
            <h1 style={{ textAlign: 'left' }}>other stuff</h1>
            <div className="blank-space"> <p></p></div>

            <section className="section">
                <h2>what i'm up to right now</h2>
                <ul className="list">
                    <li>studying linear optimization, R for data science, and other courses at SFU</li>
                    <li>refining database skills in preparation for an upcoming internship</li>
                    {/* <li>hanging out with friends and family</li> */}
                </ul>
            </section>

            <section className="section">
                <h2>favourite music</h2>
                <div className="album-slider">
                    {albumImages.map((imageUrl, index) => (
                        <div 
                            key={index} 
                            className="album-container"
                        >
                            <img 
                                className="album-cover" 
                                src={imageUrl} 
                                alt={`Album cover for ${albums[index].album}`} 
                            />
                            <p className="album-title">{albums[index].artist} - {albums[index].album}</p>
                        </div>
                    ))}
                </div>
            </section>



            <section className="section">
                <h2>favourite movies</h2>
                <div className="movie-slider">
                    {movieImages.map((imageUrl, index) => (
                        <div key={index} className="movie-container">
                            <img 
                                className="movie-cover" 
                                src={imageUrl} 
                                alt={`Movie cover for ${movies[index].title}`} 
                            />
                            <p>{movies[index].title} ({movies[index].year})</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
