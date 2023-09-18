import css from '../Favorites/Favourite.module.css';
// import Filter from '../../components/Filter/Filter';
import { React, useEffect, useState } from "react";
import { nanoid } from 'nanoid';



export default function Favourite() {
   // const start = itemsPerPage * page;
   // const end = start + itemsPerPage;
   // const paginatedData = itemsToShow.slice(start, end);
   const [favourItems, setFavourItems] = useState([]);

useEffect(() => {
//   const favouriteItems = JSON.parse(localStorage.getItem('items'));
//   if (favouriteItems) {
//      setFavourItems(favouriteItems);
//      console.log('111:', favouriteItems);}
      setFavourItems(JSON.parse(localStorage.getItem('items')));  
}, []);
//    useEffect(() => {
//       localStorage.setItem('items', JSON.stringify(favourItems));
// }, [favourItems]);
   console.log('на избранных:', favourItems);


   const handleBtnFavRemoveClick = (id) => {
      setFavourItems(favourItems.filter(item => item.id !== id));
      localStorage.setItem('items', JSON.stringify(favourItems));
      console.log('после удаления из избр:', favourItems);
   };

   

   
   return (
      <div className={css.wrapper}>
         {/* <div className={css.filter}>
            <Filter
               favourItems={favourItems}
            />
         </div> */}
         <h1 className={css.title}> My Favourite</h1>
         <ul className={css.imageGallery}>
            {favourItems && (favourItems.map(({ id, address, rentalCompany, year, type,
               model, img, make, rentalPrice, accessories, photoLink }) => {
               const shortAddress = address.replace(/[,]/g, '').split(' ').splice(-2)
               const Itemid = nanoid();
               return <li
                  key={Itemid}
                  className={css.imageGalleryItem}
               >
                   <img
                     className={css.imageGalleryItemImg}
                     src={img ? `${img}` : `${photoLink}`} alt={model} />
                  {/* <span>{address.split(' ').splice(-1)}</span> */}
                  <span>{make}</span>
                  <span>{model}</span>
                  <span>{year}</span>
                  <span>{rentalPrice}</span>
                  <span>{shortAddress.splice(0)}</span>
                  <span>{shortAddress.splice(1)}</span>
                  <span>{rentalCompany}</span>
                  <span>{type}</span>
                  <span>{id}</span>
                  <span>{accessories[0]}</span>
                  <button
                     type='button'
                     onClick={() => handleBtnFavRemoveClick(id)}
                  className={css.btnFav}
                  > button</button>
                  </li> 
            })
            )}  
         </ul>
         {/* {itemsOnPage.length >= 8 && <ButtonLoadMore onClick={hadleBtnLoadMore} />} */}
     </div>
  );
}

