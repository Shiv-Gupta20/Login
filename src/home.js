import { useState } from "react";
import Signup from "./signup";

function Home() {
  const [formData, setFormData] = useState([]);

  console.log(formData)
  return (
    <>
      <Signup formData={formData} setFormData={setFormData} />


      <div>
        {formData.length > 0 &&
          formData.map((element, index) => (
            <div key={index}>
              <h3>Name:{element.name}</h3>
              <h3>Mob. Number:{element.number}</h3>
              <h3>Subject:{element.subject}</h3>
              <h3>Name:{element.email}</h3>
            </div>
          ))}
      </div>
    </>
  );
}

export default Home;
