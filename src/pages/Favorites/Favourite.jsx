import css from '../Favorites/Favourite.module.css';
// import Filter from '../../components/Filter/Filter';
import { React, useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import Modal from "components/Modal/Modal.jsx";
import ModalCard from "../../components/ModalCard/ModalCard";
import svg from '../../images/symbol-defs.svg';




export default function Favourite() {
   // const start = itemsPerPage * page;
   // const end = start + itemsPerPage;
   // const paginatedData = itemsToShow.slice(start, end);
   const [favourItems, setFavourItems] = useState([]);
   const [showModal, setShowModal] = useState(false);
   const [cardModal, setCardModal] = useState('');

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
   
   // console.log('на избранных:', favourItems);


   const handleBtnFavRemoveClick = (id) => {
      setFavourItems(favourItems.filter(item => item.id !== id));
      localStorage.setItem('items', JSON.stringify(favourItems));
      // console.log('после удаления из избр:', favourItems);
   };

    const modalOpen = (id) => {
      setShowModal(true);
      const item = favourItems.find(item => item.id === id);
      setCardModal(item);
    };

  const modalClose = () => {
      setShowModal(false);
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
                  <h3 className={css.cardTitle}>
                  <div className={css.cardTitleWrap}>  
                     <span className={css.cardTitleSpan}>{make}</span>
                     <span className={css.cardTitleSpanBlue}>{model},</span>
                     <span className={css.cardTitleSpan}>{year}</span>
                  </div>
                     <span className={css.cardTitleSpanPrice}>{rentalPrice}</span>
                  </h3>
                     <div className={css.carInfoWrap}>
                     <span className={css.carInfo}>{shortAddress[0]}  </span><span className={css.delimeter}></span>
                     <span className={css.carInfo}>{shortAddress[1]}  </span><span className={css.delimeter}></span>
                     <span className={css.carInfo}>{rentalCompany}</span><span className={css.delimeter}></span>
                  </div>
                  <div className={css.carInfoBottomWrap}>
                     <span className={css.carInfo}>{type}</span><span className={css.delimeter}></span>
                     <span className={css.carInfo}>{id}</span><span className={css.delimeter}></span>
                     <span className={css.carInfo}>{accessories[0]}</span><span className={css.delimeter}></span>
                  </div>
                     <button type="button" className={css.cardBtnLearnMore} onClick={() => modalOpen(id)}>Learn more</button>
                        <button
                     type='button'
                     onClick={() => handleBtnFavRemoveClick(id)}
                     className={css.btnFav}>
                     <svg width="18" height="18">
                        <use href={`${svg}#icon-heart`}></use>
                     </svg>
                     </button>
               </li> 
              
            })
            )}  
         </ul>
          {showModal && (
                <Modal onClose={modalClose}>
                  <ModalCard data={cardModal}/>
            </Modal>
                        )}  

     </div>
  );
}

