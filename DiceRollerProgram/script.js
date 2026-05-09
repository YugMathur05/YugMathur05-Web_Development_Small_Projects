function res() {
    let number = document.getElementById("number").value;

    let image = document.getElementsByClassName("images")[0];
    let ans = document.getElementsByClassName("result")[0];

    const value = [];
    const img = [];

    for (let i = 0; i < number; i++) {
        const val = Math.floor(Math.random() * 6) + 1;

        value.push(val);

        img.push(`<img src="Dice_img/${val}.png" alt="dice ${val}">`);
    }

    ans.textContent = `Dice : ${value.join(' , ')}`;

    image.innerHTML = img.join('');
}