import { useState } from "react"

export const QrCode = () => {

    const [img,setImg]=useState("");

    const [loading,setLoading]=useState(false);

    const [qrData,setQrdata] = useState("")

    const [qrSize,setQrSize] = useState("")

 async function generateQr(){

    setLoading(true);

    try{
        const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${qrData}`;
        setImg(url);
    }

    catch (error){
        console.error("Error Generating Qr Code",error);
    }

    finally{
        setLoading(false);
    }
 }
    

// Qr-code ni download cheyadaniki

    function downloadQr(){

        fetch(img)
        .then((Response) => Response.blob())
        .then((blob) => {
            const link= document.createElement("a")  // new anchor (a) tag create chestunam

            link.href=URL.createObjectURL(blob)   //URL vachesi img roopamlo convert avvudhi

            link.download= "Qrcode.png";  // download ki random ga oka name evvochu

            document.body.appendChild(link);  // create chesina anchor tag mana body lo vastundi

            link.click();    //automatiga click func valla click avvi down avvuthundhi

            document.body.removeChild(link);  // then aa anchor tag remove avvadam kosam removeChild () func use chestunam

        }).catch((error) => {
            console.error("Error download Qr code",error)
        })
    }

    

  return (
    

    <div className="app-container">

        <h1>QR Code Generator</h1>

        {img && <img src={img} alt="" className="Qr-code-image" />}

        {loading && <p>Please Wait...</p>}

        <div>
            <label htmlFor="dataInput" className="input-label">Data for QR code</label>

            <input type="text"  id="dataInput" placeholder="Enter data for Qr code" value={qrData} onChange={(e)=>setQrdata(e.target.value)}/>


            <label htmlFor="sizeInput" className="input-label">Data for QR code</label>

            <input type="text"  id="sizeInput" placeholder="Enter the image size" value={qrSize} onChange={(e)=>setQrSize(e.target.value)}/>

            <button className="generate-button" onClick={generateQr} disabled ={loading}>Generate QR Code</button>
            <button className="download-button" onClick={downloadQr} >Download QR Code</button>
        </div>
        <p className="footer">Desigend By <a href="https://www.linkedin.com/in/03-23-kishore?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Kishore</a></p>
    </div>
  )
}

