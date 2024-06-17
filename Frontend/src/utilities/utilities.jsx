
export const getCutoffDate = () => {
     const currentDate = new Date();
     const cutoffDate = new Date(currentDate);
     return cutoffDate.setMonth(currentDate.getMonth() - 3);
}