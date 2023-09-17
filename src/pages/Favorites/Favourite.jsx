import css from '../Favorites/Favourite.module.css';
import Filter from '../Home/Filter/Filter';
import { React, useEffect, useState } from "react";
import generalFilter from '../../services/generalFilter';
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
   }

   

   // const price = 50;
   // const test2 = '';
   // const milFrom = 1;
   // const milTo = Infinity;
   
   // const filters = {
   //    make: 'Volvo',
   //    price: 500,
   //    milFrom: 1,
   //    milTo: 7000
   // }   

   // const filteredItems = generalFilter(allItems, {...filters} );

   return (
      <div className={css.wrapper}>
         {/* <div className={css.filter}>
            <Filter favourItems={favourItems} />
         </div> */}
         <ul className={css.imageGallery}>
            {favourItems.map(({ id, address, rentalCompany, year, type,
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
            }  
         </ul>
         {/* {itemsOnPage.length >= 8 && <ButtonLoadMore onClick={hadleBtnLoadMore} />} */}
     </div>
   //   <Box
   //      className={css.wrapper}
   //    sx={{
   //          backgroundImage: `url(${bgImage})`,
   //          backgroundSize: 'cover',
   //          backgroundPosition: 'center center',
   //          backgroundRepeat: 'no-repeat',
   //         }}>        
   //  </Box>
  );
}

