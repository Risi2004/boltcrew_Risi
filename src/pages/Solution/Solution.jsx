import React from "react";
import "./Solution.css";
import SolutionboxT2 from "../../components/Solutionbox/S-T2/SolutionboxT2";
import SolutionboxT1 from "../../components/Solutionbox/S-T1/SolutionboxT1";


const Solution = () => {
  return (
    <div className="solution-page">
      <h2 className="title">Our Solutions</h2>
      <div className="solution-content">
        <>
        <SolutionboxT1 
          image="/Images/man-image.png"
          solution="Solution 01"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.  quasi ratione aperiam earum officiis corporis molestias aliquid magni voluptate ut consectetur provident. Quos dolores tempore nam necessitatibus repellat, perferendis quam quo maiores quasi temporibus consectetur illo? Facere laboriosam id assumenda, animi aliquam ad sit velit minus mollitia nisi aspernatur laudantium aliquid exercitationem nobis reprehenderit illo quos eaque qui quasi optio nemo inventore distinctio magni fugit. Quas consectetur quis veritatis ex eaque laudantium corporis. Perferendis tempore, iusto officia dolore expedita obcaecati odit et recusandae amet, provident natus soluta quasi atque velit sequi voluptate sed dolor id impedit nemo?"
        />
        <SolutionboxT2 
          image="/Images/man-image.png"
          solution="Solution 02"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.  quasi ratione aperiam earum officiis corporis molestias aliquid magni voluptate ut consectetur provident. Quos dolores tempore nam necessitatibus repellat, perferendis quam quo maiores quasi temporibus consectetur illo? Facere laboriosam id assumenda, animi aliquam ad sit velit minus mollitia nisi aspernatur laudantium aliquid exercitationem nobis reprehenderit illo quos eaque qui quasi optio nemo inventore distinctio magni fugit. Quas consectetur quis veritatis ex eaque laudantium corporis. Perferendis tempore, iusto officia dolore expedita obcaecati odit et recusandae amet, provident natus soluta quasi atque velit sequi voluptate sed dolor id impedit nemo?"
        />
        <SolutionboxT1 
          image="/Images/man-image.png"
          solution="Solution 03"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.  quasi ratione aperiam earum officiis corporis molestias aliquid magni voluptate ut consectetur provident. Quos dolores tempore nam necessitatibus repellat, perferendis quam quo maiores quasi temporibus consectetur illo? Facere laboriosam id assumenda, animi aliquam ad sit velit minus mollitia nisi aspernatur laudantium aliquid exercitationem nobis reprehenderit illo quos eaque qui quasi optio nemo inventore distinctio magni fugit. Quas consectetur quis veritatis ex eaque laudantium corporis. Perferendis tempore, iusto officia dolore expedita obcaecati odit et recusandae amet, provident natus soluta quasi atque velit sequi voluptate sed dolor id impedit nemo?"
        />
        <SolutionboxT2 
          image="/Images/man-image.png"
          solution="Solution 04"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit.  quasi ratione aperiam earum officiis corporis molestias aliquid magni voluptate ut consectetur provident. Quos dolores tempore nam necessitatibus repellat, perferendis quam quo maiores quasi temporibus consectetur illo? Facere laboriosam id assumenda, animi aliquam ad sit velit minus mollitia nisi aspernatur laudantium aliquid exercitationem nobis reprehenderit illo quos eaque qui quasi optio nemo inventore distinctio magni fugit. Quas consectetur quis veritatis ex eaque laudantium corporis. Perferendis tempore, iusto officia dolore expedita obcaecati odit et recusandae amet, provident natus soluta quasi atque velit sequi voluptate sed dolor id impedit nemo?"
        />
        </>
      </div>
    </div>
  );
};

export default Solution;

