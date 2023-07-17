let totalCost = 0;
let totalRewards = 0;
let addToCartButtons = document.querySelector(".add-to-cart");
let checkoutButtons = document.querySelector(".check-out");

addToCartButtons.onclick = function() {
	let item = document.querySelector("input").value;
	if (item === "CCB") {
        totalCost = totalCost + 6.29;
        totalRewards = totalRewards + 1;
        document.querySelector(".items-in-cart").innerHTML += "<li>Cheese Champ Burger</li>";
	} else if (item === "FSF") {
        totalCost = totalCost + 3.39;
        totalRewards = totalRewards + 1;
        document.querySelector(".items-in-cart").innerHTML += "<li>Famous Seasoned Fries</li>";
	} else if (item === "CD") {
        totalCost = totalCost + 3.69;
        totalRewards = totalRewards + 1;
        document.querySelector(".items-in-cart").innerHTML += "<li>Chili Dog</li>";
	} else if (item === "BSS") {
        totalCost = totalCost + 2.99;
        totalRewards = totalRewards + 1;
        document.querySelector(".items-in-cart").innerHTML += "<li>Big Surf Slushie</li>";
}
};

checkoutButtons.onclick = function() {
        if (totalCost > 20 || totalRewards > 3) {
            document.querySelector(".delivery").textContent = "You earned free delivery!";
        } else {
            document.querySelector(".delivery").textContent = "Add $2.99 for delivery";
            totalCost = totalCost + 2.99;
        }
        document.querySelector(".total-cost").textContent = "$" + totalCost.toFixed(2);
        document.querySelector(".total-rewards").textContent = totalRewards + " points";
    };
