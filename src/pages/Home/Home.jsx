// import { Box} from '@mui/material';
import css from './Home.module.css'
// import 'animate.css';
// import bgImage from '../../images/phonebookImg.jpg';
import fetchApi from '../../services/fetchData';
import { React, useEffect, useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid'
import { ButtonLoadMore } from '../ButtonLoadMore';
import generalFilter from '../../services/generalFilter';
import Filter from './Filter/Filter';

export default function Home() {
   const [itemsToShow, setItemsToShow] = useState([]);
   const [itemsOnPage, setItemsOnPage] = useState([]);
   const [page, setPage] = useState(1);
   const [allItems, setAllItems] = useState([]);
   const [favourItems, setFavourItems] = useState([]);
   const [filteredItems, setFilteredItems]= useState([]);

// let itemsPerPage = 8;
   
    useEffect(() => {
   fetchApi()
      .then(resp => {
         setAllItems(resp.data);
      })
         .catch(error => {
            console.log(error)
            Notify.info("404 page not found".toUpperCase());
         });
       
       setFavourItems(JSON.parse(localStorage.getItem('items')));
//   if (favouriteItems) {
//      setFavourItems(favouriteItems);       
    }, []);
         console.log('избр на хоме:', favourItems);

         // console.log(allItems)


    useEffect(() => { 
         fetchApi(page, 8)
            .then(advert => {
            setItemsOnPage(advert.data);
            setItemsToShow(prev => [...prev, ...advert.data]);

            // setitemsToShow(advert.data);
            // console.log(advert.data);
;
      })
         .catch(error => {
            console.log(error)
            Notify.info("404 page not found".toUpperCase());
         });
    }, [page]);
   // const start = itemsPerPage * page;
   // const end = start + itemsPerPage;
   // const paginatedData = itemsToShow.slice(start, end);
   const hadleBtnLoadMore = () => {
      setPage(prev => (prev + 1));
   };

   const handleBtnFavAddClick = (id) => {
      const item = allItems.find(item => item.id === id);
      setFavourItems(prev => ([...prev, item]));
      localStorage.setItem('items', JSON.stringify(favourItems));
      console.log(item);
      console.log('добав в избр:', favourItems);
   };

   const handleBtnFavRemoveClick = (id) => {
      setFavourItems(favourItems.filter(item => item.id !== id));
      localStorage.setItem('items', JSON.stringify(favourItems));
         console.log('после удаления из избр:', favourItems);
   };

   // const reciveFilteredData = (filteredItems) => {
   //    setFilteredItems(filteredItems)
   // }
      console.log('ФИЛЬТР НА ХОМЕ:', filteredItems);

//    useEffect(() => {
//       localStorage.setItem('items', JSON.stringify(favourItems));
// }, [favourItems]);
   // console.log('222:', favourItems);

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



// const filteredToPrice = allItems.filter(item => item.rentalPrice.substring(1) <=50);//фильтр по цене ОТ
//    // const filteredByPrice = [...itemsToShow].sort((a, b) => a.rentalPrice.substring(1) - b.rentalPrice.substring(1));//сортировка от деш
//    const filteredByMake = allItems.filter(item => item.make === (`${test2}` || item.make));//фильтр по марке
// const filteredByMiles = allItems.filter(item => item.mileage >=`${milFrom}`&& item.mileage<=`${milTo}`);//фильтр по пробегу
   // const generalFilter = allItems
      // .filter(item => item.make === (`${test2}` || item.make))
      // .filter(item => item.rentalPrice.substring(1) <= `${price}`)
      // .filter(item => item.mileage >= `${milFrom}` && item.mileage <= `${milTo}`);
   // console.log('фильтр по цене:', filteredToPrice);
   // console.log('фильтр по марке:', filteredByMake);
         // console.log('фильтр:', generalFilter);


   
//    const filterMakes = allItems.map(item => item.make)
//       .filter((make, index, array) => array
//          .indexOf(make) === index
// );
//    const uniqMakes = filterMakes.filter(
//   (make, index, array) => array.indexOf(make) === index
// );
   // console.log('фильтр--', filterMakes);

//    const makePriceArr = () => {
//   const list = [];
//   for (let i = 10; i <= 500; i += 10) {
//     list.push(i);
//   };
//   return list;
//    };
//    const priceArr = makePriceArr();
//    console.log(priceArr);



   return (
      <div className={css.wrapper}>         
                  <div className={css.filter}>
            <Filter
               allItems={allItems}
               // onFilter={reciveFilteredData}
            />
         </div>

         <ul className={css.imageGallery}>
            {allItems.map(({ id, address, rentalCompany, year, type,
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
                  {favourItems.find(item => item.id === id) ? (<button
                     type='button'
                     onClick={() => handleBtnFavRemoveClick(id)}
                  className={css.btnFav}
                  > OFF</button>) : <button
                     type='button'
                     onClick={() => handleBtnFavAddClick(id)}
                  className={css.btnFav} 
                  > ADD</button>}
               </li> 
            })
            }  
         </ul>
         {itemsOnPage.length >= 8 && <ButtonLoadMore onClick={hadleBtnLoadMore} />}
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