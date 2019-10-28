import React from 'react';

class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        }; 
    }

    componentDidMount() { // Ensure that data is fetched at the beginning
        fetch("https://api.imgflip.com/get_memes") // Call to URL
            .then(response => response.json()) // Turn promise into JS object
            .then(response => {
                const { memes } = response.data // Pull memes array from response.data
                console.log(memes[0]) // Check data is present
                this.setState({ allMemeImgs: memes }) // Set allMemeImgs state
            })
    }

    render() {
        return <h1>MEME GENERATOR SECTION</h1>
    }
}

export default MemeGenerator;