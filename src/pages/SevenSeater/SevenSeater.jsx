import Fortuner from "../../img/Cars/fortuner-blue.png";
import Innova from "../../img/Cars/innova-blackishred.png";
import Terra from "../../img/Cars/terra-white.png";
import Xpander from "../../img/Cars/xpander-red.png";
import { NavLink } from "react-router-dom";

function SevenSeater() {
  const sevenSeaters = [
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
  return (
    <section className="container">
      <ul className="card-container">
        {sevenSeaters.map((item) => {
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

export default SevenSeater;
