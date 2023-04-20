export const useStorage = () => {
    const getLocal = (key) => localStorage.getItem(key);

    const setLocal = (key, value) => localStorage.setItem(key, value);

    const getSession = (key) => sessionStorage.getItem(key);

    const setSession = (key, value) => sessionStorage.setItem(key, value);

    const removeSession = (key) => {
        sessionStorage.removeItem(key);
    };

    const clearLocal = () => localStorage.clear();

    const clearSession = () => sessionStorage.clear();

    return {
        getLocal,
        setLocal,
        getSession,
        setSession,
        clearLocal,
        clearSession,
        removeSession,
    };
};
