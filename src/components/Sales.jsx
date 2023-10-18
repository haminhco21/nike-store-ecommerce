/* eslint-disable no-unused-vars */

import Item from "./utils/Item";
import Title from "./utils/Title";

/* eslint-disable react/prop-types */
const Sales = ({ endpoint: { title, items } }) => {
  console.log(title);
  console.log(items);

  return (
    <>
      <div className="">
        <Title title={title} />
        <div>
          {items?.map((item, i) => (
            <Item key={i} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
