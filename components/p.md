import { useState } from "react";

const Imageupload = () => {
    const [image, setImage] = useState();
    const [text, setText] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState('')
    function convertToBase64(e) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.onerror = (error) => {
            console.log("Error:", error);
        };
    }

    async function uploadData() {
        try {
            const url = "api/mongodb/connection";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    image: image,
                    text: text,
                    number: number,
                }),
            });

            const data = await response.json();
            console.log(data);
            setMessage(data)
        } catch (error) {
            console.log(error);
        }
    }


      


    return (
        <div className="mb-40">
            <h1 className="py-6 text-center font-bold text-2xl">Upload an Image</h1>
            <div className="flex flex-col ">
                <input
                    className="file-input w-full max-w-xs block"
                    accept="image/*"
                    type="file"
                    onChange={convertToBase64}
                />
                {image && <img className="mt-4 w-20 h-20" alt="" src={image} />}
                <input
                    className="mt-4 px-2 py-3 border w-80 md:w-1/2 border-gray-300 rounded outline-none"
                    type="text"
                    value={text}
                    placeholder="Input Product Name"
                    onChange={(e) => setText(e.target.value)}
                />
                <input
                    className="mt-4 px-2 py-3 w-80 md:w-1/2 border border-gray-300 rounded outline-none"
                    type="number"
                    value={number}
                    placeholder="Input Product Price"
                    onChange={(e) => setNumber(e.target.value)}
                />
            </div>
            <button
                className="mt-6 block mx-auto bg-gray-800 text-white py-2 px-4 rounded-md font-semibold"
                onClick={uploadData} >
                Upload
            </button>


            {/* succesful*/}
            <div>{message &&

                <div class="flex  w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mx-auto mt-5">
                    <div class="flex items-center justify-center w-12 bg-emerald-500">
                        <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                        </svg>
                    </div>

                    <div class="px-4 py-2 -mx-3">
                        <div class="mx-3">
                            <span class="font-semibold text-emerald-500 dark:text-emerald-400">Success</span>
                            <p class="text-sm text-gray-600 dark:text-gray-200">The data has been uploaded to the database</p>
                        </div>
                    </div>
                </div>

            }</div>
        </div>
    );
};

export default Imageupload;
