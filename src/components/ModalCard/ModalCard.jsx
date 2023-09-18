import css from './ModalCard.module.css';

const ModalCar = ({ data }) => {

    const { id, address, rentalCompany, year, type,
        model, img, make, rentalPrice, accessories, fuelConsumption, engineSize,
        description, functionalities, rentalConditions, mileage, 
    } = data;

    const conditions = rentalConditions.split('\n');
    const age = conditions[0].match(/\d+/);
    const location = address.split(',');


    return (
        <div className={css.modalWrap} key={id}>
            <div className={css.imageWrapper}>
                <img src={img} alt={make} className={css.imgCar} />
                </div>
            <p className={css.nameCar}> {make} <span className={css.modelCar}>{model}</span>, <span>{year}</span></p>
            <div className={css.infoWrap}>
                <div className={css.infoTopWrap}>
                    <p className={css.infoCar}>{location[1]} <span className={css.border}></span></p>
                    <p className={css.infoCar}>{location[2]} <span className={css.border}></span></p>
                    <p className={css.infoCar}>{rentalCompany} <span className={css.border}></span></p>
                    <p className={css.infoCar}>Id: <span>{id}</span> <span className={css.border}></span></p>
                    <p className={css.infoCar}>Year: <span>{year}</span> <span className={css.border}></span></p>
                    <p className={css.infoCar}>Type: <span >{type}</span></p>
                </div>
                <div className={css.infoBottomWrap}>
                    <p className={css.infoCar}>Fuel Consumption: <span>{fuelConsumption}</span> <span className={css.border}></span></p>
                    <p className={css.infoCar}>Engine Size: <span>{engineSize}</span></p>
                </div>
            </div>
            <p className={css.carDescription}>{description}</p>
            <p className={css.carDetails}>Accessories and functionalities:</p>
            <div className={css.carDetailsWrap}>
                <div className={css.infoTopWrap}>
                    {accessories.map(item => (
                        <p className={css.infoCar} key={item}>{item} <span className={css.border}></span></p>
                    ))}
                </div>
                <div className={css.infoBottomWrap}>
                    {functionalities.map(item => (
                        <p className={css.infoCar} key={item}>{item} <span className={css.border}></span></p>
                    ))}
                </div>
            </div>
            <p className={css.infoConditions}>Rental Conditions: </p>
            <div className={css.conditionsTopWrap}>
                <p className={css.conditionsTextIn}>Minimum age : <span className={css.condSapn}>{age[0]}</span></p>
                <p className={css.conditionsText}>{conditions[1]}</p>
                <p className={css.conditionsText}>{conditions[2]}</p>
            </div>
            <div className={css.conditionsBottomWrap}>
                <p className={css.conditionsText}>Security deposite required</p>
                <p className={css.conditionsText}>Mileage: <span className={css.condSapn}>{mileage}</span></p>
                <p className={css.conditionsText}>Price: <span className={css.condSapn}>{rentalPrice}</span></p>
            </div>
            <div className={css.btnRentWrap}>
            <a href="tel:+380730000000" className={css.buttonRent}>Rental car</a>
            </div>
            
        </div>
    )
}

export default ModalCar;