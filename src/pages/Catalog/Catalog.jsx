import css from './Catalog.module.css';
import fetchApi from '../../services/fetchData';
import { React, useEffect, useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid'
import { ButtonLoadMore } from '../../components/ButtonLoadMore/ButtonLoadMore';
import Filter from '../../components/Filter/Filter';
import Modal from "components/Modal/Modal.jsx";
import ModalCard from "../../components/ModalCard/ModalCard";
import svg from '../../images/symbol-defs.svg';

export default function Home() {
   const [itemsToShow, setItemsToShow] = useState([]);
   const [itemsOnPage, setItemsOnPage] = useState([]);
   const [page, setPage] = useState(1);
   const [allItems, setAllItems] = useState([]);
   const [showModal, setShowModal] = useState(false);
   const [cardModal, setCardModal] = useState('');
   const [favourItems, setFavourItems] = useState([]);
   const [filteredItems, setFilteredItems]= useState([]);

  
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
    }, []);
         // console.log('избр на хоме:', favourItems);

    useEffect(() => { 
         fetchApi(page, 8)
            .then(advert => {
            setItemsOnPage(advert.data);
            setItemsToShow(prev => [...prev, ...advert.data]);
         })
            .catch(error => {
            console.log(error)
            Notify.info("404 page not found".toUpperCase());
         });
    }, [page]);
   
         console.log('первый рендер', itemsToShow);

   const hadleBtnLoadMore = () => {
      setPage(prev => (prev + 1));
   };

   const handleBtnFavAddClick = (id) => {
      const item = allItems.find(item => item.id === id);
      setFavourItems(prev => ([...prev, item]));
      localStorage.setItem('items', JSON.stringify(favourItems));
      // console.log(item);
      // console.log('добав в избр:', favourItems);
   };

   const handleBtnFavRemoveClick = (id) => {
      setFavourItems(favourItems.filter(item => item.id !== id));
      localStorage.setItem('items', JSON.stringify(favourItems));
      // console.log('после удаления из избр:', favourItems);
   };

   const modalOpen = (id) => {
      setShowModal(true);
      const item = allItems.find(item => item.id === id);
      setCardModal(item);
    };

  const modalClose = () => {
      setShowModal(false);
  };

   const reciveFilteredData = (filteredItems) => {
      setFilteredItems(filteredItems)
   }
   console.log('ФИЛЬТР НА ХОМЕ:', filteredItems);
   
   return (
      <div className={css.wrapper}>         
         <div className={css.filter}>
            <Filter
               allItems={allItems}
               onFilter={reciveFilteredData}
            />
         </div>
         <ul className={css.imageGallery}>
            {
               (filteredItems.length ? filteredItems : itemsToShow)
               .map(({ id, address, rentalCompany, year, type,
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

         
                  {(favourItems.find(item => item.id === id) ? (<button
                     type='button'
                     onClick={() => handleBtnFavRemoveClick(id)}
                     className={css.btnFav}>
                     <svg width="18" height="18">
                        <use href={`${svg}#icon-heart`}></use>
                     </svg>
                     </button>)
                     : (<button
                     type='button'
                     onClick={() => handleBtnFavAddClick(id)}
                     className={css.btnFav} > 
                     <svg width="18" height="18">
                        <use href={`${svg}#icon-heart-1`}></use>
                     </svg>
                     </button>))}
               </li> 
            })
            }  
         </ul>
         {(itemsOnPage.length >= 8 && !filteredItems.length) && <ButtonLoadMore onClick={hadleBtnLoadMore} />}
      {showModal && (
                <Modal onClose={modalClose}>
                  <ModalCard data={cardModal}/>
                </Modal>
            )}  
      </div>
  );
}