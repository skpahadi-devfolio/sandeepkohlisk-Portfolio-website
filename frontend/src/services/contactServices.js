//API Call for contact Page:-

export const contactMessage = async(data) => {
    try {
        const response = await fetch("https://sandeepkohlisk-portfolio-website.onrender.com/api/contact", {method: "POST", headers:{"Content-Type": "application/json"},
        body: JSON.stringify(data)});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.error};
        }
        return {success: true, message: result.message};
    } catch (error) {
        return {success: false, message: error.message};
    }
}