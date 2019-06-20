class functions()
{
    function condition(a,b) {
        c=(a===1)?((b===10)?'x':'y'):(b===5)?'z':'w'
    }
    function logItems(loopType) {
        somearray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        switch (loopType.toLowerCase()) {
            case "for":
                {
                    for (let i; i < somearray.length; i++) {
                        if (somearray[i] % 2 != 0)
                            console.log(somearray[i])
                    }
                    break;
                }
            case "forin":
                for (i in somearray) {
                    if (somearray[i] % 2 != 0)
                        console.log(somearray[i])
                }
                break
            case "forof":
                for (i of somearray) {
                    if (i % 2 != 0)
                        console.log(i)
                }
                break
            case "while":
                i = 0;
                while (i < somearray.length) {
                    if (somearray[i] % 2 != 0)
                        console.log(somearray[i])
                    i++
                }
                break;
            case "dowhile":
                i = 0;
                do {
                    if (somearray[i] % 2 != 0)
                        console.log(somearray[i])
                }
                while (i < somearray.length)
                break;
            default: console.log("wrong input")
                break;
        }
    }

    function createProduct() {
        Product = {
            type: 'esiminch'
        }
        Object.defineProperty(Product, 'price', {
            value: 500,
            writable: false,
        });
        Object.defineProperty(Product, 'img', {
            value: "idk",
            configurable: false,
        });
        Object.defineProperty(Product, 'logDetails')
    }
    function createArrayTemplate(length) {
        var aray [];
        for (i = 0; i < length_1; i++) {
            aray.push(Math.random() % 20)
        }
    }
    function getAverageOddNumbers(createArrayTemplate) {
        
    }

}
