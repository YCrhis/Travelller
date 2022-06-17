const useDate = (time:any) => {
    var date = new Date(time * 1000);
    return date.getDate() +
        "/" + (date.getMonth() + 1) +
        "/" + date.getFullYear()
};
export default useDate;