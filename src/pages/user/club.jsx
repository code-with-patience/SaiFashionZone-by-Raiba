import React from "react";
import { Link } from "react-router-dom";

// import "./WritingEssentials.css"; // Import your CSS file

const ClubbedBox = ({ title }) => {
  const items =
    title == "Saree"
      ? [
          {
            image:
              "https://thesstudioonline.com/cdn/shop/products/SD3257_1.webp?v=1689762371&width=600",
            title: "Sleek and smooth",
          },
          {
            image:
              "https://thesstudioonline.com/cdn/shop/products/sd4294-1-653cebe06815c.webp?v=1698498948&width=600",
            title: "Quick and handy",
          },
          {
            image:
              "https://thesstudioonline.com/cdn/shop/products/sd3478-2-6532474f3fa86.webp?v=1697801792&width=600",
            title: "Everyday durability",
          },
          {
            image:
              "https://thesstudioonline.com/cdn/shop/products/sd4281-1-65e026104388a.webp?v=1709194783&width=600",
            title: "Classic elegance",
          },
        ]
      : title == "Mens"
      ? [
          {
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/21281976/2023/12/13/d745c14a-ba54-4545-8f2c-304bfb2147d61702443090173RARERABBITMenSlimFitCasualShirt1.jpg",
            title: "mens",
          },
          {
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/15654426/2021/10/6/7e0abdfc-0430-46d5-af8b-e34e79ffcbd41633502377365-Computerised-Jacquard-Sweater-6701633502376814-1.jpg",
            title: "mens",
          },
          {
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/28906726/2024/4/13/5361d590-dfc5-451e-9d90-54f956cd09951713005096294KisahMenMauveKurtaJacketTrouserSet1.jpg",
            title: "mens",
          },
          {
            image:
              "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2471595/2018/3/12/11520846326419-Mast--Harbour-Men-Blue-Skinny-Fit-Mid-Rise-Mildly-Distressed-Stretchable-Jeans-4531520846326313-1.jpg",
            title: "mens",
          },
        ]
      : title == "Girls"
      ? [
          {
            image:
              "https://assets.myntassets.com/f_webp,dpr_1.5,q_40,w_210,c_limit,fl_progressive/assets/images/28729598/2024/4/6/f3ee1297-eb84-4ab9-b3a8-aa1f7c0141b21712387092207BAESDCheckedFitFlareDress1.jpg",
            title: "girls",
          },
          {
            image:
              "https://assets.myntassets.com/f_webp,dpr_1.5,q_40,w_210,c_limit,fl_progressive/assets/images/28221754/2024/3/13/07d782a0-95c3-4d32-a0ac-e18854985abf1710273013166BAESDCheckedFitFlareDress1.jpg",
            title: "girls",
          },
          {
            image:
              "https://assets.myntassets.com/f_webp,dpr_1.5,q_40,w_210,c_limit,fl_progressive/assets/images/2024/OCTOBER/10/Jh63WQ39_d0c7815bc42349bf8bdecbbf7ce559f6.jpg",
            title: "girls",
          },
          {
            image:
              "https://assets.myntassets.com/dpr_2,q_40,w_210,c_limit,fl_progressive/assets/images/21574848/2023/1/16/be1ed213-266f-48bc-a6f9-a4e65557f8151673888685137ATUNCream-ColouredDress1.jpg",
            title: "girls",
          },
        ]
      : title == "Boys"
      ? [
          {
            image:
              "https://assets.myntassets.com/f_webp,dpr_1.5,q_40,w_210,c_limit,fl_progressive/assets/images/26758958/2024/1/3/2a3b3cd3-e557-4a2f-8d3c-e2810c75bbdf1704269351737BAESDUnisexKidsMulticolouredPrintedShirtwithShorts1.jpg",
            title: "boys",
          },
          {
            image:
              "https://assets.myntassets.com/f_webp,dpr_1.5,q_40,w_210,c_limit,fl_progressive/assets/images/30638890/2024/10/25/7c5862a2-04c2-4a8d-b96c-fa55538bdc4f1729830978085-YK-X-Trampoline-Kids-Printed-Hooded-Tshirt-with-Trackpant-34-1.jpg",
            title: "boys",
          },
          {
            image:
              "https://m.media-amazon.com/images/I/61ge8BmxqRL._AC_SL1500_.jpg",
            title: "boys",
          },
          {
            image:
              "https://assets.myntassets.com/f_webp,dpr_1.5,q_40,w_210,c_limit,fl_progressive/assets/images/25315648/2023/10/3/848155aa-9d96-419f-8541-244831c0e0481696306133076AnthriloBoysNavyBlueRedColourblockedT-shirtwithTrousers1.jpg",
            title: "boys",
          },
        ]
      : "";

  return (
    <div className="bg-pink-100 p-5 rounded-lg text-white">
      <div className="grid grid-cols-2 min-[150px] gap-2">
        {items.map((item, index) => (
          <div className="bg-pink-600 rounded-lg p-2 text-center" key={index}>
            <img
              className="max-w-full h-auto rounded-md"
              src={item.image}
              alt={item.title}
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <Link to="/shop">
        {" "}
        <button className="block w-fit mx-auto mt-5 p-2.5 px-5 bg-pink-600 text-white border-none rounded-lg cursor-pointer">
          View More
        </button>
      </Link>
    </div>
  );
};

export default ClubbedBox;

/*
.writing-essentials {  
  background-color: #333;   
  padding: 20px;  
  border-radius: 8px;  
  color: white; 
}  

.writing-essentials h1 {  
  text-align: center;  
  margin-bottom: 20px;  
}  

.item-grid {  
  display: grid;  
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); 
  grid-gap: 20px;  
}  

.item {  
  background-color: #444;  
  border-radius: 8px;  
  padding: 10px;  
  text-align: center;  
}  

.item img {  
  max-width: 100%;  
  height: auto;  
  border-radius: 6px;  
}  

.browse-button {  
  display: block;  
  width: fit-content;  
  margin: 20px auto 0 auto;  
  padding: 10px 20px;  
  background-color: #666;  
  color: white;  
  border: none;  
  border-radius: 8px;  
  cursor: pointer;  
}  
*/
