window.onload = function () {
    class Password {
        constructor() {
            console.log(`Password Generator`)
            this.pass = "";
        }

        generatePassword(length) {
            let chars = "qwertyuioplkjhgfdsazxcvbnm";
            let capitalChars = "MNBVCXZQWERTYUIOPGHFJDKSLA";
            let numbers = "6789012345";
            let special = `&%$#@!_?={]`;
            if (length <= 3) {
                console.log("Create a strong password");
            } else {
                let i = 0;
                while (i < length) {
                    this.pass += chars[Math.floor(Math.random() * chars.length)];
                    this.pass += capitalChars[Math.floor(Math.random() * capitalChars.length)];
                    this.pass += numbers[Math.floor(Math.random() * numbers.length)];
                    this.pass += special[Math.floor(Math.random() * special.length)];
                    i += 4;
                }
                this.pass = this.pass.substr(0, length);
                return this.pass;
            }
        }

        copyToClipboard() {
            let passwordOutput = document.getElementById("passwordOutput").innerText;
            navigator.clipboard.writeText(passwordOutput)
                .then(() => {
                    alert(`Password Copied: ${passwordOutput}`);
                }).catch(err =>
                    alert(err)
                )
        }
    }

    let user = new Password();
    document.getElementById("passwordOutput").innerText = user.generatePassword(12);

    // Add an event listener to the copyBtn
    document.getElementById("copyBtn").addEventListener("click", function () {
        user.copyToClipboard();
    });
};