import React, {useState} from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import one from './assets/1.jpg';
import two from './assets/2.jpg';
import three from './assets/3.jpg';
import four from './assets/4.jpg';
import five from './assets/5.jpg';
import PhotoAlbum from "react-photo-album";
import images from './assets/Index.js';

function Home() {
    const[open, setOpen] = useState(true);
    const [index, setIndex] = useState(-1);

    const images = [

    ]

    return (
        <div>

            <PhotoAlbum
                layout="rows"
                photos={images}
                targetRowHeight={150}
                onClick={(event, photo, index) => setIndex(index)}
            />

            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={[
                    {
                        width: 3840,
                        height: 2560,
                        srcSet: [
                            { src: one, width: 320, height: 213 },
                            { src: two, width: 640, height: 427 },
                            { src: three, width: 1200, height: 800 },
                            { src: four, width: 2048, height: 1365 },
                            { src: five, width: 3840, height: 2560 },
                        ]
                    },
                ]}/>
        </div>
    );
}

export default Home;
