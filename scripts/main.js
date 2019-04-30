const outputEl = document.querySelector("#output")

// Filter through array of orders that are over 9,000
const bigSpenders = businesses.filter(business => {
    // Returns all business orders as false at first
    let bigOrder = false
    // Loop through the array of businesses and checks if businesses have orders over 9,000
    business.orders.forEach(order => {
        if (order > 9000) {
            // If an order runs true to an order being over 9000, it returns the companies in HTML format
            bigOrder = true
        }
    })
    return bigOrder
})
console.log("The Big Spenders", bigSpenders)

let bigSpenderHtml = () => {
    bigSpenders.forEach(spender => {
        let elementHtml = `<div>
                            <h2>${spender.companyName}</h2>
                            <p>${spender.addressFullStreet}</h2>
                            <p>${spender.orders.join(", ")}</p>
                            <hr>
                        </div>`

        outputEl.innerHTML += elementHtml;
        return spender
    })
}
bigSpenderHtml()