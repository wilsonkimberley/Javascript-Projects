function my_Dictionary() {
    var Cats = {
        Breed: "Siamese",
        Color: "White",
        Age: 5,
        Sound: "Meow!"
    };
    delete Cats.Sound; // Deletes the Sound property from the Cats object
    document.getElementById("Dictionary").innerHTML = Cats.Sound;
}