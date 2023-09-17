
export const generalFilter = (allItems, {
   make = '',
   price = 1000,
   milFrom = 1,
   milTo = Infinity
}) => {
   const filteredItems = allItems
      .filter(item => Number(item.rentalPrice.substring(1)) <= `${price}`)
      .filter(item => item.make === (`${make}` || item.make))
      .filter(item => item.mileage >= `${milFrom}` && item.mileage <= `${milTo}`);
   // console.log('цена:',price)
   //    console.log(allItems)

   return filteredItems;
}
export default generalFilter;