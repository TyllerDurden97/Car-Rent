import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}

// const location = useLocation();

//    const switcherFiltersHandle = () => {
//       if (location.pathname.includes('/home/')) {
//          const filteredItems = generalFilter(allItems, { ...filters });
//          console.log('POSLE ФИЛЬТРА:', filteredItems);
//          return filteredItems;
//       } else {
//          const filteredFavItems = generalFilter(favourItems, { ...filters });
//          console.log('POSLE ФИЛЬТРА:', filteredFavItems);
//          return filteredFavItems;
//       };
//    };
//            console.log('ВЫБОР ФИЛЬТРА:', switcherFiltersHandle());