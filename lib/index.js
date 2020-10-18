"use strict";
const axios_1 = require("axios");
module.exports = class SourceBin {
    /**
     * this is a module that you can post code to sourcenin
     * @param { string } text The code that will be pushed to sourcebin.
     * @returns { string } what the code returns to sourcebin.
     */
    /**
     * @interface options - The text that will go to sourcebin.
     */
    static async postBin(text) {
        if (!text.code)
            throw new TypeError("Please specify the code to be posted to sourcebin.");
        else {
            const get = await axios_1.default("https://sourceb.in/api/bins", {
                method: "POST",
                data: {
                    files: [{
                            content: text.code
                        }]
                }
            });
            if (get.status === 200) {
                return `https://sourceb.in/${get.data.key}`;
            }
        }
    }
    static async get(content) {
        const a = await axios_1.default(`https://sourceb.in/raw/${content.url}/0`, {
            method: "GET"
        });
        if (a.status === 200) {
            return a.data;
        }
    }
};