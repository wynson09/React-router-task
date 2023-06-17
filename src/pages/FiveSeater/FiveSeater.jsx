import Wigo from "../../img/Cars/wigo-grey.png";
import Vios from "../../img/Cars/vios-red.png";
import Navara from "../../img/Cars/navara-white.png";
import Revo from "../../img/Cars/revo-grey.png";
import { NavLink } from "react-router-dom";

function FiveSeater() {
  const fiveSeaters = [
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
  ];
  return (
    <section className="container">
      <ul className="card-container">
        {fiveSeaters.map((item) => {
          const contentSlice = item.Description.slice(0, 228);
          return (
            <li key={item.id} className="card">
              <NavLink to={item.id}>
                <div className="img-container">
                  <img src={item.Image} alt={item.key} />
                </div>
                <h3>{item.Title}</h3>
                <p>{contentSlice}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default FiveSeater;
