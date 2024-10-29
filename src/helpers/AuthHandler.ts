import Cookies from 'ts-cookies';

export const isLogged = () => {
    let token = Cookies.get('token');
    return (token) ? true : false;
}