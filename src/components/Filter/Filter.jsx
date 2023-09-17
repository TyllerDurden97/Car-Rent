import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';
import svg from '../../images/symbol-defs.svg';
import generalFilter from '../../services/generalFilter';


const Filter = ({allItems, favourItems, onFilter}) => {

    const [isOpenBrands, setIsOpenBrands] = useState(false);  
    const [isOpenPrice, setIsOpenPrice] = useState(false);  
    const [selectedCarBrand, setSelectedCarBrand] = useState('');
    const [selectedCarPrice, setSelectedCarPrice] = useState('');
    const [mileageValueFrom, setMileageValueFrom] = useState(1);
   const [mileageValueTo, setMileageValueTo] = useState(Infinity);
   const [filters, setFilters] = useState({});

   
   const filteredItems = generalFilter(allItems, { ...filters });
   console.log('POSLE ФИЛЬТРА:', filteredItems);

   const handleFormSubmit = (event) => {
      event.preventDefault();
      setFilters({
         make: selectedCarBrand,
         price: selectedCarPrice,
         milFrom: mileageValueFrom,
         milTo: mileageValueTo,
      });
      onFilter(filteredItems);

      //   localStorage.setItem('filter', JSON.stringify(filters));
   };
// useEffect(() => { 
//          setItemsOnPage(advert.data);

//     }, []);
   console.log('ФИЛЬТРА:', filters);

// const filters = {
//       make: 'Subaru',
//       price: 500,
//       milFrom: 1,
//       milTo: 7000
//    }

   
      // const filteredFavItems = generalFilter(favourItems, { ...filters });
      // console.log('POSLE ФИЛЬТРА:', filteredFavItems);
   // const sendPropsToCatalog = ({filteredItems}) => {
   // };

   // sendPropsToCatalog(filteredItems);

    const filterMakes = allItems.map(item => item.make)
        .filter((make, index, array) => array
        .indexOf(make) === index
    );
    
    const makePriceArr = () => {
    const list = [];
        for (let i = 10; i <= 500; i += 10) {
        list.push(i);
    };
        return list;
    };
   const priceArr = makePriceArr();    

  const handleBrandСlick = (option) => {
      setIsOpenBrands(false);
      setSelectedCarBrand(option)
    };
    
      const handlePriceСlick = (option) => {
        setIsOpenPrice(false);
        setSelectedCarPrice(option);
  };

    const hadleMileageValueFromChange = (event) => {
        const value = event.target.value;
        setMileageValueFrom(value);
    }
    
    const hadleMileageValueToChange = (event) => {
        const value = event.target.value;
        setMileageValueTo(value);
   }

   const handleResetСlick = () => {
      setFilters({});
      setSelectedCarBrand('')
      setSelectedCarPrice('');
      setMileageValueFrom(1);
      setMileageValueTo(Infinity);
   };
    
      return (
      <div className={css.formWrap}>
            <form onSubmit={handleFormSubmit} className={css.form} >
            <div className={css.brandWrap}>
            <label htmlFor="brand" className={css.labelBrand}>Car brand</label>
            <input
                type="text"
                name='brand'
                id='brand'
                placeholder="Enter the text"    
                value={selectedCarBrand}
                onChange={(event) => setSelectedCarBrand(event.target.value)}
                className={css.inputBrand}
            />
            <button
              type="button"
              aria-label="arrow"
                onClick={() => setIsOpenBrands(!isOpenBrands)}
                className={css.buttonOpenBrand}
              >
                <svg width="20" height="20" className={css.svgOpen}>
                    <use href={`${svg}#icon-chevron-down`}></use>
                </svg>  
            </button>
                {isOpenBrands && (
                          <ul className={css.brandList}>
                              {filterMakes.map((make) => {
                                  const optId = nanoid()
                                return (
                                  <li key={optId} onClick={() => handleBrandСlick(`${make}`)} className={css.brandItem}>
                                      {make}
                                  </li>
                                )
                              })}
                    </ul>           
                )}
        </div>

        <div className={css.priceWrap}>
          <label htmlFor="price" className={css.labelPrice}>Price/ 1 hour</label>
          <input
            type="text"
            name='price'
            id='price'
            placeholder="To $"
            value={selectedCarPrice}
                onChange={(event) => setSelectedCarPrice(event.target.value)}
            className={css.inputPrice}    
          />
            <button
                type="button"
                aria-label="arrow"
                onClick={() => setIsOpenPrice(!isOpenPrice)}
                className={css.buttonOpenPrice}
              >
                <svg width="20" height="20" className={css.svgOpen}>
                    <use href={`${svg}#icon-chevron-down`}></use>
                </svg>  
            </button>
                {isOpenPrice && (
                          <ul className={css.priceList}>
                              {priceArr.map((price) => {
                                  const optId = nanoid()
                                return (
                                  <li key={optId} onClick={() => handlePriceСlick(`${price}`)} className={css.priceItem}>
                                      {price}
                                  </li>
                                )
                              })}
                    </ul>           
                )}
          </div>

        <div className={css.mileageWrap}>
              <label htmlFor="mileage" className={css.mileageLabel}>Сar mileage / km</label>
              <div className={css.inputWrap}>
          <input 
            type="number" 
            id='mileage'
            name="mileageFrom" 
            placeholder="From"
            value={mileageValueFrom}
            onChange={hadleMileageValueFromChange} 
            className={css.mileageInputFrom}
          />
          <input 
            type="number" 
            id='mileage'
            name="mileageTo" 
            placeholder="To"
            value={mileageValueTo}
            onChange={hadleMileageValueToChange}
            className={css.mileageInputTo}    
          /> 
        </div>    
           </div>
        <button type="submit" className={css.buttonSearchFilter}>Search</button>
            </form>
            <button type="button" className={css.btnResetFilter}
               onClick={handleResetСlick}
            >Reset filters</button>
        </div>
          
  );
}



export default Filter;
