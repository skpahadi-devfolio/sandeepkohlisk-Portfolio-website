//API Call for contact Page:-

const API_URL = import.meta.env.DEV ? "http://localhost:3000":"https://sandeepkohlisk-portfolio-website.onrender.com"

export const contactMessage = async(data) => {
    try {
        const response = await fetch(`${API_URL}/api/contact`, {method: "POST", headers:{"Content-Type": "application/json"},
        body: JSON.stringify(data)});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.message};
        }
        return {success: true, message: result.message};
    } catch (error) {
        return {success: false, message: error.message};
    }
}