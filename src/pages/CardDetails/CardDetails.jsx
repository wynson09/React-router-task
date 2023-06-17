import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import Wigo from "../../img/Cars/wigo-grey.png";
import Vios from "../../img/Cars/vios-red.png";
import Navara from "../../img/Cars/navara-white.png";
import Revo from "../../img/Cars/revo-grey.png";
import Fortuner from "../../img/Cars/fortuner-blue.png";
import Innova from "../../img/Cars/innova-blackishred.png";
import Terra from "../../img/Cars/terra-white.png";
import Xpander from "../../img/Cars/xpander-red.png";
import { useEffect, useState } from "react";
import "./carDetails.css";

function CardDetails() {
  const [carDetails, setCarDetails] = useState("");
  const navigate = useNavigate();
  let { id } = useParams();
  const Data = useLoaderData();

  useEffect(() => {
    let selectedCar = Data.filter((data) => data?.id?.includes(id));
    setCarDetails(selectedCar);
  }, [id, Data]);

  return (
    <section className="car-detail-container">
      <div className="detail-img">
        <img src={carDetails[0]?.Image} alt={carDetails[0]?.id} />
      </div>
      <div className="car-detail-content">
        <h3>{carDetails[0]?.Title}</h3>
        <p>{carDetails[0]?.Description}</p>
      </div>

      <button onClick={() => navigate(-1)}>Back to Fleets</button>
    </section>
  );
}

export default CardDetails;

export const carDetailsLoader = () => {
  const allCars = [
    {
      id: "1",
      Title: "Wigo Grey",
      Description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores iste, sapiente quis voluptatibus maxime, voluptatum tempore dicta expedita et optio rem. Dolorem animi molestiae aperiam ad perspiciatis esse sed similique!",
      Image: Wigo,
    },
    {
      id: "2",
      Title: "Vios Red",
      Description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores iste, sapiente quis voluptatibus maxime, voluptatum tempore dicta expedita et optio rem. Dolorem animi molestiae aperiam ad perspiciatis esse sed similique!",
      Image: Vios,
    },
    {
      id: "3",
      Title: "Navara White",
      Description:
        "Lorem ipsum dolor sit, amet consectatibus maxime, voluptatum tempore dicta expedita et optio rem. Dolorem animi molestiae aperiam ad perspiciatis esse sed similique! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores iste, sapiente quis voluptatibus maxime, voluptatum tempore dicta expedita et optio rem. Dolorem animi molestiae aperiam ad perspiciatis esse sed similique!",
      Image: Navara,
    },
    {
      id: "4",
      Title: "Revo Grey",
      Description:
        "Lorem ipsum dolor sit, amet consectatibus Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores iste, sapiente quis voluptatibus maxime, voluptatum tempore dicta expedita et optio rem. Dolorem animi molestiae aperiam ad perspiciatis esse sed similique! maxime, voluptatum tempore dicta expedita et optio rem. Dolorem animi molestiae aperiam ad perspiciatis esse sed similique!",
      Image: Revo,
    },
    {
      id: "5",
      Title: "Fortuner Blue",
      Description:
        "Lorem ipsum dolor sit, amet consectatibus Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores iste, sapiente quis voluptatibus maxime, voluptatum tempore dicta expedita et optio rem. Dolorem animi molestiae aperiam ad perspiciatis esse sed similique! maxime, voluptatum tempore dicta expedita et optio rem. Dolorem animi molestiae aperiam ad perspiciatis esse sed similique!",
      Image: Fortuner,
    },
    {
      id: "6",
      Title: "Innova Purple",
      Description:
        "Lorem ipsum dolor sit, amet consectatibus Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores iste, sapiente quis voluptatibus maxime, voluptatum tempore dicta expedita et optio rem. Dolorem animi molestiae aperiam ad perspiciatis esse sed similique! maxime, voluptatum tempore dicta expedita et optio rem. Dolorem animi molestiae aperiam ad perspiciatis esse sed similique!",
      Image: Innova,
    },
    {
      id: "7",
      Title: "Terra White",
      Description:
        "Lorem ipsum dolor sit, amet consectatibus Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores iste, sapiente quis voluptatibus maxime, voluptatum tempore dicta expedita et optio rem. Dolorem animi molestiae aperiam ad perspiciatis esse sed similique! maxime, voluptatum tempore dicta expedita et optio rem. Dolorem animi molestiae aperiam ad perspiciatis esse sed similique!",
      Image: Terra,
    },
    {
      id: "8",
      Title: "Xpander Red",
      Description:
        "Lorem ipsum dolor sit, amet consectatibus Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores iste, sapiente quis voluptatibus maxime, voluptatum tempore dicta expedita et optio rem. Dolorem animi molestiae aperiam ad perspiciatis esse sed similique! maxime, voluptatum tempore dicta expedita et optio rem. Dolorem animi molestiae aperiam ad perspiciatis esse sed similique!",
      Image: Xpander,
    },
  ];
  return allCars;
};
