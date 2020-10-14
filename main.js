const coin = {
    state: 0,
    flip: function() {

        this.state = Math.floor(Math.random() * 2); 

    },
    toString: function() {
            this.flip()
            if (this.state === 0) 
                return "Heads";  

            return "Tails";                  
    },
    toHTML: function() {
        const image = document.createElement('img');
        const title = document.createElement('h5');
    
        let img_src = this.toString()

        image.src = "./image/" + img_src + ".png";
        title.innerHTML = image.alt = img_src;

        image.width = "100";
        image.height = "100";

        document.getElementsByTagName('body')[0].appendChild(image);
        document.getElementsByTagName('body')[0].appendChild(title);

        return image;
    }
};

function display20Flips() {
    const results = [];
    // 4. One point: Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.
        for (let i = 0; i < 20; i++) {            
            results[i] = coin.toString();
            console.log(results[i])
        }
    }
display20Flips();

// draw image
display20Images();
function display20Images() {
    console.log("------------------------This is displayImages()----------------------")
    const results = [];
    // 5. One point: Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.
    for (let j = 0; j < 20; j ++){
        results[j] = coin.toHTML()
        console.log(results[j].alt);
    }
}