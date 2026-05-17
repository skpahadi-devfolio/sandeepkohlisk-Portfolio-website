//API Call for contact Page:-

export const contactMessage = async(message) => {
    try {
        const response = await fetch("http://localhost:3000/api/contact", {method: "POST", headers:{"Content-Type": "application/json"},
        body: JSON.stringify(message)});
        const result = await response.json();
        if(!response.ok){
            return {success: false, message: result.error};
        }
        return {success: true, message: result.message};
    } catch (error) {
        return {success: false, message: error.message};
    }
}